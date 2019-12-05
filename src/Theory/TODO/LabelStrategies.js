// TODO re-implement
export const LABEL_STRATEGIES = {
    None: () => '',
    Name: (noteProfile, viewerProfile) => !!noteProfile ? noteProfile.name : '',
    Degree: (noteProfile, viewerProfile) => (!!noteProfile && !!noteProfile.interval) ? noteProfile.interval.degree : '',
    Interval: (noteProfile, viewerProfile) => (!!noteProfile && !!noteProfile.interval) ? noteProfile.interval.id : '',
    NoteIndex: (noteProfile, viewerProfile) => !!noteProfile ? noteProfile.noteIndex : '',
    PitchClass: (noteProfile,viewerProfile) => !!noteProfile ? noteProfile.noteIndex % 12 : '',
    Octave: (noteProfile, viewerProfile) => !!noteProfile ? noteProfile.noteOctave : '',
    Frequency: (noteProfile, viewerProfile) => !!noteProfile ? Math.round(noteProfile.frequency) : ''
}
