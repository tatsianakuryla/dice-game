'use client';

import { Box, Slider, Typography } from '@mui/material';

import type { JSX, SyntheticEvent } from 'react';

interface GameSliderProperties {
  value: number;
  onChange: (value: number) => void;
}

export function GameSlider({ value, onChange }: GameSliderProperties): JSX.Element {
  const handleSliderChange = (_event: Event | SyntheticEvent, newValue: number | number[]) => {
    onChange(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const marks = [
    { value: 0 },
    { value: 20 },
    { value: 40 },
    { value: 60 },
    { value: 80 },
    { value: 100 },
  ];

  return (
    <Box
      sx={{
        width: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '5px',
      }}
    >
      <Slider
        aria-label="Threshold value"
        min={0}
        max={100}
        valueLabelDisplay="on"
        marks={marks}
        size="small"
        value={value}
        onChange={handleSliderChange}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '5px',
          color: 'text.secondary',
        }}
      >
        <Typography>0</Typography>
        <Typography>100</Typography>
      </Box>
    </Box>
  );
}
