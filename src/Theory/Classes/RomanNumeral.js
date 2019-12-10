import { Chord } from "./Chord";
import { Utils } from "../Utils";

export class RomanNumeral extends Chord {
    constructor(sourceScale, degree) {
        let intervals = RomanNumeral._getIntervals(sourceScale.intervals, degree);
        super(sourceScale.id + degree, sourceScale.name + degree, intervals);
        this.sourceScale = sourceScale;
        this.conceptType = 'romanNumeral';
    }

    static _getIntervals(intervals, degree) {
        degree = degree;
        let validDegrees = [
            degree,
            Utils.moduloSum(degree, 3, 7, 1),
            Utils.moduloSum(degree, 5, 7, 1)
        ];
        let newIntervals = intervals.filter(interval => validDegrees.includes(interval.degree));
        newIntervals.map((interval) => { if (interval.degree < degree) { interval.octaveOffset = 1; } return interval; })
        return newIntervals;
    }
}