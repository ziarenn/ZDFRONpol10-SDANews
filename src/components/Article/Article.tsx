import { useState, useContext } from "react";
import { ArticleProps } from "../../helpers/interfaces";
import { Card, ListItem, ListItemText } from "@mui/material";
import { authContext } from "../../helpers/authContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Article: React.FC<ArticleProps> = ({ art }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const iconStyles = {
    float: "right",
    mr: "3px",
    my: "3px",
    color: liked ? "red" : "black",
  };
  const loggedIn = useContext(authContext);

  // 6. Przy kliknięciu na FavoriteBorderIcon, ustaw stan liked na true, przy kliknięciu na FavoriteIcon ustaw stan liked na false
  return (
    <ListItem>
      <Card variant="outlined" sx={{ mb: "10px" }}>
        <a href={art.url} target="__blank" style={{ textDecoration: "none" }}>
          <img src={art.urlToImage} alt={art.title} style={{ width: "100%" }} />
          <ListItemText sx={{ color: "black" }}>{art.title}</ListItemText>
        </a>
        {loggedIn && (
          <>
            {liked ? (
              <FavoriteIcon sx={iconStyles} onClick={() => setLiked(false)} />
            ) : (
              <FavoriteBorderIcon
                sx={iconStyles}
                onClick={() => setLiked(true)}
              />
            )}
          </>
        )}
      </Card>
    </ListItem>
  );
};

export default Article;

// const x = {
//   y: a ? 'b' : 'c'
// }
