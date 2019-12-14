import { synth } from "./SoundTools";

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
        return () => {
            ActionStrategies.log(note, viewerData);
            synth.triggerAttackRelease(note.frequency, .5);
        }
    }
}
