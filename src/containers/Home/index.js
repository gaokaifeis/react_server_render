import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import { actions } from './store/';
import withStyles from '../../WithStyle';

import styled from './style.css';

class Home extends Component {
    getList() {
        const { list } = this.props;
        return list.map((item, index) => <div className={styled.item} key={index}>{item.name}</div>)
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>这是我的ssr的新闻页面-等等等等等</title>
                    <meta name='description' content='这是我的ssr的新闻页面-等等等等等'></meta>
                </Helmet>
                <div className={styled.container}>
                    {this.getList()}
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        if(!this.props.list.length) {
            this.props.getHomeList();
        }
    }
}


const mapStateToProps = state => ({
    list: state.home.newslist
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(actions.getHomeList())
    }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyles(Home, styled))

ExportHome.loadData = (store) => {
    return store.dispatch(actions.getHomeList())
}

export default ExportHome;