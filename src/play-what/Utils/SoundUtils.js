import * as Tone from "tone";

const MASTER_OUT = new Tone.Synth().toMaster();

export class SoundUtils {
    static getSynth() {
        return MASTER_OUT;
    }
    static play(frequency, duration) {
        MASTER_OUT.triggerAttackRelease(frequency, duration);
    }
}