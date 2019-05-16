import { CHANGELOGIN, LOGIN } from './constants';

const changeLogin = (value) => ({
    type: CHANGELOGIN,
    value
})

// const Login = (value) => ({
//     type: LOGIN,
//     value
// })

export const getHeaderInfo = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/isLogin.json')
            .then(response => {
                // console.log(response.data.login)
                const data = response.data.login;
                dispatch(changeLogin(data));
            })
    }
}

export const login = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/login.json')
            .then(response => {
                const data = response.data.login;
                dispatch(changeLogin(true));
            })
    }
}

export const logout = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/logout.json')
            .then(response => {
                const data = response.data.login;
                dispatch(changeLogin(false));
            })
    }
}