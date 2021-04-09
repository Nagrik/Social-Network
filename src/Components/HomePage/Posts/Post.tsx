import React, {useState} from 'react';
import author from '../../../images/user.jpg'

export default ({post}:any) => {
    const [like, setLike] = useState(0);
    const [likeActive, setLikeActive] = useState(true);

    const addLikeCount = () => {
        setLike(like + 1)
    }
    const minusLikeCount = () => {
        setLike(like - 1)
    }

    const switchLikeActive = () => {
            setLikeActive(!likeActive)
        if(likeActive){
            addLikeCount()
        }else{
            minusLikeCount()
        }
    }

    return (
        <div className='Posts'>
            <div className="Posts__wrapper">
                <div className="Posts__author">
                    <div className="Posts__author-name">
                        <div className="Posts__author-photo">
                            <img src={author} alt=''/>
                            <span>Roman Nahryshko</span>
                        </div>
                    </div>
                    <div className="Posts__arrow">
                        <div className="InputIcon">
                            <svg fill="currentColor" height="18" width="18" viewBox="0 0 64 64"><g>
                                <polyline strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10" points="15,24 32,41
		49,24 	" fill="none" stroke="currentColor">
                                    <polyline strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10" points="15,24 32,41
		49,24 	" fill="none" stroke="currentColor">

                                    </polyline></polyline></g></svg>
                        </div>
                    </div>
                </div>
                <div className="Posts__text-wrapper">
                    <p>{post.title.title}</p>
                </div>
                <div className="Posts__footer">

                    <div className={likeActive ? "InputIcons" : 'InputIcons-Active'}>
                        <svg fill="currentColor" height="18" width="18" viewBox="0 0 1792 1792" onClick={switchLikeActive}>
                            <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220
                             127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224
                              0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z">
                        </path></svg>
                        &nbsp; {like}
                    </div>
                    <div className="InputIcons">
                        <svg fill="currentColor" height="18" width="18" viewBox="0 0 1792 1792">
                            <path d="M1792 896q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198
                             175-460 242-49 14-114 22-17 2-30.5-9t-17.5-29v-1q-3-4-0.5-12t2-10
                              4.5-9.5l6-9t7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59
                               26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5
                                348-50.5q244 0 450 85.5t326 233 120 321.5z">
                        </path></svg>
                    </div>
                    <div className="InputIcons">
                        <svg fill="currentColor" height="18" width="18" viewBox="0 0 1792 1792">
                            <path d="M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98
                             0-175.5 6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123
                             0 6 2.5 23.5t2.5 26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451
                              0-199 53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z">
                        </path></svg>
                    </div>
                </div>
            </div>

        </div>
    );
};


