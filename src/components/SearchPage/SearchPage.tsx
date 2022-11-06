import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import Article from "../Article/Article";
import { List } from "@mui/material";
import { ArticleObj } from "../../helpers/interfaces";
const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (keyword) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${keyword}&from=2022-11-01&language=en&sortBy=popularity&apiKey=${API_KEY}`
        )
        .then((data) => {
          setArticles(data.data.articles);
        });
    }
  }, [keyword]);

  // 5. Na zmiennej stanowej (tak naprawdę liście) articles wywołaj metodę .map(), w niej zwracaj komponent Article przekazując jako props artykuł po którym aktualnie iterujesz
  return (
    <>
      <SearchForm setKeyword={setKeyword} />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          alignContent: "center",
        }}
      >
        {articles.map((art: ArticleObj) => {
          return <Article art={art} key={art.title} />;
        })}
      </List>
    </>
  );
};

export default SearchPage;
