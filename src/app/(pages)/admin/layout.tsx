"use client";

import "@/app/app.css";
import ReactQueryProvider from "@/app/shared/react-query/provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}