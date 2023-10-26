import Typography from "@mui/material/Typography";
function CardValue({turn, item}) {
  return (
    <Typography
      style={
        turn === true
          ? {
              color: "white",
            }
          : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
      }
      variant="body2"
      color="text.secondary"
    >
      <span>Population: {item.population}</span>
      <br />
      <span>Region: {item.region}</span>
      <br />
      <span>Capital: {item.capital}</span>
    </Typography>
  );
}

export default CardValue
