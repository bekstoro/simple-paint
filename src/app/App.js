import React from 'react';
import './App.css';
import {SettingsComponent} from '../screens/Settings.component';
import {PaintComponent} from '../screens/Paint.component';

function App() {
    return (
        <>
            <SettingsComponent/>
            <PaintComponent/>
        </>
    );
}

export default App;
