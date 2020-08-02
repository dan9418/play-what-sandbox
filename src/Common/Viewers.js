import Viewers from 'play-what-react-viewers';
const { Fretboard, Keyboard } = Viewers;

export const VIEWER = {
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

export const VIEWER_VALUES = Object.values(VIEWER);

export const VIEWER_PRESETS = {
    fretboard: {
        id: 'fretboard',
        name: 'Fretboard (Default)',
        viewerId: 'fretboard',
        args: {}
    },
    keyboard: {
        id: 'keyboard',
        name: 'Keyboard (Default)',
        viewerId: 'keyboard',
        args: {}
    }
};