import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata = {
  title: 'SFOBestPractices.com - Educational Resources',
  description: 'Educational resources and information about family office structuring and operations. For informational purposes only.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="font-playfair text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    SFOBestPractices.com
                  </Link>
                </div>
                <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                  <a
                    href="/structure"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Structure
                  </a>
                  <a
                    href="/operations"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Operations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="bg-blue-50 p-2">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs sm:text-sm text-center text-blue-800">
              This website provides general educational information only. Always consult qualified legal and financial professionals for advice specific to your situation.
            </p>
          </div>
        </div>

        <main className="flex-1">
          {children}
        </main>

        <footer className="bg-white border-t border-gray-100 mt-12">
          <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-500">
                Educational content for informational purposes only. Not financial or legal advice. {new Date().getFullYear()}
              </p>
              <p className="text-xs text-gray-400">
                The information provided on this site is for educational purposes only and should not be construed as legal, financial, or tax advice. 
                Examples and diagrams are simplified illustrations and may not reflect all complexities of actual legal structures.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
