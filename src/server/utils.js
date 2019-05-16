import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import {Helmet} from "react-helmet";

export const render = (store, routes, req, context) => {
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <Fragment>
                    {renderRoutes(routes)}
                </Fragment>
            </StaticRouter>
        </Provider>
    ));
    const helmet = Helmet.renderStatic();

    const cssStr = context.css.length ? context.css.join('\n') : '';

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <style>${cssStr}</style>
    </head>
    <body>
        <div id='root'>${content}</div>
        <script>
            window.context = {
                state: ${JSON.stringify(store.getState())}
            }    
        </script>
        <script src='index.js'></script>
    </body>
    </html>
    `;
}