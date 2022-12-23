import { useSession, signIn, signOut } from "next-auth/react";

export default function UserImage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={() => signOut()}
          src={session.user.image}
          alt="Picture of the user"
          width={200}
          height={200}
        />
      </>
    );
  }

  return (
    <>
      <button onClick={signIn}>Sign in</button>
    </>
  );
}
