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

export const setIntervals = (intervals) => {
    return {
        type: 'SET_INTERVALS',
        payload: intervals
    };
}