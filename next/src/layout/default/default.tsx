import Footer from "@/page/footer";
import Header from "@/page/header";
import { Inter } from "next/font/google";
import "./style.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {children} <Footer />
      </body>
    </html>
  );
}
