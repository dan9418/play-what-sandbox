const RAW_SOURCE = {
    name: 'Test Source',
    notes: {
        fn: 'PW/Concept/notesFrom/',
        args: {
            a: 'PW/Vector/Note/Preset/C#/value',
            B: 'PW/Matrix/Chord/Preset/Maj/value',
        }
    },
    children: [
        {
            component: 'h3',
            children: ['Note Summary']
        },
        {
            component: 'PW_React/Summary/component',
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
