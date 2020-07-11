import React, { useState } from 'react';
import './Chart.css';
import PW from 'play-what';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.B };
const DEFAULT_ROW = [DEFAULT_COL];

const Concept = props => {
    const { a, B, t, sectionIndex, rowIndex, conceptIndex, setPosition, position } = props;
    // const notes = PW.Theory.addVectorsBatch(a, B);

    const tonic = PW.Theory.getNoteName(a);
    const preset = PW.Theory.findPresetWithId(B);
    //const name = `${tonic} ${preset.id}`

    const style = { flexGrow: t };

    const [s, r, c] = position !== null ? position.length ? position : [0, 0, position] : [0, 0, 0];
    const isActive = sectionIndex === s && rowIndex === r && conceptIndex === c;
    const setPositionToThis = position != null ? (position.length ? () => setPosition([sectionIndex, rowIndex, conceptIndex]) : () => setPosition(conceptIndex)) : () => null;

    return (
        <div className={`concept pw-hov ${isActive ? 'pw-accent' : 'pw-secondary'}`} style={style} onClick={setPositionToThis}>
            <div>
                <span className="tonic">{tonic}</span>
                <span className="preset">{preset.id}</span>
            </div>
        </div>
    );
};

const Progression = props => {
    const { progression, sectionIndex, rowIndex, setPosition, position } = props;
    return (
        <div className={`progression pw-light`}>
            <h4 className='progression-name'>{progression.name || `${rowIndex + 1}`}</h4>
            <div className={`progression-concepts`}>
                {progression.concepts.map((c, i) => <Concept key={i} sectionIndex={sectionIndex} rowIndex={rowIndex} conceptIndex={i} a={c.a} B={c.B} t={c.t} setPosition={setPosition} position={position} />)}
            </div>
        </div>
    );
};

const Section = props => {
    const { section, sectionIndex, setPosition, position } = props;
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);
    return (
        <div className={`section`}>
            <h3 className='section-name' onClick={toggleOpen}>{section.name}</h3>
            <div>
                {open && section.progressions.map((p, i) =>
                    <Progression key={i} sectionIndex={sectionIndex} rowIndex={i} progression={p} setPosition={setPosition} position={position} />
                )}
            </div>
        </div>
    );
};

const Chart = ({ source, position, setPosition, inputModeId }) => {
    return (
        <div className="chart">

            {inputModeId === 'chart' && <>
                <h1>Chart</h1>
                <h2>Sections</h2>
                {source.sections.map((s, i) => <Section key={i} sectionIndex={i} section={s} setPosition={setPosition} position={position} />)}
            </>}
            {inputModeId === 'progression' && <>
                <h1>Progression</h1>
                <Progression sectionIndex={0} rowIndex={0} progression={source.sections[0].progressions[0]} setPosition={setPosition} position={position} />
            </>}
        </div>
    );
}

export default Chart;