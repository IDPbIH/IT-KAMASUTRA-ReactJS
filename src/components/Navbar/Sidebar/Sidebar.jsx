import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    let sidebarElements = props.bestFriends.map(d => <b key={d.id}>{d.name} </b>);

    return <div className={s.sidebar}>
        <div>Friends</div>
        {sidebarElements}
    </div>
}


export default Sidebar;