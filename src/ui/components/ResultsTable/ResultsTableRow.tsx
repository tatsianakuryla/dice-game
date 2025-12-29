import { TableCell, TableRow } from '@mui/material';
import { memo } from 'react';

import type { RoundOutcome } from '@/src/dice/dice.types';
import type { JSX } from 'react';

import { UI_CONSTANTS } from '@/src/ui/constants/uiConstants';

const timeFormatter = new Intl.DateTimeFormat(UI_CONSTANTS.TABLE.DATE_LOCALE, {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

interface ResultsTableRowProperties {
  row: RoundOutcome;
}

export const ResultsTableRow = memo(({ row }: ResultsTableRowProperties): JSX.Element => {
  return (
    <TableRow>
      <TableCell>{timeFormatter.format(row.timestamp)}</TableCell>
      <TableCell>{`${row.roundInput.condition} ${row.roundInput.threshold}`}</TableCell>
      <TableCell
        sx={{ color: row.result ? UI_CONSTANTS.TABLE.COLORS.WIN : UI_CONSTANTS.TABLE.COLORS.LOSE }}
        aria-label={row.result ? 'Win' : 'Lose'}
      >
        {row.rolledValue}
      </TableCell>
    </TableRow>
  );
});
