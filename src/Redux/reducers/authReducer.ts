import {AUTH_LOGOUT, AUTH_SUCCESS} from "../types";

type InitialStateType = {
    token: null | string
}

const initialState:InitialStateType = {
    token:null
}

export default function authReducer(state = initialState, action:any){
    switch (action.type){
        case AUTH_SUCCESS:
            return {
                ...state, token: action.token
            }
        case AUTH_LOGOUT:
            return {
                ...state, token:null
            }
        default:
            return state
    }
}