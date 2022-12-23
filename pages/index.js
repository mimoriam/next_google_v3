import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import MainBody from "../components/MainBody";

// Installed Tailwind
// npm i -D prettier-plugin-tailwindcss
// npm install next-auth
// npm install -D @tailwindcss/forms
// npm install @heroicons/react
// npm install react-hook-form
// npm i html-react-parser

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Google v3</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <MainBody />

      {/* Footer */}
      <Footer />
    </>
  );
}
