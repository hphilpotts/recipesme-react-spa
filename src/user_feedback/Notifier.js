import * as React from 'react';
import MuiAlert from '@mui/material/Alert';

import Notification from './Notification';

const Alert = React.forwardRef(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notifier({ open, notification, handleClose }) {

    return (
        <>
            {notification.type ?
                <Notification handleClose={handleClose} open={open} notification={notification} Alert={Alert}></Notification>
                :
                null
            }
        </>

    )
}