import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const navigate = (event, href) => {
    event.preventDefault();

    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("wells:navigate"));
    setMenuOpen(false);

    const active = navLinks.find((link) => link.href === href);
    if (active) setActiveLink(active.label);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActivePage = () => {
      const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
      const current = navLinks.find((link) => link.href === currentPath);

      if (current) {
        setActiveLink(current.label);
      } else {
        setActiveLink("Home");
      }
    };

    updateActivePage();

    window.addEventListener("popstate", updateActivePage);
    window.addEventListener("wells:navigate", updateActivePage);

    return () => {
      window.removeEventListener("popstate", updateActivePage);
      window.removeEventListener("wells:navigate", updateActivePage);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#05060a]/95 text-white backdrop-blur-2xl">
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-40"
        }`}
      />

      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65 }}
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"
      >
        <a
          href="/"
          onClick={(event) => navigate(event, "/")}
          className="group flex items-center gap-3"
        >
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/12 bg-white text-sm font-black text-[#05060a]">
            <span className="absolute inset-0 bg-gradient-to-br from-white via-red-200 to-red-500 opacity-95 transition duration-500 group-hover:scale-110" />
            <span className="relative">W</span>
          </span>

          <span className="leading-none">
            <span className="block text-base font-black tracking-[0.26em]">
              WELLS
            </span>

            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
              Creative Designer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => navigate(event, link.href)}
              className={`group relative py-3 text-xs font-bold uppercase tracking-[0.2em] transition duration-300 ${
                activeLink === link.label
                  ? "text-white"
                  : "text-white/48 hover:text-white"
              }`}
            >
              {link.label}

              <span
                className={`absolute bottom-1 left-0 h-px rounded-full bg-gradient-to-r from-red-500 to-white transition-all duration-300 ${
                  activeLink === link.label
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            onClick={(event) => navigate(event, "/contact")}
            className="group hidden items-center gap-2 rounded-full border border-white/12 bg-white px-5 py-3 text-sm font-black text-[#05060a] transition duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white sm:flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={17} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/7 text-white transition duration-300 hover:bg-white/12 lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-[#05060a] px-5 pb-7 pt-4 lg:hidden"
          >
            <div className="mx-auto max-w-7xl">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => navigate(event, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.25 }}
                  className={`group flex items-center justify-between border-b border-white/8 py-5 text-xl font-black uppercase tracking-[0.12em] transition ${
                    activeLink === link.label
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ArrowUpRight size={20} />
                </motion.a>
              ))}

              <a
                href="/contact"
                onClick={(event) => navigate(event, "/contact")}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-black text-[#05060a] transition hover:bg-red-500 hover:text-white"
              >
                Start a Project
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
