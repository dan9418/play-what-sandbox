import CommonUtils from "../Utils/CommonUtils";

export class Interval {
    constructor(degree, semitones, id, name, ascending = true, octaveOffset = 0) {
        this.id = id;
        this.name = name;
        this.degree = degree;
        this.semitones = semitones;
        this.ascending = ascending;
        this.octaveOffset = octaveOffset;
    }

    copy() {
        return new Interval(this.degree, this.semitones, this.id, this.name, this.ascending, this.octaveOffset);
    }

    matchesPitchClassFromKeyCenter(keyCenter, pitchClass) {
        return CommonUtils.modulo(keyCenter.getRootIndex(true) + this.semitones, 12) === pitchClass;
    }

    matchesNoteIndexFromKeyCenter(keyCenter, noteIndex) {
        return keyCenter.getRootIndex() + this.octaveOffset * 12 + this.semitones === noteIndex;
    }

    subtract(interval) {
        return this.add(interval, true);
    }

    /*add(interval, subtract = false) {
        let newDegree = CommonUtils.moduloSum(this.degree, interval.degree, 7, 1, subtract);
        let newSemitones = CommonUtils.moduloSum((this.octaveOffset * 12) + this.semitones, (interval.octaveOffset * 12) + interval.semitones, 12, 0, subtract);
        let allIntervals = Object.values(INTERVAL);
        let newInterval = allIntervals.find((i) => i.degree === newDegree && i.semitones === newSemitones);
        return newInterval ? newInterval.copy() : null;
    }*/
}