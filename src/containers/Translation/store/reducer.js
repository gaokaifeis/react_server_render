import * as constants from './constants';

const defaultState = {
    Translationlist: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGEHOMELIST:
            return {
                ...state,
                Translationlist: action.list
            };
        default:
            return state;
    }
}