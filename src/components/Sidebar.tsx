import { Mail, FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "research", label: "Research", path: "/research" },
    { id: "publications", label: "Publications", path: "/publications" },
    { id: "updates", label: "Updates", path: "/updates" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-700 text-white z-40 transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-8 border-b border-slate-600">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-left hover:text-slate-200 transition-colors"
          >
            <h3 className="text-white mb-1">Trinh Minh Tuan</h3>
            <p className="text-slate-300 text-sm">PhD Candidate</p>
          </Link>
        </div>

        <nav className="flex-1 p-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                    isActive(item.path)
                      ? "bg-slate-600 text-white"
                      : "text-slate-200 hover:bg-slate-600 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-slate-600 space-y-3">
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-transparent border-slate-500 text-slate-200 hover:bg-slate-600 hover:text-white"
            asChild
          >
            <a href="mailto:tuanmt@berkeley.edu">
              <Mail size={16} className="mr-2" />
              Email
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-transparent border-slate-500 text-slate-200 hover:bg-slate-600 hover:text-white"
            asChild
          >
            <a href="/cv.pdf" target="_blank">
              <FileText size={16} className="mr-2" />
              CV
            </a>
          </Button>
        </div>

        <div className="p-6 pt-0">
          <div className="flex gap-3 text-sm text-slate-300">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Scholar
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com/tuanmtrinh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
