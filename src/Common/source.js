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
            component: 'PW_React/Summary/component',
            props: {
                name: 'C Major',
                keyCenter: 'PW/Vector/Note/Preset/C/value',
                intervals: 'PW/Matrix/Scale/Preset/Major/value',
                colorFn: {
                    fn: 'PW_React/Fretboard/colorBy/',
                    args: {
                        type: 'degree',
                        //scheme: null
                    }
                }
            }
        },
        {
            component: 'PW_React/List/component',
            props: {
                list: 'parent/modes',
                name: 'Modes',
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
        },
        {
            name: 'Numerals',
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
