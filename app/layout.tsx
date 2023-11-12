import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/favicon-32x32.png" type="image/x-icon"></link>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
