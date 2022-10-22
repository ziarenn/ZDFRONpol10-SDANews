import { useState, useEffect } from "react";
import { Typography, List } from "@mui/material";
import { API_KEY } from "../../helpers/helpers";
import axios from "axios";
const HomePage = () => {
  // todaysArticles
  const [todaysArticles, setTodaysArticles] = useState([]);

  // tu sciaganie sa dane z API

  useEffect(() => {
    const today = new Date();
    console.log(today);
    const day = today.getDate(); // getDay => dzień tygodnia (sobota), getDate => dzień miasiąca (21)
    const month = today.getMonth(); // getMonth => zwraca numer miesiąca (miesiące są indeksowane od zera, styczeń = 0, luty = 1)
    const year = today.getFullYear(); // getFullYear => rok (2022)

    // 2022-10-22, 2022-01-20
    const date = `${year}-${month < 9 ? `0${month + 1}` : month + 1}-${
      day - 1
    }`;
    // fetch...
    // axios vs fetch, React Query?
    axios.get(
      `https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
    );

    // cleanup function
    // return () => {}
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", my: "0.8rem" }}
      >
        Today's hottest news:
      </Typography>
    </>
  );
};

export default HomePage;
