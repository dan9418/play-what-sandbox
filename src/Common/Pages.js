import Splash from "../Splash/Splash";
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
    }
};

export default PAGES;