import React from 'react';

const Groups = () => {
    return (
        <div className='Groups'>
            <div className='Groups__title'>
                <div className='Groups__title-text'>
                    Noteworthy pages
                    <p>21</p>
                </div>
            </div>
            <div className='Groups__content'>
                <div className='Groups__content-image'/>
                <div className='Groups__content-desc'>
                    <div className='Groups__content-desc-title'>
                        Group Name
                    </div>
                    <div className='Groups__content-desc-subtitle'>
                        Description
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Groups;
