import {combineReducers} from "redux";
import {postsReducer} from "./reducers/postReducer";
import {albumReducer} from "./reducers/modalAlbums";

export const rootReducer = combineReducers({
        posts:postsReducer,
        album: albumReducer,
})