import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <title>Hello world</title>
        <meta
          key="description"
          name="description"
          content="Example Hello world with netxjs"
        />
        <meta name="robots" content="all" />
      </Head>
      <Component />
    </>
  );
}
