import {combineReducers} from "redux";
import {postsReducer} from "./reducers/postReducer";
import {albumReducer} from "./reducers/modalAlbums";
import {newsReducer} from "./reducers/newsReducer";
import {friendsReducer} from "./reducers/friendsReducer";
import authReducer from "./reducers/authReducer";

export const rootReducer = combineReducers({
        posts:postsReducer,
        album: albumReducer,
        news: newsReducer,
        friends: friendsReducer,
        auth: authReducer

})