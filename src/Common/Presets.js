import PW from 'play-what';

const { KEY_CENTERS, INTERVAL_PAIR, CHORD, QUICK_MODE: MODE, SCALE } = PW.Presets;

//const DEFAULT_NOTE = { a: KEY_CENTERS.C.a, B: CHORD.Maj.B };
const DEFAULT_NOTE = { a: { p: 0, d: 0 }, B: [[{ p: 0, d: 0 }]] };


const mapPresetsToVectors = presets => presets.map(p => ({ id: p.id || '', name: p.name || '', B: p.B }));

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
        name: 'Minor ii` v i',
        cols: [
            {
                a: KEY_CENTERS.C.a,
                B: CHORD.HalfDim7.B,
                t: 4
            },
            {
                a: KEY_CENTERS.F.a,
                B: CHORD.Min7.B,
                t: 4
            },
            {
                a: KEY_CENTERS.Bb,
                B: CHORD.Min7.B,
                t: 8
            }
        ]
    },
    {
        id: 'M251',
        name: 'Major II V I',
        cols: [
            {
                a: KEY_CENTERS.C.a,
                B: CHORD.Min7.B,
                t: 4
            },
            {
                a: KEY_CENTERS.F.a,
                B: CHORD.Dom7.B,
                t: 4
            },
            {
                a: KEY_CENTERS.Bb,
                B: CHORD.Maj7.B,
                t: 8
            }
        ]
    }
];

export const CHARTS = [
    {
        id: 'outOfNowhere',
        name: 'Out of Nowhere',
        sections: [
            {
                name: 'A',
                rows: [
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.B.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.E.a,
                                B: CHORD.Dom7b9.B,
                                t: 4
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
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.E.a,
                                B: CHORD.Dom7b9.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Dom7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Dom7b9.B,
                                t: 8
                            }
                        ]
                    }
                ]
            },
            {
                name: 'A',
                rows: [
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.B.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.E.a,
                                B: CHORD.Dom7b9.B,
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
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.E.a,
                                B: CHORD.Dom7b9.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min6.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.B.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.HalfDim7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Maj6.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'autumnLeaves',
        name: 'Autumn Leaves',
        sections:
            [
                {
                    name: 'A',
                    rows: [
                        {
                            cols: [
                                {
                                    a: KEY_CENTERS.C.a,
                                    B: CHORD.Min7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.F.a,
                                    B: CHORD.Dom7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Bb,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Eb,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                }
                            ]
                        },
                        {
                            cols: [
                                {
                                    a: KEY_CENTERS.A.a,
                                    B: CHORD.HalfDim7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.D.a,
                                    B: CHORD.Dom7b9.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.G.a,
                                    B: CHORD.Min6.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.G.a,
                                    B: CHORD.Maj7.B,
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
                                    a: KEY_CENTERS.C.a,
                                    B: CHORD.Min7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.F.a,
                                    B: CHORD.Dom7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Bb,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Eb,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                },

                            ]
                        },
                        {
                            cols: [
                                {
                                    a: KEY_CENTERS.A.a,
                                    B: CHORD.HalfDim7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.D.a,
                                    B: CHORD.Dom7b9.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.G.a,
                                    B: CHORD.Min6.B,
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
                                    a: KEY_CENTERS.A.a,
                                    B: CHORD.HalfDim7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.D.a,
                                    B: CHORD.Dom7b9.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.G.a,
                                    B: CHORD.Min6.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.G.a,
                                    B: CHORD.Min6.B,
                                    t: 4
                                },

                            ]
                        },
                        {
                            cols: [
                                {
                                    a: KEY_CENTERS.C.a,
                                    B: CHORD.Min7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.F.a,
                                    B: CHORD.Dom7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Bb,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Eb,
                                    B: CHORD.Maj7.B,
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
                                    a: KEY_CENTERS.A.a,
                                    B: CHORD.HalfDim7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.D.a,
                                    B: CHORD.Dom7b9.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.G.a,
                                    B: CHORD.Min7.B,
                                    t: 2
                                },
                                {
                                    a: KEY_CENTERS.C.a,
                                    B: CHORD.Dom7.B,
                                    t: 2
                                },
                                {
                                    a: KEY_CENTERS.F.a,
                                    B: CHORD.Min7.B,
                                    t: 2
                                },
                                {
                                    a: KEY_CENTERS.Bb,
                                    B: CHORD.Dom7.B,
                                    t: 2
                                },

                            ]
                        },
                        {
                            cols: [
                                {
                                    a: KEY_CENTERS.A.a,
                                    B: CHORD.HalfDim7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.D.a,
                                    B: CHORD.Dom7b9.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.G.a,
                                    B: CHORD.Min7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.G.a,
                                    B: CHORD.Min7.B,
                                    t: 4
                                }
                            ]
                        }
                    ]
                }
            ]
    },
    {
        id: 'blueBossa',
        name: 'Blue Bossa',
        sections: [
            {
                name: 'A',
                rows: [
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Min6.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.HalfDim7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
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
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Ab,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Db,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.HalfDim7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.HalfDim7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'blueWorld',
        name: 'It\'s A Blue World',
        sections: [
            {
                name: 'A',
                rows: [
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Dom7.B,
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
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Gb,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Maj7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Gb,
                                B: CHORD.Maj7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            }
                        ]
                    }
                ]
            },
            {
                name: 'A',
                rows: [
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Dom7.B,
                                t: 8
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
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Ab,
                                B: CHORD.Maj7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Maj7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.HalfDim7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Bb,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    }
                ]
            }
        ]
    }
];