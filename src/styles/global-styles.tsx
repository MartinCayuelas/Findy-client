import React from 'react'
import { createGlobalStyle, DefaultTheme } from 'styled-components'

import { GlobalLayoutStyle } from './layout'
import { GlobalSpacingStyle } from './spacing'
import { GlobalTypoStyle } from './typography'

const GeneralStyle = createGlobalStyle<{ theme: DefaultTheme }>`

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: Gilroy, sans-serif;
    line-height: normal;
  }

  button {
    background: none;
    border: none;
    outline: none;
    padding: 0;
  }

  h1, h2, h3, h4, h5, p, dd {
    margin: 0;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  dialog {
    border: none;
    padding: 0;
    background: none;
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
  ul {
    padding-inline-start: 0;
    margin: 0;
  }
  li {
    display: block;
  }



  .pointer:not(:disabled) {
    cursor: pointer;
  }

  .pointer:disabled {
    cursor: not-allowed;
  }

  .pointer-not-allowed {
    cursor: not-allowed;
  }

  .bg-primary {
    background: ${props => props.theme.primary};
  }

  .bg-white {
    background: ${props => props.theme.white};
  }
  .bg-gray {
    background: ${props => props.theme.gray};
  }


  .bg-secondary {
    background: ${props => props.theme.secondary} !important;
  }



  .bg-success{
    background: ${props => props.theme.success} !important;
  }



  .cover {
    object-fit: cover;
  }
  .contain {
    object-fit: contain;
  }

  .elevation-1 {
    box-shadow: 0px 2px 4px rgba(10, 10, 46, 0.08);
  }
  .elevation-2 {
    box-shadow: 0px 6px 12px rgba(10, 10, 46, 0.1);
  }
  .elevation-3 {
    box-shadow: 0px 12px 20px rgba(10, 10, 46, 0.12);
  }


  .border-1 {
    border: 1px solid ${props => props.theme.gray};
  }


  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .fade-in {
    animation: 300ms ease-in fade-in;
  }
`

export function GlobalStyle() {
  return (
    <>
      <GlobalTypoStyle />
      <GeneralStyle />
      <GlobalLayoutStyle />
      <GlobalSpacingStyle />
    </>
  )
}
