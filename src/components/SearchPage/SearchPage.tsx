import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <>
      <SearchForm setKeyword={setKeyword} />
    </>
  );
};

export default SearchPage;
