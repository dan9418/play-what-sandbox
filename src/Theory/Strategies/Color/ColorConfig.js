import * as Color from "color";

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

function getColorStyles(background, foreground) {
    let bg = Color(background)
    return {
        backgroundColor: background,
        color: foreground || (bg.isDark() ? COLORS.Black : COLORS.White)
    }
}

export const DEFAULT_COLOR_PROFILE = {
    binary: [
        {},
        getColorStyles(COLORS.Red)
    ],
    degree: [
        {},
        getColorStyles(COLORS.Red),
        getColorStyles(COLORS.Orange),
        getColorStyles(COLORS.Yellow),
        getColorStyles(COLORS.Green),
        getColorStyles(COLORS.Blue),
        getColorStyles(COLORS.Purple),
        getColorStyles(COLORS.Pink),
        getColorStyles(COLORS.Red),
        getColorStyles(COLORS.Orange),
        getColorStyles(COLORS.Yellow),
        getColorStyles(COLORS.Green),
        getColorStyles(COLORS.Blue),
        getColorStyles(COLORS.Purple),
        getColorStyles(COLORS.Pink),
        getColorStyles(COLORS.Red)
    ],
    pitchClass: [
        getColorStyles(COLORS.pc0),
        getColorStyles(COLORS.pc1),
        getColorStyles(COLORS.pc2),
        getColorStyles(COLORS.pc3),
        getColorStyles(COLORS.pc4),
        getColorStyles(COLORS.pc5),
        getColorStyles(COLORS.pc6),
        getColorStyles(COLORS.pc7),
        getColorStyles(COLORS.pc8),
        getColorStyles(COLORS.pc9),
        getColorStyles(COLORS.pc10),
        getColorStyles(COLORS.pc11)
    ],
    octave: [COLORS.Black, COLORS.White],
    frequency: [COLORS.Black, COLORS.White],
    noteIndex: [COLORS.Black, COLORS.White]
};