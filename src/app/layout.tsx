import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-rizanurmaulana.vercel.app/"),
  title: {
    default: "Riza Nur Maulana | Web Developer Portfolio",
    template: "%s | Riza Nur Maulana",
  },
  description:
    "Portfolio of Riza Nur Maulana, a web developer specializing in responsive, user-friendly websites and modern web experiences.",
  keywords: [
    "Riza Nur Maulana",
    "web developer",
    "portfolio",
    "Next.js",
    "frontend developer",
  ],
  authors: [{ name: "Riza Nur Maulana" }],
  creator: "Riza Nur Maulana",
  publisher: "Riza Nur Maulana",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Riza Nur Maulana | Web Developer Portfolio",
    description:
      "Explore projects, skills, and web development work by Riza Nur Maulana.",
    url: "https://portfolio-rizanurmaulana.vercel.app/",
    siteName: "Riza Nur Maulana Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riza Nur Maulana | Web Developer Portfolio",
    description:
      "Explore projects, skills, and web development work by Riza Nur Maulana.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-jakarta-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
