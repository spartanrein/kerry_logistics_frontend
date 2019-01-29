import React from 'react';
import BayGrid from './BayGrid';

class Bay extends React.Component {
    render() {
        return(
            <div>
                <BayGrid
                    maxPositions={"five"}
                    levelList={[
                        ["BAY 1"],
                        ["pos1", "pos2", "pos3", "pos4", "pos5"],
                        ["pos1", "pos2", "pos3", "pos4", "pos5"],
                        ["pos1", "pos2", "pos3", "pos4", "pos5"]
                    ]}
                />

                <BayGrid
                    maxPositions={"seven"}
                    levelList={[
                        ["BAY 2"],
                        ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7"],
                        ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7"],
                        ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7"]
                    ]}
                />
            </div>
        );
    }
}

export default Bay;