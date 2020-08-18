import PW from 'play-what';
import { atom, selector } from 'recoil';

const RAW_SOURCE = {
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
        }
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
