import PW from 'play-what';

export const G_MAJOR_SCALE = {
    bpm: 120,
    timeSignature: [4, 4],
    sections: [
        {
            keyCenter: 'G',
            intervals: PW.Presets.SCALE.Major.intervals,
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
            intervals: PW.Presets.SCALE.NatualMinor.intervals,
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
            intervals: PW.Presets.CHORD.Maj7.intervals,
            repeat: 2
        },
        {
            keyCenter: 'Bb',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'Eb',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'G',
            intervals: PW.Presets.CHORD.Maj7.intervals,
            repeat: 2
        },
        {
            keyCenter: 'B',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'E',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        // B
        {
            keyCenter: 'A',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'E',
            intervals: PW.Presets.CHORD.Dom7b9.intervals,
            repeat: 1
        },
        {
            keyCenter: 'A',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 2
        },
        {
            keyCenter: 'Eb',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 2
        },
        {
            keyCenter: 'A',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'D',
            intervals: PW.Presets.CHORD.Dom7.intervals,
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
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'F',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'Bb',
            intervals: PW.Presets.CHORD.Maj7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'Eb',
            intervals: PW.Presets.CHORD.Maj7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'A',
            intervals: PW.Presets.CHORD.HalfDim7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'D',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'G',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'G',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        // B
        {
            keyCenter: 'C',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'F',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'Bb',
            intervals: PW.Presets.CHORD.Maj7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'Eb',
            intervals: PW.Presets.CHORD.Maj7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'A',
            intervals: PW.Presets.CHORD.HalfDim7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'D',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'G',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 2
        },
        // C
        {
            keyCenter: 'A',
            intervals: PW.Presets.CHORD.HalfDim7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'D',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'G',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 2
        },
        {
            keyCenter: 'C',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'F',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'Bb',
            intervals: PW.Presets.CHORD.Maj7.intervals,
            repeat: 2
        },
        // D
        {
            keyCenter: 'A',
            intervals: PW.Presets.CHORD.HalfDim7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'D',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'G',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'C',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'F',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'Bb',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'A',
            intervals: PW.Presets.CHORD.HalfDim7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'D',
            intervals: PW.Presets.CHORD.Dom7.intervals,
            repeat: 1
        },
        {
            keyCenter: 'G',
            intervals: PW.Presets.CHORD.Min7.intervals,
            repeat: 2
        }
    ]
};