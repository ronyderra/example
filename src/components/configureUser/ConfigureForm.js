import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import {
  telegramUsername,
  projectNumber,
  progressNumber,
  completed,
  achievmentNumber,
} from "../../store/configureUserSlice";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

export default function ConfigureForm() {
  const dispatch = useDispatch();
  const [currentProj, setCurretProj] = React.useState("");

  React.useEffect(() => {
    current();
  }, []);

  const current = async () => {
    const resp = await axios.get("https://xp-challenges.herokuapp.com/getLastProjAdded");
    setCurretProj(Number(resp.data.projectNumber));
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>current project number : {currentProj}</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telegramUsername"
            name="telegramUsername"
            label="Telegram Username"
            fullWidth
            variant="standard"
            onChange={(e) => dispatch(telegramUsername(e.target.value))}
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
            onChange={(e) => dispatch(achievmentNumber(e.target.value))}
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
            onChange={(e) => dispatch(projectNumber(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="progressNumber"
            name="progressNumber"
            label="Progress Number - (1 => 5)"
            fullWidth
            variant="standard"
            onChange={(e) => dispatch(progressNumber(e.target.value))}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" />}
            label="completed"
            onChange={(e) => dispatch(completed({ checked: e.target.checked }))}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
