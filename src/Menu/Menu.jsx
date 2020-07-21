import React, { useState } from 'react';
import PW from 'play-what';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';
import ZoomInput from '../UI/ZoomInput/ZoomInput';
import { ZOOM, chartState, positionState, scopeState } from '../Common/State';
import { useRecoilState, useRecoilValue } from 'recoil';

const ConceptHeader = ({ conceptConfig, s, p, c }) => {
    const [scope, setScope] = useRecoilState(scopeState);
    const [position, setPosition] = useRecoilState(positionState);
    const active = (scope === ZOOM.Section && s === position[0]) ||
        (scope === ZOOM.Progression && s === position[0] && p === position[1]) ||
        (scope === ZOOM.Concept && s === position[0] && p === position[1] && c === position[2]);
    const action = () => {
        setPosition([s, p, c]);
        setScope(ZOOM.Concept)
    };

    const tonic = PW.Theory.getNoteName(conceptConfig.a);
    const preset = {id:''};//PW.Theory.findPreset(conceptConfig.B);
    const title = `${tonic} ${preset.id}`;

    return (
        <li className={`item ${active ? 'pw-accent' : ''}`} onClick={action}>{title}</li>
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
            <li className={`item ${active ? 'pw-accent' : ''}`} onClick={action}>{open ? '-  ' : '+  '}{progression.name || `Progression ${p + 1} `}</li>
            {open &&
                <>
                    <li className="">
                        <ul>
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
            <li className={`item ${active ? 'pw-accent' : ''}`} onClick={action}>{open ? '-  ' : '+  '}{section.name || `Section ${s + 1} `}</li>
            {open &&
                <>
                    <li className="">
                        <ul>
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

const Menu = () => {

    const chart = useRecoilValue(chartState);
    const [scope, setScope] = useRecoilState(scopeState);
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    return (
        <div className={`menu pw - lighter ${open && 'open'} `}>
            {open &&
                <>
                    <h2>Scope</h2>
                    <div className="zoom-container">
                        <ZoomInput zoom={scope} setZoom={setScope} />
                    </div>
                    <h2>Chart</h2>
                    <ul>
                        {chart.sections.map((s, i) => {
                            return <SectionHeader section={s} key={i} s={i} />;
                        })}
                    </ul>
                </>
            }
            <div className={`tab pw-secondary pw-hov`} onClick={toggleOpen} >{open ? '-' : '+'}</div>
        </div>
    );
}

export default Menu;
