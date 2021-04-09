import React from 'react';
import Groups from '../Components/HomePage/Groups';
import Menu from "../Components/Menu";
import avatar from '../images/user.jpg'
import Albums from "../Components/HomePage/Albums";
import Friends from "../Components/HomePage/Friends";
import Info from "../Components/HomePage/Info";
import UserPhotos from "../Components/HomePage/UserPhotos";
import WritePostsField from "../Components/HomePage/WritePostField";
import Posts from "../Components/HomePage/Posts/Posts";
import ChoosePosts from "../Components/HomePage/ChoosePosts";

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home__wrapper'>
                <div className='Home__menu'>
                    <Menu/>
                </div>
                <div className='Home__content'>
                    <div className='Home__content-left'>
                        <div className='Home__content-left-avatarWrapper'>
                            <div className='Home__content-avatar'>
                                <img src={avatar} alt='avatar'/>
                            </div>
                            <div className='Home__content-left-under'>
                                <button>Edit</button>
                                <div className='Home__content-left-statWrapper'>
                                    <div className='Home__content-left-stat'>
                                        <svg fill="currentColor" height="17" width="17"
                                             viewBox="0 0 2048 1792">
                                            <path d="M640 896v512h-256v-512h256zM1024
                                          384v1024h-256v-1024h256zM2048 1536v128h-2048v-1536h128v1408h1920zM1408
                                           640v768h-256v-768h256zM1792 256v1152h-256v-1152h256z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Friends/>
                        <Groups/>
                        <Albums/>
                    </div>
                    <div className='Home__content-right'>
                        <Info/>
                        <UserPhotos/>
                        <WritePostsField/>
                        <ChoosePosts/>
                        <Posts/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
