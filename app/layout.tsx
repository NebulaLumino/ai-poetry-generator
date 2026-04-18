import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Poetry Generator',
  description: 'Create poetry in various forms, themes, and cultural traditions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
