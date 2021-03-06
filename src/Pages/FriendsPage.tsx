import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchFriends} from "../Redux/actions/friendsActions";
import Loader from "../Tools/Loader";

const FriendsPage = () => {
    const dispatch = useDispatch()

    const selectLoad = ({friends}: any) => friends.isLoadedFriends
    const selectFriends = ({friends}: any) => friends.friends
    const isLoaded = useSelector(selectLoad)
    const friends = useSelector(selectFriends)

    useEffect(() => {
        dispatch(fetchFriends())
    }, [dispatch]);


    return (
        <div className='FriendsPage'>
            <div className="FriendsPage__status">
                <div className='FriendsPage__status-all'>
                    All friends
                </div>
                <div className='FriendsPage__status-online'>
                    Friends online
                </div>
            </div>
            <div className="FriendsPage__search">
                <div className="InputIcon">
                    <svg fill="currentColor" height="18" width="18" viewBox="0 0 1664 1792">
                        <path
                            d="M1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"></path>
                    </svg>
                </div>
                <input type="text" placeholder="Start typing a friend's name"/>
                <div className="FriendsPage__parameters">
                    <a href="/">Parameters</a>
                    <div className="InputIcon">
                        <svg fill="currentColor" height="16" width="16" viewBox="0 0 24 24">
                            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {
                isLoaded ?
                    friends.map(({name, surname, imageUrl, id}: any, i: number) => (
                        <div className="FriendsPage__friend-wrapper" key={i}>
                            <NavLink to={'/Friend/' + id}>
                                <img src={imageUrl} alt="Friend"/>
                            </NavLink>
                            <div className="FriendsPage__friend">
                                <NavLink to={'/Friend/' + id}>{name} {surname}</NavLink>
                                <NavLink to={'/Messages'}>
                                    <p>Write Message</p>
                                </NavLink>
                            </div>
                        </div>
                    ))
                    : <Loader/>
            }

        </div>
    );
};

export default FriendsPage;






