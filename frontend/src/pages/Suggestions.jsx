import { Button, IconButton, Typography } from "@mui/material";
import JobSuggestion from "../components/JobSuggestion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import api from "../api/api";

export default function Suggestion({ isAdmin }) {
  const [jobs, setJobs] = useState([
    {
      _id: 1,
      name: "Redhat",
      description:
        "אני מחפש אנשים שרוצים לתת את כל מה שיש להם, אוהבים לעבוד ועובדים על אהבה, מחפשים את האחד ומוכנים לחכות",
      location: [51.505, -0.09],
      demandedSkills: [
        { _id: 1, name: "Java" },
        { _id: 2, name: "Python" },
        { _id: 12, name: "C++" },
      ],
      theme: {
        _id: 5,
        name: "תכנות",
      },
      url: "https://www.youtube.com/watch?v=HxD5La2BlwQ",
      isEmployed: true,
    },
  ]);

  useEffect(() => {
    const getAllWorkplaces = async () => {
      try {
        const { data } = await api().workplaces.getAll();
        setJobs(() => data);
      } catch {
        console.log("error");
      }
    };

    getAllWorkplaces();
  }, []);

  return (
    <Grid>
      <Typography color="primary" align="center" fontSize={70}>
        העבודות שלי
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} sx={{ paddingX: "20px" }}>
          {jobs.map((job) => {
            return (
              <Grid item xs={3} key={job._id} style={{ alignItems: "center" }}>
                <JobSuggestion key={job._id} job={job}></JobSuggestion>
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
                width: "295px",
                height: "270px",
                border: "10px",
                borderColor: "black",
                borderRadius: "10px",
                borderBlock: "1",
                boxShadow:
                  "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Button
                style={{ position: "absolute", top: "110px", right: "120px" }}
                onClick={() => {
                  setJobs((oldJobs) => {
                    return [
                      ...oldJobs,
                      {
                        _id: "",
                        jobTitle: "",
                        description: "",
                        demandedSkills: [],
                        theme: { _id: "", name: "" },
                        companyName: "",
                        location: "",
                        contactInfo: "",
                        link: "",
                      },
                    ];
                  });
                }}
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
