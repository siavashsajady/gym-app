import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrolbar from './HorizontalScrolbar';
import Loader from './Loader.js';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography
        sx={{ fontSize: { lg: '34px', xs: '18px' }, ml: '20px' }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Similar{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          Target Muscle
        </span>{' '}
        exercises
      </Typography>
      <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrolbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
