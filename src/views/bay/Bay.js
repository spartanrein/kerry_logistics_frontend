import React from 'react';
import BayGrid from './BayGrid';

class Bay extends React.Component {
    render() {
        return(
            <div>
                <BayGrid
                    maxPositions={"five"}
                    maxPosInt={5}
                    levelList={[
                        ["BAY 1"],
                        ["safv", "sadf", "gsf", "asdf", "bdaf"],
                        ["qwr", "gte", "qw4", "vfa", "qwef"],
                        ["htdbs", "yru", "fE", "DYGJ", "asdsa"]
                    ]}
                />

                <BayGrid
                    maxPositions={"seven"}
                    maxPosInt={7}
                    levelList={[
                        ["BAY 2"],
                        ["ilut", "yiu", "fmu", "ymfg", "fgh", "hts", "gfum"],
                        ["jye", "wrth", "rmum", "wert", "hreth", "erht", ",lij"],
                        ["vf", "werg", "ter", "yejr", "bgfs", "afe", "sbdt"]
                    ]}
                />
            </div>
        );
    }
}

export default Bay;