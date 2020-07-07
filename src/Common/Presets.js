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
        progression: [
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
                a: KEY_CENTERS.Bb.a,
                B: CHORD.Min7.B,
                t: 8
            }
        ]
    },
    {
        id: 'M251',
        name: 'Major II V I',
        progression: [
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
                a: KEY_CENTERS.Bb.a,
                B: CHORD.Maj7.B,
                t: 8
            }
        ]
    }
];

export const CHARTS = [
    {
        id: 'onGreenDolphinStreet',
        name: 'On Green Dolphin Street',
        sections: [
            {
                name: 'A',
                rows: [
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Db.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.E.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            }
                        ]
                    }
                ]
            },
            {
                name: 'B',
                rows: [
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Min7.B,
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
            },
            {
                name: 'A',
                rows: [
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Min7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Db.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.C.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.E.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            }
                        ]
                    }
                ]
            },
            {
                name: 'C',
                rows: [
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.B.a,
                                B: CHORD.HalfDim7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.E.a,
                                B: CHORD.Dom7b9.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Fs.a,
                                B: CHORD.HalfDim7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.B.a,
                                B: CHORD.Dom7b9.B,
                                t: 2
                            },
                        ]
                    },
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.E.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.A.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.D.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'outOfNowhere',
        name: 'Out of Nowhere',
        sections: [
            {
                name: 'A',
                rows: [
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        progression: [
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
                        progression: [
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
                        progression: [
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Dom7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
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
                        progression: [
                            {
                                a: KEY_CENTERS.G.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        progression: [
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
                        progression: [
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
                        progression: [
                            {
                                a: KEY_CENTERS.B.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
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
                            progression: [
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
                                    a: KEY_CENTERS.Bb.a,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Eb.a,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                }
                            ]
                        },
                        {
                            progression: [
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
                            progression: [
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
                                    a: KEY_CENTERS.Bb.a,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Eb.a,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                },

                            ]
                        },
                        {
                            progression: [
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
                            progression: [
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
                            progression: [
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
                                    a: KEY_CENTERS.Bb.a,
                                    B: CHORD.Maj7.B,
                                    t: 4
                                },
                                {
                                    a: KEY_CENTERS.Eb.a,
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
                            progression: [
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
                                    a: KEY_CENTERS.Bb.a,
                                    B: CHORD.Dom7.B,
                                    t: 2
                                },

                            ]
                        },
                        {
                            progression: [
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
                        progression: [
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
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        progression: [
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
                        progression: [
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Ab.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Db.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        progression: [
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
                        progression: [
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
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb.a,
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
                        progression: [
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Dom7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            }
                        ]
                    },
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Gb.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Maj7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Gb.a,
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
                        progression: [
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
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Maj7.B,
                                t: 8
                            }
                        ]
                    },
                    {
                        progression: [
                            {
                                a: KEY_CENTERS.F.a,
                                B: CHORD.Min7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
                                B: CHORD.Dom7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb.a,
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
                        progression: [
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Maj7.B,
                                t: 4
                            },
                            {
                                a: KEY_CENTERS.Eb.a,
                                B: CHORD.Min7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Ab.a,
                                B: CHORD.Maj7.B,
                                t: 2
                            },
                            {
                                a: KEY_CENTERS.Bb.a,
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
                        progression: [
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
                                a: KEY_CENTERS.Bb.a,
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