import Concept from '../Concept';

export default class IntervalPair extends Concept {
    constructor(id, name, intervals) {
        if (intervals.length !== 2) {
            throw 'Interval pair must have exactly 2 intervals';
        }
        super(id, name, intervals);
    }
}