// Type definitions for Cloudflare Web Analytics
interface CloudflareAnalytics {
  (action: string, eventName: string, data: Record<string, unknown>): void;
}

interface CustomWindow extends Window {
  cf?: CloudflareAnalytics;
}

// Define a type for metadata
type AnalyticsMetadata = Record<string, unknown>;

// Analytics utility functions for tracking user interactions

// Helper function to safely get the Cloudflare analytics instance
const getCloudflareAnalytics = (): CloudflareAnalytics | undefined => {
  const customWindow = window as CustomWindow;
  if (typeof customWindow !== 'undefined' && customWindow.cf && typeof customWindow.cf === 'function') {
    return customWindow.cf;
  }
  return undefined;
};

// Track page views with additional metadata
export const trackPageView = (
  page: string,
  metadata?: AnalyticsMetadata
) => {
  const cf = getCloudflareAnalytics();
  if (cf) {
    cf('track', 'page_view', {
      page,
      ...metadata,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track user interactions with key content sections
export const trackContentInteraction = (
  section: string,
  action: 'view' | 'click' | 'scroll' | 'open' | 'close',
  metadata?: AnalyticsMetadata
) => {
  const cf = getCloudflareAnalytics();
  if (cf) {
    cf('track', 'content_interaction', {
      section,
      action,
      ...metadata,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track CTA (Call to Action) clicks
export const trackCTAClick = (
  ctaName: string,
  location: string,
  metadata?: AnalyticsMetadata
) => {
  const cf = getCloudflareAnalytics();
  if (cf) {
    cf('track', 'cta_click', {
      cta_name: ctaName,
      location,
      ...metadata,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track form interactions
export const trackFormInteraction = (
  formName: string,
  action: 'start' | 'complete' | 'error',
  metadata?: AnalyticsMetadata
) => {
  const cf = getCloudflareAnalytics();
  if (cf) {
    cf('track', 'form_interaction', {
      form_name: formName,
      action,
      ...metadata,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track performance metrics
export const trackPerformanceMetric = (
  metricName: string,
  value: number,
  metadata?: AnalyticsMetadata
) => {
  const cf = getCloudflareAnalytics();
  if (cf) {
    cf('track', 'performance_metric', {
      metric_name: metricName,
      value,
      ...metadata,
      timestamp: new Date().toISOString(),
    });
  }
};