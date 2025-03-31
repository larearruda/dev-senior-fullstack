import { PixelRatio } from "react-native";

const BASE_FONT_SIZE = 16;
const BASE_UNIT = 8;
const FONT_SCALE = PixelRatio.getFontScale();

export const rem = (value: number) => value * BASE_FONT_SIZE * FONT_SCALE;
export const spacing = (value: number) => value * BASE_UNIT * FONT_SCALE;
