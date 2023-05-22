import * as React from 'react';
import MuiAlert from '@mui/material/Alert';

import Success from './success/Success';

const Alert = React.forwardRef(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notifier({ open, handleClose }) {

    const successSnack = <Success handleClose={handleClose} open={open} Alert={Alert}></Success>

    return (
        <>
            {successSnack}
        </>

    );
}