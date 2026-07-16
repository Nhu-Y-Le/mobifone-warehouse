import type { WarehouseOrder } from "../mock/data";
import StatusBadge from "./StatusBadge";

interface Props {
  title: string;
  orders: WarehouseOrder[];
  quantityLabel?: string;
  onDelete?: (id: string) => void;
}

export default function WarehouseOrderTable({
  title,
  orders,
  quantityLabel = "SL",
  onDelete,
}: Props) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between border border-border bg-brand-lightBlue px-3 py-2">
        <span className="text-md font-bold text-brand-blueDark">{title}</span>
        <button className="rounded-sm border border-brand-blueDark bg-brand-blue px-3 py-1 text-sm font-bold text-white hover:bg-brand-blueDark">
          + New
        </button>
      </div>

      <table className="w-full border border-border text-sm">
        <thead>
          <tr className="bg-[#EAF2FA] text-left">
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Mã phiếu
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Tên vật tư / thiết bị
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              {quantityLabel}
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Người yêu cầu
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Ngày tạo
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Trạng thái
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Thao tác
            </th>
            <th className="border border-border px-2 py-1.5 font-bold text-brand-blueDark">
              Xóa
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr
              key={order.id}
              className={idx % 2 === 0 ? "bg-white" : "bg-[#F7F9FB]"}
            >
              <td className="border border-border px-2 py-1.5">{order.code}</td>
              <td className="border border-border px-2 py-1.5">
                {order.itemName}
              </td>
              <td className="border border-border px-2 py-1.5 text-center">
                {order.quantity}
              </td>
              <td className="border border-border px-2 py-1.5">
                {order.requester}
              </td>
              <td className="border border-border px-2 py-1.5">{order.date}</td>
              <td className="border border-border px-2 py-1.5">
                <StatusBadge status={order.status} />
              </td>
              <td className="border border-border px-2 py-1.5">
                <button className="text-brand-blue hover:underline">
                  Xem chi tiết
                </button>
              </td>
              <td className="border border-border px-2 py-1.5 text-center">
                {onDelete && (
                  <button
                    onClick={() => onDelete(order.id)}
                    className="rounded-sm border border-[#EAB8B8] bg-[#FBE0E0] px-2 py-0.5 text-xs font-bold text-[#B03030] hover:bg-[#f5c6c6]"
                  >
                    Xóa
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
