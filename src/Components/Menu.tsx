import React from 'react';
import {Link, NavLink } from 'react-router-dom';


const Menu = () => {
    return (
            <ul className='Menu'>
                <li><Link to='/Home'>My profile</Link></li>
                <NavLink to='/News'><li>News</li></NavLink>
                <li><NavLink to='/Messages'>Messages</NavLink></li>
                <NavLink to='/Friends'><li>Friends</li></NavLink>
                <NavLink to='/Home'><li>Photos</li></NavLink>
                <NavLink to='/Home'><li>Music</li></NavLink>
                <NavLink to='/Home'><li>Videos</li></NavLink>
                <NavLink to='/Home'><li>Games</li></NavLink>
            </ul>
    );
};

export default Menu;
