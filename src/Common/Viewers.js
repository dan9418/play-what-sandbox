import Viewers from 'play-what-react-viewers';
const { Fretboard, Keyboard } = Viewers;

export const VIEWERS = {
    fretboard: {
        id: 'fretboard',
        name: 'Fretboard',
        component: Fretboard.Viewer,
        defaults: Fretboard.Defaults
    },
    keyboard: {
        id: 'keyboard',
        name: 'Keyboard',
        component: Keyboard.Viewer,
        defaults: Keyboard.Defaults
    }
};

export const VIEWER_PROFILES = {
    fretboard: {
        viewerId: 'fretboard',
        name: 'Fretboard',
        args: {}
    },
    keyboard: {
        viewerId: 'keyboard',
        name: 'Keyboard',
        args: {}
    }
};