import Image from "next/image";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function MainBody() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    searchBar: "",
  });

  const onSubmit = async (data) => {
    console.log(data);
    await router.push(`/search?term=${data.searchBar.trim()}`);
  };

  return (
    <main>
      <div className="mt-36 flex h-auto w-auto flex-col items-center">
        <Image
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          alt="Google Image"
          width={400}
          height={200}
          priority={true}
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center justify-center"
        >
          <div className="mt-1 flex w-1/3 rounded-full shadow-sm">
            <div className="relative flex flex-grow items-stretch rounded-full focus-within:z-10 hover:shadow-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                id="text"
                className="block w-full rounded-r-full rounded-l-full border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("searchBar", { required: "This is required" })}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <MicrophoneIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <p>{errors.searchBar?.message}</p>
          <div className="flex items-center justify-center space-x-4 p-3">
            <input type="submit" value="Google Search" className="layer_btn" />
            <input
              type="submit"
              value="I'm Feeling Lucky"
              className="layer_btn"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
