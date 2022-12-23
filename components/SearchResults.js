import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <div>
      {/*<p className="mb-5 mt-3 text-sm text-gray-600">*/}
      {/*  About {results.searchInformation.formattedTotalResults} results (*/}
      {/*  {results.searchInformation.formattedSearchTime} seconds)*/}
      {/*</p>*/}

      {results.items?.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group">
            <a className="truncate text-sm" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="decoration-blue-800 group-hover:underline"
              href={result.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
