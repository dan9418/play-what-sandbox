import * as Color from "color";

export default class ColorUtils {
    
    static COLORS = {
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

    static getColorStyles(background, foreground) {
        if (!background) {
            return {};
        }
        let bg = Color(background);
        return {
            backgroundColor: bg.hsl().string(),
            color: foreground || (bg.isDark() ? ColorUtils.COLORS.Black : ColorUtils.COLORS.White)
        }
    }

    static discrete(value, colorScheme) {
        let background = colorScheme[value];

        return ColorUtils.getColorStyles(background);
    }

    static continuous(value, min, max, colorScheme) {
        let percent = (value - min) / (max - min);
        percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

        let initialColor = Color(colorScheme[0]);
        let finalColor = Color(colorScheme[1]);
        let background = initialColor.mix(finalColor, percent);

        return ColorUtils.getColorStyles(background);
    }
}