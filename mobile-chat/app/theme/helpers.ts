import { PixelRatio } from "react-native";

/*
 pedi pro chat gpt me ensinar sobre padroes de tipografia e o chat trouxe que existe uma escala com Minor Third, Major Third, Perfect Fourth, Golden Ratio e eu estou considerando a escala 1.25 Major Third e tirei os tamanhos desse site https://typescale.com/
*/
const BASE_FONT_SIZE = 16;
const BASE_UNIT = 8;
const FONT_SCALE = PixelRatio.getFontScale();

export const rem = (value: number) => value * BASE_FONT_SIZE * FONT_SCALE;
export const spacing = (value: number) => value * BASE_UNIT * FONT_SCALE;
