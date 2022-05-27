/*
 * Media queries utility
 */

import {
  css,
  CSSObject,
  DefaultTheme,
  FlattenInterpolation,
  Interpolation,
  InterpolationFunction,
  ThemedStyledProps,
} from 'styled-components/macro'

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const BREAKPOINTS = {
  large: 1440,
  medium: 1024,
  small: 768,
  xlarge: 1920,
  xmedium: 1232,
  xmlarge: 1540,
  xsmall: 375,
}

// Iterate through the sizes and create a media template
export const media = (
  Object.keys(BREAKPOINTS) as Array<keyof typeof BREAKPOINTS>
).reduce((acc, label) => {
  acc[label] = (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${BREAKPOINTS[label]}px) {
      ${css(first, ...interpolations)}
    }
  `

  return acc
}, {} as { [key in keyof typeof BREAKPOINTS]: MediaFunction })

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  // @ts-ignore
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium`
    display: block
  `}
`;
*/
