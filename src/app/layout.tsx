import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { UtilsProvider } from "@/context/utils.context";
import { ToastProvider } from "@/context/toast.context";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuve | Kuve",
  description: "Kuve",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body className={`${font.className} antialiased`}>
        <UtilsProvider>
          <ToastProvider>{children}</ToastProvider>
        </UtilsProvider>
      </body>
    </html>
  );
}
