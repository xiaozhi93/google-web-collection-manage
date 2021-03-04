import Head from 'next/head'
import Search from '../components/search'
import Collection from '../components/collection'
import { VStack, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box mt="150px">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack spacing={30}>
        <img src="/google_logo.svg" alt="Google Logo" />
        <Search/>
        <Collection/>
      </VStack>
    </Box>
  )
}
