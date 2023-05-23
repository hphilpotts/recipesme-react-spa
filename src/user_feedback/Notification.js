import React from 'react'
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material'

export default function Notification({ handleClose, open, notification, Alert }) {
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={notification.type} sx={{ width: '100%' }}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </Stack>
    )
}
