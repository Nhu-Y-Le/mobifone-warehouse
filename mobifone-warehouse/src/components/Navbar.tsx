import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Nhập kho", path: "/nhap-kho" },
  { label: "Xuất kho", path: "/xuat-kho" },
  { label: "Tra cứu", path: "/tra-cuu" },
];

export default function Navbar() {
  return (
    <nav
      className="border-b border-brand-blueDark"
      style={{
        background: "linear-gradient(to bottom, #6FB2E8 0%, #2E7FCB 55%, #0B5CAD 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              [
                "select-none px-5 py-2 text-sm font-bold border-r border-brand-blueDark/40 transition-colors duration-100",
                isActive
                  ? "bg-white text-brand-blue"
                  : "text-white hover:bg-[#08427D]",
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
