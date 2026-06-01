import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { APP_NAME } from "@/lib/constants";
import { APP_DESCRIPTION } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

;

export const metadata: Metadata = {
  title: {
    absolute: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${PlusJakartaSans.variable} font-sans h-full antialiased `}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
