import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9uFKDM7XSDRSHG2LyI9-q7Sg9C5500PeH0PoOahEJY-2IqJRr6hrUZ40zJeGym3dv3o&usqp=CAU'></img>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;