import React from 'react';
import Position from "./Position";

const Level = ({posList}) => {

    const generatedPositions = posList.map((pos) => {
        return <Position value={pos} />;
    });

    return(
        <div className="level 5 column row">
            {generatedPositions}
        </div>
    );
};

export default Level;