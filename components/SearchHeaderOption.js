import { useRouter } from "next/router";

export default function SearchHeaderOption({ title, selected, Icon }) {
  const router = useRouter();

  function selectTab(title) {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  }

  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent pb-3 hover:border-blue-500 hover:text-blue-500 ${
        selected && "border-blue-500 text-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
