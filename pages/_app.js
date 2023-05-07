import "../styles/globals.css";
import { SessionProvider ,useSession} from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react'
import Layout_admin from "../components/Dashboard_components/Layout_admin";
function MyApp({ Component, pageProps, session }) {

  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          {/*Colocamos el provider de chakra ui */}
          <ChakraProvider>  
            <Layout_admin>
              <Component {...pageProps} />
            </Layout_admin>
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
}
export default MyApp;

