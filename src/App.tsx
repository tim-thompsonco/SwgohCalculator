import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import { Calculator } from './components/index';

const App: React.FC = () => {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
    >
      <Calculator />
    </ErrorBoundary>
  );
};

export default App;
