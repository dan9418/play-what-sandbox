import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ZOOM } from '../../Common/Constants';
import { positionState, scopeState, sourceState } from '../../Common/State';
import PresetInput from '../../UI/PresetInput/PresetInput';
import ZoomInput from '../../UI/ZoomInput/ZoomInput';
import './SourceTab.css';

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
            <h2>Preset</h2>
            <PresetInput />
            <h2>Scope</h2>
            <ZoomInput zoom={scope} setZoom={setScope} />
            <ChartMenu chart={source.data} />
        </div>
    );
};

export default SourceTab;