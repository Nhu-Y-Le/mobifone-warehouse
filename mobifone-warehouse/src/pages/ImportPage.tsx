import { useState } from "react";
import ImportTypeTabs from "../components/ImportTypeTabs";
import ImportForm from "../components/ImportForm";
import ImportHistoryTable from "../components/ImportHistoryTable";
import type { ImportType, WarehouseOrder } from "../mock/data";
import { importOrders } from "../mock/data";

let nextIdCounter = importOrders.length + 1;

export default function ImportPage() {
  const [activeType, setActiveType] = useState<ImportType>("don-le");
  const [orders, setOrders] = useState<WarehouseOrder[]>(importOrders);
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (
    values: Record<string, string>,
    fileName: string | null
  ) => {
    const itemName =
      values.itemName || values.batchName || "Chưa đặt tên hàng hóa";
    const quantity = Number(values.quantity) || 0;

    const newOrder: WarehouseOrder = {
      id: String(nextIdCounter++),
      code: `PN-2026-0${140 + nextIdCounter}`,
      importType: activeType,
      itemName,
      quantity,
      requester: "Bạn",
      date: new Date().toLocaleDateString("vi-VN"),
      status: "Chờ duyệt",
      hasSignedForm: Boolean(fileName),
    };

    setOrders((prev) => [newOrder, ...prev]);
    setNotice(`Đã lưu phiếu nhập kho ${newOrder.code} thành công.`);
    window.setTimeout(() => setNotice(null), 4000);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between border border-border bg-brand-lightBlue px-3 py-2">
        <span className="text-md font-bold text-brand-blueDark">
          Nhập kho — gồm 3 loại giao dịch
        </span>
      </div>

      {notice && (
        <div className="mb-3 border border-[#B7DEBE] bg-[#DFF3E1] px-3 py-2 text-sm font-bold text-[#1E7B34]">
          {notice}
        </div>
      )}

      <ImportTypeTabs active={activeType} onChange={setActiveType} />
      <ImportForm key={activeType} type={activeType} onSubmit={handleSubmit} />

      <ImportHistoryTable
        orders={orders}
        onDelete={(id) => setOrders((prev) => prev.filter((o) => o.id !== id))}
      />
    </div>
  );
}
