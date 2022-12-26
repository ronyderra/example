import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function PaymentForm() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await axios.get("https://xp-challenges.herokuapp.com/getAllAchievments");
    console.log(data.data);
    setData(data.data);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} md={6} key={index}>
              <TextField
                required
                id={item.achievmentNumber}
                label={item.name}
                helperText={item.description}
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
