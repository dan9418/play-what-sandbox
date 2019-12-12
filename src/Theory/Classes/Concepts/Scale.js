import { Concept } from "./Concept";

export class Scale extends Concept {
    constructor(id, name, intervals) {
        super(id, name, intervals);
    }

    reverse() {
        this.intervals.reverse();
    }
}