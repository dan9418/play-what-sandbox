import PW from 'play-what';
import { atom, selector } from 'recoil';
import RAW_SOURCE from './source';

// ATOMS

export const rawSourceState = atom({
    key: 'rawSource',
    default: RAW_SOURCE
});

// SELECTORS

export const parsedSourceState = selector({
    key: 'parsedSource',
    get: ({ get }) => {
        const source = get(rawSourceState);
        let parsedSource = {};
        //try {
        parsedSource = PW.api('pw/parse/', source);
        //}
        //catch (e) {
        //    console.error(e)
        //}
        return parsedSource
    }
});
