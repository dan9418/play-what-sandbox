import PW from 'play-what';
import { INTERVALS } from 'play-what/src/Presets';

const { CHORD_VALUES, SCALE_VALUES } = PW.Presets;

const CONCEPTS = [
    {
        id: 'chord',
        name: 'Chords',
        presets: CHORD_VALUES
    },
    {
        id: 'scale',
        name: 'Scales',
        presets: SCALE_VALUES
    }
];

export default CONCEPTS;