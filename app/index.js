import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Component
// State
// Lifecycle
// UI 

class App extends React.Component {
    render() {
        return (
            <h1>
                Hello, world!
            </h1>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)