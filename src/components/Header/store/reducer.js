import { CHANGELOGIN } from './constants';

const defaultState = {
    login: false
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case CHANGELOGIN:
            return {
                ...state,
                login: action.value
            }
        default:
            return state;
    }
}