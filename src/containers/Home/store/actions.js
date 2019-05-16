import * as constants from './constants';

const changeList = (list) => ({
    type: constants.CHANGEHOMELIST,
    list
})

export const getHomeList = () => {
    
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/list.json')
            .then(response => {
                const data = response.data;
                dispatch(changeList(data));
            })
    }
}