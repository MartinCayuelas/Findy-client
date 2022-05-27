import { css } from 'styled-components/macro'

import { BREAKPOINTS, media } from '../media'

describe('media', () => {
  it('should return media query in css', () => {
    const mediaQuery = media.small`color:red;`.join('')
    const cssVersion = css`
      @media (min-width: ${BREAKPOINTS.small}px) {
        color: red;
      }
    `.join('')
    expect(mediaQuery).toEqual(cssVersion)
  })
})
