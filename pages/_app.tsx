import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(false);
  }, []);
  React.useEffect(() =>{
    setTimeout(() => setLoading(false), 4500);
  })
  return <div className={'bg-[#000]'}>
    {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
    ) : (
        <LoadingScreen />
    )}
  </div>
}

export default MyApp
