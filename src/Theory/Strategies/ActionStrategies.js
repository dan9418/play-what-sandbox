import * as Tone from "tone";

const synth = new Tone.Synth().toMaster();

export class ActionStrategies {
    static nop() {
        return () => null;
    }

    static log(note, viewerData) {
        let output = {
            note: note,
            viewerData: viewerData
        }
        return () => {
            console.log(output);
        }
    }

    static sound(note, viewerData) {
        let output = {
            note: note,
            viewerData: viewerData
        }
        return () => {
            console.log(output);
            synth.triggerAttackRelease(note.frequency, .5);
        }
    }
}
