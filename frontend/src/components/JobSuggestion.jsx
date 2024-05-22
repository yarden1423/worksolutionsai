import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chip, Typography, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ApartmentIcon from "@mui/icons-material/Apartment";
import JobDialog from "../components/JobDescriptionDialog";

export default function JobSuggestion(props) {
  const job = props.job;
  return (
    <div>
      <Card style={{ borderRadius: "10px", margin: "20px" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 20, marginBlock: 1 }}
            color="text.secondary"
            gutterBottom
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container justifyContent={"space-between"}>
              <Grid item>{job.companyName}</Grid>
              <Grid item>
                <ApartmentIcon />
              </Grid>
            </Grid>
          </Typography>
          <Grid container justifyContent={"center"}>
            <Grid xs={7} item>
              <Typography variant="h6" color="primary" textAlign={"center"}>
                {job.jobTitle}
              </Typography>
            </Grid>
          </Grid>

          <Typography
            variant="body2"
            sx={{ fontSize: 12 }}
            marginTop={"20px"}
            style={{ fontWeight: "bold" }}
          >
            כישורים נדרשים:
          </Typography>
          <Grid container justifyContent={"end"}>
            {job.skills.map((skill) => {
              return (
                <Grid item sx={3}>
                  <Chip
                    label={skill.name}
                    key={skill.name}
                    sx={{ marginRight: 1 }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <CardActions
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid container justifyContent={"space-around"}>
            <Grid item>
              <JobDialog job={job}></JobDialog>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontsize: 14 }}
                style={{ display: "flex", alignItems: "right" }}
                href={job.link}
                target="_blank"
              >
                גישה לאתר
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}
