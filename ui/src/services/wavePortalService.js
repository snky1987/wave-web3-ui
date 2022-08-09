import { Contract, providers } from 'ethers';
import WavePortalContract from '../utils/WavePortal.json';

export const getWavePortalService = (ethereum) => {
    const web3Provider = new providers.Web3Provider(ethereum);
    const wavePortalContract = new Contract(process.env.REACT_APP_CONTRACT_KEY, WavePortalContract.abi, web3Provider.getSigner());

    return ({
        getTotalInputs: async () => wavePortalContract.getTotalInputs(),
        getInputs: async () => wavePortalContract.getInputs(),
        createInput: async (text) => wavePortalContract.createInput(text)
    });
};
