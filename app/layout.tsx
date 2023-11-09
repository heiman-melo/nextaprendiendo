import '@/app/ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/favicon-32x32.png" type="image/x-icon"></link>
      <body>{children}</body>
    </html>
  );
}
