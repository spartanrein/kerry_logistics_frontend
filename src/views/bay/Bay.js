import React from 'react';
import BayGrid from './BayGrid';
import Level from './Level';
import Position from './Position';

class Bay extends React.Component {
    render() {
        return(
            <BayGrid>
                <Level>
                    <Position value={"BAY 1"}/>
                </Level>

                <Level>
                    <Position value={"hello"}/>
                    <Position value={"hello"}/>
                    <Position value={"hello"}/>
                    <Position value={"hello"}/>
                    <Position value={"hello"}/>
                </Level>

                <Level>
                    <Position value={"hello"}/>
                    <Position value={"hello"}/>
                    <Position value={"hello"}/>
                    <Position value={"hello"}/>
                    <Position value={"hello"}/>
                </Level>
            </BayGrid>
        );
    }
}

export default Bay;