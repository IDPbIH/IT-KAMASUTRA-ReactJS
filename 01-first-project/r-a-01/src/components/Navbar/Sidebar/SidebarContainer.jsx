import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        bestFriends: state.sideBar.bestFriends
    }
}

let mapDispatchToProps = () => {
    return {}
}

let SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;