import Footer from "@/page/footer";
import Header from "@/page/header";
import Sidebar from "@/page/sidebar";
import { Inter } from "next/font/google";
import styles from "./style.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function WithSiderbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.content}>{children}</div>
          </div>
          <div className={styles.right}>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
