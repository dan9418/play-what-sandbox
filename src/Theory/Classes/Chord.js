import { Concept } from "./Concept";

export class Chord extends Concept {
    constructor(keyCenter, intervals, id, name) {
        this.keyCenter = keyCenter;
        this.intervals = intervals;
        this.id = id;
        this.name = name;
        this.conceptType = 'chord'
    }

    chordInversion(inversion) {
        for (let i = 0; i < inversion; i++) {
            let shifted = this.intervals.shift();
            shifted.octaveOffset = shifted.octaveOffset + 1;
            this.intervals.push(shifted);
        }
        // TODO reverse inversions
    }
}