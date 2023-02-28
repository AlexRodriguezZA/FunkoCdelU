import Layout from '../components/Generales/Layout'
import '../styles/globals.css'
import {SessionProvider} from "next-auth/react"


function MyApp({ Component, pageProps,session }) {
  return (
  
  <SessionProvider session={session}>
    <Layout>    
         <Component {...pageProps} />
    </Layout>
  </SessionProvider>
  
  
  )
}

export default MyApp
