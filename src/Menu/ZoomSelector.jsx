import React from 'react';
import './Menu.css';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import { zoomLevelSelector } from '../Common/State';
import { useRecoilState } from 'recoil';

export const ZOOM_LEVEL_INFO = [
    {
        id: 'concept',
        name: 'Concept',
        label: '•'
    },
    {
        id: 'progression',
        name: 'Progression',
        label: '••'
    },
    {
        id: 'chart',
        name: 'Chart',
        label: '••••'
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
                        {`${z.label} ${z.name}`}
                    </ButtonInput>
                );
            })}
        </div>
    );
}

export default ZoomSelector;
