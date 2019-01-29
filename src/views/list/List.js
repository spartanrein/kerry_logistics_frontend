import React from 'react';
import ListHeader from "../components/ListHeader";
import ListTable from "../components/ListTable";

class List extends React.Component {
    render() {
        return ( 
        
        <div>
            <ListHeader/>
            <ListTable/>
        </div>
        )
    }
}

export default List;