import {SET_LOADED_NEWS, SET_NEWS} from "../types";
import {NewsActionType} from "../actions/newsActions";

type InitialStateNewsType = {
    isLoadedNews:boolean,
    news:Array<string>
}

const initialState:InitialStateNewsType = {
    isLoadedNews:false,
    news:[],
}

export const newsReducer = (state = initialState, action:NewsActionType) => {
    switch (action.type) {
        case SET_LOADED_NEWS:{
            return {
                ...state,
                isLoadedNews: action.payload
            }
        }
        case SET_NEWS:
            return {
                ...state,
                news: action.payload,
                isLoadedNews: true,
            }
        default:return state
    }
}