import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function LoadingFormPlaceholder() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      <Skeleton variant="rounded" width={210} height={120} />
      <Skeleton variant="rectangular" width={315} height={120} />
      <Skeleton variant="rectangular" width={315} height={90} />
    </Stack>
  );
}