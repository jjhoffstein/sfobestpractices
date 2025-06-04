// Type definitions for Cloudflare Web Analytics (imported or re-declared if needed elsewhere)
interface CloudflareAnalytics {
  (action: string, eventName: string, data: Record<string, unknown>): void;
}

interface CustomWindow extends Window {
  cf?: CloudflareAnalytics;
}

// Development utility to verify analytics implementation

const logAnalyticsEvent = (eventName: string, data: Record<string, unknown>) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(`📊 Analytics Event: ${eventName}`);
    console.log('Data:', data);
    console.log('Timestamp:', new Date().toISOString());
    console.groupEnd();
  }
};

// Helper function to verify analytics implementation
export const verifyAnalytics = () => {
  const customWindow = window as CustomWindow;
  if (
    typeof customWindow !== 'undefined' &&
    process.env.NODE_ENV === 'development'
  ) {
    // Override the CloudFlare analytics function in development
    if (customWindow.cf && typeof customWindow.cf === 'function') {
      // If Cloudflare script is already loaded, override its function
      const originalCF = customWindow.cf;
      customWindow.cf = (action: string, eventName: string, data: Record<string, unknown>) => {
        logAnalyticsEvent(eventName, data);
        originalCF(action, eventName, data); // Optionally call the original CF function too
      };
    } else if (typeof customWindow.cf === 'undefined') {
       // If Cloudflare script is not yet loaded, create a mock function
      customWindow.cf = (action: string, eventName: string, data: Record<string, unknown>) => {
         logAnalyticsEvent(eventName, data);
      };
    }

    console.group('🔍 Analytics Verification');
    console.log(
      'CloudFlare Analytics:',
      customWindow.cf && typeof customWindow.cf === 'function' ? '✅ Available' : '❌ Not Available'
    );
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Analytics Debug Mode:', 'Enabled');
    console.groupEnd();
  }
}; 