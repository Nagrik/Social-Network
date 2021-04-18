import {SET_LOADED_PHOTO, SET_PHOTOS} from "../types";
import {ModalAlbumsActionsType} from "../actions/modalAlbums";

type InitialStateAlbumType = {
    isLoadedPhotos:boolean,
    photos:Array<string>
}

const initialState:InitialStateAlbumType = {
    isLoadedPhotos:false,
    photos:[],
}

export const albumReducer = (state = initialState, action:ModalAlbumsActionsType) => {
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