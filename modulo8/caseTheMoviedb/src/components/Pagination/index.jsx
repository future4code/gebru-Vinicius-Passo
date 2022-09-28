
import React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { GlobalStateContext } from '../../Global/GlobalStateContext';

export function PaginationControlled() {
  const {page, setPage} = React.useContext(GlobalStateContext);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={1}>
      <Typography>Page: {page}</Typography>
      <Pagination count={page + 10} page={page} onChange={handleChange} />
    </Stack>
  );
}