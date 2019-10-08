import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Popular'
import Popular from './components/Popular';

// Component
// State
// Lifecycle
// UI 

function isAuthed(){
    return true;
}

function isNew(){
    return true;
}

class App extends React.Component {
    render() {
        const authed = isAuthed();
        const name = 'Server';
        const firstLogin = isNew();

        return <div className="container"><Popular/></div>;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)