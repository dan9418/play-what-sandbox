import { Concept } from "./Concept";

export class Scale extends Concept {
    constructor(keyCenter, intervals, id, name) {
        this.keyCenter = keyCenter;
        this.intervals = intervals;
        this.id = id;
        this.name = name;
        this.conceptType = 'scale'
    }

    reverse() {
        this.intervals.reverse();
    }
}