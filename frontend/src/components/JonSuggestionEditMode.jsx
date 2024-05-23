import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chip, Typography, Grid, TextField } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useState } from "react";
import JobDialogEdit from "./JobDescriptionDialogEditMode";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function JobSuggestionEdit({job}) {
  const [skills, setSkills] = useState();
  const [theme, setTheme] = useState();
  const [description, setDescription] = useState();
  const [address, setAddress] = useState();
  const [url, setUrl] = useState();
  const [name, setName] = useState();

  const [isInEdit, setIsInEdit] = useState(false);

  function changeEditState(){
    //Change at DB
    setIsInEdit(!isInEdit);
  }

  return (
    <Card style={{ borderRadius: "10px", margin: "20px" }}>
        <Button onClick={()=>changeEditState()}>
          {
          isInEdit ? <CheckCircleOutlineIcon/> : <ModeEditIcon/>
          }
        </Button>
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
            <Grid item>
              <TextField
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                fontSize: 20,
                marginBlock: 1,
                gutterBottom: 1,
                color:"GrayText",
              }}
              defaultValue = {job.name}
              placeholder={job.name}
              disabled = {!isInEdit}
              >
              </TextField>
              </Grid>
            <Grid item>
              <ApartmentIcon />
            </Grid>
          </Grid>
        </Typography>
        <Grid container justifyContent={"center"}>
          <Grid xs={7} item>
            <Typography variant="h6" color="primary" textAlign={"center"}>
            <TextField
              style={{
                variant:"h6",
                textAlign:"center",
                color:"primary",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                fontSize: 20,
                alignContent:"center"
              }}
              defaultValue = {job.theme.name}
              placeholder={job.theme.name}
              disabled = {!isInEdit}
              >
              </TextField>
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
                  key={skill._id}
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
            <JobDialogEdit job={job} isInEdit={isInEdit}></JobDialogEdit>
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
