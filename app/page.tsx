import type { JSX } from 'react';

import { PageSectionWrapper } from '@/src/ui/components/PageSectionWrapper';
import { RolledValueDisplay } from '@/src/ui/components/RolledValueDisplay';

export default function Home(): JSX.Element {
  return (
    <div>
      <main>
        <PageSectionWrapper>
          <RolledValueDisplay />
        </PageSectionWrapper>
      </main>
    </div>
  );
}
