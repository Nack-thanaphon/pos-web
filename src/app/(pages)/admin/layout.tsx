"use client";

import { SessionProvider } from 'next-auth/react';
import { HeroUIProvider } from '@heroui/react';
import AuthProvider from "@/provider/AuthProvider";
import Loading from "@/shared/components/Loading";
import "@/app/index.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/image/logo.jpg" />
        </head>
        <body>
          <HeroUIProvider>
            <Loading />
            <AuthProvider>{children}</AuthProvider>
          </HeroUIProvider>
        </body>
      </html>
    </SessionProvider>
  );
}