import { Button } from '@mui/material';

import type { JSX } from 'react';

import { UI_CONSTANTS } from '@/src/ui/constants/uiConstants';

interface PlayRoundButtonParameters {
  onClick: () => void;
}

export const PlayRoundButton = ({ onClick }: PlayRoundButtonParameters): JSX.Element => {
  return (
    <Button
      sx={{
        minWidth: '320px',
        maxWidth: '320px',
        marginTop: '-3px',
      }}
      type="button"
      variant="contained"
      color="primary"
      size="large"
      onClick={onClick}
    >
      {UI_CONSTANTS.BUTTON_TEXT.PLAY}
    </Button>
  );
};
