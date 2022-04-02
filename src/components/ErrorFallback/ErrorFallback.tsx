import { Grid, makeStyles, Modal, Typography } from '@material-ui/core';
import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const useStyles = makeStyles(theme => ({
  errorModal: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    width: '20vw',
    height: '20vh'
  }
}));

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const classes = useStyles();

  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      className={classes.errorModal}
      onClose={resetErrorBoundary}
      open={true}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Typography component="h4" id="error-message-display">
            {error.message}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h5" id="error-message-display">
            {'Click to continue'}
          </Typography>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ErrorFallback;