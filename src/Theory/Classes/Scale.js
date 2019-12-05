import { Concept } from "./Concept";

export class Scale extends Concept {
    constructor(keyCenter, id, name, intervals) {
        super(keyCenter, id, name, intervals);
        this.conceptType = 'scale'
    }

    reverse() {
        this.intervals.reverse();
    }
}