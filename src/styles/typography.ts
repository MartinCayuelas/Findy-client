import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { BREAKPOINTS, media } from './media'

export enum FyTypoSize {
  xxxs = 'xxxs',
  xxs = 'xxs',
  xs = 'xs',
  s = 's',
  m = 'm',
  xm = 'xm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
  xxxl = 'xxxl',
  xxxxl = 'xxxxl',
}

export enum LorTypoWeight {
  m = 400,
  xm = 500,
  l = 600,
  xl = 700,
}

const TYPO = {
  baseSize: 0.88,
  scaleRatio: 1.28,
  scaleRatioMobile: 0.9,
}

function getBaseTextBaseSize(breakPoints: number = BREAKPOINTS.small) {
  if (breakPoints === BREAKPOINTS.small) {
    return TYPO.baseSize * TYPO.scaleRatioMobile
  }
  return TYPO.baseSize
}

function getFontSize(size: FyTypoSize = FyTypoSize.m, breakPoints?: number) {
  const textBaseSize = getBaseTextBaseSize(breakPoints)
  switch (size) {
    case FyTypoSize.xxxs:
      return `${textBaseSize / (TYPO.scaleRatio - 0.1) ** 4}em`
    case FyTypoSize.xxs:
      return `${textBaseSize / (TYPO.scaleRatio - 0.1) ** 3}em`
    case FyTypoSize.xs:
      return `${textBaseSize / (TYPO.scaleRatio - 0.1) ** 2}em`
    case FyTypoSize.s:
      // 12px
      return `${textBaseSize / (TYPO.scaleRatio - 0.1)}em`
    case FyTypoSize.xm:
      // 16px
      return `${textBaseSize * (TYPO.scaleRatio - 0.15)}em`
    case FyTypoSize.l:
      // 18px
      return `${textBaseSize * TYPO.scaleRatio}em`
    case FyTypoSize.xl:
      // 24px
      return `${textBaseSize * TYPO.scaleRatio ** 2}em`
    case FyTypoSize.xxl:
      // 30px
      return `${textBaseSize * TYPO.scaleRatio ** 3}em`
    case FyTypoSize.xxxl:
      return `${textBaseSize * TYPO.scaleRatio ** 4}em`
    case FyTypoSize.xxxxl:
      return `${textBaseSize * TYPO.scaleRatio ** 5}em`
    case FyTypoSize.m:
    default:
      // 14px
      return `${textBaseSize}em`
  }
}

function getLineHeight(size: FyTypoSize = FyTypoSize.m, breakPoints?: number) {
  const ratio = breakPoints && breakPoints <= BREAKPOINTS.medium ? 0.9 : 1
  switch (size) {
    case FyTypoSize.xm:
      return `${ratio * 24}px`
    case FyTypoSize.l:
      return `${ratio * 22}px`
    case FyTypoSize.xl:
      return `${ratio * 28}px`
    case FyTypoSize.xxl:
      return `${ratio * 32}px`
    case FyTypoSize.xxxl:
      return `${ratio * 44}px`
    case FyTypoSize.xxxxl:
      return `${ratio * 56}px`
    case FyTypoSize.xxxs:
    case FyTypoSize.xxs:
    case FyTypoSize.xs:
    case FyTypoSize.s:
    case FyTypoSize.m:
    default:
      return `${ratio * 20}px`
  }
}

const GlobalTypoStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  @font-face {
    font-display: swap;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    src: local('Gilroy Regular'),
          url('/fonts/Gilroy-Regular.woff2') format('woff2'),
          url('/fonts/Gilroy-Regular.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  @font-face {
    font-display: swap;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    src: local('Gilroy Semibold'),
          url('/fonts/Gilroy-Semibold.woff2') format('woff2'),
          url('/fonts/Gilroy-Semibold.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  @font-face {
    font-display: swap;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    src: local('Gilroy Bold'),
          url('/fonts/Gilroy-Bold.woff2') format('woff2'),
          url('/fonts/Gilroy-Bold.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  @font-face {
    font-display: swap;
    font-family: 'Gilroy';
    font-style: italic;
    font-weight: 400;
    src: local('Gilroy Regular Italic'),
          url('/fonts/Gilroy-RegularItalic.woff2') format('woff2'),
          url('/fonts/Gilroy-RegularItalic.woff') format('woff');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  @font-face {
    font-display: swap;
    font-family: 'Open-Sans';
    font-style: normal;
    font-weight: 400;
    src: local('OpenSans'),
          url('/fonts/OpenSans-Regular.ttf') format('truetype');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }

  /* font SIZE */
  .text-m {
    font-size: ${getFontSize(FyTypoSize.m)};

    ${media.medium`
      font-size: ${getFontSize(FyTypoSize.m, BREAKPOINTS.medium)}
    `}
  }

  .color-primary {
    color: ${props => props.theme.primary} !important;
    path {
      fill: ${props => props.theme.primary} !important;
    }
  }

  .color-white {
    color: ${props => props.theme.white} !important;
    path {
      fill: ${props => props.theme.white} !important;
    }
  }
  .color-success {
    color: ${props => props.theme.success} !important;
    path {
      fill: ${props => props.theme.success} !important;
    }
  }

  .color-secondary {
    color: ${props => props.theme.secondary} !important;
    path {
      fill: ${props => props.theme.secondary} !important;
    }
  }

  /* font TRANSFORM */
  .capitalize {
    text-transform: capitalize;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .underline {
    text-decoration: underline;
  }

  .one-line {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .text-center {
    text-align: center;
  }
`

export { getFontSize, getLineHeight, GlobalTypoStyle }
