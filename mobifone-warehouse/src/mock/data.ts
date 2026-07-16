export const currentUser = {
  name: "Nguyễn Văn A",
  role: "Nhân viên kho",
};

// Card 1 trên Home: "Bạn đang sử dụng"
export const assetStats = [
  { label: "Tài sản (TS)", value: 42 },
  { label: "Công cụ dụng cụ (CCDC)", value: 15 },
];

// Card 2 trên Home: "Bạn có giao dịch"
export const transactionStats = [
  { label: "Nhập kho (NK)", value: 18 },
  { label: "Xuất kho (XK)", value: 7 },
];

// 3 loại giao dịch nhập kho theo ghi chú
export type ImportType = "don-le" | "theo-lo" | "don-vi-khac";

export const importTypeLabels: Record<ImportType, string> = {
  "don-le": "Nhập kho đơn lẻ",
  "theo-lo": "Nhập kho theo lô",
  "don-vi-khac": "Nhập kho từ đơn vị khác / ứng trước",
};

export interface WarehouseOrder {
  id: string;
  code: string;
  importType?: ImportType;
  itemName: string;
  quantity: number;
  requester: string;
  date: string;
  status: "Chờ duyệt" | "Đã duyệt" | "Từ chối";
  hasSignedForm?: boolean;
}

export const importOrders: WarehouseOrder[] = [];

export const exportOrders: WarehouseOrder[] = [];

