import React from 'react';
import './Menu.css';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import { zoomLevelSelector } from '../Common/State';
import { useRecoilState } from 'recoil';

export const ZOOM_LEVEL_INFO = [
    {
        id: 'chart',
        name: 'Chart',
        label: '••••'
    },
    {
        id: 'section',
        name: 'Section',
        label: '•••'
    },
    {
        id: 'progression',
        name: 'Progression',
        label: '••'
    },
    {
        id: 'concept',
        name: 'Concept',
        label: '•'
    }
];

const ZoomSelector = () => {

    const [zoomLevel, setZoomLevel] = useRecoilState(zoomLevelSelector);

    return (
        <div className="zoom-selector">
            {ZOOM_LEVEL_INFO.map((z, i) => {
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setZoomLevel(z.id)}
                        className={zoomLevel === z.id ? 'pw-accent' : 'pw-secondary'}>
                        {`${z.label}`}
                    </ButtonInput>
                );
            })}
        </div>
    );
}

export default ZoomSelector;
