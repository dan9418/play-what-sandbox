import CHARTS from "./Charts";
import PROGRESSIONS from "./Progressions";
import CONCEPTS from "./Concepts";

const PRESETS = [
    {
        id: 'chart',
        name: 'Charts',
        categories: CHARTS
    },
    {
        id: 'section',
        name: 'Sections',
        categories: []
    },
    {
        id: 'progression',
        name: 'Progressions',
        categories: PROGRESSIONS
    },
    {
        id: 'concept',
        name: 'Concepts',
        categories: CONCEPTS
    }
];

export default PRESETS;