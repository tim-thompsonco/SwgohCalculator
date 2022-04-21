import React from 'react';
import ReactGA from 'react-ga';

const logGoogleAnalyticsEvent = (category: string, action: string, label: string) => {
  return ReactGA.event({ category, action, label });
};

export default logGoogleAnalyticsEvent;