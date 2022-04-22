import ReactGA from 'react-ga4';

export const logGoogleAnalyticsEvent = (category: string, action: string, label: string) => {
  return ReactGA.event({ category, action, label });
};

export const logGoogleAnalyticsPageView = (path: string) => {
  return ReactGA.send({ hitType: 'pageview', page: path });
};