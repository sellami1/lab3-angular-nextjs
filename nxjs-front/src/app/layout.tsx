import type { Metadata } from "next";  // For metadata (optional but good practice)
import "./global.css";  // Import global CSS (as per your project)

export const metadata: Metadata = {
  title: "Device App",  // Basic metadata
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