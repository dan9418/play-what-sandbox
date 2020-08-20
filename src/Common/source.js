const RAW_SOURCE = {
    name: 'Test Source',
    children: [
        {
            name: 'Shortcut',
            notes: {
                api: 'pw/notes/from/',
                args: {
                    a: 'pw/keyCenter/presets/C/a',
                    B: 'pw/concept/presets/Maj/B',
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
                                    api: 'pw/viewer/repeat/',
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
                                    api: 'pw/viewer/repeat/',
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
                    api: 'pw/viewer/fretboard/from/',
                    args: {
                        name: 'Fretboard',
                        labelFn: {
                            api: 'pw/note/label/',
                            args: {
                                type: 'degree',
                                notes: 'parent/notes'
                            }
                        },
                        styleFn: {
                            api: 'pw/note/style/',
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
            a: 'pw/keyCenter/presets/C/a',
            B: 'pw/concept/presets/Maj/B',
            children: [
                {
                    name: 'Generate Notes',
                    notes: {
                        api: 'pw/notes/from/',
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
                            api: 'pw/viewer/fretboard/from/',
                            args: {
                                name: 'Fretboard',
                                labelFn: {
                                    api: 'pw/note/label/',
                                    args: {
                                        type: 'pitchClass',
                                        /*notes: 'parent/notes'*/
                                    }
                                },
                                styleFn: {
                                    api: 'pw/note/style/',
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
                api: 'pw/keyCenter/from/',
                args: {
                    preset: 'C'
                }
            },
            B: {
                api: 'pw/intervals/from/',
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