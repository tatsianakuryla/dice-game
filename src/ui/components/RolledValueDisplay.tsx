import { Typography } from '@mui/material';

import type { JSX } from 'react';

interface RolledValueDisplayProperties {
  rolledValue?: number;
}

export const RolledValueDisplay = ({ rolledValue }: RolledValueDisplayProperties): JSX.Element => {
  return (
    <Typography
      component="output"
      aria-label="Rolled value"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 320,
        padding: '44px 82px',
        backgroundColor: 'background.paper',
        fontWeight: 300,
        fontSize: 96,
        lineHeight: 1.17,
        letterSpacing: '-1.5px',
      }}
    >
      {rolledValue ?? '-'}
    </Typography>
  );
};
