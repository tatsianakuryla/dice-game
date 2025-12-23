'use client';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import type { ChangeEvent, JSX } from 'react';

import { ComparisonDirection } from '@/src/dice/dice.types';

interface ComparisonDirectionRadioButtonsProperties {
  value: ComparisonDirection;
  onChange: (value: ComparisonDirection) => void;
}

export function ComparisonDirectionRadioButtons({
  value,
  onChange,
}: ComparisonDirectionRadioButtonsProperties): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value as ComparisonDirection;
    onChange(nextValue);
  };

  return (
    <FormControl>
      <RadioGroup row value={value} onChange={handleChange}>
        <FormControlLabel value={ComparisonDirection.Under} control={<Radio />} label="Under" />
        <FormControlLabel value={ComparisonDirection.Over} control={<Radio />} label="Over" />
      </RadioGroup>
    </FormControl>
  );
}
