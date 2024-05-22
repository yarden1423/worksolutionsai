import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

const CVpage = () => {
  const [files, setFiles] = useState([]);

  const removeFile = (e) => {
    console.log(e);
  };

  const updateFiles = (e) => {
    console.log(e);
  };

  return (
    <Grid container justifyContent={"center"} borderColor={"black"}>
      <Grid item sx={{ my: 4 }} xs={12} container justifyContent={"center"}>
        <Grid item xs={6}>
          <Typography variant="h4" textAlign={"center"}>
            ברוכים הבאים ממפונים לכוכבים
          </Typography>
          <Typography variant="h6" textAlign={"start"}>
            <br></br>
            זיהינו בעיה בתעשייה ממנה נבע שמפונים מתקשים במציאת עבודה מזדמנת רחוק
            מהבית, וחלומינו היה להקל על התהליך ולאפשר לאחינו ואחיותינו מהצפון
            ומהעוטף גישה נוחה לעבודות.
            <br></br>
            <br></br>
            מטרת האתר להפוך את תהליך מציאת העבודה לפשוטה ככל הניתן, מה שנקרה
            בלחיצת כפתור.
            <br></br>
            <br></br>
            איך אנחנו עובדים? כל מה שעלייכם לעשות זה לטעון את קורות החיים, וכל
            השאר עלינו. נמצא עבורכם את העבודות המתאימות אליכם אישית
          </Typography>
          <Typography variant="h9" color={"red"}>
            *הקורות חיים <strong> לא נשמרות </strong> אלא עוברות איבוד על ידי
            בינה מלאכותית
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={6} sx={{ paddingX: "10px" }}>
        <Dropzone onChange={updateFiles} value={files}>
          {files.map((file) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))}
        </Dropzone>
      </Grid>
    </Grid>
  );
};

export default CVpage;
