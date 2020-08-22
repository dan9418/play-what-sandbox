const RAW_SOURCE = {
    name: 'Test Source',
    children: [
        {
            name: 'Shortcut',
            notes: {
                fn: 'PW/Concept/notesFrom/',
                args: {
                    a: 'PW/Vector/KeyCenter/Preset/C/value',
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
                            fn: 'PW/Viewer/Summary/from/',
                            args: {
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
                    fn: 'PW/Viewer/Fretboard/from/',
                    args: {
                        name: 'Fretboard',
                        labelFn: {
                            fn: 'PW/Vector/label/',
                            args: {
                                type: 'degree',
                                notes: 'parent/notes'
                            }
                        },
                        styleFn: {
                            fn: 'PW/Vector/style/',
                            args: {
                                type: 'degree',
                                notes: 'parent/notes'
                            }
                        }
                    }
                }
            ]
        },
        {
            name: 'API Constants',
            a: 'PW/Vector/KeyCenter/Preset/C/value',
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
                            fn: 'PW/Viewer/Fretboard/from/',
                            args: {
                                name: 'Fretboard',
                                labelFn: {
                                    fn: 'PW/Vector/label/',
                                    args: {
                                        type: 'pitchClass',
                                        /*notes: 'parent/notes'*/
                                    }
                                },
                                styleFn: {
                                    fn: 'PW/Vector/style/',
                                    args: {
                                        type: 'pitchClass',
                                        /*notes: 'parent/notes'*/
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
            a: 'PW/Vector/KeyCenter/Preset/C/value',
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
