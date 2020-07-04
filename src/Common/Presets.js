import PW from 'play-what';

const DEFAULT_NOTE = { a: [0, 0], B: [[0, 0]] };

export const CONCEPTS = [
    {
        id: 'select',
        name: 'Select...',
        ...DEFAULT_NOTE
    }
];

export const PROGRESSIONS = [
    {
        id: 'al1',
        name: 'Autumn Leaves, Row 1',
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