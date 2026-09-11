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
    
    // Smooth scroll with a slight delay on mobile to ensure menu closes smoothly first
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  const navClass = isScrolled
    ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.7)] py-3"
    : "bg-transparent py-5";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Responsive Brand Logo Layout */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group text-decoration-none min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-[#38bdf8] to-[#0284c7] flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
              <span className="text-black font-extrabold text-xs sm:text-sm tracking-tight">NA</span>
            </div>
            <div className="flex flex-col truncate">
              <span className="text-white font-bold text-xs sm:text-base tracking-tight leading-tight truncate">
                NA Tech Consulting
              </span>
              <span className="text-slate-400 text-[9px] sm:text-xs font-medium tracking-[0.2em] uppercase leading-none mt-0.5">
                LLC
              </span>
            </div>
          </a>

          {/* Desktop & Extra Large Navigation */}
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

          {/* Tablet & Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors cursor-pointer select-none"
            >
              Contact
            </a>
            <Button
              size="sm"
              variant="primary"
              onClick={() => onOpenStrategyModal("proposal")}
            >
              Partner
            </Button>
          </div>

          {/* Mobile Menu & Quick Actions Trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenStrategyModal("proposal")}
              className="xs:flex sm:hidden px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold cursor-pointer transition-colors whitespace-nowrap"
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

      {/* Expandable Mobile Navigation Tray */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[62px] left-0 right-0 z-30 bg-[#07090e]/97 backdrop-blur-2xl border-b border-slate-800 xl:hidden overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 pb-4 border-b border-slate-800/80">
                {NAV_LINLES_DATA.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-slate-300 hover:text-blue-400 py-2 px-2 rounded-lg hover:bg-slate-900/50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 py-2 px-2 rounded-lg hover:bg-slate-900/50 transition-colors"
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