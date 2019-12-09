import { Scale } from "./Scale";
import { Chord } from "./Chord";
import { Utils } from "../Utils";

export class HeptatonicScale extends Scale {
    constructor(id, name, intervals) {
        if (intervals.length !== 7) {
            throw 'Heptatonic scale must have exactly 7 intervals';
        }
        super(id, name, intervals);
        this.conceptType = 'heptatonicScale'
    }

    getRomanNumeral(degree) {
        degree = degree;
        let validDegrees = [
            degree,
            Utils.moduloSum(degree, 3, 7, 1),
            Utils.moduloSum(degree, 5, 7, 1)
        ];
        let newIntervals = this.intervals.filter(interval => validDegrees.includes(interval.degree));
        newIntervals.map((interval) => { if (interval.degree < degree) { interval.octaveOffset = 1; } return interval; })
        return new Chord('', '', newIntervals);
    }
}