import { AUTUMN_LEAVES } from "./Presets/Charts";

const RAW_SOURCE = {
    name: 'Test Source',
    numerals: {
        fn: 'PW/Matrix/Scale/getNumerals/',
        args: 'PW/Matrix/Scale/Preset/Major/value'
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
            component: 'PW_React/List/component',
            props: {
                list: 'parent/numerals',
                viewer: {
                    component: 'PW_React/Summary/component',
                    props: {
                        colorFn: {
                            fn: 'PW_React/Fretboard/colorBy/',
                            args: {
                                type: 'degree',
                                //scheme: null
                            }
                        }
                    }
                }
            }
        }
    ]
};

export default RAW_SOURCE;
