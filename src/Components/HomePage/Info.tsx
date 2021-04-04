import React, {useState} from 'react';

const Info = () => {
    const [show, setShow] = useState(false);

    const changeInfoBlock = () => {
        setShow(!show)
    }


    return (
        <div className='Info'>
            <h3>
                Roman Nahryshko
                <span>Online</span>
            </h3>
            <p>You don’t need money if you don’t have time to spend it</p>
            <div className='Info__user-wrapper'>
                <div className='Info__user-birthday'>
                    <div className='Info__user-birthday-text'>Birthday:</div>
                    <span>
                        <a href='/'>October 10</a>
                    </span>
                </div>
                <div className='Info__user-birthday'>
                    <div className='Info__user-birthday-text'>Relationship status:</div>
                    <span>
                        <a href='/'>Actively searching</a>
                    </span>
                </div>
                <div className='Info__user-birthday'>
                    <div className='Info__user-birthday-text'>Current city:</div>
                    <span>
                        <a href='/'>Kyiv</a>
                    </span>
                </div>
                {
                    !show ? <div className='Info__ShowMore' onClick={changeInfoBlock}>
                            <div className='Info__ShowMore-Wrapper'>
                                <div className='Info__ShowMore-empty'/>
                                <span>Show Full Information</span>
                            </div>
                        </div>
                        :
                        <>
                            <div className='Info__ShowMore' onClick={changeInfoBlock}>
                                <div className='Info__ShowMore-Wrapper'>
                                    <div className='Info__ShowMore-empty'/>
                                    <span>Hide Full Information</span>
                                </div>
                            </div>
                            <div className='Info__FullInformation'>
                                <div className='Info__FullInformation-line'>
                                    <b>Main Information</b>
                                </div>
                                <div className='Info__user-birthday'>
                                    <div className='Info__user-birthday-text'>Hometown:</div>
                                    <span>Kyiv</span>
                                </div>
                                <div className='Info__user-birthday'>
                                    <div className='Info__user-birthday-text'>Language:</div>
                                    <span>Russian</span>
                                </div>
                            </div>
                            <div className='Info__FullInformation'>
                                <div className='Info__FullInformation-line'>
                                    <b>Personal Information</b>
                                </div>
                                <div className='Info__user-birthday'>
                                    <div className='Info__user-birthday-text'>Favorite quotes:</div>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className='Info__user-birthday'>
                                    <div className='Info__user-birthday-text'>Groups:</div>
                                    <span>Js, React, WebDev, TypeScript</span>
                                </div>
                            </div>
                        </>

                }
                <div className='Info-Stats'>
                    <a href='/'>
                            <div className='Info-Stats-Number'>132</div>
                            <div className='Info-Stats-Text'>friends</div>
                    </a>
                    <a href='/'>
                        <div className='Info-Stats-Number'>295</div>
                        <div className='Info-Stats-Text'>followers</div>
                    </a>
                    <a href='/'>
                        <div className='Info-Stats-Number'>23</div>
                        <div className='Info-Stats-Text'>tags</div>
                    </a>
                    <a href='/'>
                        <div className='Info-Stats-Number'>129</div>
                        <div className='Info-Stats-Text'>videos</div>
                    </a>
                    <a href='/'>
                        <div className='Info-Stats-Number'>3245</div>
                        <div className='Info-Stats-Text'>audio files</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Info;
