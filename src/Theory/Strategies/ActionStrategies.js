import { SoundUtils } from "../Utils/SoundUtils";

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
            SoundUtils.synth.triggerAttackRelease(note.frequency, .5);
        }
    }
}
