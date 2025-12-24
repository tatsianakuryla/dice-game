import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from '@mui/material';

import type { RoundOutcome } from '@/src/dice/dice.types';
import type { JSX } from 'react';

import { ResultsTableRow } from '@/src/ui/components/ResultsTable/ResultsTableRow';

const RESULTS_TABLE_COLS = ['Time', 'Guess', 'Result'];

interface ResultsTableProperties {
  rows: RoundOutcome[];
}

export const ResultsTable = ({ rows }: ResultsTableProperties): JSX.Element => {
  if (rows.length === 0) {
    return (
      <Box
        sx={{
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" color="text.secondary">
          No games played yet
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
          Play your first round to see results here
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer
      sx={{
        marginTop: '-3px',
        marginLeft: '14px',
      }}
    >
      <Table
        sx={{
          minWidth: '600px',
          '& .MuiTableBody-root .MuiTableCell-root': {
            padding: '6px 16px',
          },
          '& .MuiTableCell-root:first-of-type': {
            width: '32%',
          },
          '& .MuiTableCell-root:nth-of-type(2)': {
            width: '33%',
          },
        }}
        aria-label="Game results table"
      >
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
