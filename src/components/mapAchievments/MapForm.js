import * as React from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./map.css"

export default function MapForm() {
  const [currentProj, setCurretProj] = React.useState();

  React.useEffect(() => {
    current();
  }, []);

  const current = async () => {
    const resp = await axios.get("https://xp-challenges.herokuapp.com/getAllAchievments");
    setCurretProj(resp.data);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <table id="customers">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentProj ? (
                currentProj.map((i, index) => (
                  <tr key={index}>
                    <td>{i.achievmentNumber}</td>
                    <td>{i.name}</td>
                    <td>{i.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>text1.1</td>
                  <td>text1.3</td>
                </tr>
              )}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
