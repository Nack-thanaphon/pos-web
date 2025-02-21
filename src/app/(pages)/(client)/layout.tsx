"use client";

import "@/app/app.css";
import ReactQueryProvider from "../../shared/react-query/provider";
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <html lang="en">
          <head>
            <link rel="shortcut icon" href="/image/logo.jpg" />
          </head>
          <body>
            {children}
          </body>
        </html>
      </ReactQueryProvider>
    </SessionProvider>
  );
}