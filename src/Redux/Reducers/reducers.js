export const reducers = (state, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case 'SET_KEY_CENTER_OCTAVE':
            stateCopy.octave = action.payload;
            return stateCopy;
        case 'SET_KEY_CENTER_TONIC':
            stateCopy.tonic = action.payload;
            return stateCopy;
        case 'SET_KEY_CENTER_ACCIDENTAL':
            stateCopy.accidental = action.payload;
            return stateCopy;
        case 'SET_CONCEPT':
            stateCopy.concept = action.payload;
            stateCopy.romanNumeral = { id: 'none', name: 'None' };
            return stateCopy;
        case 'SET_ROMAN_NUMERAL':
            stateCopy.romanNumeral = action.payload;
            return stateCopy;
        default:
            return state;
    }
}