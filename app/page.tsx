'use client';

import type { JSX } from 'react';

import { ComparisonDirectionRadioButtons } from '@/src/ui/components/ComparisonDirectionRadioButtons';
import { GameSlider } from '@/src/ui/components/GameSlider';
import { PageSectionWrapper } from '@/src/ui/components/PageSectionWrapper';
import { PlayRoundButton } from '@/src/ui/components/PlayRoundButton';
import { ResultsTable } from '@/src/ui/components/ResultsTable/ResultsTable';
import { RolledValueDisplay } from '@/src/ui/components/RolledValueDisplay';
import { useDiceGame } from '@/src/ui/hooks/useDiceGame';

export default function Home(): JSX.Element {
  const { threshold, setThreshold, condition, setCondition, roundOutcome, play, history } =
    useDiceGame();

  return (
    <div>
      <main>
        <PageSectionWrapper>
          <RolledValueDisplay rolledValue={roundOutcome?.rolledValue} />
          <ComparisonDirectionRadioButtons value={condition} onChange={setCondition} />
          <GameSlider value={threshold} onChange={setThreshold} />
          <PlayRoundButton onClick={play} />
          <ResultsTable rows={history} />
        </PageSectionWrapper>
      </main>
    </div>
  );
}
