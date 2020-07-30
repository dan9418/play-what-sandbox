import React, { useState } from 'react';
import PW from 'play-what';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';
import ZoomInput from '../UI/ZoomInput/ZoomInput';
import SwitchInput from '../UI/SwitchInput/SwitchInput';
import { ZOOM, sourceState, positionState, scopeState, menuTabState, viewersState } from '../Common/State';
import { useRecoilState, useRecoilValue } from 'recoil';
import Common from '../Common/_module';
import PlaybackControls from '../PlaybackControls/PlaybackControls';
import ScalarInput from '../UI/ScalarInput/ScalerInput';

const ConceptLeaf = ({ conceptConfig, s, p, c }) => {
    const [scope, setScope] = useRecoilState(scopeState);
    const [position, setPosition] = useRecoilState(positionState);

    const isSelected = s === position[0] && p === position[1] && c === position[2];
    const isActive = scope === ZOOM.Concept && isSelected;
    const isScoped = isActive ||
        scope === ZOOM.Section && s === position[0] ||
        scope === ZOOM.Progression && s === position[0] && p === position[1] ||
        scope === ZOOM.Chart;

    const action = () => {
        setPosition([s, p, c]);
        if (!isScoped) setScope(ZOOM.Concept);
    };

    return (
        <div className={`leaf pw-hov ${isSelected ? 'pw-accent pw-active' : isScoped ? 'pw-concept' : ''}`} onClick={action}>{conceptConfig.name}</div>
    );
}

const ProgressionMenu = ({ progression, s, p }) => {
    const [position, setPosition] = useRecoilState(positionState);
    const [scope, setScope] = useRecoilState(scopeState);

    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    const isSelected = s === position[0] && p === position[1];
    const isActive = scope === ZOOM.Progression && isSelected;
    const isScoped = isActive || scope === ZOOM.Section && s === position[0] || scope === ZOOM.Chart;

    const action = () => {
        setPosition([s, p, 0]);
        setScope(ZOOM.Progression);
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

    const isSelected = s === position[0];
    const isActive = scope === ZOOM.Section && isSelected;
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

const SourceTab = () => {
    const source = useRecoilValue(sourceState);
    const [scope, setScope] = useRecoilState(scopeState);

    return (
        <div className="tab-body source-tab">
            <h2>Scope</h2>
            <ZoomInput zoom={scope} setZoom={setScope} />
            <ChartMenu chart={source.data} />
        </div>
    );
};

const FretboardPanel = ({ fretboardConfig }) => {
    const { fretLow, fretHigh, showDots, showFretNumbers, strings } = fretboardConfig;
    //console.log(viewerConfig.args);
    return (
        <div className="fretboard-panel">
            <h4 className="input-header">Range</h4>
            <div className="input-row">
                <label>Fret Low:</label>
                <ScalarInput value={fretLow} setValue={null} />
            </div>
            <div className="input-row">
                <label>Fret High:</label>
                <ScalarInput value={fretHigh} setValue={null} />
            </div>

            <h4 className="input-header">Labels</h4>
            <div className="input-row">
                <label>Show Dots:</label>
                <SwitchInput value={showDots} setValue={null} />
            </div>
            <div className="input-row">
                <label>Show Numbers:</label>
                <SwitchInput value={showFretNumbers} setValue={null} />
            </div>
        </div>
    );
};

const ViewerPanel = ({ viewerConfig }) => {
    return (
        <div className="viewer-panel">
             <h3 className="viewer-header">{viewerConfig.name}</h3>
            {viewerConfig.viewerId === 'fretboard' && <FretboardPanel fretboardConfig={viewerConfig.args} />}
        </div>
    );
};

const ViewersTab = () => {
    const [viewers, setViewers] = useRecoilState(viewersState);
    const source = useRecoilValue(sourceState);
    const [scope, setScope] = useRecoilState(scopeState);

    return (
        <div className="tab-body viewers-tab">
            <h2>Viewers</h2>
            {viewers.map((v, i) => <ViewerPanel key={i} viewerConfig={v} />)}
        </div>
    );
};

const PlaybackTab = () => {
    return (
        <div className="tab-body playback-tab">
            <PlaybackControls />
        </div>
    );
};

const TAB = {
    source: {
        id: 'source',
        name: 'Source',
        component: SourceTab
    },
    viewers: {
        id: 'viewers',
        name: 'Viewers',
        component: ViewersTab
    },
    playback: {
        id: 'playback',
        name: 'Playback',
        component: PlaybackTab
    },
};

const Menu = () => {
    const [menuTab, setMenuTab] = useRecoilState(menuTabState);
    const Tab = menuTab && TAB[menuTab].component;

    return (
        <div className={`menu pw-light-2 ${menuTab && 'open'} `}>
            {menuTab &&
                <>
                    <div className="tab-container">
                        {Object.values(TAB).map(t => (
                            <ButtonInput className={`tab ${t.id === TAB[menuTab].id ? 'pw-accent' : 'pw-primary'}`} onClick={() => setMenuTab(t.id)}>{t.name}</ButtonInput>
                        ))}
                    </div>
                    <Tab />
                </>
            }
        </div>
    );
};

export default Menu;
