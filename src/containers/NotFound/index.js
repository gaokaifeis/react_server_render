import React, { Fragment, Component } from 'react';

class NotFound extends Component {

    componentWillMount() {
        const { staticContext } = this.props;
        staticContext && (staticContext.NotFound = true);
    }
    render() {
        
        return <Fragment>
            404, Page is NotFound!
        </Fragment>
    }
}

export default NotFound;