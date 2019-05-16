import * as constants from './constants';

const defaultState = {
    newslist: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGEHOMELIST:
            return {
                ...state,
                newslist: action.list
            };
        default:
            return state;
    }
}