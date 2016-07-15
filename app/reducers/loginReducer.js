'use strict';
import * as types from '../actions/ActionsTypes';
const initialState = {
    user:'',
    psw:'',
    loginState:false
};
export default function loginReducer(state = initialState, action) {
    switch (action.type) {

        case types.LOGIN_USER:
            
            return Object.assign({}, state, {
                user: action.user
            });
         case types.LOGIN_PSW:
            
            return Object.assign({}, state, {
                psw: action.psw
            });
         case types.LOGIN_STATE:
            
            return Object.assign({}, state, {
                loginState: action.loginState
            });
        default:
            return state;
    }
}