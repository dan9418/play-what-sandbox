import { Scale } from "./Scale";

export class HeptatonicScale extends Scale {
    constructor(keyCenter, id, name, intervals) {
        if (intervals.length !== 7) {
            throw 'Heptatonic scale must have exactly 7 intervals';
        }
        super(keyCenter, id, name, intervals);
        this.conceptType = 'heptatonicScale'
    }

    /*getRomanNumeral(degree) {
        degree = degree % 7;
        let validDegrees = [
            degree,
            Utils.moduloSum(degree, 3, 7, 1),
            Utils.moduloSum(degree, 5, 7, 1)
        ];
        let newIntervals = this.intervals.filter(interval => validDegrees.includes(interval.degree))
        return new Concept(this.keyCenter, newIntervals);
    }*/
}