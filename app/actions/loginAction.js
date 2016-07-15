import * as types from './ActionsTypes';

export function setUser(text) {
    return dispatch => {
        dispatch(setUserText(text));
    }
}
export function setPsw(text) {
    return dispatch => {
        dispatch(setPswText(text));
    }
}
export function setState(bool) {
    return dispatch => {
        dispatch(setLoginState(bool));
    }
}
function setUserText(text) {
    return {
        type: types.LOGIN_USER,
        user:text
    }
}
function setPswText(text) {
    return {
        type: types.LOGIN_PSW,
        psw:text
    }
}
function setLoginState(bool) {
    return {
        type: types.LOGIN_STATE,
        loginState:bool
    }
}