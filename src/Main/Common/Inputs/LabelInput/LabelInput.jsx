import * as React from 'react';
import './LabelInput.css';
import PlayWhat from 'play-what';
import DropdownInput from '../DropdownInput/DropdownInput';

const LABEL_DATA = [
    {
        id: 'none',
        name: 'None',
        value: PlayWhat.LabelUtils.none
    },
    {
        id: 'name',
        name: 'Name',
        value: PlayWhat.LabelUtils.name
    },
    {
        id: 'degree',
        name: 'Degree',
        value: PlayWhat.LabelUtils.degree
    },
    {
        id: 'pitchClass',
        name: 'Pitch Class',
        value: PlayWhat.LabelUtils.pitchClass
    },
    {
        id: 'interval',
        name: 'Interval',
        value: PlayWhat.LabelUtils.interval
    },
    {
        id: 'octave',
        name: 'Octave',
        value: PlayWhat.LabelUtils.octave
    },
    {
        id: 'noteIndex',
        name: 'Note Index',
        value: PlayWhat.LabelUtils.noteIndex
    },
    {
        id: 'frequency',
        name: 'Frequency',
        value: PlayWhat.LabelUtils.frequency
    }
]

export default function LabelInput(props) {
    return (
        <DropdownInput
            data={LABEL_DATA}
            value={LABEL_DATA.find(l => l.value === props.value)}
            setValue={l => props.setValue(l.value)}
        />
    );
}