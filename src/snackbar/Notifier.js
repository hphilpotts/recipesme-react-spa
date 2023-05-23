import * as React from 'react';
import MuiAlert from '@mui/material/Alert';

import Success from './success/Success';
import Warn from './warn/Warn';

const Alert = React.forwardRef(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notifier({ open, notification, handleClose }) {

    const notificationTypes = {
        null: null,
        success: <Success handleClose={handleClose} open={open} notification={notification} Alert={Alert}></Success>,
        warning: <Warn handleClose={handleClose} open={open} notification={notification} Alert={Alert}></Warn>
    }

    return (
        <>
            {notificationTypes[notification.type]}
        </>

    );
}