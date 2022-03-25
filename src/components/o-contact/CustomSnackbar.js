import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar(props) {
  const vertical = 'bottom'
  const horizontal = 'center'

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%'}}>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose} severity="success" sx={{ position: 'fixed', width: '100vh', bottom: props.modal? '-10rem' :  0 }}>
          {props.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}