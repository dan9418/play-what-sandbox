import { Chord } from "./Chord";
import { Utils } from "../Utils";

export class RomanNumeral extends Chord {
    constructor(sourceScale, degree) {
        let intervals = degree ? RomanNumeral._getIntervals(sourceScale.intervals, degree) : sourceScale.intervals;
        let relativeIntervals = intervals.map(ivl => ivl.subtract(intervals[0]));
        let id = degree ? `${sourceScale.id}_rn${degree}` : sourceScale.id;
        let name = degree ? RomanNumeral.getName(relativeIntervals, degree) : sourceScale.name;
        super(id, name, intervals);
        this.sourceScale = sourceScale;
        this.relativeIntervals = relativeIntervals;
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
        while (newIntervals[0].degree < degree) {
            newIntervals.push(newIntervals.shift());
        }
        return newIntervals;
    }

    static getQuality(intervals, degree) {
        let root = intervals[0];
        let third = intervals[1];
        let fifth = intervals[2];
        if (third.id === 'm3' && fifth.id === 'd5') {
            return 'Dim';
        }
        else if (third.id === 'm3' && fifth.id === 'P5') {
            return 'Min';
        }
        else if (third.id === 'M3' && fifth.id === 'P5') {
            return 'Maj';
        }
        else if (third.id === 'M3' && fifth.id === 'A5') {
            return 'Aug';
        }
        else {
            return 'Unknown';
        }
    }

    static getName(intervals, degree) {
        return degree + ' ' + RomanNumeral.getQuality(intervals);
    }
}