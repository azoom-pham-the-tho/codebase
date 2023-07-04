import DefaultLayout from "@/layout/default/default";
import "./globals.css";
import { Providers } from "@/store/root/provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <DefaultLayout>{children}</DefaultLayout>
    </Providers>
  );
}
