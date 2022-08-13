import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import { Provider, useStore } from 'react-redux'
import { store } from '../service/GlobalState'
import {useEffect, useState} from 'react'
import Link from "next/link";
import Login from './login'



function MyApp({ Component, pageProps }: AppProps) {
  //<link href="https://fonts.googleapis.com/css2?family=Alef&display=swap" rel="stylesheet"/>
  const [isLogged, setIsLogged] = useState(false);
  const globalState = store.getState();

  useEffect(() =>{
    setIsLogged(globalState.isLogged);
  })

  return (
    <Provider store={store}>    
      {isLogged ? (
        <Layout>
           <Head>         
           </Head>
          <Component {...pageProps} />
        </Layout> ) 
        :
        (
          <Login></Login>
        )}
    </Provider>
  )
  
}

export default MyApp
