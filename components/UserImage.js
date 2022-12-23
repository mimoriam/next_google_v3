import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function UserImage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Image
          onClick={() => signOut()}
          src={session.user.image}
          alt="Picture of the user"
          width={35}
          height={35}
        />
      </>
    );
  }

  return (
    <>
      <button onClick={signIn} className="layer_btn bg-blue-500 text-white">Sign in</button>
    </>
  );
}
