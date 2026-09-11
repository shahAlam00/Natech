import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const NAV_LINLES_DATA = [
  { name: "Partnership", href: "#partnership" },
  { name: "Opportunity", href: "#opportunity" },
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Solutions", href: "#solutions" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Business Model", href: "#business-model" },
  { name: "Why NA Tech", href: "#why-partnership" },
];

export default function Navbar({ onOpenStrategyModal }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navClass = isScrolled
    ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.7)] py-3"
    : "bg-transparent py-5";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Updated Logo Matching NA Tech Consulting LLC Style */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#38bdf8] to-[#0284c7] flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
              <span className="text-black font-extrabold text-sm tracking-tight">NA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm sm:text-base tracking-tight leading-tight flex items-center gap-1.5">
                NA Tech Consulting
              </span>
              <span className="text-slate-400 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase leading-none mt-0.5">
                LLC
              </span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-6">
            {NAV_LINLES_DATA.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors tracking-wide select-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors cursor-pointer select-none"
            >
              Contact
            </a>
          </div>

          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenStrategyModal("proposal")}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold cursor-pointer"
            >
              Partner
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[62px] left-0 right-0 z-30 bg-[#07090e]/97 backdrop-blur-2xl border-b border-slate-800 xl:hidden overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-3 pb-4 border-b border-slate-800/80">
                {NAV_LINLES_DATA.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-slate-300 hover:text-blue-400 py-2 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 py-2 transition-colors"
                >
                  Contact
                </a>
              </div>
              <div className="space-y-3 pt-2">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStrategyModal("proposal");
                  }}
                >
                  Start the Partnership
                </Button>
                <Button
                  variant="secondary"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStrategyModal("strategy");
                  }}
                >
                  Schedule a Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}