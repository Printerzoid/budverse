import { Box, FormControl, FormLabel, Paper, RadioGroup, Stack, TextField, Radio,FormControlLabel,Button, Typography } from "@mui/material";
import { FormEventHandler, FunctionComponent, useState } from "react";
import {QUESTIONS, Question} from "./questions";

interface Props {
  start: () => void;
}

const Component: FunctionComponent<Props> = ({start}) => {
  const onFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    start();
  };

  return (
    <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ height: "100%" }}>
            <Paper sx={{ p: { xs: 2, sm: 4 }, boxShadow: { xs: "none", sm: undefined }, height: { xs: "100%", sm: "auto" } }}>
                <Typography variant="h3" gutterBottom>
                  Budverse
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Welcome to Budverse, the friend generator.
                  <br/><br/>
                  If you ever feel down, make your own buddy to cheer you up with this simple quiz.
                  Now, let's see who you can make! 
                </Typography>
                <Button variant="contained" type="submit">Start</Button>
            </Paper>
        </Box>
  );
}

export default Component;