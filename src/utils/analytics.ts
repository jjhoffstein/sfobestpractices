// Analytics utility functions for tracking user interactions

// Track page views with additional metadata
export const trackPageView = (page: string, metadata?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).cf) {
    (window as any).cf('track', 'page_view', {
      page,
      ...metadata,
      timestamp: new Date().toISOString()
    });
  }
};

// Track user interactions with key content sections
export const trackContentInteraction = (
  section: string,
  action: 'view' | 'click' | 'scroll' | 'open' | 'close',
  metadata?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).cf) {
    (window as any).cf('track', 'content_interaction', {
      section,
      action,
      ...metadata,
      timestamp: new Date().toISOString()
    });
  }
};

// Track CTA (Call to Action) clicks
export const trackCTAClick = (
  ctaName: string,
  location: string,
  metadata?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).cf) {
    (window as any).cf('track', 'cta_click', {
      cta_name: ctaName,
      location,
      ...metadata,
      timestamp: new Date().toISOString()
    });
  }
};

// Track form interactions
export const trackFormInteraction = (
  formName: string,
  action: 'start' | 'complete' | 'error',
  metadata?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).cf) {
    (window as any).cf('track', 'form_interaction', {
      form_name: formName,
      action,
      ...metadata,
      timestamp: new Date().toISOString()
    });
  }
};

// Track performance metrics
export const trackPerformanceMetric = (
  metricName: string,
  value: number,
  metadata?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).cf) {
    (window as any).cf('track', 'performance_metric', {
      metric_name: metricName,
      value,
      ...metadata,
      timestamp: new Date().toISOString()
    });
  }
}; 