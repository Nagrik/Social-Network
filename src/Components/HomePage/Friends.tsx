import React from 'react';
import Andrey from '../../images/Andrey.jpg'
import Sanya from '../../images/Sanya.jpg'
import Kirill from '../../images/Kirill.jpg'

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
                <a href='/' className='Friends__photo'>
                    <div className='Friends__photo-block'>
                        <img src={Andrey} alt='Andrey'/>
                        <p>Andrey</p>
                    </div>
                    <a href='/' className='Friends__photo-block'>
                        <img src={Sanya} alt='Sanya'/>
                        <p>Alexander</p>
                    </a>
                    <a href='/' className='Friends__photo-block'>
                        <img src={Kirill} alt='Kirill'/>
                        <p>Kirill</p>
                    </a>
                </a>
            </div>
            <div className='Friends'>
                <div className='Friends__info'>
                    <div className='Friends__info-left'>
                        Friends Online
                        <p> 1 </p>
                    </div>
                </div>
                <div className='Friends__photo'>
                    <a className='Friends__photo-block' href='/'>
                        <img src={Kirill} alt='Kirill'/>
                        <p>Kirill</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Friends;
