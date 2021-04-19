import React from 'react';
import user from '../images/user.jpg'

const FriendsPage = () => {
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
                    <svg fill="currentColor" height="18" width="18" viewBox="0 0 1664 1792"><path d="M1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"></path></svg>
                </div>
                    <input type="text" placeholder="Start typing a friend's name"/>
                    <div className="FriendsPage__parameters">
                <a href="/">Parameters</a>
                <div className="InputIcon">
                    <svg fill="currentColor" height="16" width="16" viewBox="0 0 24 24" ><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg>
                </div>
                    </div>
            </div>
            <div className="FriendsPage__friend-wrapper">
                <img src={user} alt="Friend"/>
                <div className="FriendsPage__friend">
                    <h3>Roman nahryshko</h3>
                    <a href="/">Write Message</a>
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
