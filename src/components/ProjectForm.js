import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ProjectForm() {
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="projectNumber"
            name="projectNumber"
            label="Project Number"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Partnering with...."
            fullWidth
            autoComplete="Project Details-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="collectionAddress"
            name="collectionAddress"
            label="Collection Addresse"
            fullWidth
            autoComplete="Project Details-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            id="startDate"
            name="startDate"
            label="Start Date"
            fullWidth
            autoComplete="Project Details-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="endDate"
            name="endDate"
            label="End Date"
            fullWidth
            autoComplete="Project Details-level2"
            variant="standard"
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
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for Partner Details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
