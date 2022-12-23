import { useRouter } from "next/router";
import SearchHeaderOption from "./SearchHeaderOption";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/solid";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex space-x-6 justify-center">
      <SearchHeaderOption
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotoIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
