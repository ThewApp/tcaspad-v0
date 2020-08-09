import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // html lang attribute
  useEffect(() => {
    document.documentElement.lang = pageProps.lang || "en";
  });

  return <Component {...pageProps} />;
}

export default MyApp;
