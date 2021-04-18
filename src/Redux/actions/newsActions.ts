import {SET_LOADED_NEWS, SET_NEWS} from "../types";


export type NewsActionType = setLoadedNewsType | setNewsType

type setLoadedNewsType = {
    type: typeof SET_LOADED_NEWS,
    payload: boolean
}

export const setLoadedNews = (payload: boolean): setLoadedNewsType => ({
    type: SET_LOADED_NEWS,
    payload
})

type setNewsType = {
    type: typeof SET_NEWS,
    payload: object
}
export const setNews = (items: Object): setNewsType => ({
    type: SET_NEWS,
    payload: items
})