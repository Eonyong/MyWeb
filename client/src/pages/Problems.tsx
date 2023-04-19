import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../configs/firebase-config';
import { Box, Typography } from '@mui/material';
import { A11y, Navigation, Keyboard, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

interface QuestionData {
  questions: string[];
  answers: string[][];
  subject: string;
}

const Problems = () => {
  const { subject } = useParams<{ subject: string }>();
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[][]>([[]]);

  useEffect(() => {
    async function getQuestion() {
      if (subject) {
        const snapshot = await getDoc(doc(db, 'ElecQuestions', `${subject}`));
        const { questions, answers } = snapshot.data() as QuestionData;
        setQuestions(questions);
        setAnswers(answers);
      }
    }
    getQuestion();
  }, [subject]);

  const swiperOptions: SwiperProps = {
    loop: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-120%', 0, -500],
      },
      next: {
        shadow: true,
        translate: ['120%', 0, -500],
      },
    },
    modules: [A11y, Navigation, Keyboard, EffectCreative],
    navigation: true,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    style: { textAlign: 'start' },
  };

  function QuestLen() {
    return Object.values(questions).map(
      (question: string, index: number): JSX.Element => (
        <SwiperSlide key={index} style={{ display: 'flex', flexDirection: 'column' }}>
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
              )
            )}
          </Box>
        </SwiperSlide>
      )
    );
  }
  console.log(subject);
  return (
    <div>
      <Swiper {...swiperOptions} style={{ alignItems: 'center' }}>
        <Box sx={{ marginX: '5rem' }}>{QuestLen()}</Box>
      </Swiper>
    </div>
  );
};

export default Problems;
