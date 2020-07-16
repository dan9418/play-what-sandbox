import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Section, Progression, Concept } from './Chart/Chart';
import { useRecoilState } from 'recoil';
import { zoomLevelSelector, sourceSelector, positionState, aState, BState } from '../Common/State';
import PlaybackControls from './PlaybackControls/PlaybackControls';
import ZoomSelector from './ZoomSelector';
import PresetSelector from './PresetSelector';
import KeyCenterInput from '../UI/KeyCenterInput/KeyCenterInput';
import IntervalListInput from '../UI/IntervalListInput/IntervalListInput';


const MENU_SECTIONS = [
    {
        id: 'chart',
        name: 'Chart'
    },
    {
        id: 'progression',
        name: 'Progression'
    },
    {
        id: 'concept',
        name: 'Concept'
    }
];

const Menu = () => {

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    const [a, setA] = useRecoilState(aState);
    const [B, setB] = useRecoilState(BState);
    const [zoomLevel, setZoomLevel] = useRecoilState(zoomLevelSelector);
    const [source, setSource] = useRecoilState(sourceSelector);
    const [position, setPosition] = useRecoilState(positionState);

    return (
        <div className={`menu pw-lighter ${open && 'open'}`}>
            {open &&
                <>
                    <div className="menu-header pw-secondary">
                        <ZoomSelector />
                    </div>

                    <div className="chart">
                        <h1>{zoomLevel.toUpperCase()}</h1>
                        <PresetSelector />
                        <PlaybackControls />

                        {zoomLevel === 'chart' && <>
                            <h2>Sections</h2>
                            {source.sections.map((s, i) => <Section key={i} s={i} section={s} defaults={source.defaults} />)}
                        </>}
                        {zoomLevel === 'progression' && <>
                            <h2>Concepts</h2>
                            <Progression s={0} p={0} progression={source.sections[0].progressions[0]} />
                        </>}
                        {zoomLevel === 'concept' && <div className='concept-input-2'>
                            <div><Concept s={0} p={0} c={0} concept={source.sections[0].progressions[0].concepts[0]} /></div>
                            <h2>Key Center</h2>
                            <KeyCenterInput keyCenter={a} setKeyCenter={setA} />
                            <h2>Intervals</h2>
                            <IntervalListInput intervals={B} setIntervals={setB} />
                        </div>}
                    </div>
                </>
            }
            <div className={`tab pw-secondary pw-hov`} onClick={toggleOpen} >{open ? '-' : '+'}</div>
        </div>
    );
}

export default Menu;
