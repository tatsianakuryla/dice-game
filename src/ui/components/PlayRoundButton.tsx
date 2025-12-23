import { Button } from '@mui/material';

import type { JSX } from 'react';

interface PlayRoundButtonParameters {
  onClick: () => void;
}

export const PlayRoundButton = ({ onClick }: PlayRoundButtonParameters): JSX.Element => {
  return (
    <Button
      sx={{
        minWidth: '320px',
        maxWidth: '320px',
      }}
      type="button"
      variant="contained"
      color="primary"
      size="large"
      onClick={onClick}
    >
      PLAY
    </Button>
  );
};
