import { Scale } from "./Scale";

export class HeptatonicScale extends Scale {
    constructor(keyCenter, intervals, id, name) {
        if (this.intervals.length !== 7) {
            throw 'Heptatonic scale must have exactly 7 intervals';
        }
        this.keyCenter = keyCenter;
        this.intervals = intervals;
        this.id = id;
        this.name = name;
        this.conceptType = 'heptatonicScale'
    }

    reverse() {
        this.intervals.reverse();
    }

    /*getRomanNumeral(degree) {
        if(this.intervals.length !== 7) {
            return null;
        }
        let validDegrees = [
            degree % 7,
            Utils.moduloSum(degree, 3, 7, 1),
            Utils.moduloSum(degree, 5, 7, 1)
        ];
        let newIntervals = this.intervals.filter(interval => validDegrees.includes(interval.degree))
        return new Concept(this.keyCenter, newIntervals);
    }*/
}