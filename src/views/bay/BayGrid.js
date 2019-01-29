import React from 'react';
import Level from './Level';

const BayGrid = ({levelList, children}) => {

    const generatedLevels = levelList.map((posList) => {
        // return <Level><Position value={posValue.length} /></Level>;
        return <Level posList={posList}>{children}</Level>;
    });

    return(
        <div className="bay-grid">
            <div className="ui five column grid">
                {generatedLevels}
            </div>
        </div>
    );
};

export default BayGrid;