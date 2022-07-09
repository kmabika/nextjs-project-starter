// pages/_app.js
import type { AppProps } from "next/app";
import Provider from "components/Provider";

//Import fonts here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
