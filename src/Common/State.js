import PW from 'play-what';
import { atom, selector } from 'recoil';

const RAW_SOURCE =
{
    id: 'test_source',
    name: 'Test Source',
    fn: 'pw/source/parseInput',
    args: {
        // 1) string - can be pw, in, or primitive
        a: 'pw/keyCenter/presets/C/a',
        // 1.5) array
        B: 'pw/concept/presets/Maj/B',
        // 2) object - attrs can be inputs or primitives (recurse on each)
        // primitives can be number, null, or boolean - or string w/o "/"
        a: {
            p: 0,
            d: 0
        },
        // 3) function - fn and args attrs reserved (recurse on each arg)
        a: {
            fn: 'pw/keyCenter/from',
            args: {
                preset: 'C'
            }
        }
    },
    width: '300px',
    children:
        [
            {
                name: 'Grid',
                fn: 'pw/viewer/createElement',
                args: {
                    type: 'div',
                    style: {
                        padding: '5px',
                        backgroundColor: '#CCC',
                        borderRadius: '16px',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr'
                    },
                    children: [
                        {
                            name: 'Keys 1',
                            fn: 'pw/viewer/presets/keyboard',
                            args: {
                                component: true,
                                props: {
                                    keyHigh: 12
                                }
                            }
                        },
                        {
                            name: 'Frets 1',
                            fn: 'pw/viewer/presets/fretboard',
                            args: {
                                component: true,
                                props: {
                                    fretHigh: 12
                                }
                            }
                        },
                        {
                            name: 'Keys 2',
                            fn: 'pw/viewer/presets/keyboard',
                            args: {
                                component: true,
                                props: {
                                    keyHigh: 24
                                }
                            }
                        },
                    ]
                }
            },
            {
                name: 'Grid',
                fn: 'pw/viewer/createElement',
                args: {
                    type: 'div',
                    style: {
                        marginTop: '16px',
                        padding: '5px',
                        backgroundColor: '#DDD',
                        borderRadius: '16px',
                        display: 'flex',
                        justifyContent: 'space-around'
                    },
                    children: [
                        {
                            name: 'Keys 1',
                            fn: 'pw/viewer/presets/keyboard',
                            args: {
                                component: true,
                                props: {
                                    keyHigh: 50,
                                    style: {
                                        width: 'in/parent/width'
                                    }
                                }
                            }
                        },
                        {
                            name: 'Keys 2',
                            fn: 'pw/viewer/presets/keyboard',
                            args: {
                                component: true,
                                keyHigh: 12,
                                props: {
                                    style: {
                                        width: '400px'
                                    }
                                }
                            }
                        },
                    ]
                }
            },
            {
                name: 'Section A',
                fn: 'pw/viewer/presets/fretboard',
                args: {
                    component: true
                }
            },
            {
                name: 'Section B',
                // 4) inherited value
                inheritTest: 'in/parent/a',
                children: [
                    {
                        name: 'Progression 1',
                        children: [
                            {
                                name: 'C Major Chord',
                                a: 'in/parent/a',
                            },
                        ]
                    },
                ]
            },
        ]
};

// ATOMS

export const rawSourceState = atom({
    key: 'rawSource',
    default: RAW_SOURCE
});

// SELECTORS

export const parsedSourceState = selector({
    key: 'parsedSource',
    get: ({ get }) => {
        const source = get(rawSourceState);
        return PW.api('pw/source/parseInput', source);
    }
});
