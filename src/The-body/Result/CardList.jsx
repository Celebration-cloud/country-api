import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardResult from "./CardResult";
import './ResultPage.css';
function CardList({item, turn}) {
  return (
    <Card
      className="cardValue"
      style={
        turn === true
          ? {
              backgroundColor: "hsl(209, 23%, 22%)",
              color: "white",
            }
          : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
      }
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
          <CardMedia component="img" height="140" src={item.flag} alt="" />
          {/* <img src={item.flag.svg} height="140" alt="" /> */}
          <CardResult item={item} turn={turn} />
        </CardActionArea>
      
    </Card>
  );
}

export default CardList
