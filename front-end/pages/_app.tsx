import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
   
    
        <Layout>
           <Head>
         
           <link href="https://fonts.googleapis.com/css2?family=Alef&display=swap" rel="stylesheet"/>
           </Head>
          <Component {...pageProps} />
        </Layout>
    
  )
  
}

export default MyApp
