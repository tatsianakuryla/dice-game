import { Box } from '@mui/material';

import type { JSX, ReactNode } from 'react';

interface PageSectionWrapperProperties {
  children: ReactNode;
}

export const PageSectionWrapper = ({ children }: PageSectionWrapperProperties): JSX.Element => {
  return (
    <section>
      <Box
        sx={{
          maxWidth: '840px',
          margin: '0 auto',
          padding: '16px 120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          '@media (max-width: 840px)': {
            padding: '16px 30px',
          },
          '@media (max-width: 660px)': {
            padding: '16px 15px',
            maxWidth: '660px',
          },
        }}
      >
        {children}
      </Box>
    </section>
  );
};
