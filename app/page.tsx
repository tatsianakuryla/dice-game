import type { JSX } from 'react';

import { PageSectionWrapper } from '@/src/ui/components/PageSectionWrapper';

export default function Home(): JSX.Element {
  return (
    <div>
      <main>
        <PageSectionWrapper>Dice game</PageSectionWrapper>
      </main>
    </div>
  );
}
