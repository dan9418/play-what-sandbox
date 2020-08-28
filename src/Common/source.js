import { AUTUMN_LEAVES } from "./Presets/Charts";

const RAW_SOURCE = {
    name: 'Test Source',
    modes: {
        fn: 'PW/Matrix/Scale/getAllModes/',
        args: {
            scale: 'PW/Matrix/Scale/Preset/Major/value',
            keyCenter: 'PW/Vector/Note/Preset/C/value',
        }
    },
    numerals: {
        fn: 'PW/Matrix/Scale/getAllNumerals/',
        args: {
            scale: 'PW/Matrix/Scale/Preset/Major/value',
            keyCenter: 'PW/Vector/Note/Preset/C/value',
        }
    },
    notes: {
        fn: 'PW/Concept/notesFrom/',
        args: {
            a: 'PW/Vector/Note/Preset/C/value',
            B: 'PW/Matrix/Chord/Preset/Maj/value',
        }
    },
    children: [
        {
            component: 'PW_React/Explorer/component',
            props: {
                name: 'C Major',
                keyCenter: 'PW/Vector/Note/Preset/C/value',
                intervals: 'PW/Matrix/Scale/Preset/Major/value'
            }
        },
        {
            component: 'PW_React/List/component',
            props: {
                list: 'parent/modes',
                name: 'Modes',
                viewer: {
                    component: 'PW_React/Fretboard/component',
                    //props: {}
                }
            }
        },
        {
            component: 'PW_React/List/component',
            props: {
                name: 'Numerals',
                list: 'parent/numerals',
                viewer: {
                    component: 'PW_React/Fretboard/component',
                    /*props: {
                        fretRange: [5, 11]
                    }*/
                }
            }
        }
    ]
};

export default RAW_SOURCE;
