import React from 'react';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const DarkMode = () => {
    const body = document.body
    const lightTheme = 'light'
    const darkTheme = 'dark'
    //@ts-ignore
    let theme

    if (localStorage) {
        theme = localStorage.getItem("theme")
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = () => {
        //@ts-ignore
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            localStorage.setItem("theme", "light")
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            localStorage.setItem("theme", "dark")
            theme = darkTheme
        }
    }

    return (
        <Switch
            checkedChildren={<FaSun className='Icon'/>}
            unCheckedChildren={<FaMoon className='Icon' />}
            //@ts-ignore
            id='darkMode'
            onClick={switchTheme}
            className='switch'
        />
    );
};

export default DarkMode;
