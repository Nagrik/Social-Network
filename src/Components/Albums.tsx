import React from 'react';

const Albums = () => {
    return (
        <div className='Albums'>
            <div className='Albums__title'>
                <div className='Albums__title-text'>
                    Photo albums
                    <p className='Albums__title-subtext'>2</p>
                </div>
            </div>
            <div className='Albums__photo'>
                {/*<img/>*/}
            <div className='Albums__photo-subtitle'>
                <span>My best photo</span>
                <span>10</span>
            </div>
            </div>
            <div className='Albums__photo'>
                {/*<img/>*/}
            <div className='Albums__photo-subtitle'>
                <span>My best photo</span>
                <span>10</span>
            </div>
            </div>

        </div>
    );
};

export default Albums;
