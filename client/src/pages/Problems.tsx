import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../configs/firebase-config';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import { A11y, Navigation, Keyboard, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

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
    effect: 'fade',
    modules: [A11y, Navigation, Keyboard, EffectFade],
    navigation: true,
    keyboard: {
      enabled: true,
    },
  };

  function QuestLen() {
    return Object.values(questions).map(
      (question: string, index: number): JSX.Element => (
        <SwiperSlide
          key={index}
          style={{
            fontSize: '18px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>{question}</Typography>
          <Divider />
          <List>
            {answers[index]?.map(
              (element: string, elIndex: number): JSX.Element => (
                <ListItem key={elIndex}>
                  <Typography>{element}</Typography>
                </ListItem>
              )
            )}
          </List>
        </SwiperSlide>
      )
    );
  }
  return (
    <Box>
      <Swiper
        {...swiperOptions}
        style={{
          width: window.innerWidth > 300 ? window.innerWidth - 300 : window.innerWidth - 60,
        }}
      >
        <Box>{QuestLen()}</Box>
      </Swiper>
    </Box>
  );
};

export default Problems;
