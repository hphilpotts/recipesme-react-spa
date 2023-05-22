import React from 'react'
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material'

export default function Success({ handleClose, open, Alert }) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Recipe added successfully!
        </Alert>
      </Snackbar>
    </Stack>
  )
}
