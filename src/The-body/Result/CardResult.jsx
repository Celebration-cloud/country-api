import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardValue from "./CardValue";
function CardResult({item, turn}) {
  return (
    <CardContent className="contVal">
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <CardValue item={item} turn={turn} />
    </CardContent>
  );
}

export default CardResult
