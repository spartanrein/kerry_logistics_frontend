import React from 'react';
import BayGrid from './BayGrid';

class Bay extends React.Component {
    render() {
        return(
            <div>
                <BayGrid
                    maxPositions={"five"}
                    maxPosInt={5}
                    bayTitle={"BAY 1"}
                    levelList={[
                        ["safv", "sadf", "gsf", "asdf", "bdaf"],
                        ["qwr", "gte", "qw4", "vfa", "qwef"],
                        ["htdbs", "yru", "fE", "DYGJ", "asdsa"]
                    ]}
                />

                <BayGrid
                    maxPositions={"seven"}
                    maxPosInt={7}
                    bayTitle={"BAY 2"}
                    levelList={[
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