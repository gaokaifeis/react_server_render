import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store';
import styled from './style.css';
import withStyles from '../../WithStyle';


class Header extends Component {
    render() {
        const { login, handleLogin, handleLogout } = this.props;
        return (
            <div className={styled.container}>
                <Link className={styled.item} to='/'>首页</Link>
                {
                    login ? <Fragment>
                        <Link to='/translation' className={styled.item}>翻译列表</Link>
                        <div className={styled.item} onClick={handleLogout}>退出</div>
                    </Fragment> : <div className={styled.item} onClick={handleLogin}>登录</div>
                }
            </div>
        )
    }
}



const mapState = (state) => ({
    login: state.header.login
})

const mapDispatch = (dispatch) => ({
    handleLogin() {
        dispatch(actions.login())
    },
    handleLogout() {
        dispatch(actions.logout())
    }
})

export default connect(mapState, mapDispatch)(withStyles(Header, styled));