import {CREATE_POST} from "../types";

export type PostsActionsType = CreatePostType

type CreatePostType = {
    type: typeof CREATE_POST,
    payload: Array<string>
}

export function createPost(post:Array<string>):CreatePostType{
    return{
        type: CREATE_POST,
        payload:post
    }
}