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
        /*{
            name: 'For Each',
            fn: 'PW_React/Summary/forEachNote/',
            args: {
                concepts: AUTUMN_LEAVES.children[0].children,
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
        },*/
        {
            component: 'h3',
            children: ['Note Summary']
        },
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
        },
        {
            component: 'PW_React/Chart/component',
            props: {
                chart: AUTUMN_LEAVES,
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
            component: 'PW_React/Summary/component',
            props: {
                keyCenter: 'PW/Vector/Note/Preset/C/value',
                intervals: 'PW/Matrix/Chord/Preset/Maj/value',
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
            component: 'h3',
            children: ['Degree']
        },
        {
            component: 'PW_React/Fretboard/component',
            props: {
                notes: 'parent/notes',
                colorFn: {
                    fn: 'PW_React/Fretboard/colorBy/',
                    args: {
                        type: 'degree',
                        //scheme: null
                    }
                },
                textFn: {
                    fn: 'PW_React/Fretboard/textBy/',
                    args: {
                        type: 'degree',
                        //scheme: null
                    }
                }
            }
        }
    ]
};

export default RAW_SOURCE;
