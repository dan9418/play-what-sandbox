import PW from 'play-what';

export const G_MAJOR_SCALE = {
    bpm: 120,
    timeSignature: [4, 4],
    sections: [
        {
            keyCenter: 'G',
            concept: PW.Presets.SCALE.Major,
            repeat: 1
        }
    ]
};

export const A_MINOR_SCALE = {
    bpm: 120,
    timeSignature: [4, 4],
    sections: [
        {
            keyCenter: 'A',
            concept: PW.Presets.SCALE.NatualMinor,
            repeat: 1
        }
    ]
};

export const OUT_OF_NOWHERE = {
    bpm: 120,
    timeSignature: [4, 4],
    sections: [
        // A
        {
            keyCenter: 'G',
            concept: PW.Presets.CHORD.Maj7,
            repeat: 2
        },
        {
            keyCenter: 'Bb',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'Eb',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'G',
            concept: PW.Presets.CHORD.Maj7,
            repeat: 2
        },
        {
            keyCenter: 'B',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'E',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        // B
        {
            keyCenter: 'A',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'E',
            concept: PW.Presets.CHORD.Dom7b9,
            repeat: 1
        },
        {
            keyCenter: 'A',
            concept: PW.Presets.CHORD.Min7,
            repeat: 2
        },
        {
            keyCenter: 'Eb',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 2
        },
        {
            keyCenter: 'A',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'D',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        }
    ]
};

export const AUTUMN_LEAVES = {
    bpm: 120,
    timeSignature: [4, 4],
    sections: [
        // A
        {
            keyCenter: 'C',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1,
            // labelStrategy: 'noteIndex'
            /*colorStrategy: 'frequency',
            fretLow: 0,
            fretHigh: 12*/
        },
        {
            keyCenter: 'F',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1,
            /*colorStrategy: 'noteIndex',
            fretLow: 0,
            fretHigh: 12*/
        },
        {
            keyCenter: 'Bb',
            concept: PW.Presets.CHORD.Maj7,
            repeat: 1
        },
        {
            keyCenter: 'Eb',
            concept: PW.Presets.CHORD.Maj7,
            repeat: 1
        },
        {
            keyCenter: 'A',
            concept: PW.Presets.CHORD.HalfDim7,
            repeat: 1
        },
        {
            keyCenter: 'D',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'G',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'G',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        // B
        {
            keyCenter: 'C',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'F',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'Bb',
            concept: PW.Presets.CHORD.Maj7,
            repeat: 1
        },
        {
            keyCenter: 'Eb',
            concept: PW.Presets.CHORD.Maj7,
            repeat: 1
        },
        {
            keyCenter: 'A',
            concept: PW.Presets.CHORD.HalfDim7,
            repeat: 1
        },
        {
            keyCenter: 'D',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'G',
            concept: PW.Presets.CHORD.Min7,
            repeat: 2
        },
        // C
        {
            keyCenter: 'A',
            concept: PW.Presets.CHORD.HalfDim7,
            repeat: 1
        },
        {
            keyCenter: 'D',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'G',
            concept: PW.Presets.CHORD.Min7,
            repeat: 2
        },
        {
            keyCenter: 'C',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'F',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'Bb',
            concept: PW.Presets.CHORD.Maj7,
            repeat: 2
        },
        // D
        {
            keyCenter: 'A',
            concept: PW.Presets.CHORD.HalfDim7,
            repeat: 1
        },
        {
            keyCenter: 'D',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'G',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'C',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'F',
            concept: PW.Presets.CHORD.Min7,
            repeat: 1
        },
        {
            keyCenter: 'Bb',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'A',
            concept: PW.Presets.CHORD.HalfDim7,
            repeat: 1
        },
        {
            keyCenter: 'D',
            concept: PW.Presets.CHORD.Dom7,
            repeat: 1
        },
        {
            keyCenter: 'G',
            concept: PW.Presets.CHORD.Min7,
            repeat: 2
        }
    ]
};