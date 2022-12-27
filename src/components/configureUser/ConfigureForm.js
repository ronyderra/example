import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import {
  name,
  description,
  projectNumber,
  twitterPartnerId,
  twitterPostId,
  endDate,
  startDate,
  collectionAddress,
} from "../../store/dataSlice";

export default function ConfigureForm() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telegramUsername"
            name="telegramUsername"
            label="Telegram Username"
            fullWidth
            variant="standard"
            onChange={(e) => dispatch(name(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="achievmentNumber"
            name="achievmentNumber"
            label="Achievment Number"
            fullWidth
            variant="standard"
            onChange={(e) => dispatch(projectNumber(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="projectNumber"
            name="projectNumber"
            label="Project Number"
            fullWidth
            variant="standard"
            onChange={(e) => dispatch(description(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="progressNumber"
            name="progressNumber"
            label="Progress Number - (1 => 5)"
            fullWidth
            variant="standard"
            onChange={(e) => dispatch(collectionAddress(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="completed"
            name="completed"
            label="completed - (true or false)"
            fullWidth
            variant="standard"
            onChange={(e) => dispatch(twitterPostId(e.target.value))}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
