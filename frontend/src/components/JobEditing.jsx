import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chip, Typography, Grid, TextField } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CallIcon from "@mui/icons-material/Call";
import JobDialog from "./JobDescriptionDialog";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function JobSuggestion(props) {

  const [isEditing, setEditing] = useState(false);

  function setEditing(){
    //change DB
    isEditing = !isEditing;
  }

  const job = props.job;
  return (
    <div>
        <Button onClick = {()=>{setEditing}}>
          {
            isEditing ? <CheckCircleOutlineIcon/> : <ModeEditIcon/>
          }
        </Button>
      <Card sx={{}} style={{ borderRadius: "10px", margin: "20px" }}>
        <CardContent>
          <TextField
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
          </TextField>
          <Grid container justifyContent={"center"}>
            <Grid xs={7} item>
              <TextField variant="h6" color="primary" textAlign={"center"}>
                {job.jobTitle}
              </TextField>
            </Grid>
          </Grid>

          <TextField
            variant="body2"
            sx={{ fontSize: 12 }}
            marginTop={"20px"}
            style={{ fontWeight: "bold" }}
          >
            כישורים נדרשים:
          </TextField>
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
