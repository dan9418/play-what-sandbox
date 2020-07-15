import React, { useState } from 'react';
import PW from 'play-what';

const ConceptPreview = ({ concept }) => {
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
