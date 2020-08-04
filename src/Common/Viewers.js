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

export const parseViewerConfig = viewerConfig => {
    if (typeof viewerConfig === 'string') {
        const config = { ...VIEWER_PRESETS[viewerConfig] };
        const viewer = VIEWER[config.viewerId];
        config.args = { ...viewer.defaults, ...config.args };
        return config;
    }
    const config2 = { ...viewerConfig };
    config2.args = { ...VIEWER[viewerConfig.viewerId].defaults, ...config2.args };
    return config2;
}
