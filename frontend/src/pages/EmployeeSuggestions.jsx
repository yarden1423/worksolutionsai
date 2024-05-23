import { Typography } from "@mui/material";
import JobSuggestion from "../components/JobSuggestion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Emp({ relevantJobs }) {
  return (
    <Grid>
      <Typography color="primary" align="center" fontSize={70}>
        תוצאות חיפוש
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} sx={{ paddingX: "20px" }}>
          {relevantJobs.map((job) => {
            return (
              <Grid item xs={3} key={job._id} style={{ alignItems: "center" }}>
                <Typography>{job.match}</Typography>
                <JobSuggestion key={job._id} job={job}></JobSuggestion>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
}
