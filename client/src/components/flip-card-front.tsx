import * as React from 'react';
import { useState, useEffect, ReactElement, useMemo } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Keyboard } from 'swiper';
import { db } from '../firebase-config';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
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
  const [answers, setAnswers] = useState<string[][]>([]);

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
      onSlideChange: () => console.log('slide change'),
      sx: { textAlign: 'start' },
    }),
    [],
  );

  const QuestLen = (): ReactElement[] => {
    return Object.values(questions).map(
      (question: string, index: number): JSX.Element => (
        <SwiperSlide key={index}>
          <Typography
            variant="h6"
            sx={{ paddingX: '4rem', marginBottom: '5em' }}
          >
            {question}
          </Typography>
          <div
            style={{
              paddingInline: '4rem',
              alignItems: 'center',
              height: 'max-content',
            }}
          >
            {answers[index]?.map(
              (element: string, elIndex: number): JSX.Element => (
                <Typography key={elIndex} sx={{ paddingY: 1 }}>
                  {element}
                </Typography>
              ),
            )}
          </div>
        </SwiperSlide>
      ),
    );
  };

  return (
    <Swiper {...swiperOptions}>
      <Box sx={{ marginX: '5rem' }}>{QuestLen()}</Box>
      <Typography
        sx={{ textAlign: 'center' }}
        paddingY={3}
        slot="container-start"
      >
        {subject}
      </Typography>
    </Swiper>
  );
};

export default FlipCardFront;
