import {SET_LOADED_PHOTO, SET_PHOTOS} from "../types";

const initialState = {
    isLoadedPhotos:false,
    photos:[],
}

export const albumReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SET_LOADED_PHOTO:{
            return {
                ...state,
                isLoadedPhotos: action.payload
            }
        }
        case SET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                isLoadedPhotos: true,
            }
        default:return state
    }
}