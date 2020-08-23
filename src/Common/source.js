const RAW_SOURCE = {
    name: 'Test Source',
    children: [
        {
            name: 'Shortcut',
            notes: {
                fn: 'PW/Concept/notesFrom/',
                args: {
                    a: 'PW/Vector/Note/Preset/C#/value',
                    B: 'PW/Matrix/Chord/Preset/Maj/value',
                }
            },
            children: [
                {
                    component: 'div',
                    children: [
                        {
                            component: 'h3',
                            children: ['Note Summary']
                        },
                        {
                            component: 'PW_React/Summary/component',
                            props: {
                                notes: 'parent/notes'
                            }
                        }
                    ]
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
        },
        /*
        {
            name: 'API Constants',
            a: 'PW/Vector/Note/Preset/C/value',
            B: 'PW/Matrix/Chord/Preset/Maj/value',
            children: [
                {
                    name: 'Generate NoteList',
                    notes: {
                        fn: 'PW/Concept/notesFrom/',
                        args: {
                            a: 'parent/a',
                            B: 'parent/B'
                        }
                    },
                    children: [
                        {
                            component: 'h3',
                            children: ['Pitch Class']
                        },
                        {
                            component: 'PW_React/Fretboard/component',
                            props: {
                                mapFn: {
                                    fn: 'PW_React/Fretboard/getMapFn/',
                                    args: {
                                        notes: 'parent/notes',
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'API Functions',
            a: 'PW/Vector/Note/Preset/C/value',
            B: 'PW/Matrix/Chord/Preset/Maj/value',
        },
        {
            name: 'Direct Values',
            a: {
                p: 0,
                d: 2
            },
            B: [
                {
                    d: 0,
                    p: 0
                },
                {
                    d: 2,
                    p: 4
                },
                {
                    d: 4,
                    p: 7
                }
            ]
        }
        */
    ]
};

export default RAW_SOURCE;
