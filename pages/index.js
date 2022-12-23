import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

// Installed Tailwind
// npm i -D prettier-plugin-tailwindcss
// npm install next-auth
// npm install -D @tailwindcss/forms
// npm install @heroicons/react

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
      <main>
        <div className="mt-36 flex flex-col items-center">
          <Image
            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
            alt="Google Image"
            width={400}
            height={200}
          />

          <div className="w-1/3">
            <div className="mt-1 flex rounded-full shadow-sm">
              <div className="relative flex flex-grow items-stretch rounded-full focus-within:z-10 hover:shadow-lg">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-r-full rounded-l-full border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <MicrophoneIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 p-3">
            <button className="layer_btn">Google Search</button>
            <button className="layer_btn">I&apos;m Feeling Lucky</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
