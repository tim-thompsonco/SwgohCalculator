
import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ReactGA from 'react-ga4';
import { Provider } from 'react-redux';

import { ErrorFallback } from './components/index';
import { store } from './store';

const googleTrackingId = process.env.NODE_ENV === 'test' ? 
  'G-000000' : process.env.REACT_APP_GOOGLE_ANALYTICS_ID as string;
ReactGA.initialize(googleTrackingId, { testMode: process.env.NODE_ENV === 'test' });

const Calculator = React.lazy(() => import('./components/index').then(module => ({ default: module.Calculator })));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<CircularProgress />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Calculator />
        </ErrorBoundary>
      </Suspense>
    </Provider>
  );
};

export default App;
