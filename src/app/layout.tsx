import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '../components/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'SFO Best Practices',
  description: 'Modern family office structure and operations best practices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.className}`}>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <Navigation />
        
        {/* Disclaimer Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <p className="text-xs sm:text-sm text-center text-blue-800 font-medium">
              This website provides general educational information only. Always consult qualified legal and financial professionals for advice specific to your situation.
            </p>
          </div>
        </div>

        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 mt-12">
          <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-medium text-gray-500">
                Educational content for informational purposes only. Not financial or legal advice.
              </p>
              <p className="text-xs text-gray-400 max-w-2xl mx-auto">
                The information provided on this site is for educational purposes only and should not be construed as legal, financial, or tax advice. 
                Always consult with qualified legal, tax, and financial professionals before making any decisions regarding your family office structure or operations.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
