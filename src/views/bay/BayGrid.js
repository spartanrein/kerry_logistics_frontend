import React from 'react';

const BayGrid = ({children}) => {
    return(
        <div className="bay-grid">
            <div className="ui five column grid">
                {children}
            </div>
        </div>
    );
};

export default BayGrid;