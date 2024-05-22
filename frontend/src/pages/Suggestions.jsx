import { Typography } from "@mui/material";
import JobSuggestion from "../components/JobSuggestion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Suggestion({ jobs }) {
  return (
    <Grid>
      <Typography color="primary" align="center" fontSize={70}>
        העבודות שלי
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} sx={{ paddingX: "20px" }}>
          {jobs.map((job) => {
            return (
              <Grid item xs={3} key={job.ID} style={{ alignItems: "center" }}>
                <JobSuggestion key={job.ID} job={job}></JobSuggestion>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
}
