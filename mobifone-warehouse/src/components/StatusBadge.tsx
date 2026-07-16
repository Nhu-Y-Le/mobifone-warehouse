const statusStyles: Record<string, string> = {
  "Chờ duyệt": "bg-[#FFF3CD] text-[#8A6D00] border-[#E5D08C]",
  "Đã duyệt": "bg-[#DFF3E1] text-[#1E7B34] border-[#B7DEBE]",
  "Từ chối": "bg-[#FBE0E0] text-[#B03030] border-[#EAB8B8]",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-block rounded-sm border px-2 py-0.5 text-xs font-bold ${
        statusStyles[status] ?? "bg-gray-100 text-gray-700 border-gray-300"
      }`}
    >
      {status}
    </span>
  );
}
