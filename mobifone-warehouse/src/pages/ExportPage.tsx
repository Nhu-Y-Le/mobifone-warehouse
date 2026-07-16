import { useState } from "react";
import WarehouseOrderTable from "../components/WarehouseOrderTable";
import { exportOrders } from "../mock/data";

export default function ExportPage() {
  const [orders, setOrders] = useState(exportOrders);
  return (
    <WarehouseOrderTable
      title="Danh sách phiếu xuất kho"
      orders={orders}
      onDelete={(id) => setOrders((prev) => prev.filter((o) => o.id !== id))}
    />
  );
}
