import React, { Fragment } from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';
import { actions } from './components/Header/store';

const App = (props) => {
    return (
        <Fragment>
            <Header staticContext={props.staticContext} />
            {renderRoutes(props.route.routes)}
        </Fragment>
    )
}

App.loadData = (store) => {
    return store.dispatch(actions.getHeaderInfo());
}


export default App;