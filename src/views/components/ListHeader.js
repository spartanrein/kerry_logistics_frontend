import React from 'react';

const ListHeader = ( props ) => {
    return (
        <div className="list-header">
            <button onClick = { props.resetList}>Reset</button><br></br> 
            <label >Connection Status: </label>
        </div>
    )
}

export default ListHeader;