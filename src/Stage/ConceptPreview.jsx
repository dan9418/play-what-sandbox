import React, { useState } from 'react';
import PW from 'play-what';

const ConceptPreview = ({ concept }) => {
    const { placeholder, a, B, C } = concept;
    if (placeholder) return null;

    const tonic = PW.Theory.getNoteName(a);
    const preset = PW.Theory.findPreset(B);
    const noteNames = C.map(x => PW.Theory.getNoteName(x));
    return (
        <>
            <h1 className="concept-preview">
                {`${tonic} ${preset.name}`}
            </h1>
            <h2>{noteNames.map(n => <div className='note-name'>{n}</div>)}</h2>
        </>
    );
}

export default ConceptPreview;
