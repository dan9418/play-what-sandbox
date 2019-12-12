import { Concept } from "./Concept";

export class Chord extends Concept {
    constructor(id, name, intervals) {
        super(id, name, intervals);
    }

    chordInversion(inversion) {
        for (let i = 0; i < inversion; i++) {
            let shifted = this.intervals.shift();
            shifted = {...shifted};
            shifted.octaveOffset = shifted.octaveOffset + 1;
            this.intervals.push(shifted);
        }
        // TODO reverse inversions
    }
}