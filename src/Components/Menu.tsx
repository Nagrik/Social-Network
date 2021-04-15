import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
            <ul className='Menu'>
                <li><NavLink to='/Home'>My profile</NavLink></li>
                <NavLink to='/Home'><li>News</li></NavLink>
                <li><NavLink to='/Messages'>Messages</NavLink></li>
                <NavLink to='/Home'><li>Friends</li></NavLink>
                <NavLink to='/Home'><li>Photos</li></NavLink>
                <NavLink to='/Home'><li>Music</li></NavLink>
                <NavLink to='/Home'><li>Videos</li></NavLink>
                <NavLink to='/Home'><li>Games</li></NavLink>
            </ul>
    );
};

export default Menu;
