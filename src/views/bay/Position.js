import React from 'react';

const Position = ({bottomRow, value}) => {
    if (!bottomRow) {
        return <div className="position column">{value}</div>;
    } else {
        return <div className="position column bottom-row">{value}</div>;
    }
};

export default Position;