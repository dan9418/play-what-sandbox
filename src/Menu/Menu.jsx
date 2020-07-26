import React, { useState } from 'react';
import PW from 'play-what';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';
import ZoomInput from '../UI/ZoomInput/ZoomInput';
import { ZOOM, chartState, positionState, scopeState } from '../Common/State';
import { useRecoilState, useRecoilValue } from 'recoil';
import Common from '../Common/_module';
import PlaybackControls from '../PlaybackControls/PlaybackControls';

const ConceptLeaf = ({ conceptConfig, s, p, c }) => {
    const [scope, setScope] = useRecoilState(scopeState);
    const [position, setPosition] = useRecoilState(positionState);

    const isActive = scope === ZOOM.Concept && s === position[0] && p === position[1] && c === position[2];
    const isScoped = isActive ||
        scope === ZOOM.Section && s === position[0] ||
        scope === ZOOM.Progression && s === position[0] && p === position[1] ||
        scope === ZOOM.Chart;
    const action = () => {
        setPosition([s, p, c]);
        setScope(ZOOM.Concept)
    };

    const name = PW.Chart.getConceptName(conceptConfig);

    return (
        <div className={`leaf pw-hov ${isActive ? 'pw-accent pw-active' : isScoped ? 'pw-concept' : ''}`} onClick={action}>{conceptConfig.name}</div>
    );
}

const ProgressionMenu = ({ progression, s, p }) => {
    const [position, setPosition] = useRecoilState(positionState);
    const [scope, setScope] = useRecoilState(scopeState);

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    const isActive = scope === ZOOM.Progression && s === position[0] && p === position[1];
    const isScoped = isActive || scope === ZOOM.Section && s === position[0] || scope === ZOOM.Chart;

    const action = () => {
        setPosition([s, p, 0]);
        setScope(ZOOM.Progression)
    };

    return (
        <div className={`submenu pw-hov ${isScoped ? 'pw-progression' : ''} ${isActive ? 'pw-active' : ''}`}>
            <h4 className={`header`} onClick={action}>
                {progression.name || `Progression ${p + 1} `}
                <div className={`toggle ${open ? 'open' : ''}`} onClick={toggleOpen}>{'>'}</div>
            </h4>
            {open &&
                <div className={`list`}>
                    {progression.concepts.map((c, i) => {
                        return <ConceptLeaf conceptConfig={c} key={i} s={s} p={p} c={i} />
                    })}
                </div>
            }
        </div>
    );
}

const SectionMenu = ({ section, s }) => {
    const [position, setPosition] = useRecoilState(positionState);
    const [scope, setScope] = useRecoilState(scopeState);

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    const isActive = scope === ZOOM.Section && s === position[0];
    const isScoped = isActive || scope === ZOOM.Chart;

    const action = () => {
        setPosition([s, 0, 0]);
        setScope(ZOOM.Section)
    };

    return (
        <div className={`submenu ${isScoped ? 'pw-section' : ''} ${isActive ? 'pw-active' : ''}`}>
            <h3 className={`header`} onClick={action}>
                {section.name || `Section ${s + 1} `}
                <div className={`toggle ${open ? 'open' : ''}`} onClick={toggleOpen}>{'>'}</div>
            </h3>
            {open &&
                <div className={`list`}>
                    {section.progressions.map((p, i) => {
                        return <ProgressionMenu progression={p} key={i} s={s} p={i} />;
                    })}
                </div>
            }
        </div>
    );
}

const ChartMenu = ({ chart }) => {
    const [position, setPosition] = useRecoilState(positionState);
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    const [scope, setScope] = useRecoilState(scopeState);
    const isScoped = scope === ZOOM.Chart;

    const action = () => {
        setPosition([0, 0, 0]);
        setScope(ZOOM.Chart)
    };

    return (
        <div className={`submenu ${isScoped ? 'pw-chart pw-active' : ''}`}>
            <h2 className="header" onClick={action}>
                {chart.name || 'Chart'}
                <div className={`toggle ${open ? 'open' : ''}`} onClick={toggleOpen}>{'>'}</div>
            </h2>
            {open &&
                <div className={`list`}>
                    {chart.sections.map((s, i) => {
                        return <SectionMenu section={s} key={i} s={i} />;
                    })}
                </div>
            }
        </div>
    );
}

const NavTab = () => {
    const chart = useRecoilValue(chartState);
    const [scope, setScope] = useRecoilState(scopeState);

    return (
        <div className="navigation">
            <div className="zoom-container">
                <ZoomInput zoom={scope} setZoom={setScope} />
            </div>
            <ChartMenu chart={chart} />
        </div>
    );
};

const PlaybackTab = () => {
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
