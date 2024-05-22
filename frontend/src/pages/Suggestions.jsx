import { Button, IconButton, Typography } from "@mui/material";
import JobSuggestion from "../components/JobSuggestion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

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
          <Grid
            item
            xs={3}
            style={{
              alignItems: "center",
            }}
            container
            justifyContent={"center"}
          >
            <Grid
              item
              style={{
                position: "relative",
                width: "285px",
                height: "235px",
                border: "10px",
                borderColor: "black",
                borderRadius: "10px",
                borderBlock: "1",
                "box-shadow":
                  "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Button
                style={{ position: "absolute", top: "90px", right: "120px" }}
              >
                <AddIcon fontSize="large" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
