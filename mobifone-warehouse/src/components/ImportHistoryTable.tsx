import { useMemo, useState } from "react";
import type { ImportType, WarehouseOrder } from "../mock/data";
import { importTypeLabels } from "../mock/data";
import StatusBadge from "./StatusBadge";

interface Props {
  orders: WarehouseOrder[];
  onDelete: (id: string) => void;
}

export default function ImportHistoryTable({ orders, onDelete }: Props) {
  const [keyword, setKeyword] = useState("");
  const [typeFilter, setTypeFilter] = useState<ImportType | "all">("all");

  const filtered = useMemo(() => {
    return orders.filter((order) => {
      const matchesType =
        typeFilter === "all" || order.importType === typeFilter;
      const matchesKeyword =
        keyword.trim() === "" ||
        order.code.toLowerCase().includes(keyword.toLowerCase()) ||
        order.itemName.toLowerCase().includes(keyword.toLowerCase());
      return matchesType && matchesKeyword;
    });
  }, [orders, keyword, typeFilter]);

  return (
    <div className="mt-6">
      <div className="mb-3 border border-border bg-brand-lightBlue px-3 py-2">
        <span className="text-md font-bold text-brand-blueDark">
          Tra cứu / Lịch sử giao dịch nhập kho
        </span>
      </div>

      <div className="mb-3 flex flex-wrap items-end gap-3 border border-border bg-[#F7F9FB] p-3">
        <div>
          <label className="mb-1 block text-xs text-footerGray">
            Mã phiếu / Tên hàng hóa
          </label>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập từ khóa..."
            className="w-56 rounded-sm border border-border px-2 py-1.5 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-footerGray">
            Loại nhập kho
          </label>
          <select
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(e.target.value as ImportType | "all")
            }
            className="w-64 rounded-sm border border-border px-2 py-1.5 text-sm focus:border-brand-blue focus:outline-none"
          >
            <option value="all">Tất cả</option>
            {(Object.keys(importTypeLabels) as ImportType[]).map((type) => (
              <option key={type} value={type}>
                {importTypeLabels[type]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="w-full border border-border text-sm">
        <thead>
          <tr className="bg-[#EAF2FA] text-left">
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Mã phiếu
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Loại nhập
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Tên hàng hóa
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              SL
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Người tạo
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Ngày tạo
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Phiếu ký NK
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Trạng thái
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="border border-border px-2 py-4 text-center text-footerGray"
              >
                Không tìm thấy giao dịch phù hợp.
              </td>
            </tr>
          ) : (
            filtered.map((order, idx) => (
              <tr
                key={order.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#F7F9FB]"}
              >
                <td className="border border-border px-2 py-1.5">
                  {order.code}
                </td>
                <td className="border border-border px-2 py-1.5">
                  {order.importType ? importTypeLabels[order.importType] : "-"}
                </td>
                <td className="border border-border px-2 py-1.5">
                  {order.itemName}
                </td>
                <td className="border border-border px-2 py-1.5 text-center">
                  {order.quantity}
                </td>
                <td className="border border-border px-2 py-1.5">
                  {order.requester}
                </td>
                <td className="border border-border px-2 py-1.5">
                  {order.date}
                </td>
                <td className="border border-border px-2 py-1.5 text-center">
                  {order.hasSignedForm ? (
                    <span className="text-brand-blue hover:underline cursor-pointer">
                      Xem tệp
                    </span>
                  ) : (
                    <span className="text-footerGray">Chưa có</span>
                  )}
                </td>
                <td className="border border-border px-2 py-1.5">
                  <StatusBadge status={order.status} />
                </td>
                <td className="border border-border px-2 py-1.5 text-center">
                  <button
                    onClick={() => onDelete(order.id)}
                    className="rounded-sm border border-[#EAB8B8] bg-[#FBE0E0] px-2 py-0.5 text-xs font-bold text-[#B03030] hover:bg-[#f5c6c6]"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
