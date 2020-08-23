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
                            fn: 'PW_React/Summary/from/',
                            args: {
                                pods: 'parent/notes'
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
                        mapFn: {
                            fn: 'PW_React/Fretboard/mapBy/',
                            args: {
                                notes: 'parent/notes',
                                color: {
                                    type: 'degree',
                                    //scheme: null
                                }
                            }
                        }
                    }
                }
            ]
        },
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
                                    fn: 'PW_React/Fretboard/mapBy/',
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
    ]
};

export default RAW_SOURCE;
