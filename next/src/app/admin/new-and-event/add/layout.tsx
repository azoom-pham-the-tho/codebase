import DefaultLayout from "@/layout/default/default";

export default function Template({ children }: { children: React.ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
