import { TableCell, TableRow } from '@mui/material';

import type { RoundOutcome } from '@/src/dice/dice.types';
import type { JSX } from 'react';

import { UI_CONSTANTS } from '@/src/ui/constants/uiConstants';

interface ResultsTableRowProperties {
  row: RoundOutcome;
}

export const ResultsTableRow = ({ row }: ResultsTableRowProperties): JSX.Element => {
  return (
    <TableRow>
      <TableCell>
        {Intl.DateTimeFormat(UI_CONSTANTS.TABLE.DATE_LOCALE, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(row.timestamp)}
      </TableCell>
      <TableCell>{`${row.roundInput.condition} ${row.roundInput.threshold}`}</TableCell>
      <TableCell
        sx={{ color: row.result ? UI_CONSTANTS.TABLE.COLORS.WIN : UI_CONSTANTS.TABLE.COLORS.LOSE }}
      >
        {row.rolledValue}
      </TableCell>
    </TableRow>
  );
};
