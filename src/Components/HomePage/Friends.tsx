import React from 'react';

const Friends = () => {
    return (
        <div>
            <div className='Friends'>
                <div className='Friends__info'>
                    <div className='Friends__info-left'>
                        Friends
                        <p> 10 </p>
                    </div>
                    <a href='/'>update</a>
                </div>
            </div>
            <div className='Friends'>
                <div className='Friends__info'>
                    <div className='Friends__info-left'>
                        Friends Online
                        <p> 3 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;
