import React, { useState } from 'react';
import PW from 'play-what';
import './Stage.css';

import PlaybackControls from '../PlaybackControls/PlaybackControls';

import MasterSelector from './MasterSelector';
import { useRecoilValue } from 'recoil';
import { inputModeState, conceptState, aState, BState } from './State';

const ConceptPreview = () => {
    const concept = useRecoilValue(conceptState);
    const { placeholder, a, B } = concept;
    const tonic = PW.Theory.getNoteName(a);
    const preset = PW.Theory.findPreset(B);
    return (
        <h1 className="concept-preview">
            {!placeholder && `${tonic} ${preset.name}`}
        </h1>
    );
}

export default ConceptPreview;
