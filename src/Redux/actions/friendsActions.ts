import {SET_FRIENDS, SET_LOADED_FRIENDS} from "../types";


export type FriendsActionType = setLoadedFriendsType | setFriendsType

type setLoadedFriendsType = {
    type: typeof SET_LOADED_FRIENDS,
    payload: boolean
}

export const setLoadedFriends = (payload: boolean): setLoadedFriendsType => ({
    type: SET_LOADED_FRIENDS,
    payload
})

type setFriendsType = {
    type: typeof SET_FRIENDS,
    payload: object
}
export const setFriends = (items: Array<any>): setFriendsType => ({
    type: SET_FRIENDS,
    payload: items
})

