import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Header} from '../components/Header.component';
import {Settings} from '../screens/Settings.component';
import {PaintComponent} from '../screens/Paint.component';
import './App.css';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Header/>
            <Settings/>
        </div>
    );
}

export default App;
