
import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ReactGA from 'react-ga4';
import { Provider } from 'react-redux';

import { ErrorFallback } from './components/index';
import NavBar from './components/NavBar/NavBar';
import { store } from './store';

// We default to a dummy tracking ID so tests and CI builds don't fail
const googleTrackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID ?? 'G-123456';
ReactGA.initialize(googleTrackingId);

const Calculator = React.lazy(() => import('./components/index').then(module => ({ default: module.Calculator })));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<CircularProgress />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <NavBar />
          <Calculator />
        </ErrorBoundary>
      </Suspense>
    </Provider>
  );
};

export default App;
