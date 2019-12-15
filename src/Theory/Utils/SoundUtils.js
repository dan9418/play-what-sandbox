import * as Tone from "tone";

export const SoundUtils = {
    synth: new Tone.Synth().toMaster(),
    CALIBRATION_NOTE: {
        frequency: 440,
        noteIndex: 9
    },
    CALIBRATION_CONSTANT: Math.pow(2, 1 / 12)
}