import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Subjects: string[] = [
  'Accumulator',
  'ElecGongSa',
  'ElecMotor',
  'ElecWire',
  'Ground',
  'Lights',
  'PowerSubstation',
  'Transformers',
];

const SubjectLayout = (props: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column" justifyContent="center">
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Subjects.map((subject: string, index) => (
          <Grid xs={2} sm={4} md={3} key={index}>
            <Item onClick={() => navigate(`${pathname}/${subject}`)}>{subject}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SubjectLayout;
