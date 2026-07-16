import type { ImportType } from "../mock/data";
import { importTypeLabels } from "../mock/data";

const order: ImportType[] = ["don-le", "theo-lo", "don-vi-khac"];

interface Props {
  active: ImportType;
  onChange: (type: ImportType) => void;
}

export default function ImportTypeTabs({ active, onChange }: Props) {
  return (
    <div className="flex border border-border bg-[#EAF2FA]">
      {order.map((type) => {
        const isActive = type === active;
        return (
          <button
            key={type}
            onClick={() => onChange(type)}
            className={[
              "flex-1 border-r border-border px-3 py-2 text-sm font-bold last:border-r-0",
              isActive
                ? "bg-white text-brand-blue border-b-2 border-b-brand-blue"
                : "text-[#444444] hover:bg-brand-lightBlue",
            ].join(" ")}
          >
            {importTypeLabels[type]}
          </button>
        );
      })}
    </div>
  );
}
