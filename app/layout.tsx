'use client';

import "./globals.css";
import { UserProvider } from '@/context/userContext';
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={`antialiased`}>
          <UserProvider>
            {children}
          </UserProvider>
        </body>
      </SessionProvider>
    </html>
  );
}