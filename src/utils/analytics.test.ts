import { trackPageView, trackContentInteraction, trackCTAClick, trackFormInteraction, trackPerformanceMetric } from './analytics';

// Type definitions for Cloudflare Web Analytics (re-declared or imported if needed elsewhere)
interface CloudflareAnalytics {
  (action: string, eventName: string, data: Record<string, unknown>): void;
}

interface CustomWindow extends Window {
  cf?: CloudflareAnalytics;
}

describe('Analytics Utilities', () => {
  let mockCF: CloudflareAnalytics;

  beforeEach(() => {
    // Mock the CloudFlare analytics object
    mockCF = jest.fn() as unknown as CloudflareAnalytics; // Cast jest.fn() which is a Mock to the analytics type
    (window as CustomWindow).cf = mockCF;
  });

  afterEach(() => {
    // Clean up
    delete (window as CustomWindow).cf;
    jest.clearAllMocks();
  });

  describe('trackPageView', () => {
    it('should track page views with metadata', () => {
      const page = '/test-page';
      const metadata = { referrer: 'https://example.com' };
      
      trackPageView(page, metadata);
      
      expect(mockCF).toHaveBeenCalledWith('track', 'page_view', {
        page,
        ...metadata,
        timestamp: expect.any(String)
      });
    });

    it('should not throw when CloudFlare is not available', () => {
      delete (window as CustomWindow).cf;
      expect(() => trackPageView('/test-page')).not.toThrow();
    });
  });

  describe('trackContentInteraction', () => {
    it('should track content interactions with correct action types', () => {
      const validActions = ['view', 'click', 'scroll', 'open', 'close'] as const;
      
      validActions.forEach(action => {
        trackContentInteraction('test-section', action);
        expect(mockCF).toHaveBeenCalledWith('track', 'content_interaction', {
          section: 'test-section',
          action,
          timestamp: expect.any(String)
        });
      });
    });
  });

  describe('trackCTAClick', () => {
    it('should track CTA clicks with location', () => {
      trackCTAClick('signup-button', 'header');
      
      expect(mockCF).toHaveBeenCalledWith('track', 'cta_click', {
        cta_name: 'signup-button',
        location: 'header',
        timestamp: expect.any(String)
      });
    });
  });

  describe('trackFormInteraction', () => {
    it('should track form interactions with valid actions', () => {
      const validActions = ['start', 'complete', 'error'] as const;
      
      validActions.forEach(action => {
        trackFormInteraction('contact-form', action);
        expect(mockCF).toHaveBeenCalledWith('track', 'form_interaction', {
          form_name: 'contact-form',
          action,
          timestamp: expect.any(String)
        });
      });
    });
  });

  describe('trackPerformanceMetric', () => {
    it('should track performance metrics with numeric values', () => {
      trackPerformanceMetric('page_load', 1234);
      
      expect(mockCF).toHaveBeenCalledWith('track', 'performance_metric', {
        metric_name: 'page_load',
        value: 1234,
        timestamp: expect.any(String)
      });
    });
  });
}); 