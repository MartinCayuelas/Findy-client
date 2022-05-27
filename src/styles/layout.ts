import { createGlobalStyle, DefaultTheme } from 'styled-components'

import { media } from './media'

export const GlobalLayoutStyle = createGlobalStyle<{ theme: DefaultTheme }>`

  .full-w {
    width: 100%;
  }
  .full-h {
    height: 100%;
  }
  .full-vw {
    width: 100vw;
  }
  .full-vh {
    height: 100vh;
  }

  /* layout POSITION */
  .relative {
    position: relative;
  }

  /* layout DISPLAY */
  .flex {
    display: flex;
  }
  .none {
    display: none;
  }
  .hidden {
    visibility: hidden;
  }

  /* layout FLEX */
  .flex-0 {
    flex: 0;
  }
  .flex-1 {
    flex: 1;
  }
  .grow-0 {
    flex-grow: 0;
  }
  .grow-1 {
    flex-grow: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .shrink-1 {
    flex-shrink: 1;
  }
  .shrink-2 {
    flex-shrink: 2;
  }
  .column {
    flex-direction: column;
  }
  .column-reverse {
    flex-direction: column-reverse;
  }
  .align-start {
    align-items: flex-start;
  }
  .align-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-stretch {
    justify-content: stretch;
  }

  .justify-end {
    justify-content: flex-end;
  }
  .align-stretch {
    align-items: stretch;
  }
  .align-end {
    align-items: flex-end;
  }
  .align-baseline {
    align-items: baseline;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }
  .row-reverse {
    flex-direction: row-reverse
  }
  .wrap {
    flex-wrap: wrap;
  }
  .no-wrap {
    flex-wrap: nowrap;
  }

  .scroll {
    overflow-y: auto;

    /* hide scrollbar IE and Edge */
    -ms-overflow-style: none;

    /* width */
    &::-webkit-scrollbar {
      height: 4px;
      width: 4px;

      /* Track */
      &-track {
        cursor: pointer;
        border-radius: 30px;
        background: ${props => props.theme.gray};
      }

      /* Handle */
      &-thumb {
        border-radius: 30px;

        background: ${props => props.theme.gray};
        &:hover {
          cursor: grab;
          background: ${props => props.theme.gray};
        }
        &:active {
          cursor: grabbing;
        }
      }
    }
  }

  .no-scroll {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .has-height {
    min-height: 0px;
  }

  .box-content {
    box-sizing: content-box;
  }

  .z-0 {
    z-index: 0;
  }
  .z-1 {
    z-index: 1;
  }
  .z-2 {
    z-index: 2;
  }
  .z-3 {
    z-index: 3;
  }

  ${media.xsmall`
    .block-up-xs {
      display: block;
    }
  `}
  ${media.medium`
    .block-up-m {
      display: block;
    }
  `}
  ${media.xsmall`
    .flex-up-xs {
      display: flex;
    }
  `}
`
