import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shubham Ingale | AI Engineer & Software Developer Portfolio",
  description: "Personal portfolio of Shubham Ingale - Computer Science & AI Engineering Student at VIT Pune, JPMorgan Chase & Co. Summer Intern, and Google Summer of Code Contributor.",
  keywords: [
    "Shubham Ingale",
    "Portfolio",
    "JPMorgan Chase",
    "Google Summer of Code",
    "CCExtractor",
    "Spring Boot",
    "Flutter",
    "Agentic AI",
    "VIT Pune",
    "Software Engineer"
  ],
  authors: [{ name: "Shubham Ingale" }],
  openGraph: {
    title: "Shubham Ingale | AI Engineer & Software Developer Portfolio",
    description: "Computer Science & AI Engineering Student at VIT Pune, JPMorgan Chase & Co. Summer Intern, and GSoC Contributor.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-gray-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
