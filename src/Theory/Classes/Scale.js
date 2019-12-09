import { Concept } from "./Concept";

export class Scale extends Concept {
    constructor(id, name, intervals) {
        super(id, name, intervals);
        this.conceptType = 'scale'
    }

    reverse() {
        this.intervals.reverse();
    }
}