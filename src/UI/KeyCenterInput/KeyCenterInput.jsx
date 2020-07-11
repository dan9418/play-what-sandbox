import React from 'react';
import './KeyCenterInput.css';

import PW from 'play-what';
import ButtonInput from '../ButtonInput/ButtonInput';
import ScalarInput from '../ScalarInput/ScalerInput';
import LabeledInput from '../LabeledInput/LabeledInput'
;
const DegreeInput = ({ degree, setDegree }) => {
    const allDegrees = PW.Theory.getAllDegrees();
    return (
        <div className="degree-input">
            {allDegrees.map((d, i) => {
                const isActive = degree && degree.d === i && degree.p === d.p
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setDegree({ p: d.p, d: i })}
                        className={isActive ? 'pw-light' : null}
                    >
                        {PW.Theory.getDegreeMapping(d.d).name}
                    </ButtonInput>
                );
            })}
        </div>
    );
};

const AccidentalInput = ({ accidental, setAccidental }) => {
    const allAccidentals = Object.values(PW.Constants.ACCIDENTAL);
    return (
        <div className="accidental-input">
            {allAccidentals.map((a, i) => {
                const isActive = accidental && accidental.offset === a.offset;
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setAccidental(a)}
                        className={isActive ? 'pw-light' : null}
                    >
                        {a.name}
                    </ButtonInput>
                );
            })}
        </div>
    );
};

const OctaveInput = ({ octave, setOctave }) => <ScalarInput value={octave} setValue={setOctave} className='octave-input' />;

const KeyCenterInput = ({ keyCenter, setKeyCenter }) => {

    const degree = PW.Theory.getDegree(keyCenter.d);
    const octave = Math.floor(keyCenter.p / 12) + 4;
    const offset = keyCenter.p - degree.p;
    const accidental = PW.Constants.ACCIDENTAL_VALUES.find(a => a.offset === offset) || null;

    const setDegree = (d) => {
        const newKeyCenter = {
            p: Math.floor(keyCenter.p / 12) * 12 + d.p,
            d: d.d
        };
        setKeyCenter(newKeyCenter);
    };
    const setAccidental = a => {
        const newKeyCenter = {
            p: keyCenter.p + a.offset,
            d: keyCenter.d
        };
        setKeyCenter(newKeyCenter);
    };
    const setOctave = o => {
        const newKeyCenter = {
            p: ((o - 4) * 12) + PW.Utils.modulo(keyCenter.p, 12),
            d: keyCenter.d
        };
        setKeyCenter(newKeyCenter);
    };

    return (
        <div className="key-center-input">
            <LabeledInput label="Degree">
                <DegreeInput degree={degree} setDegree={setDegree} />
            </LabeledInput>
            <LabeledInput label="Accidental">
                <AccidentalInput accidental={accidental} setAccidental={setAccidental} />
            </LabeledInput>
            <LabeledInput label="Octave">
                <OctaveInput octave={octave} setOctave={setOctave} />
            </LabeledInput>
        </div>
    );
};

export default KeyCenterInput;