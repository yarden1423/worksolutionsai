import JobSuggestion from "../components/JobSuggestion";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Suggestion({ jobs }) {
  return (
    <div>
      <div
        style={{
          borderRadius: "10px",
          margin: "10p",
          fontSize: "70px",
          color: "purple",
          borderBottom: "4px solid purple",
          alignItems: "center",
          textAlign: "center",
          margin: "20px",
          fontweight: "bold",
        }}
      >
        עבודות בשבילך
      </div>

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
    </div>
  );
}
