import {SET_LOADED_PHOTO, SET_PHOTOS} from "../types";

export type ModalAlbumsActionsType = setLoadedPhotoType | setPhotosType


type setLoadedPhotoType = {
    type: typeof SET_LOADED_PHOTO,
    payload: boolean
}
export const setLoadedPhoto = (payload: boolean): setLoadedPhotoType => ({
    type: SET_LOADED_PHOTO,
    payload
})

type setPhotosType = {
    type: typeof SET_PHOTOS,
    payload: object
}
export const setPhotos = (items: Object): setPhotosType => ({
    type: SET_PHOTOS,
    payload: items
})