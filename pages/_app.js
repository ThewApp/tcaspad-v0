import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // html lang attribute
  React.useEffect(() => {
    document.documentElement.lang = pageProps.lang || "en";
  });

  return <Component {...pageProps} />;
}

export default MyApp;
