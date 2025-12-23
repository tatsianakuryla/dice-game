import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import type { RoundOutcome } from '@/src/dice/dice.types';
import type { JSX } from 'react';

import { ResultsTableRow } from '@/src/ui/components/ResultsTable/ResultsTableRow';

const RESULTS_TABLE_COLS = ['Time', 'Guess', 'Result'];

interface ResultsTableProperties {
  rows: RoundOutcome[];
}

export const ResultsTable = ({ rows }: ResultsTableProperties): JSX.Element => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: '600px' }} aria-label="Game results table">
        <TableHead>
          <TableRow>
            {RESULTS_TABLE_COLS.map((col) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <ResultsTableRow key={row.timestamp.toISOString()} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
