import Head from 'next/head'
import Search from '../components/search'
import Collection from '../components/collection'
import { VStack, Box } from '@chakra-ui/react'

export default function Home({ collectList }) {
  return (
    <Box mt="150px">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack spacing={30}>
        <img src="/google_logo.svg" alt="Google Logo" />
        <Search/>
        <Collection list={collectList}/>
      </VStack>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {
      collectList: [
        {
          url: 'https://gitee.com/',
          icon: 'https://gitee.com/favicon.ico',
          title: '我的工作台'
        },
        {
          url: 'https://baidu.com/',
          icon: 'https://baidu.com/favicon.ico',
          title: '百度'
        }
      ]
    }, // will be passed to the page component as props
  }
}
