import { transparentize } from 'polished'
import { DefaultTheme } from 'styled-components'

const gray1 = '#F3F4F5'
const gray2 = '#EBECEF'
const gray3 = '#CED3D6'
const gray4 = '#A9B1B8'
const gray5 = '#8B979E'
const gray6 = '#5D6F7A'
const gray7 = '#3A5161'
const gray8 = '#1A3547'
const gray9 = '#00131F'
const gray10 = '#e8eaeb'
const primaryLight = '#6F41F0'
const primary = '#001D30'
const danger = '#F6666C'
const darkDanger = '#e63f41'
const success = '#00CFA4'
const darkSuccess = '#00A784'
const info = '#F37520'
const white = 'white'
const blue = '#2A52A1'
const darkBlue = '#01030e'
const secondaryDark = '#5733BD'
const secondaryLight = '#B499FF'
const orange = '#FFA365'

export const defaultTheme: DefaultTheme = {
  accent: '#ADFFDD',
  blue,
  colorBackgroundButtonFlat: 'none',
  colorBackgroundButtonPrimary: primaryLight,
  colorBackgroundButtonPrimaryDisabled: gray3,
  colorBackgroundButtonSecondary: white,
  colorBackgroundButtonSecondaryDisabled: gray1,
  colorBackgroundButtonSecondaryHover: gray1,
  colorBackgroundCard: white,
  colorBackgroundGray1: gray1,
  colorBackgroundHeader: transparentize(0.4, gray8),
  colorBackgroundHighlightText: transparentize(0.7, secondaryLight),
  colorBackgroundInput: white,
  colorBackgroundNotificationError: danger,
  colorBackgroundPage: primary,
  colorBackgroundRoundButtonWide: secondaryDark,
  colorBackgroundSideNav: white,
  colorBackgroundSwitch: gray1,
  colorBackgroundSwitchSliderOff: white,
  colorBackgroundSwitchSliderOn: gray8,
  colorBackgroundThumbScrollbar: gray3,
  colorBackgroundThumbScrollbarHover: primaryLight,
  colorBackgroundTrackScrollbar: gray1,
  colorBorderButtonSecondary: '#E9E5F1',
  colorBorderInput: gray3,
  colorBorderInputError: danger,
  colorBorderInputUnderlined: gray2,
  colorBorderSwitch: gray3,
  colorIconButtonSecondary: primaryLight,
  colorPlaceholderInput: gray5,
  colorTagBackground: gray7,
  colorTagText: gray4,
  colorText: gray9,
  colorTextButtonPrimary: gray1,
  colorTextButtonPrimaryDisabled: white,
  colorTextButtonSecondary: primary,
  colorTextButtonSecondaryDisabled: gray3,
  colorTextButtonSecondaryHover: primaryLight,
  colorTextCaption: gray4,
  colorTextContrast: white,
  colorTextInputError: danger,
  colorTextLink: gray7,
  colorTextMenuButton: gray6,
  colorTextMenuButtonActive: primaryLight,
  colorTextMenuButtonHover: primaryLight,
  colorTextNotificationError: white,
  danger,
  darkBlue,
  darkDanger,
  darkSuccess,
  gray1,
  gray10,
  gray2,
  gray3,
  gray4,
  gray5,
  gray6,
  gray7,
  gray8,
  gray9,
  info,
  orange,
  primary,
  primaryLight,
  radius: '4px',
  radiusCard: '8px',
  radiusTag: '2px',
  secondary: '#341E70',
  secondaryLight,
  success,
  white,
}

export const exampleTheme = {
  colorText: 'red',
}
