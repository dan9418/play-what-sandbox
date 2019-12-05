import { Concept } from "./Concept";

export class IntervalPair extends Concept {
    constructor(keyCenter, id, name, intervals) {
        if (intervals.length !== 2) {
            throw 'Interval pair must have exactly 2 intervals';
        }
        super(keyCenter, id, name, intervals);
        this.conceptType = 'intervalPair'
    }
}