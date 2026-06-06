import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { APP_NAME } from "@/lib/constants";
import { APP_DESCRIPTION } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

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
          <Toaster
            toastOptions={{
              classNames: {
                success: "!bg-green-900 !text-green-100",
                error: "!bg-red-900 !text-white",
                loading: "!bg-zinc-800 text-zinc-100",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
