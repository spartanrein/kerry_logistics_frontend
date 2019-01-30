import React from 'react';
import ListHeader from "../components/ListHeader";
import TableExampleSortable from "../components/SortableTable"

class List extends React.Component {
    render() {
        return ( 
        <div>
            <ListHeader/>
            <TableExampleSortable/>
        </div>
        )
    }
}

export default List;