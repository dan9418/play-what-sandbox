export const COLORS = {
    White: '#000000',
    Black: '#FFFFFF',
    Red: '#E6194B',
    Orange: '#F58231',
    Yellow: '#FFE119',
    Green: '#3CB44B',
    Blue: '#4363D8',
    Purple: '#911DB4',
    Pink: '#F032E6',
    pc0: '#ED1C24',
    pc1: '#F1592A',
    pc2: '#F8981E',
    pc3: '#FCB040',
    pc4: '#FFF200',
    pc5: '#8CC63F',
    pc6: '#056839',
    pc7: '#13A89E',
    pc8: '#A898C8',
    pc9: '#662D91',
    pc10: '#92278F',
    pc11: '#C2305E'
};

export const DEFAULT_COLOR_PROFILE = {
    binary: [
        null,
        COLORS.Red
    ],
    degree: [
        null,
        COLORS.Red,
        COLORS.Orange,
        COLORS.Yellow,
        COLORS.Green,
        COLORS.Blue,
        COLORS.Purple,
        COLORS.Pink,
        COLORS.Red,
        COLORS.Orange,
        COLORS.Yellow,
        COLORS.Green,
        COLORS.Blue,
        COLORS.Purple,
        COLORS.Pink,
        COLORS.Red
    ],
    pitchClass: [
        COLORS.pc0,
        COLORS.pc1,
        COLORS.pc2,
        COLORS.pc3,
        COLORS.pc4,
        COLORS.pc5,
        COLORS.pc6,
        COLORS.pc7,
        COLORS.pc8,
        COLORS.pc9,
        COLORS.pc10,
        COLORS.pc11
    ],
    octave: [
        COLORS.Black,
        COLORS.White
    ],
    frequency: [
        COLORS.Black,
        COLORS.White
    ],
    noteIndex: [
        COLORS.Black,
        COLORS.White
    ]
};