import Head from "next/head";
import Header from "../components/Header";

// Installed Tailwind
// npm i -D prettier-plugin-tailwindcss
// npm install next-auth

export default function Home() {
  return (
    <>
      <Head>
        <title>Google v3</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <main></main>

      {/* Footer */}
    </>
  );
}
