import { primaryBlue, neutral, green, yellow, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  neutralCien: neutral[100],
  backgroundColor: neutral[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  backgroundInvertedColor: primaryBlue[500],
  primaryColor: primaryBlue[300],
  primaryColorInverted: primaryBlue[600],
  primaryHoverColor: primaryBlue[200],
  primaryActiveColor: primaryBlue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  formElementBackground: primaryBlue[400],
  textOnFormElementBackground: neutral[100],
  neutralCien: neutral[100],
  backgroundColor: primaryBlue[500],
  backgroundInvertedColor: primaryBlue[400],
  primaryColor: primaryBlue[300],
  primaryColorInverted: primaryBlue[100],
  primaryHoverColor: primaryBlue[200],
  primaryActiveColor: primaryBlue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
