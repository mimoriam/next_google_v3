import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              Sign In with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
