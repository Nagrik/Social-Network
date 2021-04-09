import {CREATE_POST} from "../types";

const initialState = {
    posts:[],
}

export const postsReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case CREATE_POST:
            //@ts-ignore
            return {...state, posts: state.posts.concat(action.payload)}
        default:return state
    }
}