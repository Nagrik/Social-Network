import React, {useState} from 'react';

const ChoosePosts = () => {
    const [active, setActive] = useState(true);

    const switchActivePosts = () => {
        setActive(!active)
    }
    return (
        <div className='ChoosePosts'>
            <div className="ChoosePosts__theme">
                <span  onClick={switchActivePosts} className={active ? 'ChoosePosts__theme-active' : ''}>All posts</span>
                <span onClick={switchActivePosts} className={!active ? 'ChoosePosts__theme-active' : ''}>My posts</span>
            </div>
            <div className="searchIcon">
                <div className="InputIcon">
                    <svg fill="currentColor" height="18" width="18" viewBox="0 0 1664 1792">
                        <path d="M1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5
                        316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179
                         124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5
                          273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z">
                    </path></svg>
                </div>
            </div>
        </div>
    );
};

export default ChoosePosts;
