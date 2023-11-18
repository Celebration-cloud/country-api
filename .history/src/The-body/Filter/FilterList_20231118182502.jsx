import FormControl from "@mui/material/FormControl"
import  InputLabel  from "@mui/material/InputLabel"
import  Select  from "@mui/material/Select";
import  MenuItem  from "@mui/material/MenuItem";
import { useState } from "react";

export default function FilterList({handleMapping, turn}) {
  const [region, setRegion] = useState("");
  const handleRegion = (e) => {
    const {value} = e.target
    setRegion(value);
    handleMapping(value)
  }
  
  return (
    <>
      <FormControl sx={{ width: 250 }}>
        <InputLabel
          style={
            turn === true
              ? {
                  color: "white",
                }
              : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
          }
          id="demo-simple-select-label"
        >
          <sFilter by Region
        </InputLabel>
        <Select
          style={
            turn === true
              ? {
                  backgroundColor: "hsl(209, 23%, 22%)",
                  color: "white",
                  borderRadius: "10px",
                }
              : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
          }
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by Region"
          name="region"
          value={region}
          onChange={handleRegion}
        >
          <MenuItem
            style={
              turn === true
                ? {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                    marginTop: "-10px",
                  }
                : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
            }
            value="All Region"
          >
            All Region
          </MenuItem>
          <MenuItem
            style={
              turn === true
                ? {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                  }
                : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
            }
            value="Asia"
          >
            Asia
          </MenuItem>
          <MenuItem
            style={
              turn === true
                ? {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                  }
                : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
            }
            value="Europe"
          >
            Europe
          </MenuItem>
          <MenuItem
            style={
              turn === true
                ? {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                  }
                : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
            }
            value="Polar"
          >
            Polar
          </MenuItem>
          <MenuItem
            style={
              turn === true
                ? {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                  }
                : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
            }
            value="Africa"
          >
            Africa
          </MenuItem>
          <MenuItem
            style={
              turn === true
                ? {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                  }
                : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
            }
            value="Americas"
          >
            Americas
          </MenuItem>
          <MenuItem
            style={
              turn === true
                ? {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                    marginBottom: "-8px",
                  }
                : { backgroundColor: "white", color: "hsl(207, 26%, 17%)" }
            }
            value="Oceania"
          >
            Oceania
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

