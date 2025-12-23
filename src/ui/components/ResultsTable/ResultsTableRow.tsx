import { TableCell, TableRow } from '@mui/material';

import type { RoundOutcome } from '@/src/dice/dice.types';
import type { JSX } from 'react';

interface ResultsTableRowProperties {
  row: RoundOutcome;
}

export const ResultsTableRow = ({ row }: ResultsTableRowProperties): JSX.Element => {
  return (
    <TableRow>
      <TableCell>
        {Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(row.timestamp)}
      </TableCell>
      <TableCell>{`${row.roundInput.condition} ${row.roundInput.threshold}`}</TableCell>
      <TableCell sx={{ color: row.result ? '#1b5e20' : '#c62828' }}>{row.rolledValue}</TableCell>
    </TableRow>
  );
};
