import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from './components/index';

const Calculator = React.lazy(() => import('./components/index').then(module => ({ default: module.Calculator })));

const App: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Calculator />
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
