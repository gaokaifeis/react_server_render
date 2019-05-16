import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import { getClientStore } from '../store';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

const store = getClientStore()

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    {renderRoutes(Routes)}
                </Fragment>
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App /> , document.querySelector('#root'));