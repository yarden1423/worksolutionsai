import React, { useState } from "react";
import { makeStyles } from "@mui/material";
import {
  Paper,
  Grid,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  Fab,
} from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      content: "אני ירדן נזרצקי ממש שבוע 3 ו4",
      sender: "customer",
      time: "9:01",
    },
    {
      content: "?היי טמקס ווין, איך אוכל לעזור עם ה5 שלך",
      sender: "bot",
      time: "9:02",
    },
    { content: "אני צריך עבודה 5קיי", sender: "customer", time: "9:05" },
  ]);

  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.chatSection}>
      <Grid
        container
        component={Paper}
        item
        justifyContent="center"
        xs={8}
        direction={"column"}
      >
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            {messages &&
              messages.map((message, index) => {
                return (
                  <ListItem key={index}>
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText
                          align={message.sender === "bot" ? "left" : "right"}
                          primary={message.content}
                        ></ListItemText>
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText
                          align={message.sender === "bot" ? "left" : "right"}
                          secondary={message.time}
                        ></ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                );
              })}
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid item xs={1} align="right">
              <Fab color="primary" aria-label="add">
                {/* <SendIcon /> */}
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chat;
