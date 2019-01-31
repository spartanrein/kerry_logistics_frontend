import React from 'react';
import ListHeader from '../components/ListHeader';
import SortableTable from '../components/SortableTable';
import CallApi from '../components/CallApi'

class List extends React.Component {
    render() {
        return ( 
        <div>
            <ListHeader/>
            <CallApi/>
            <SortableTable/>
        </div>
        )
    }
}

export default List;
