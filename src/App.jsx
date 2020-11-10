import React, { Component } from 'react';
import HeaderContainer from "./containers/HeaderContainer";
import LayoutContainer from "./containers/LayoutContainer";
import LSidebarContainer from './containers/LSidebarContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LSidebarContainer/>
                <div className="main">
                    <HeaderContainer/>
                    <LayoutContainer/>
                </div>
            </div>
        );
    }
}

export default App;
