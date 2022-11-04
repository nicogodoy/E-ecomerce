import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme['font-family']};
        background: ${props => props.theme.background.primary};
    }
`

export default GlobalStyle
