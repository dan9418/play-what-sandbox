import React, { useState } from 'react';
import './Chart.css';
import PW from 'play-what';
import { useRecoilState } from 'recoil';
import { positionState } from '../../Common/State';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.B };
const DEFAULT_ROW = [DEFAULT_COL];

export const Concept = props => {
    const { concept, s, p, c } = props;

    const [position, setPosition] = useRecoilState(positionState)

    const tonic = PW.Theory.getNoteName(concept.a);
    const preset = PW.Theory.findPresetWithId(concept.B);

    const style = { flexGrow: concept.t };

    const isActive = position[0] === s && position[1] === p && position[2] === c;

    return (
        <div className={`concept pw-hov ${isActive ? 'pw-accent' : 'pw-secondary'}`} style={style} onClick={() => setPosition([s, p, c])}>
            <div>
                <span className="tonic">{tonic}</span>
                <span className="preset">{preset.id}</span>
            </div>
        </div>
    );
};

export const Progression = props => {
    const { progression, s, p } = props;
    return (
        <div className={`progression pw-light`}>
            <h4 className='progression-name'>{progression.name || `${p + 1}`}</h4>
            <div className={`progression-concepts`}>
                {progression.concepts.map((c, i) => <Concept key={i} s={s} p={p} c={i} concept={c} />)}
            </div>
        </div>
    );
};

export const Section = props => {
    const { section, s } = props;
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    return (
        <div className={`section`}>
            <h3 className='section-name' onClick={toggleOpen}>{section.name}</h3>
            <div>
                {open && section.progressions.map((p, i) =>
                    <Progression key={i} s={s} p={i} progression={p} />
                )}
            </div>
        </div>
    );
};