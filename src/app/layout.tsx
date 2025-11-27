export const metadata = {
  title: "JRAVIS Stealth Dashboard",
  description: "Mission 2040 Control Hub"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

