import React from 'react';
import Level from './Level';

const BayGrid = ({maxPositions, maxPosInt, bayTitle, levelList, children}) => {

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
                <h1>{bayTitle}</h1>
                {generatedLevels}
                <Level bottomRow={true} maxPositions={maxPositions} posList={posListCount(maxPosInt)}>
                    {children}
                </Level>
            </div>
        </div>
    );
};

export default BayGrid;