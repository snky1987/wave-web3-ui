import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MetaMaskProvider } from 'metamask-react';
import { Profile } from 'pages/profile';

import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MetaMaskProvider>
        <BrowserRouter>
            <Switch>
                <Switch>
                    <Route path="/index" render={(props) => <Profile {...props} />} />
                    <Redirect to="/index" />
                    <Redirect from="/" to="/index" />
                </Switch>
            </Switch>
        </BrowserRouter>
    </MetaMaskProvider>
);
