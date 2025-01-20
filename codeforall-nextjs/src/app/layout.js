import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Code For All",
  description:
    "The mission of Code for All is to empower students of all backgrounds to excel in their problem-solving and coding classes. We strive to create a supportive and inclusive learning environment where everyone can deepen their understanding of code and develop the skills necessary to tackle complex challenges. Together, we will help each other achieve our full potential as coders and problem-solvers!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
