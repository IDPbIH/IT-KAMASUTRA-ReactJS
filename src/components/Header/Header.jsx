import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logoGIF from '../../assets/images/logo.gif';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logoGIF}></img>
            <div className={s.loginBlock}>
                {props.isAuth ?
                <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;