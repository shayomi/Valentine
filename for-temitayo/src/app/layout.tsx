import type { Metadata, Viewport } from "next";

import "./globals.scss";
import { kodchasan } from "@/app/font";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://note-to-temitayo.vercel.app/"),
  title: {
    default: "For my wife's Valentine",
    template: "%s | For my Wife's Valentine",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kodchasan.className}>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
