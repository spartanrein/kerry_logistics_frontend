import React from 'react';
import Position from "./Position";

const Level = ({bottomRow, maxPositions, posList}) => {

    const generatedPositions = posList.map((pos) => {
        return <Position key={pos} bottomRow={bottomRow} value={pos} />;
    });

    return(
        <div className={`level ${maxPositions} column row`}>
            {generatedPositions}
        </div>
    );
};

export default Level;