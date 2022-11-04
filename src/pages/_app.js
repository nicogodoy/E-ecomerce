import { Provider } from 'react-redux'
import store from '../redux/store'
import GlobalStyle from '../stylesContainers/globals'
import styled, { ThemeProvider } from 'styled-components'
import config from '../stylesContainers/config';

export const Tablet = styled.div`
    @media (max-width: 768px) {
        display: none !important;
    }

    @media (min-width: 1224px) {
        display: none !important;
    }

    @media (min-height: 900px) {
        display: none !important;
    }

    @media (orientation: portrait) {
        display: none !important;
    }
`

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={config}>
                <GlobalStyle />
                <Tablet>
                    <Component {...pageProps} />
                </Tablet>
            </ThemeProvider>
        </Provider>
    )
}

export default App
