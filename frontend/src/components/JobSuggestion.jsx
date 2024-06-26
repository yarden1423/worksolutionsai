import ApartmentIcon from "@mui/icons-material/Apartment";
import { Chip, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import JobDialog from "../components/JobDescriptionDialog";
import "./styles.css";

export default function JobSuggestion({ job }) {
  return (
    <Card
      style={{ borderRadius: "10px", margin: "20px" }}
      className={"component"}
    >
      <div className={job.isEmployed ? "tengreen-top" : "tenred-top"}></div>
      <div
        className={job.isEmployed ? "tengreen-bottom" : "tenred-bottom"}
      ></div>
      <CardContent>
        {job.match ? (
          <Typography textAlign={"center"} mt={"15px"} fontSize={23}>
            אחוז ההתאמה הוא: {Math.round(job.match * 100) / 100}
          </Typography>
        ) : (
          ""
        )}

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
            <Grid item>{job.name}</Grid>
            <Grid item>
              <ApartmentIcon />
            </Grid>
          </Grid>
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: 12 }}
          marginTop={"20px"}
          style={{ fontWeight: "bold" }}
        >
          נושא:
        </Typography>
        <Grid container justifyContent={"start"} style={{ marginTop: "5px" }}>
          <Chip
            label={job.theme ? job.theme.name : "אין נושא"}
            key={job.theme ? job.theme.name : "אין נושא"}
            sx={{ marginRight: 1 }}
          />
        </Grid>

        <Typography
          variant="body2"
          sx={{ fontSize: 12 }}
          marginTop={"20px"}
          style={{ fontWeight: "bold" }}
        >
          כישורים נדרשים:
        </Typography>
        <Grid container justifyContent={"start"}>
          {job.demandedSkills.map((skill) => {
            return (
              <Grid item style={{ marginTop: "5px", marginRight: "10px" }}>
                <Chip label={skill.name} key={skill.name} />
              </Grid>
            );
          })}
        </Grid>
        <Typography
          variant="body2"
          sx={{ fontSize: 12 }}
          marginTop={"20px"}
          style={{ fontWeight: "bold" }}
        >
         יצירת קשר: {job.phoneNumber}
        </Typography>
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
              href={job.url}
              target="_blank"
            >
              גישה לאתר
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
