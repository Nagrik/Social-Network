import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/pinguin.png'
import user from '../images/user.jpg'
import DarkMode from "../Tools/DarkMode";

const Header = () => {

    const [arrow, setArrow] = useState(false);

    const switchArrow = () => {
        setArrow(!arrow)
    }

    return (
        <div className='header'>
            <div className='header__container'>
                <NavLink to='/Home' className='header__container-logo'>
                    <img src={logo} alt='logo'/>
                </NavLink>
                <div className='header__container-search'>
                    <svg fill="currentColor" height="14" width="14" viewBox="0 0 1664 1792">
                        <path d="M1152 832q0-185-131.5-316.5t-316.5-131.5-316.5
                        131.5-131.5 316.5 131.5 316.5 316.5 131.5
                         316.5-131.5 131.5-316.5zM1664 1664q0 52-38 90t-90 38q-54
                         0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150
                         -150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5
                          273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343
                          343q37 37 37 90z">

                        </path>
                    </svg>
                    <input placeholder='Search' type='text'/>
                </div>
                <div className='header__container-bell'>
                    <svg fill="currentColor" height="18" width="18" viewBox="0 0 1792 1792">
                        <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16
                         16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zM1728 1408q0 52-38 90t-90 38h-448q0
                          106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5
                           74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40
                            28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5
                            260t50 206 74.5 158.5 85 119.5 91 88z">

                        </path>
                    </svg>
                </div>
                <DarkMode/>
                <div className='header__container-user'>
                    <span>Roman</span>
                    <img src={user} alt=''/>
                    <div className={!arrow ? 'header__container-user-svg' : 'header__container-user-reverseSvg'}
                         onClick={switchArrow}>
                        <svg fill="currentColor" height="12" width="12" viewBox="0 0 1792 1792">
                            <path d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19
                        -45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45
                        19l166 165q19 19 19 45.5t-19 45.5z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
