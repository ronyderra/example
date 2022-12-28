import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MapForm from "./MapForm";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { startDate } from  "../../store/dataSlice";

function Copyright() {
  return <Typography variant="body2" color="text.secondary" align="center"></Typography>;
}

const steps = ["Project Details", "Achievment Details", "Summury"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <MapForm />;
    default:
      throw new Error("Unknown step");
  }
}
const theme = createTheme();

export default function MapAchievments() {
  const data = useSelector((state) => state.configureUser);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleSubmit = () => {
    console.log(activeStep + 1);
    console.log(data);
    var config = {
      method: "patch",
      url: "https://xp-challenges.herokuapp.com/updateUserAchievment",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Achievments
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}></Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Project Added
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
