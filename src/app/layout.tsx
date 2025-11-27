export const metadata = {
  title: "Lakhsya Dashboard",
  description: "JRAVIS 30 Stream Control Center",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
