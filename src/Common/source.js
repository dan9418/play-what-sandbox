const RAW_SOURCE = {
    name: 'Test Source',
    children: [
        {
            name: 'Shortcut',
            notes: {
                fn: 'PW/NoteList/from/',
                args: {
                    a: 'PW/KeyCenter/Presets/C/a',
                    B: 'PW/Concept/Presets/Maj/B',
                }
            },
            children: [
                {
                    component: 'div',
                    children: [
                        {
                            component: 'h3',
                            children: ['Test']
                        },
                        {
                            component: 'div',
                            children: [
                                {
                                    fn: 'PW/Viewer/repeat/',
                                    args: {
                                        n: 3,
                                        content: {
                                            component: 'span',
                                            children: ['*'],
                                            props: {
                                                style: {
                                                    margin: '5px'
                                                }
                                            }
                                        }
                                    }
                                },
                            ]
                        },
                        {
                            component: 'div',
                            children: [
                                {
                                    fn: 'PW/Viewer/repeat/',
                                    args: {
                                        n: 10,
                                        content: {
                                            component: 'span',
                                            children: ['*']
                                        }
                                    }
                                },
                            ]
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
                            fn: 'PW/Note/label/',
                            args: {
                                type: 'degree',
                                notes: 'parent/notes'
                            }
                        },
                        styleFn: {
                            fn: 'PW/Note/style/',
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
            a: 'PW/KeyCenter/Presets/C/a',
            B: 'PW/Concept/Presets/Maj/B',
            children: [
                {
                    name: 'Generate NoteList',
                    notes: {
                        fn: 'PW/NoteList/from/',
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
                                    fn: 'PW/Note/label/',
                                    args: {
                                        type: 'pitchClass',
                                        /*notes: 'parent/notes'*/
                                    }
                                },
                                styleFn: {
                                    fn: 'PW/Note/style/',
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
            a: {
                fn: 'PW/KeyCenter/from/',
                args: {
                    preset: 'C'
                }
            },
            B: {
                fn: 'PW/IntervalList/from/',
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