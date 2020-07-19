import React from 'react';
import './ZoomInput.css';
import { ZOOM } from '../../Common/State';
import ButtonInput from '../ButtonInput/ButtonInput';

export const ZOOM_VALUES = [
    {
        id: ZOOM.Chart,
        name: 'Chart',
        label: '••••'
    },
    {
        id: ZOOM.Section,
        name: 'Section',
        label: '•••'
    },
    {
        id: ZOOM.Progression,
        name: 'Progression',
        label: '••'
    },
    {
        id: ZOOM.Concept,
        name: 'Concept',
        label: '•'
    }
];

const ZoomInput = props => {
    const { zoom, setZoom } = props;

    return (
        <div className="zoom-input">
            {ZOOM_VALUES.map((z, i) => {
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setZoom(z.id)}
                        className={zoom === z.id ? 'pw-accent' : 'pw-secondary'}>
                        {z.label}
                    </ButtonInput>
                );
            })}
        </div>
    );
}

export default ZoomInput;