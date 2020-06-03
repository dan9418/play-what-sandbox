import Splash from "../Splash/Splash";
import Viewers from 'play-what-react-viewers';
import ModuleList from "../ModuleList/ModuleList";

const PAGES = {
    splash: {
        id: 'splash',
        name: 'Splash',
        component: Splash
    },
    modules: {
        id: 'modules',
        name: 'Modules',
        component: ModuleList
    },
    // Modules
    graph: {
        id: 'graph',
        name: 'Graph',
        component: Viewers.Modules.GraphCard
    },
    fretboard: {
        id: 'fretboard',
        name: 'Fretboard',
        component: Viewers.Modules.FretboardCard
    },
    keyboard: {
        id: 'keyboard',
        name: 'Keyboard',
        component: Viewers.Modules.KeyboardCard
    },
    trueScale: {
        id: 'trueScale',
        name: 'True Scale',
        component: Viewers.Modules.TrueScaleCard
    },
    harmonicSeries: {
        id: 'harmonicSeries',
        name: 'Hamonic Series',
        component: Viewers.Modules.HarmonicSeriesCard
    },
    rhythm: {
        id: 'rhythm',
        name: 'Rhythm',
        component: Viewers.Modules.RhythmCard
    }
};

export default PAGES;