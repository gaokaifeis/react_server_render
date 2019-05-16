import * as constants from './constants';

const changeList = (list) => ({
    type: constants.CHANGEHOMELIST,
    list
})

export const getTranslationList = () => {
    
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/list.json')
            .then(response => {
                let data = response.data;
                if(!getState().header.login) {
                    data = [];
                }
                dispatch(changeList(data));
            })
    }
}