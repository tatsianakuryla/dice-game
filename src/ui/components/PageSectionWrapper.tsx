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
          maxWidth: '720px',
          margin: '0 auto',
          padding: '15px 60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {children}
      </Box>
    </section>
  );
};
