import PW from 'play-what';
import { atom, selector } from 'recoil';

const RAW_SOURCE = {
    name: 'Test Source',
    children: [
        {
            name: 'API Constants',
            a: 'pw/keyCenter/presets/C/a',
            B: 'pw/concept/presets/Maj/B'
        },
        {
            name: 'API Functions',
            a: {
                fn: 'pw/keyCenter/from',
                args: {
                    preset: 'C'
                }
            },
            B: {
                fn: 'pw/intervals/from',
                args: {
                    preset: 'Maj'
                }
            }
        },
        {
            name: 'Direct Values',
            a: {
                p: 0,
                d: 2
            },
            B: [
                {
                  "d": 0,
                  "p": 0
                },
                {
                  "d": 2,
                  "p": 4
                },
                {
                  "d": 4,
                  "p": 7
                }
              ]
        }
        /*{
            notes: {
                fn: 'pw/concept/from',
                args: {
                    a: 'parent/a',
                    B: 'parent/B'
                }
            },
            children: [
                {
                    fn: 'pw/viewer/fretboard/create',
                    args: {
                        name: 'Fretboard',
                        fretRange: [0, 12],
                        tuning: [16, 11, 7, 2, -3, 8], // e B G D A E
                        labelFn: {
                            fn: 'pw/note/label',
                            args: {
                                type: 'degree',
                                notes: 'parent/notes'
                            }
                        }
                    }
                }
            ]
        }*/
    ]
}


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
        let parsedSource = {};
        //try {
        parsedSource = PW.api('pw/parse', source);
        //}
        //catch (e) {
        //    console.error(e)
        //}
        return parsedSource
    }
});
