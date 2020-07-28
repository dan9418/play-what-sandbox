import PW from 'play-what';
import { INTERVALS } from 'play-what/src/Presets';

const { KEY_CENTERS, INTERVAL_PAIR, CHORD, QUICK_MODE: MODE, SCALE } = PW.Presets;

//const DEFAULT_NOTE = { a: 'C', B: 'Maj' };
const DEFAULT_NOTE = { a: { p: 0, d: 0 }, B: [[{ p: 0, d: 0 }]] };


const mapPresetsToVectors = presets => presets.map(p => ({ id: p.id || '', name: p.name || '', a: p.B[0], B: p.B }));

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
        concepts: [
            {
                a: 'C',
                B: 'HalfDim7',
                t: 4
            },
            {
                a: 'F',
                B: 'Min7',
                t: 4
            },
            {
                a: 'Bb',
                B: 'Min7',
                t: 8
            }
        ]
    },
    {
        id: 'M251',
        name: 'Major II V I',
        concepts: [
            {
                a: 'C',
                B: 'Min7',
                t: 4
            },
            {
                a: 'F',
                B: 'Dom7',
                t: 4
            },
            {
                a: 'Bb',
                B: 'Maj7',
                t: 8
            }
        ]
    }
];

export const OUTPUTS = [
    {
        viewerId: 'fretboard',
        outputId: 'fretboard',
        args: {}
    },
    {
        viewerId: 'keyboard',
        outputId: 'keyboard',
        args: {}
    },
    {
        viewerId: 'fretboard',
        outputId: 'fretboard-7-10',
        args: {
            fretLow: 7,
            fretHigh: 10
        }
    },
    {
        viewerId: 'fretboard',
        outputId: 'fretboard-2-5',
        args: {
            fretLow: 2,
            fretHigh: 5
        }
    },
    {
        viewerId: 'fretboard',
        outputId: 'fretboard-8-11',
        args: {
            fretLow: 8,
            fretHigh: 11
        }
    },
    {
        viewerId: 'fretboard',
        outputId: 'fretboard-3-6',
        args: {
            fretLow: 3,
            fretHigh: 6
        }
    },
    {
        viewerId: 'fretboard',
        outputId: 'fretboard-7-11',
        args: {
            fretLow: 7,
            fretHigh: 11
        }
    },
    {
        viewerId: 'fretboard',
        outputId: 'fretboard-2-6',
        args: {
            fretLow: 2,
            fretHigh: 6
        }
    },
    {
        viewerId: 'fretboard',
        outputId: 'fretboard-3-7',
        args: {
            fretLow: 3,
            fretHigh: 7
        }
    }
];

export const CHARTS = [
    {
        id: 'test',
        name: 'Test',
        defaults: {
            a: 'C',
            outputs: ['keyboard']
        },
        sections: [
            {
                name: 'Test',
                progressions: [
                    {
                        name: 'Test',
                        concepts: [
                            {
                                B: 'Major',
                                outputs: ['fretboard'],
                                transforms: [
                                    {
                                        id: 'transpose',
                                        args: {
                                            a: INTERVALS.P5.a
                                        }
                                    },
                                    {
                                        id: 'chordalInversion',
                                        args: {
                                            inversion: 1
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'shapes',
        name: 'Shapes',
        defaults: {
            a: 'C',
            outputs: ['keyboard']
        },
        sections: [
            {
                name: 'Diatonic Scales & Arpeggios',
                progressions: [
                    {
                        name: 'Major',
                        concepts: [
                            {
                                B: 'Major',
                                outputs: ['fretboard-7-10']
                            },
                            {
                                B: 'Maj7',
                                outputs: ['fretboard-7-10']
                            },
                            {
                                B: 'Major',
                                outputs: ['fretboard-2-5']
                            },
                            {
                                B: 'Maj7',
                                outputs: ['fretboard-2-5']
                            }
                        ]
                    },
                    {
                        name: 'Minor',
                        concepts: [
                            {

                                B: 'NaturalMinor',
                                outputs: ['fretboard-8-11']
                            },
                            {

                                B: 'Min7',
                                outputs: ['fretboard-8-11']
                            },
                            {

                                B: 'NaturalMinor',
                                outputs: ['fretboard-3-6']
                            },
                            {

                                B: 'Min7',
                                outputs: ['fretboard-3-6']
                            }
                        ]
                    },
                    {
                        name: 'Dominant',
                        concepts: [
                            {

                                B: 'Mixolydian',
                                outputs: ['fretboard-7-11']
                            },
                            {

                                B: 'Dom7',
                                outputs: ['fretboard-7-11']
                            },
                            {

                                B: 'Mixolydian',
                                outputs: ['fretboard-2-6']
                            },
                            {

                                B: 'Dom7',
                                outputs: ['fretboard-2-6']

                            }
                        ]
                    },
                    {
                        name: 'Half-Diminished',
                        concepts: [
                            {

                                B: 'Locrian',
                                outputs: ['fretboard-8-11']

                            },
                            {

                                B: 'HalfDim7',
                                outputs: ['fretboard-8-11']

                            },
                            {

                                B: 'Locrian',
                                outputs: ['fretboard-3-7']

                            },
                            {

                                B: 'HalfDim7',
                                outputs: ['fretboard-3-7']
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'autumnLeaves',
        name: 'Autumn Leaves',
        defaults: {
            outputs: ['fretboard', 'keyboard']
        },
        sections:
            [
                {
                    name: 'A',
                    progressions: [
                        {
                            concepts: [
                                {
                                    a: 'C',
                                    B: 'Min7',
                                    t: 4
                                },
                                {
                                    a: 'F',
                                    B: 'Dom7',
                                    t: 4
                                },
                                {
                                    a: 'Bb',
                                    B: 'Maj7',
                                    t: 4
                                },
                                {
                                    a: 'Eb',
                                    B: 'Maj7',
                                    t: 4
                                }
                            ]
                        },
                        {
                            concepts: [
                                {
                                    a: 'A',
                                    B: 'HalfDim7',
                                    t: 4
                                },
                                {
                                    a: 'D',
                                    B: 'Dom7b9',
                                    t: 4
                                },
                                {
                                    a: 'G',
                                    B: 'Min6',
                                    t: 4
                                },
                                {
                                    a: 'G',
                                    B: 'Maj7',
                                    t: 4
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'A\'',
                    progressions: [
                        {
                            concepts: [
                                {
                                    a: 'C',
                                    B: 'Min7',
                                    t: 4
                                },
                                {
                                    a: 'F',
                                    B: 'Dom7',
                                    t: 4
                                },
                                {
                                    a: 'Bb',
                                    B: 'Maj7',
                                    t: 4
                                },
                                {
                                    a: 'Eb',
                                    B: 'Maj7',
                                    t: 4
                                },

                            ]
                        },
                        {
                            concepts: [
                                {
                                    a: 'A',
                                    B: 'HalfDim7',
                                    t: 4
                                },
                                {
                                    a: 'D',
                                    B: 'Dom7b9',
                                    t: 4
                                },
                                {
                                    a: 'G',
                                    B: 'Min6',
                                    t: 8
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'B',
                    progressions: [
                        {
                            concepts: [
                                {
                                    section: 'B',
                                    a: 'A',
                                    B: 'HalfDim7',
                                    t: 4
                                },
                                {
                                    a: 'D',
                                    B: 'Dom7b9',
                                    t: 4
                                },
                                {
                                    a: 'G',
                                    B: 'Min6',
                                    t: 4
                                },
                                {
                                    a: 'G',
                                    B: 'Min6',
                                    t: 4
                                },

                            ]
                        },
                        {
                            concepts: [
                                {
                                    a: 'C',
                                    B: 'Min7',
                                    t: 4
                                },
                                {
                                    a: 'F',
                                    B: 'Dom7',
                                    t: 4
                                },
                                {
                                    a: 'Bb',
                                    B: 'Maj7',
                                    t: 4
                                },
                                {
                                    a: 'Eb',
                                    B: 'Maj7',
                                    t: 4
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'C',
                    progressions: [
                        {
                            concepts: [
                                {
                                    section: 'C',
                                    a: 'A',
                                    B: 'HalfDim7',
                                    t: 4
                                },
                                {
                                    a: 'D',
                                    B: 'Dom7b9',
                                    t: 4
                                },
                                {
                                    a: 'G',
                                    B: 'Min7',
                                    t: 2
                                },
                                {
                                    a: 'C',
                                    B: 'Dom7',
                                    t: 2
                                },
                                {
                                    a: 'F',
                                    B: 'Min7',
                                    t: 2
                                },
                                {
                                    a: 'Bb',
                                    B: 'Dom7',
                                    t: 2
                                },

                            ]
                        },
                        {
                            concepts: [
                                {
                                    a: 'A',
                                    B: 'HalfDim7',
                                    t: 4
                                },
                                {
                                    a: 'D',
                                    B: 'Dom7b9',
                                    t: 4
                                },
                                {
                                    a: 'G',
                                    B: 'Min7',
                                    t: 4
                                },
                                {
                                    a: 'G',
                                    B: 'Min7',
                                    t: 4
                                }
                            ]
                        }
                    ]
                }
            ]
    },
    {
        id: 'onGreenDolphinStreet',
        name: 'On Green Dolphin Street',
        sections: [
            {
                name: 'A',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'C',
                                B: 'Maj7',
                                t: 8
                            },
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 8
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'D',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'Db',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'C',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'E',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'A',
                                B: 'Dom7',
                                t: 2
                            }
                        ]
                    }
                ]
            },
            {
                name: 'B',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'D',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'G',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'C',
                                B: 'Maj7',
                                t: 8
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'F',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'Bb',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'Eb',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'D',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'G',
                                B: 'Dom7',
                                t: 2
                            }
                        ]
                    }
                ]
            },
            {
                name: 'A',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'C',
                                B: 'Maj7',
                                t: 8
                            },
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 8
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'D',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'Db',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'C',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'E',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'A',
                                B: 'Dom7',
                                t: 2
                            }
                        ]
                    }
                ]
            },
            {
                name: 'C',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'D',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'D',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'B',
                                B: 'HalfDim7',
                                t: 2
                            },
                            {
                                a: 'E',
                                B: 'Dom7b9',
                                t: 2
                            },
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'Fs',
                                B: 'HalfDim7',
                                t: 2
                            },
                            {
                                a: 'B',
                                B: 'Dom7b9',
                                t: 2
                            },
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'E',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'D',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'G',
                                B: 'Dom7',
                                t: 2
                            },
                            {
                                a: 'G',
                                B: 'Maj7',
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
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'G',
                                B: 'Maj7',
                                t: 8
                            },
                            {
                                a: 'Bb',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'Eb',
                                B: 'Dom7',
                                t: 4
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'G',
                                B: 'Maj7',
                                t: 8
                            },
                            {
                                a: 'B',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'E',
                                B: 'Dom7b9',
                                t: 4
                            }
                        ]
                    }
                ]
            },
            {
                name: 'B',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'E',
                                B: 'Dom7b9',
                                t: 4
                            },
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 8
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'Eb',
                                B: 'Dom7',
                                t: 8
                            },
                            {
                                a: 'Bb',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'D',
                                B: 'Dom7b9',
                                t: 8
                            }
                        ]
                    }
                ]
            },
            {
                name: 'A',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'G',
                                B: 'Maj7',
                                t: 8
                            },
                            {
                                a: 'Bb',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'Eb',
                                B: 'Dom7',
                                t: 4
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'G',
                                B: 'Maj7',
                                t: 8
                            },
                            {
                                a: 'B',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'E',
                                B: 'Dom7b9',
                                t: 4
                            }
                        ]
                    }
                ]
            },
            {
                name: 'C',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'E',
                                B: 'Dom7b9',
                                t: 4
                            },
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'C',
                                B: 'Min6',
                                t: 4
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'B',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'Bb',
                                B: 'HalfDim7',
                                t: 2
                            },
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'D',
                                B: 'Dom7',
                                t: 2
                            },
                            {
                                a: 'G',
                                B: 'Maj6',
                                t: 8
                            },
                            {
                                a: 'A',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'D',
                                B: 'Dom7',
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
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 8
                            },
                            {
                                a: 'F',
                                B: 'Min6',
                                t: 4
                            },
                            {
                                a: 'Bb',
                                B: 'Dom7',
                                t: 4
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'D',
                                B: 'HalfDim7',
                                t: 4
                            },
                            {
                                a: 'G',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 8
                            }
                        ]
                    }
                ]
            },
            {
                name: 'B',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'Eb',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'Ab',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'Db',
                                B: 'Maj7',
                                t: 8
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'D',
                                B: 'HalfDim7',
                                t: 4
                            },
                            {
                                a: 'G',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'D',
                                B: 'HalfDim7',
                                t: 2
                            },
                            {
                                a: 'G',
                                B: 'Dom7',
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
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'F',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'Bb',
                                B: 'Maj7',
                                t: 8
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'F',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'Bb',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'Eb',
                                B: 'Dom7',
                                t: 8
                            }
                        ]
                    }
                ]
            },
            {
                name: 'B',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'Eb',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'Eb',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'F',
                                B: 'Dom7',
                                t: 2
                            },
                            {
                                a: 'Bb',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'Bb',
                                B: 'Dom7',
                                t: 4
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'Eb',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'Gb',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'F',
                                B: 'Maj7',
                                t: 2
                            },
                            {
                                a: 'Gb',
                                B: 'Maj7',
                                t: 2
                            },
                            {
                                a: 'F',
                                B: 'Maj7',
                                t: 4
                            }
                        ]
                    }
                ]
            },
            {
                name: 'A',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'F',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'Bb',
                                B: 'Maj7',
                                t: 8
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'F',
                                B: 'Min7',
                                t: 4
                            },
                            {
                                a: 'Bb',
                                B: 'Dom7',
                                t: 4
                            },
                            {
                                a: 'Eb',
                                B: 'Dom7',
                                t: 8
                            }
                        ]
                    }
                ]
            },
            {
                name: 'C',
                progressions: [
                    {
                        concepts: [
                            {
                                a: 'Eb',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'Eb',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'Ab',
                                B: 'Maj7',
                                t: 2
                            },
                            {
                                a: 'Bb',
                                B: 'Maj7',
                                t: 2
                            },
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'D',
                                B: 'HalfDim7',
                                t: 2
                            },
                            {
                                a: 'G',
                                B: 'Dom7',
                                t: 2
                            }
                        ]
                    },
                    {
                        concepts: [
                            {
                                a: 'C',
                                B: 'Maj7',
                                t: 4
                            },
                            {
                                a: 'C',
                                B: 'Min7',
                                t: 2
                            },
                            {
                                a: 'F',
                                B: 'Dom7',
                                t: 2
                            },
                            {
                                a: 'Bb',
                                B: 'Maj7',
                                t: 8
                            }
                        ]
                    }
                ]
            }
        ]
    }
];