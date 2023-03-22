import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

interface QuestionData {
  questions: string[];
  answers: string[][];
  subject: string;
}

const FlipCardFront = () => {
  const { subject } = useParams();
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[][]>([[]]);

  useEffect(() => {
    async function getQuestion() {
      const snapshot = await getDoc(doc(db, 'ElecQuestions', `${subject}`));
      const { questions, answers } = snapshot.data() as QuestionData;
      setQuestions(questions);
      setAnswers(answers);
    }
    getQuestion();
  }, [subject]);

  const swiperOptions = useMemo(
    () => ({
      modules: [Navigation, A11y, Keyboard],
      navigation: true,
      spaceBetween: 20,
      keyboard: {
        enabled: true,
      },
      sx: { textAlign: 'start' },
    }),
    [],
  );

  const QuestLen = (): JSX.Element[] => {
    return Object.values(questions).map(
      (question: string, index: number): JSX.Element => (
        <SwiperSlide
          key={index}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant="h6" marginY={2}>
            {question}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              padding: '2em',
              alignItems: 'start',
            }}
          >
            {answers[index]?.map(
              (element: string, elIndex: number): JSX.Element => (
                <Typography key={elIndex} sx={{ paddingY: 1 }}>
                  {element}
                </Typography>
              ),
            )}
          </Box>
        </SwiperSlide>
      ),
    );
  };

  return (
    <Swiper {...swiperOptions} style={{ alignItems: 'center' }}>
      <Box sx={{ marginX: '5rem' }}>{QuestLen()}</Box>
    </Swiper>
  );
};

export default FlipCardFront;
