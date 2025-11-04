export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-8 px-6 lg:px-8 mt-auto">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-500 text-center">
          © {currentYear} Trinh Minh Tuan. Last updated November 2024.
        </p>
      </div>
    </footer>
  );
}
