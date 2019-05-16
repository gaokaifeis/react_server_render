import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store';
import { Redirect } from 'react-router-dom';
import styled from './style.css';
import withStyles from '../../WithStyle';

class Translation extends Component {
    getList() {
        const { list } = this.props;
        return list.map((item, index) => <div className={styled.item} key={index}>{item.name}1</div>)
    }
    render() {
        return this.props.login ? (
            <div className={styled.container}>
                {
                    this.getList()
                }
            </div>
        ) : (
            <Fragment><Redirect to='/' /></Fragment>
        );
    }

    componentDidMount() {
        if(!this.props.list.length) {
            this.props.getHomeList();
        }
    }
}


const mapStateToProps = state => ({
    list: state.translation.Translationlist,
    login: state.header.login
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(actions.getTranslationList())
    }
})

const exportTranslation = connect(mapStateToProps, mapDispatchToProps)(withStyles(Translation, styled));

exportTranslation.loadData = (store) => {
    return store.dispatch(actions.getTranslationList())
}

export default exportTranslation;