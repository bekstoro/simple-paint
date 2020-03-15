import React from 'react';
import {Canvas} from '../applets/canvas';
import {Fill} from '../applets/fill';
import {Line} from '../applets/line';
import {Rectangle} from '../applets/rectangle';

export function PaintComponent(props) {
    return (
        <>
            <Canvas/>
            <Fill/>
            <Line/>
            <Rectangle/>
        </>
    )
}
