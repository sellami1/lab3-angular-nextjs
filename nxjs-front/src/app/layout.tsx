import type { Metadata } from "next";  // For metadata (optional but good practice)
import "./global.css";  // Import global CSS (as per your project)

export const metadata: Metadata = {
  title: "Lab3: Angular & NextJS",  // Basic metadata
  description: "Full-stack device management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}