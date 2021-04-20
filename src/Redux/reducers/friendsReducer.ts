import {SET_FRIENDS, SET_LOADED_FRIENDS} from "../types";
import {FriendsActionType} from "../actions/friendsActions";

type InitialStateFriendsType = {
    isLoadedFriends:boolean,
    friends:Array<string>
}

const initialState:InitialStateFriendsType = {
    isLoadedFriends:false,
    friends:[],
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

        default:return state
    }
}