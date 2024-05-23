import { CircularProgress, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";
import { useNavigate } from "react-router-dom";
import Emp from "./EmployeeSuggestions";

import mammoth from "mammoth";
import api from "../api/api";

const CVpage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [data, setData] = useState();

  const removeFile = (deletedFile) => {
    setFiles((oldFiles) => {
      return oldFiles.filter((file) => file.id !== deletedFile);
    });
  };

  const updateFiles = (newFiles) => {
    setFiles(() => {
      return newFiles;
    });
  };

  const useMammoth = async (file) => {
    try {
      setLoading(() => true);

      const extractedData = await mammoth.extractRawText({
        arrayBuffer: file[0].file,
      });

      const { data } = await api().workplaces.findWorkplace(
        extractedData.value
      );

      setData(() => data);

      setLoading(() => false);
    } catch (error) {
      console.log("error");
    }
  };

  const extractText = (file) => {
    useMammoth(file);
  };

  return (
    <>
      {data && (
        <Emp
          relevantJobs={data.map((s) => ({ ...s["obj"], match: s.match }))}
        ></Emp>
      )}
      {!data && (
        <Grid container justifyContent={"center"} borderColor={"black"}>
          <Grid item sx={{ my: 4 }} xs={12} container justifyContent={"center"}>
            <Grid item xs={6}>
              <Typography variant="h4" textAlign={"center"}>
                ברוכים הבאים ממפונים לכוכבים
              </Typography>
              <Typography variant="h7" textAlign={"start"}>
                <br></br>
                זיהינו בעיה בתעשייה ממנה נבע שמפונים מתקשים במציאת עבודה מזדמנת
                רחוק מהבית, וחלומינו היה להקל על התהליך ולאפשר לאחינו ואחיותינו
                מהצפון ומהעוטף גישה נוחה לעבודות.
                <br></br>
                <br></br>
                מטרת האתר להפוך את תהליך מציאת העבודה לפשוטה ככל הניתן, מה שנקרה
                בלחיצת כפתור.
                <br></br>
                <br></br>
                איך אנחנו עובדים? כל מה שעלייכם לעשות זה לטעון את קורות החיים,
                וכל השאר עלינו. נמצא עבורכם את העבודות המתאימות אליכם אישית
                <br></br>
              </Typography>
              <Typography variant="h10" color={"red"}>
                *הקורות חיים <strong> לא נשמרות </strong> אלא עוברות איבוד על
                ידי בינה מלאכותית
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={6} sx={{ paddingX: "10px", paddingTop: "30px" }}>
            <Dropzone
              actionButtons={{
                position: "after",
                abortButton: {},
                deleteButton: {
                  disabled: files.length === 0 || loading,
                  children: <Typography>מחק</Typography>,
                },
                uploadButton: {
                  onClick: () => {
                    extractText(files);
                  },
                  disabled: files.length === 0 || loading,
                  children: loading ? (
                    <CircularProgress size={22} />
                  ) : (
                    <Typography>העלה</Typography>
                  ),
                },
              }}
              onChange={updateFiles}
              value={files}
              label="הכניסו קורות חיים"
              behaviour={"replace"}
              accept=".docx"
            >
              {files.map((file) => (
                <FileMosaic
                  key={file.id}
                  {...file}
                  onDelete={removeFile}
                  info
                />
              ))}
            </Dropzone>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CVpage;
