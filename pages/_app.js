import "../styles/globals.css";
import { SessionProvider ,useSession,getSession} from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          {/*Colocamos el provider de chakra ui */}
          <ChakraProvider>  
            <Component {...pageProps} />
          </ChakraProvider>
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }) {
  const { data: session } = useSession()
  
  if (session) {
    if(session.user.email === "funkocdelu@gmail.com"){
        return (children)
    }
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>loading...</div>
}
export default MyApp;

