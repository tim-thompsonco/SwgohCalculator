import ReactGA from 'react-ga';

export const logGoogleAnalyticsEvent = (category: string, action: string, label: string) => {
  return ReactGA.event({ category, action, label });
};

export const logGoogleAnalyticsPageView = (path: string) => {
  return ReactGA.pageview(path);
};