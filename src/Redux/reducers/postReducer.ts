import {CREATE_POST, HIDE_ALERT, SHOW_ALERT} from "../types";
import {PostsActionsType} from "../actions/postsActions";

type InitialStateType = {
    posts:Array<string>,
    alert:boolean
}

const initialState:InitialStateType = {
    posts:[],
    alert:false
}

export const postsReducer = (state = initialState, action:PostsActionsType) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        case SHOW_ALERT:
            return {...state, alert:action.payload}
        case HIDE_ALERT:
            return {...state, alert: null}
        default:return state
    }
}