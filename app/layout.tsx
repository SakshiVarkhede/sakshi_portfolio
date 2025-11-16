import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sakshi Varkhede | Full-Stack Developer & AI/ML Engineer",
  description: "Portfolio of Sakshi Varkhede - B.Tech in AI & Data Science, Full-Stack Developer specializing in Next.js, and AI/ML Engineer",
  keywords: ["Sakshi Varkhede", "Full-Stack Developer", "AI Engineer", "ML Engineer", "Next.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

