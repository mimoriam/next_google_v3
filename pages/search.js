import { useRouter } from "next/router";
import Head from "next/head";
import SearchHeaderOptions from "../components/SearchHeaderOptions";
import SearchResults from "../components/SearchResults";
import SearchImageResults from "../components/SearchImageResults";

export default function Search({ results }) {
  console.log(results);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      <SearchHeaderOptions />

      {router.query.searchType === "image" ? (
        <SearchImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${
      context.query.searchType && "&searchType=image"
    }&start=${startIndex}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
