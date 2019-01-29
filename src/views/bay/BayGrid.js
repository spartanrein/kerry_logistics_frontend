import React from 'react';
import Level from './Level';

const BayGrid = ({maxPositions, levelList, children}) => {

    const generatedLevels = levelList.map((posList) => {
        return <Level maxPositions={maxPositions} posList={posList}>{children}</Level>;
    });

    return(
        <div className="bay-grid">
            <div className={`ui ${maxPositions} column grid`}>
                {generatedLevels}
            </div>
        </div>
    );
};

export default BayGrid;