import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const useStyles = makeStyles(() => ({
  errorContainer: {
    alignItems: 'center',
    display: 'flex',
  }
}));

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const classes = useStyles();

  return (
    <Grid 
      className={classes.errorContainer}
      container
      direction={'column'}
    >
      <Grid item xs={12}>
        <Typography component="h4" id="error-message-display">
          {`I sense a great disturbance in the force. Specifically, ${error.message}`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img src={'assets/images/death-star.jpg'} />
      </Grid>
      <Grid item xs={12}>
        <Button 
          color={'primary'}
          onClick={resetErrorBoundary}
          variant={'contained'}
        >Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default ErrorFallback;