import { Grid, Typography } from "@mui/material";

const CVpage = () => {
  return (
    <Grid container justifyContent={"center"} borderColor={"black"}>
      <Grid item sx={{ my: 4 }} xs={5}>
        <Typography variant="h3" textAlign={"center"}>
          ברוכים הבאים ממפונים לכוכבים
        </Typography>
        <Typography variant="h5" textAlign={"start"}>
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
        <Typography variant="h6" color={"red"}>
          *הקורות חיים <strong> לא נשמרות </strong> אלא עוברות איבוד על ידי בינה
          מלאכותית
        </Typography>
      </Grid>

      <Grid item> </Grid>
    </Grid>
  );
};

export default CVpage;
