'use client';

import { useState } from 'react';

import type { JSX } from 'react';

import { ComparisonDirection } from '@/src/dice/dice.types';
import { ComparisonDirectionRadioButtons } from '@/src/ui/components/ComparisonDirectionRadioButtons';
import { GameSlider } from '@/src/ui/components/GameSlider';
import { PageSectionWrapper } from '@/src/ui/components/PageSectionWrapper';
import { RolledValueDisplay } from '@/src/ui/components/RolledValueDisplay';

export default function Home(): JSX.Element {
  const [threshold, setThreshold] = useState<number>(20);
  const [direction, setDirection] = useState<ComparisonDirection>(ComparisonDirection.Under);
  const [rolledValue] = useState<number | undefined>(undefined);

  return (
    <div>
      <main>
        <PageSectionWrapper>
          <RolledValueDisplay rolledValue={rolledValue} />
          <ComparisonDirectionRadioButtons value={direction} onChange={setDirection} />
          <GameSlider value={threshold} onChange={setThreshold} />
        </PageSectionWrapper>
      </main>
    </div>
  );
}
