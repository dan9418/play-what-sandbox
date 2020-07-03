import React, { useState } from 'react';
import PW from 'play-what';
import './Stage.css';

import PlaybackControls from '../PlaybackControls/PlaybackControls';

import MasterSelector from './MasterSelector';
import { useRecoilValue } from 'recoil';
import { inputModeState, noteState } from './State';

const ConceptPreview = () => {
    const note = useRecoilValue(noteState);
    const tonic = note.a.name;
    const preset = PW.Theory.findPreset(note.B);
    return (
        <h1 className="concept-preview">
            {`${tonic} ${preset.name}`}
        </h1>
    );
}

export default ConceptPreview;
