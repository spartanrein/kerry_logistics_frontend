import React from 'react';
import Position from "./Position";

const Level = ({maxPositions, posList}) => {

    const generatedPositions = posList.map((pos) => {
        return <Position value={pos} />;
    });

    return(
        <div className={`level ${maxPositions} column row`}>
            {generatedPositions}
        </div>
    );
};

export default Level;