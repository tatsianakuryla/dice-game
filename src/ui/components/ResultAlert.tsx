import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Alert, AlertTitle, Box, Collapse } from '@mui/material';

import type { JSX, ReactNode } from 'react';

interface ResultAlertProperties {
  severity?: 'success' | 'error';
  isOpen?: boolean;
  message?: ReactNode;
  onClose?: () => void;
}

export const ResultAlert = ({
  severity = 'success',
  message = '',
  isOpen = false,
}: ResultAlertProperties): JSX.Element => {
  const alertTitle = severity === 'success' ? 'You won' : 'You lost';
  const marginBottom = severity === 'success' ? 0 : '4px';
  const textSize = severity === 'success' ? '14px' : '16px';

  return (
    <Box sx={{ minHeight: '76px', width: '100%' }}>
      <Collapse in={isOpen} sx={{ width: '100%' }}>
        <Alert
          severity={severity}
          variant="filled"
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
          }}
        >
          <AlertTitle sx={{ marginBottom, fontSize: textSize }}>{alertTitle}</AlertTitle>
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};
