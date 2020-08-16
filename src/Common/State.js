import PW from 'play-what';
import { atom, selector } from 'recoil';

const RAW_SOURCE = {
    fn: 'pw/source/parseLevel',
    props: {
        name: 'Test Source',
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
        },
        children: [
            {
                fn: 'pw/viewer/fretboard/create',
                props: {
                    name: 'Fretboard',
                    notes: {
                        fn: 'pw/concept/from',
                        args: {
                            a: 'parent/a',
                            B: 'parent/B'
                        }
                    }
                },
                args: {
                    fretRange: [0, 12],
                    tuning: [0, 0, 0, 0, 0, 0],
                    /*fretLabel: {
                        fn: 'pw/note/label',
                        args: {
                            type: 'degree',
                            options: 'props/notes',
                            options: {
                                format: null
                            }
                        }
                    },
                    fretLabel: {
                        fn: 'pw/note/color',
                        args: {
                            type: 'degree',
                            options: 'props/notes',
                            palette: {}
                        }
                    }*/
                }
            }
        ]
    }
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
        try {
            parsedSource = PW.api('pw/source/parseLevel', source);
        }
        catch (e) {
            console.error(e)
        }
        return parsedSource
    }
});
