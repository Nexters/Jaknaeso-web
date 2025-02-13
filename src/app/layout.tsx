import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppleScript } from '@/components/appleScript';
import { KakaoScript } from '@/components/KakaoScript';
import { Toast } from '@/components/Toast';

import ReactQueryProviders from '../providers/ReactQueryProvider';

import './globals.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <KakaoScript />
        <AppleScript />
      </head>
      <body>
        <ReactQueryProviders>
          <div className="container">
            <main className="layout">
              {children}
              <Toast />
            </main>
          </div>
          <ReactQueryDevtools />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
