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
import ProjectForm from "./ProjectForm";
import AchievmentForm from "./AchievmentForm";
import Review from "./Review";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { startDate } from "../../dataSlice";

function Copyright() {
  return <Typography variant="body2" color="text.secondary" align="center"></Typography>;
}

const steps = ["Project Details", "Achievment Details", "Summury"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProjectForm />;
    case 1:
      return <AchievmentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const data = useSelector((state) => state.data);
  const [activeStep, setActiveStep] = React.useState(0);

  const resp = axios.get("https://xp-challenges.herokuapp.com/getLastProjAdded");
  const projectNumber = resp.data.projectNumber;

  const dataForPost = {
    ...data,
    startDate: new Date(data.startDate),
    endDate: new Date(data.startDate),
    projectNumber
  };

  var config = {
    method: "post",
    url: "https://xp-challenges.herokuapp.com/addProject",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataForPost,
  };

  const handleNext = () => {
    console.log(activeStep + 1);
    if (activeStep + 1 === 3) {
      console.log("submit");
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add Project
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
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

                <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? "Add Project" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
