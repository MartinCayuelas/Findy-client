// import original module declarations
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    secondary: string
    success: string
    white: string
    gray: string
    radiusCard: string
  }
}
