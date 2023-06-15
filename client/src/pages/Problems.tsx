import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../configs/firebase-config';
import { Divider, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/swiper.min.css';
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
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    async function getQuestion() {
      if (subject) {
        const snapshot = await getDoc(doc(db, 'ElecQuestions', `${subject}`));
        const { questions, answers } = snapshot.data() as QuestionData;
        setQuestions(questions);
        setAnswers(answers);
        setWindowWidth(window.innerWidth);
      }
    }
    getQuestion();
  }, [subject]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        navigation
        loop
        modules={[Navigation]}
        style={{ width: windowWidth < 600 ? windowWidth - 60 : windowWidth - 300 }}
      >
        {questions
          ? Object.values(questions).map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <Typography paragraph sx={{fontSize: "1.3rem"}}>{value}</Typography>
                  <Divider />
                  {answers[index]
                    ? answers[index].map((ans, ind) => (
                        <Typography key={ind} sx={{ paddingY: '1rem', fontSize: "1rem" }}>
                          {ans}
                        </Typography>
                      ))
                    : null}
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </>
  );
};

export default Problems;
