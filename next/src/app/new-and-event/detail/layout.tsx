import WithSiderbar from "@/layout/default/withSidebar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <WithSiderbar>
      {children}
    </WithSiderbar>
  );
}
