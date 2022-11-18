import React from 'react';
import './App.css';
import Titlebar from './components/Titlebar';
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';

function App() {
    return (
        <div classNAME = "App">
            <Titlebar />
            <Navbar />
            <Maincontent />
            
        </div>

    );
}

export default App;
