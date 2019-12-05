export const setKeyCenterOctave = (octave) => {
    return {
        type: 'SET_KEY_CENTER_OCTAVE',
        payload: octave
    };
}

export const setKeyCenterTonic = (tonic) => {
    return {
        type: 'SET_KEY_CENTER_TONIC',
        payload: tonic
    };
}

export const setKeyCenterAccidental = (accidental) => {
    return {
        type: 'SET_KEY_CENTER_ACCIDENTAL',
        payload: accidental
    };
}

export const setConcept = (concept) => {
    return {
        type: 'SET_CONCEPT',
        payload: concept
    };
}