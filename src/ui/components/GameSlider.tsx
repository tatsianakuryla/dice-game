'use client';

import { Box, Slider, Typography } from '@mui/material';

import type { JSX, SyntheticEvent } from 'react';

import { DICE_GAME_CONFIG } from '@/src/dice/dice.config';
import { UI_CONSTANTS } from '@/src/ui/constants/uiConstants';

interface GameSliderProperties {
  value: number;
  onChange: (value: number) => void;
}

export function GameSlider({ value, onChange }: GameSliderProperties): JSX.Element {
  const handleSliderChange = (_event: Event | SyntheticEvent, newValue: number | number[]) => {
    onChange(Array.isArray(newValue) ? newValue[0] : newValue);
  };

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
        min={DICE_GAME_CONFIG.minimumValue}
        max={DICE_GAME_CONFIG.maximumValue}
        valueLabelDisplay="on"
        marks={UI_CONSTANTS.SLIDER_MARKS}
        size="small"
        value={value}
        onChange={handleSliderChange}
        sx={{
          '& .MuiSlider-valueLabel': {
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '157%',
            letterSpacing: '0.1px',
            padding: '4px 12px 2px 12px',
            borderRadius: '4px',
          },
        }}
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
        <Typography>{DICE_GAME_CONFIG.minimumValue}</Typography>
        <Typography>{DICE_GAME_CONFIG.maximumValue}</Typography>
      </Box>
    </Box>
  );
}
