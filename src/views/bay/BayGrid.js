import React from 'react';
import Level from './Level';

const BayGrid = ({maxPositions, maxPosInt, levelList, children}) => {

    const generatedLevels = levelList.map((posList) => {
        return <Level bottomRow={false} key={posList} maxPositions={maxPositions} posList={posList}>{children}</Level>;
    });

    function posListCount(maxPosInt) {
        let listCount = [];
        for (let i = 1; i <= maxPosInt; i++) {
            listCount[i-1] = "0" + i;
        }
        return listCount;
    };

    return(
        <div className="bay-grid">
            <div className={`ui ${maxPositions} column grid`}>
                {generatedLevels}
                <Level bottomRow={true} maxPositions={maxPositions} posList={posListCount(maxPosInt)}>
                    {children}
                </Level>
            </div>
        </div>
    );
};

export default BayGrid;