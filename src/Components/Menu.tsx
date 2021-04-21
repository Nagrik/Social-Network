import React from 'react';
import {NavLink } from 'react-router-dom';


const Menu = () => {
    return (
            <ul className='Menu'>
                <NavLink to='/Home'><li>My profile </li></NavLink>
                <NavLink to='/News'><li>News</li></NavLink>
                <NavLink to='/Messages'><li>Messages</li></NavLink>
                <NavLink to='/Friends'><li>Friends</li></NavLink>
                <NavLink to='/Home'><li>Photos</li></NavLink>
                <NavLink to='/Home'><li>Music</li></NavLink>
                <NavLink to='/Home'><li>Videos</li></NavLink>
                <NavLink to='/Home'><li>Games</li></NavLink>
            </ul>
    );
};

export default Menu;
