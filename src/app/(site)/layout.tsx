import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 w-full overflow-hidden">
      {children}
    </div>
  );
}
