import React from 'react';
import Bay from './bay/Bay';
import List from './list/List';

class App extends React.Component {
    render() {
        return(
            <div>
                <Bay/>
                <List/>
            </div>
        );
    }
}

export default App;