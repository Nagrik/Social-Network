import React from 'react';
import Andrey from '../../images/Andrey.jpg'
import Sanya from '../../images/Sanya.jpg'
import Kirill from '../../images/Kirill.jpg'
import { NavLink } from 'react-router-dom';

const Friends = () => {
    return (
        <div>
            <div className='Friends'>
                <div className='Friends__info'>
                    <div className='Friends__info-left'>
                        Friends
                        <p> 3 </p>
                    </div>
                    <a href='/'>update</a>
                </div>
                <div className='Friends__photo'>
                    <NavLink to='/Friend/2'  className='Friends__photo-block'>
                        <img src={Andrey} alt='Andrey'/>
                        <p>Andrey</p>
                    </NavLink>
                    <NavLink to='/Friend/0'  className='Friends__photo-block'>
                        <img src={Sanya} alt='Sanya'/>
                        <p>Alexander</p>
                    </NavLink>
                    <NavLink to='/Friend/1' className='Friends__photo-block'>
                        <img src={Kirill} alt='Kirill'/>
                        <p>Kirill</p>
                    </NavLink>
                </div>
            </div>
            <div className='Friends'>
                <div className='Friends__info'>
                    <div className='Friends__info-left'>
                        Friends Online
                        <p> 1 </p>
                    </div>
                </div>
                <div className='Friends__photo'>
                    <NavLink to='/Friend/1' className='Friends__photo-block'>
                        <img src={Kirill} alt='Kirill'/>
                        <p>Kirill</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Friends;
