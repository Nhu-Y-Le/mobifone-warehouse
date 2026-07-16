import type { ReactNode } from "react";

interface StatRow {
  label: string;
  value: number | string;
}

interface DashboardCardProps {
  title: string;
  rows?: StatRow[];
  children?: ReactNode;
  onDetailClick?: () => void;
}

export default function DashboardCard({
  title,
  rows,
  children,
  onDetailClick,
}: DashboardCardProps) {
  return (
    <div className="flex-1 rounded-sm border border-border bg-white shadow-subtle">
      <div className="border-b border-border bg-brand-lightBlue px-3 py-1.5">
        <span className="text-sm font-bold text-brand-blueDark">{title}</span>
      </div>
      <div className="flex items-end justify-between px-3 py-3">
        <div className="space-y-1.5">
          {rows
            ? rows.map((row) => (
                <div key={row.label} className="text-sm text-[#333333]">
                  {row.label}
                </div>
              ))
            : children}
        </div>
        <button
          onClick={onDetailClick}
          className="whitespace-nowrap text-sm text-brand-blue hover:underline"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
