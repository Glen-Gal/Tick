import { GeistSans } from "geist/font/sans";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="sticky top-0 bg-landing_background text-foreground">
        <Header />
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
