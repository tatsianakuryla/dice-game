'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import type { ReactNode, JSX } from 'react';

import { theme } from '@/src/ui/theme/theme';

interface ProviderProperties {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProperties): JSX.Element => {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
