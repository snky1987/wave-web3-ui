import React, { useEffect, useState } from 'react';
import { useMetaMask } from 'metamask-react';
import { getWavePortalService } from '../../services/wavePortalService';
import { MessagesView } from './view';

export const Messages = () => {
    const { ethereum } = useMetaMask();
    const [messages, setMessages] = useState([]);
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            if (!ethereum) return;
            const wavePortalService = getWavePortalService(ethereum);

            try {
                const inputs = await wavePortalService.getInputs();
                setMessages(inputs);
            } catch (e) {
                setError('Request failed. Please try again.');
            }
            setLoading(false);
        };
        fetchMessages();
    }, [ethereum]);

    const putMessage = async (text) => {
        if (!ethereum) return;
        setProcessing(true);
        const wavePortalService = getWavePortalService(ethereum);

        try {
            const putContract = await wavePortalService.createInput(text);
            await putContract.wait();
            setLoading(true);
            const inputs = await wavePortalService.getInputs();
            setMessages(inputs);
        } catch (e) {
            setError('Request failed. Please try again.');
        }
        setProcessing(false);
        setLoading(false);
    };

    return <MessagesView messages={messages} processing={processing} loading={loading} putMessage={putMessage} serviceError={error} />;
};
