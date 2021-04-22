import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import {setFriend, setLoadedFriends} from "../Redux/actions/friendsActions";
import Loader from "../Tools/Loader";
import Home from "../Pages/HomePage";

const FriendsPageContainer = (props:any) => {
    let friendId = props.match.params.friendId
    const dispatch = useDispatch()

    const selectAuthor = ({friends}:any) => friends.friend
    const friend = useSelector(selectAuthor)

    const selectLoading = ({friends}:any) => friends.isLoadedFriends
    const isLoadedProfile = useSelector(selectLoading)

    React.useEffect(() => {
        dispatch(setLoadedFriends(false))
        axios.get(`https://social-network-31abc-default-rtdb.firebaseio.com/friends/${friendId}.json`).then(({data}) => {
            dispatch(setFriend(data))
        })
    }, [dispatch, friendId])


    return (
        <>
            {isLoadedProfile ? <Home friend={friend}/> :  Array(10).fill(0).map((_, index) => (<Loader key={index}/> ))}

        </>
    );
};

export default withRouter(FriendsPageContainer);
