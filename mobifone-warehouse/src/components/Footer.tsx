export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white py-3">
      <div className="mx-auto max-w-[1280px] px-4 text-center text-xs text-footerGray">
        <div>Bản quyền thuộc Mobifone Lâm Đồng © 2026</div>
        <div>
          Email:{" "}
          <a
            href="mailto:ldo.hotrokythuat@mobifone.vn"
            className="text-footerGray hover:text-brand-blue hover:underline"
          >
            ldo.hotrokythuat@mobifone.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
