import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { UIProvider } from "@yamada-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
