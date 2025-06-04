// Development utility to verify analytics implementation

const logAnalyticsEvent = (eventName: string, data: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(`📊 Analytics Event: ${eventName}`);
    console.log('Data:', data);
    console.log('Timestamp:', new Date().toISOString());
    console.groupEnd();
  }
};

// Helper function to verify analytics implementation
export const verifyAnalytics = () => {
  if (
    typeof window !== 'undefined' &&
    process.env.NODE_ENV === 'development'
  ) {
    // Override the CloudFlare analytics function in development
    if (typeof (window as any).cf !== 'function') {
      (window as any).cf = (action: string, eventName: string, data: any) => {
        logAnalyticsEvent(eventName, data);
      };
    }
    console.group('🔍 Analytics Verification');
    console.log(
      'CloudFlare Analytics:',
      typeof (window as any).cf === 'function' ? '✅ Available' : '❌ Not Available'
    );
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Analytics Debug Mode:', 'Enabled');
    console.groupEnd();
  }
}; 