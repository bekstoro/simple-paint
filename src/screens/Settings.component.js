import React from 'react';
import {CanvasSettings} from '../applets/canvas';
import {FillSettings} from '../applets/fill';
import {LineSettings} from '../applets/line';
import {RectangleSettings} from '../applets/rectangle';

export function SettingsComponent(props) {
    return (
        <>
            <CanvasSettings/>
            <FillSettings/>
            <LineSettings/>
            <RectangleSettings/>
        </>
    )
}
