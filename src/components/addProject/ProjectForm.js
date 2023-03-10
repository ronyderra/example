import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

export default function ProjectForm() {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [value1, setValue1] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
    dispatch(startDate(String(newValue)));
  };

  const handleChange1 = (newValue) => {
    setValue1(newValue);
    dispatch(endDate(String(newValue)));
  };

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Project Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Project Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => dispatch(name(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Partnering with....(description)"
            fullWidth
            autoComplete="Project Details-line1"
            variant="standard"
            onChange={(e) => dispatch(description(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="collectionAddress"
            name="collectionAddress"
            label="Collection address for bridge transactions"
            fullWidth
            autoComplete="Project Details-line2"
            variant="standard"
            onChange={(e) => dispatch(collectionAddress(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="twitterPostId"
            name="twitterPostId"
            label="Twitter Post Id"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => dispatch(twitterPostId(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="twitterPartnerId"
            name="twitterPartnerId"
            label="Twitter Partner Id"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => dispatch(twitterPartnerId(e.target.value))}
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={12} sm={6}>
            <DateTimePicker
              required
              label="Start Date"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateTimePicker
              required
              label="End Date"
              value={value1}
              onChange={handleChange1}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </LocalizationProvider>
      </Grid>
    </React.Fragment>
  );
}
