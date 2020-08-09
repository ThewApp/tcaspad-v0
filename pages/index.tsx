import Head from "next/head";

import Twemoji from "../components/Twemoji";

export default function Home() {
  return (
    <>
      <Head>
        <title>TCASPad</title>
      </Head>

      <main className="container mx-auto">
        <h1 className="text-5xl my-8 text-center">
          <Twemoji>⚡️</Twemoji>Coming soon<Twemoji>⚡️</Twemoji>
        </h1>
      </main>
    </>
  );
}
