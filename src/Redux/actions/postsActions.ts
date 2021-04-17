import {CREATE_POST, HIDE_ALERT, SHOW_ALERT} from "../types";

export type PostsActionsType = CreatePostType | ShowAlertType | HideAlertType

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

type ShowAlertType = {
    type: typeof SHOW_ALERT,
    payload:string
}

export function showAlert(text:string):ShowAlertType {
    return{
        type:SHOW_ALERT,
        payload:text
    }
}


type HideAlertType = {
    type: typeof HIDE_ALERT,
}
export function hideAlert():HideAlertType {
    return{
        type:HIDE_ALERT
    }
}