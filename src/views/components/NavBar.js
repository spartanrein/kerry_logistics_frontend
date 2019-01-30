import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <div className="ui two item menu">
            <Link className="item" to="/list_view">List View</Link>
            <Link className="item" to="/bay_view">Bay View</Link>
        </div>
    );
};

export default NavBar;