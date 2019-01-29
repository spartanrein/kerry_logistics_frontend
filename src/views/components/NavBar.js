import React from 'react';

const NavBar = () => {
    return(
        <div className="ui two item menu">
            <a className="item" href="/list_view">List View</a>
            <a className="item" href="/bay_view">Bay View</a>
        </div>
    );
};

export default NavBar;