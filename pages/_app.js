import { ChakraProvider, CSSReset, Theme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={Theme}>
    <CSSReset/>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
