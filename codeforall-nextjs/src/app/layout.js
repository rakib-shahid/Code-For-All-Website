import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Code For All",
  description:
    "The mission of Code for All is to empower students of all backgrounds to excel in their problem-solving and coding classes. We strive to create a supportive and inclusive learning environment where everyone can deepen their understanding of code and develop the skills necessary to tackle complex challenges. Together, we will help each other achieve our full potential as coders and problem-solvers!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
