import React from 'react';
import Style from './header.module.css'
import SearchBox from './search';

const Header =()=>{
    return (
        <div className={Style.header_color}>
            <span className={Style.header_text}>Weather App</span>
            <div className={Style.header_search}>
            <SearchBox />
            </div>
        </div>
    )
}

export default Header