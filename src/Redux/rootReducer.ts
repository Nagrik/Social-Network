import {combineReducers} from "redux";
import {postsReducer} from "./reducers/postReducer";
import {albumReducer} from "./reducers/modalAlbums";
import {newsReducer} from "./reducers/newsReducer";

export const rootReducer = combineReducers({
        posts:postsReducer,
        album: albumReducer,
        news: newsReducer
})