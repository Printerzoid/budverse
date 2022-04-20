import { Box, FormControl, FormLabel, Paper, RadioGroup, Stack, Radio, FormControlLabel, Button } from "@mui/material";
import { FormEventHandler, FunctionComponent, useState } from "react";
import { QUESTIONS, Question } from "./questions";

interface Props {
  questionNumber: number;
  nextQuestion: () => void;
  question: Question
  answer: number;
  setAnswer: (answer: number) => void;
}

const Component: FunctionComponent<Props> = ({ questionNumber, nextQuestion, question, answer, setAnswer }) => {
  const onFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    nextQuestion();
  };

  const shuffle = (array: number[]) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const [order] = useState<number[]>(shuffle(new Array(question.options.length).fill(0).map((_, ind) => ind)));

  return (
    <Box component="form" onSubmit={onFormSubmit} noValidate sx={{ height: "100%" }}>
      <Paper sx={{ p: { xs: 2, sm: 4 }, boxShadow: { xs: "none", sm: undefined }, height: { xs: "100%", sm: "auto" } }}>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{QUESTIONS[questionNumber].prompt}</FormLabel>
            <RadioGroup
              value={answer}
              onChange={(event) => { setAnswer(Number(event.target.value)); }}
            >
              {order.map((ind) =>
                <FormControlLabel key={question.options[ind]} value={ind} control={<Radio />} label={question.options[ind]} />
              )}
            </RadioGroup>
          </FormControl>
          <Button variant="contained" type="submit">Next</Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Component;