import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Head from 'next/head'
const darkTheme = createTheme({
  type: 'dark',
  theme: {
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
    },
    colors: {
      primary: '#FF0095',
      primaryLight: '#582A87',
      secondary: '#2D2D2D',
      secondaryDark: '#8c8c8c'
    }
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  return <NextUIProvider theme={darkTheme}>
    <Component {...pageProps} />
  </NextUIProvider>
}

export default MyApp
