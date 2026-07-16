import { useState } from "react";
import type { FormEvent } from "react";
import type { ImportType } from "../mock/data";

interface FieldConfig {
  key: string;
  label: string;
  type?: "text" | "number" | "date";
  span?: 2;
}

const fieldsByType: Record<ImportType, FieldConfig[]> = {
  "don-le": [
    { key: "itemName", label: "Tên vật tư / thiết bị", span: 2 },
    { key: "itemCode", label: "Mã vật tư" },
    { key: "quantity", label: "Số lượng", type: "number" },
    { key: "unit", label: "Đơn vị tính" },
    { key: "unitPrice", label: "Đơn giá", type: "number" },
    { key: "supplier", label: "Nhà cung cấp" },
    { key: "note", label: "Ghi chú", span: 2 },
  ],
  "theo-lo": [
    { key: "batchName", label: "Tên lô hàng", span: 2 },
    { key: "batchCode", label: "Mã lô" },
    { key: "itemTypeCount", label: "Số loại vật tư trong lô", type: "number" },
    { key: "quantity", label: "Tổng số lượng", type: "number" },
    { key: "deliveryUnit", label: "Đơn vị giao hàng" },
    { key: "note", label: "Ghi chú", span: 2 },
  ],
  "don-vi-khac": [
    { key: "sourceUnit", label: "Đơn vị chuyển giao", span: 2 },
    { key: "transferCode", label: "Mã phiếu chuyển" },
    { key: "itemName", label: "Tên vật tư / thiết bị" },
    { key: "quantity", label: "Số lượng", type: "number" },
    { key: "handedBy", label: "Người bàn giao" },
    { key: "note", label: "Ghi chú", span: 2 },
  ],
};

interface Props {
  type: ImportType;
  onSubmit: (values: Record<string, string>, fileName: string | null) => void;
}

export default function ImportForm({ type, onSubmit }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState<string | null>(null);

  const fields = fieldsByType[type];

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values, fileName);
    setValues({});
    setFileName(null);
    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-t-0 border-border bg-white p-4"
    >
      <div className="mb-3 text-sm font-bold text-brand-blueDark">
        Thông tin hàng hóa nhập kho
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {fields.map((field) => (
          <div
            key={field.key}
            className={field.span === 2 ? "col-span-2" : undefined}
          >
            <label className="mb-1 block text-sm text-[#333333]">
              {field.label}
            </label>
            <input
              type={field.type ?? "text"}
              value={values[field.key] ?? ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              className="w-full rounded-sm border border-border px-2 py-1.5 text-sm focus:border-brand-blue focus:outline-none"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <label className="mb-1 block text-sm font-bold text-brand-blueDark">
          Phiếu ký nhập kho
        </label>
        <div className="flex items-center gap-3">
          <label className="cursor-pointer rounded-sm border border-border bg-[#F0F0F0] px-3 py-1.5 text-sm font-bold text-[#333333] hover:bg-[#E4E4E4]">
            Chọn tệp
            <input type="file" onChange={handleFile} className="hidden" />
          </label>
          <span className="text-sm text-footerGray">
            {fileName ?? "Chưa chọn tệp nào"}
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="submit"
          className="rounded-sm border border-brand-blueDark bg-brand-blue px-4 py-1.5 text-sm font-bold text-white hover:bg-brand-blueDark"
        >
          Lưu phiếu nhập kho
        </button>
        <button
          type="button"
          onClick={() => {
            setValues({});
            setFileName(null);
          }}
          className="rounded-sm border border-border bg-white px-4 py-1.5 text-sm font-bold text-[#333333] hover:bg-[#F0F0F0]"
        >
          Nhập lại
        </button>
      </div>
    </form>
  );
}
