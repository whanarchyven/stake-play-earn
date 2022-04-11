import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
  }, []);
  React.useEffect(() =>{
    setTimeout(() => setLoading(false), 4500);
  })
  return <>
    {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
    ) : (
        <LoadingScreen />
    )}
  </>
}

export default MyApp
