import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import List from './list/List';
import Bay from './bay/Bay';


class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="ui container" style={{margin: '32px 0'}}>
                    <NavBar />
                    <Route path='/list_view' component={List} />
                    <Route path='/bay_view' component={Bay} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;