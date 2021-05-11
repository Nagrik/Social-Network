import {SET_FRIEND, SET_FRIENDS, SET_LOADED_FRIEND, SET_LOADED_FRIENDS} from "../types";
import axios from "axios";


export type FriendsActionType = setLoadedFriendsType | setFriendsType | setLoadedFriendType | setFriendType

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
type setLoadedFriendType = {
    type: typeof SET_LOADED_FRIEND,
    payload: boolean
}

export const setLoadedFriend = (payload: boolean): setLoadedFriendType => ({
    type: SET_LOADED_FRIEND,
    payload
})

type setFriendType = {
    type: typeof SET_FRIEND,
    payload: object
}
export const setFriend = (items: Array<any>): setFriendType => ({
    type: SET_FRIEND,
    payload: items
})


export const fetchFriends = () => (dispatch:any) => {
    dispatch(setLoadedFriends(false))
    axios.get('https://social-network-31abc-default-rtdb.firebaseio.com/friends.json').then(({data}) => {
        dispatch(setFriends(data))
    })
}


