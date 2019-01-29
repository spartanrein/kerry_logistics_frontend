import React from 'react';
import BayGrid from './BayGrid';

class Bay extends React.Component {
    render() {
        return(
            <div>
                <BayGrid levelList={[
                    ["BAY 1"],
                    ["pos1", "pos2", "pos3", "pos4", "pos5"],
                    ["pos1", "pos2", "pos3", "pos4", "pos5"]
                ]}/>
            </div>
        );
    }
}

export default Bay;