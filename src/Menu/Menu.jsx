import React, { useState } from 'react';
import PW from 'play-what';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';
import ZoomInput from '../UI/ZoomInput/ZoomInput';
import { ZOOM, chartState, positionState, scopeState } from '../Common/State';
import { useRecoilState, useRecoilValue } from 'recoil';
import Common from '../Common/_module';
import PlaybackControls from '../PlaybackControls/PlaybackControls';

const ConceptHeader = ({ conceptConfig, s, p, c }) => {
    const [scope, setScope] = useRecoilState(scopeState);
    const [position, setPosition] = useRecoilState(positionState);
    const active = (scope === ZOOM.Section && s === position[0]) ||
        (scope === ZOOM.Progression && s === position[0] && p === position[1]) ||
        (scope === ZOOM.Concept && s === position[0] && p === position[1] && c === position[2]);
    const trueActive = s === position[0] && p === position[1] && c === position[2];
    const action = () => {
        setPosition([s, p, c]);
        setScope(ZOOM.Concept)
    };

    const tonic = PW.Theory.getNoteName(conceptConfig.a);
    const preset = { id: '' };//PW.Theory.findPreset(conceptConfig.B);
    const title = `${tonic} ${preset.id}`;

    return (
        <li className={`leaf item ${trueActive ? 'pw-active pw-concept' : active ? 'pw-concept' : ''}`} onClick={action}>{title}</li>
    );
}

const ProgressionHeader = ({ progression, s, p }) => {
    const [position, setPosition] = useRecoilState(positionState);
    const [scope, setScope] = useRecoilState(scopeState);
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const active = (scope === ZOOM.Section && s === position[0]) ||
        (scope === ZOOM.Progression && s === position[0] && p === position[1]);
    const action = () => {
        setPosition([s, p, 0]);
        setScope(ZOOM.Progression)
    };

    return (
        <>
            <li className={`header item ${active ? 'pw-progression' : ''}`} onClick={action}>
                {progression.name || `Progression ${p + 1} `}
                <div className={`toggle ${open ? 'open' : ''}`} onClick={toggleOpen}>{'>'}</div>
            </li>
            {open &&
                <>
                    <li>
                        <ul className={`list ${active ? 'pw-progression' : ''}`}>
                            {progression.concepts.map((c, i) => {
                                return <ConceptHeader conceptConfig={c} key={i} s={s} p={p} c={i} />
                            })}
                        </ul>
                    </li>
                </>
            }
        </>
    );
}

const SectionHeader = ({ section, s }) => {
    const [position, setPosition] = useRecoilState(positionState);
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const [scope, setScope] = useRecoilState(scopeState);
    const active = (scope === ZOOM.Section && s === position[0]);
    const action = () => {
        setPosition([s, 0, 0]);
        setScope(ZOOM.Section)
    };

    return (
        <>
            <li className={`header item ${active ? 'pw-section' : ''}`} onClick={action}>
                {section.name || `Section ${s + 1} `}
                <div className={`toggle ${open ? 'open' : ''}`} onClick={toggleOpen}>{'>'}</div>
            </li>
            {open &&
                <>
                    <li>
                        <ul className={`list ${active ? 'pw-section' : ''}`}>
                            {section.progressions.map((p, i) => {
                                return <ProgressionHeader progression={p} key={i} s={s} p={i} />;
                            })}
                        </ul>
                    </li>
                </>
            }
        </>
    );
}

const ChartHeader = ({ chart }) => {
    const [position, setPosition] = useRecoilState(positionState);
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const [scope, setScope] = useRecoilState(scopeState);
    const active = (scope === ZOOM.Chart);
    const action = () => {
        setPosition([0, 0, 0]);
        setScope(ZOOM.Chart)
    };

    return (
        <>
            <h2 className={`header item ${active ? 'pw-chart' : ''}`} onClick={action}>
                {chart.name || 'Chart'}
                <div className={`toggle ${open ? 'open' : ''}`} onClick={toggleOpen}>{'>'}</div>
            </h2>
            {open &&
                <ul className={`list ${active ? 'pw-chart' : ''}`}>
                    {chart.sections.map((s, i) => {
                        return <SectionHeader section={s} key={i} s={i} />;
                    })}
                </ul>
            }
        </>
    );
}

const NavTab = () => {
    const chart = useRecoilValue(chartState);
    const [scope, setScope] = useRecoilState(scopeState);
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const [tab, setTab] = useState(TABS[0])
    const active = scope === ZOOM.Chart;

    return (
        <div className="navigation">
            <div className="zoom-container">
                <ZoomInput zoom={scope} setZoom={setScope} />
            </div>
            <ChartHeader chart={chart} />
        </div>
    );
};

const PlaybackTab = () => {
    const chart = useRecoilValue(chartState);
    const [scope, setScope] = useRecoilState(scopeState);
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const [tab, setTab] = useState(TABS[0]);
    return (
        <>
            <PlaybackControls />
        </>
    );
};


const TABS = [
    {
        name: 'Scope',
        component: NavTab
    },
    {
        name: 'Playback',
        component: PlaybackTab
    },
];

const Menu = () => {

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    const [tab, setTab] = useState(TABS[0]);
    const Tab = tab.component;

    return (
        <div className={`menu pw-light-2 ${open && 'open'} `}>
            {open &&
                <>
                    <div className="tab-container">
                        {TABS.map(t => <ButtonInput className={`tab ${t.name === tab.name ? 'pw-accent' : 'pw-primary'}`} onClick={() => setTab(t)}>{t.name}</ButtonInput>)}
                    </div>
                    <Tab />
                </>
            }
            <div className={`meatball ${open ? 'pw-accent' : 'pw-primary'} pw-hov`} onClick={toggleOpen} >
                <Common.Icons.Menu />
            </div>
        </div>
    );
};

export default Menu;
