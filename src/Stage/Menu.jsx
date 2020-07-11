import React, { useState, useEffect } from 'react';
import './Stage.css';

import Viewers from 'play-what-react-viewers';
const { UI, Modules } = Viewers;
const { ButtonInput, Dropdown } = UI;
const { Chart } = Modules;

import { useRecoilState } from 'recoil';
import { zoomLevelSelector, sourceSelector, INPUT_MODES, positionState, conceptState } from './State';
import { useRecoilValue } from 'recoil';
import PlaybackControls from '../PlaybackControls/PlaybackControls';
import ZoomSelector from './ZoomSelector';
import PresetSelector from './PresetSelector';

const Menu = () => {

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    const [zoomLevel, setZoomLevel] = useRecoilState(zoomLevelSelector);
    const [source, setSource] = useRecoilState(sourceSelector);
    const [position, setPosition] = useRecoilState(positionState);

    return (
        <div className={`menu pw-lighter ${open && 'open'}`}>
            {open &&
                <>
                    <h1>Inputs</h1>
                    <h2>Zoom Level</h2>
                    <ZoomSelector />
                    <h2>Presets</h2>
                    <PresetSelector />
                    <h2>Playback</h2>
                    <PlaybackControls />
                    <Chart source={source} position={position} setPosition={setPosition} inputModeId={zoomLevel} />
                </>
            }
            <div className={`tab pw-lighter pw-medium pw-hov`} onClick={toggleOpen} >{open ? '<' : '>'}</div>
        </div>
    );
}

export default Menu;
