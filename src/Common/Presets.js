import PW from 'play-what';

//const DEFAULT_NOTE = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.CHORD.Maj.intervals };
const DEFAULT_NOTE = { a: { p: 0, d: 0 }, B: [[{ p: 0, d: 0 }]] };


const mapPresetsToVectors = presets => presets.map(p => ({ id: p.id || '', name: p.name || '', B: p.intervals }));

export const CONCEPTS = [
    {
        id: 'select',
        name: 'Select...',
        placeholder: true,
        ...DEFAULT_NOTE
    },
    {
        id: 'intervals',
        name: '---INTERVALS---',
        placeholder: true,
        ...DEFAULT_NOTE
    },
    ...mapPresetsToVectors(PW.Presets.INTERVAL_PAIR_VALUES),
    {
        id: 'chords',
        name: '---CHORDS---',
        placeholder: true,
        ...DEFAULT_NOTE
    },
    ...mapPresetsToVectors(PW.Presets.CHORD_VALUES),
    {
        id: 'scales',
        name: '---SCALES---',
        placeholder: true,
        ...DEFAULT_NOTE
    },
    ...mapPresetsToVectors(PW.Presets.SCALE_VALUES),
    {
        id: 'modes',
        name: '---MODES---',
        placeholder: true,
        ...DEFAULT_NOTE
    },
    ...mapPresetsToVectors(PW.Presets.QUICK_MODE_VALUES),
];

export const PROGRESSIONS = [
    {
        id: 'm251',
        name: 'Minor ii V I',
        cols: [
            {
                a: PW.Presets.KEY_CENTERS.C,
                B: PW.Presets.CHORD.Min7.intervals,
                t: 4
            },
            {
                a: PW.Presets.KEY_CENTERS.F,
                B: PW.Presets.CHORD.Dom7.intervals,
                t: 4
            },
            {
                a: PW.Presets.KEY_CENTERS.Bb,
                B: PW.Presets.CHORD.Maj7.intervals,
                t: 8
            }
        ]
    }
];

export const CHARTS = [
    {
        id: 'autumnLeaves',
        name: 'Autumn Leaves',
        sections: [
            {
                name: 'A',
                rows: [
                    {
                        cols: [
                            {
                                a: PW.Presets.KEY_CENTERS.C,
                                B: PW.Presets.CHORD.Min7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.F,
                                B: PW.Presets.CHORD.Dom7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.Bb,
                                B: PW.Presets.CHORD.Maj7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.Eb,
                                B: PW.Presets.CHORD.Maj7.intervals,
                                t: 4
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: PW.Presets.KEY_CENTERS.A,
                                B: PW.Presets.CHORD.HalfDim7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.D,
                                B: PW.Presets.CHORD.Dom7b9.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.G,
                                B: PW.Presets.CHORD.Min6.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.G,
                                B: PW.Presets.CHORD.Maj7.intervals,
                                t: 4
                            }
                        ]
                    }
                ]
            },
            {
                name: 'A\'',
                rows: [
                    {
                        cols: [
                            {
                                a: PW.Presets.KEY_CENTERS.C,
                                B: PW.Presets.CHORD.Min7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.F,
                                B: PW.Presets.CHORD.Dom7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.Bb,
                                B: PW.Presets.CHORD.Maj7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.Eb,
                                B: PW.Presets.CHORD.Maj7.intervals,
                                t: 4
                            },

                        ]
                    },
                    {
                        cols: [
                            {
                                a: PW.Presets.KEY_CENTERS.A,
                                B: PW.Presets.CHORD.HalfDim7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.D,
                                B: PW.Presets.CHORD.Dom7b9.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.G,
                                B: PW.Presets.CHORD.Min6.intervals,
                                t: 8
                            }
                        ]
                    }
                ]
            },
            {
                name: 'B',
                rows: [
                    {
                        cols: [
                            {
                                section: 'B',
                                a: PW.Presets.KEY_CENTERS.A,
                                B: PW.Presets.CHORD.HalfDim7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.D,
                                B: PW.Presets.CHORD.Dom7b9.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.G,
                                B: PW.Presets.CHORD.Min6.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.G,
                                B: PW.Presets.CHORD.Min6.intervals,
                                t: 4
                            },

                        ]
                    },
                    {
                        cols: [
                            {
                                a: PW.Presets.KEY_CENTERS.C,
                                B: PW.Presets.CHORD.Min7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.F,
                                B: PW.Presets.CHORD.Dom7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.Bb,
                                B: PW.Presets.CHORD.Maj7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.Eb,
                                B: PW.Presets.CHORD.Maj7.intervals,
                                t: 4
                            }
                        ]
                    }
                ]
            },
            {
                name: 'C',
                rows: [
                    {
                        cols: [
                            {
                                section: 'C',
                                a: PW.Presets.KEY_CENTERS.A,
                                B: PW.Presets.CHORD.HalfDim7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.D,
                                B: PW.Presets.CHORD.Dom7b9.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.G,
                                B: PW.Presets.CHORD.Min7.intervals,
                                t: 2
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.C,
                                B: PW.Presets.CHORD.Dom7.intervals,
                                t: 2
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.F,
                                B: PW.Presets.CHORD.Min7.intervals,
                                t: 2
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.Bb,
                                B: PW.Presets.CHORD.Dom7.intervals,
                                t: 2
                            },

                        ]
                    },
                    {
                        cols: [
                            {
                                a: PW.Presets.KEY_CENTERS.A,
                                B: PW.Presets.CHORD.HalfDim7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.D,
                                B: PW.Presets.CHORD.Dom7b9.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.G,
                                B: PW.Presets.CHORD.Min7.intervals,
                                t: 4
                            },
                            {
                                a: PW.Presets.KEY_CENTERS.G,
                                B: PW.Presets.CHORD.Min7.intervals,
                                t: 4
                            }
                        ]
                    }
                ]
            }
        ]
    }
];