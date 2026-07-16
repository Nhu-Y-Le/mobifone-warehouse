import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import { currentUser, assetStats, transactionStats } from "../mock/data";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-4 border border-border bg-brand-lightBlue px-3 py-2">
        <span className="text-md font-bold text-brand-blueDark">
          Xin chào, {currentUser.name}!
        </span>
      </div>

      <div className="flex gap-4">
        <DashboardCard
          title="Bạn đang sử dụng"
          rows={assetStats}
          onDetailClick={() => navigate("/tra-cuu")}
        />
        <DashboardCard
          title="Bạn có giao dịch"
          rows={transactionStats}
          onDetailClick={() => navigate("/nhap-kho")}
        />
      </div>

      <div className="mt-4">
        <button
          className="rounded-sm border border-brand-blueDark bg-brand-blue px-4 py-1.5 text-sm font-bold text-white shadow-subtle hover:bg-brand-blueDark"
          onClick={() => navigate("/nhap-kho")}
        >
          + New
        </button>
      </div>
    </div>
  );
}
