import {SET_FRIEND, SET_FRIENDS, SET_LOADED_FRIEND, SET_LOADED_FRIENDS} from "../types";
import {FriendsActionType} from "../actions/friendsActions";

type InitialStateFriendsType = {
    isLoadedFriends:boolean,
    isLoadedFriend:boolean,
    friends:Array<string>,
    friend:Array<string>
}

const initialState:InitialStateFriendsType = {
    isLoadedFriends:false,
    isLoadedFriend:false,
    friends:[],
    friend:[]
}

export const friendsReducer = (state = initialState, action:FriendsActionType) => {
    switch (action.type) {
        case SET_LOADED_FRIENDS:{
            return {
                ...state,
                isLoadedFriends: action.payload
            }
        }

        case SET_FRIENDS:
            return {
                ...state,
                friends: action.payload,
                isLoadedFriends: true,
            }
        case SET_LOADED_FRIEND:{
            return {
                ...state,
                isLoadedFriend: action.payload
            }
        }

        case SET_FRIEND:
            return {
                ...state,
                friend: action.payload,
                isLoadedFriends: true,
            }

        default:return state
    }
}