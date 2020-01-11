import PlayWhat from 'play-what';

export const CONCEPT_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair',
        presets: Object.values(PlayWhat.Presets.INTERVAL_PAIR),
        defaultOptions: {
            reverse: false
        }
    },
    {
        id: 'chord',
        name: 'Chord',
        presets: Object.values(PlayWhat.Presets.CHORD),
        defaultOptions: {
            chordInversion: 0
        }
    },
    {
        id: 'scale',
        name: 'Scale',
        presets: Object.values(PlayWhat.Presets.SCALE),
        defaultOptions: {
            reverse: false
        }
    },
    {
        id: 'mode',
        name: 'Mode',
        presets: Object.values(PlayWhat.Presets.MODE),
        defaultOptions: {
            reverse: false
        }
    }
];