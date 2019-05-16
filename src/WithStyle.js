import React, { Component } from 'react';

export default (DecoratedComponent, styled) => {
    return class NewComponent extends Component {
        componentWillMount() {
            const { staticContext } = this.props;
            if(staticContext) {
                staticContext.css.push(styled._getCss());
            }
        }

        render() {
            return <DecoratedComponent {...this.props} />
        }
        
    }
}