//tipagem para usar de referencia nos outros componentes
export const COLOR_OPTIONS = {
  default: "default",
  primary: "primary",
  success: "success",
  warning: "warning",
  danger: "danger",
  dark: "dark",
};

export type ColorOptions = keyof typeof COLOR_OPTIONS;

//cores do tema escolhido
const enum DEFAULT_THEME {
  dark_gray = "#4f4f4f",
  light_gray = "#dbd8d8",
  medium_gray = "#8E8E8E",
  white = "#ffffff",
  blue = "#245AB7",
  red = "#CF2121",
  green = "#3C754A",
  yellow = "#ff9505",
}

export const DefaultAppTheme = {
  button_default: DEFAULT_THEME.white,
  button_default_label: DEFAULT_THEME.blue,
  button_primary: DEFAULT_THEME.blue,
  button_primary_label: DEFAULT_THEME.white,
  button_warning: DEFAULT_THEME.yellow,
  button_warning_label: DEFAULT_THEME.dark_gray,
  button_success: DEFAULT_THEME.green,
  button_success_label: DEFAULT_THEME.white,
  button_danger: DEFAULT_THEME.red,
  button_danger_label: DEFAULT_THEME.white,
  button_dark: DEFAULT_THEME.dark_gray,
  button_dark_label: DEFAULT_THEME.white,
  //
  bg_white: DEFAULT_THEME.white,
  bg_light_gray: DEFAULT_THEME.light_gray,
  bg_medium_gray: DEFAULT_THEME.medium_gray,
  //
  border_dark_gray: DEFAULT_THEME.dark_gray,
  border_light_gray: DEFAULT_THEME.light_gray,
  border_medium_gray: DEFAULT_THEME.medium_gray,
};
