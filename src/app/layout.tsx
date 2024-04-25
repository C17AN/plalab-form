"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../style/index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <QueryClientProvider client={client}>
        <body>{children}</body>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </html>
  );
}
