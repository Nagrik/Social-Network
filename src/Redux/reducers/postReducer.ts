import {CREATE_POST} from "../types";
import {PostsActionsType} from "../actions/postsActions";

type InitialStateType = {
    posts:Array<string>
}

const initialState:InitialStateType = {
    posts:[],
}

export const postsReducer = (state = initialState, action:PostsActionsType) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        default:return state
    }
}