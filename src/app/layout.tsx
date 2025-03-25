import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edwin Silvestre | Software Engineer",
  description: "Professional portfolio of Edwin Silvestre, Software Engineer",
  generator: "v0.dev",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
