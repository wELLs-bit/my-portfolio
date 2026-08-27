const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Brand Identity",
  "Logo Design",
  "Flyer Design",
  "UI/UX Concepts",
  "Creative Direction",
];

const socialLinks = [
  {
    label: "Instagram",
    short: "IG",
    href: "https://www.instagram.com/iamharrisonwells_",
  },
  {
    label: "LinkedIn",
    short: "IN",
    href: "https://www.linkedin.com/in/godswill-harry-",
  },
  { label: "Email", short: "@", href: "mailto:harrysticks75@gmail.com" },
  { label: "WhatsApp", short: "WA", href: "https://wa.me/2349064894870" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigate = (event, href) => {
    if (!href.startsWith("/")) return;

    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("wells:navigate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050507] px-5 py-12 text-white sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-44 w-80 -translate-x-1/2 rounded-full bg-red-600/20 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-red-500/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] lg:gap-12">
          <div>
            <a
              href="/"
              onClick={(event) => navigate(event, "/")}
              className="inline-flex items-center gap-3"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-red-500/35 bg-red-500/10 text-sm font-black text-red-400 shadow-[0_0_35px_rgba(239,68,68,0.18)]">
                W
              </span>

              <span>
                <span className="block text-xl font-black tracking-[0.22em] text-white">
                  WELLS
                </span>
                <span className="block text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                  Creative Design Studio
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Building bold visual identities, cinematic campaign designs, and
              clean digital experiences for brands that want to look premium.
            </p>

            <a
              href="/contact"
              onClick={(event) => navigate(event, "/contact")}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-red-500 px-5 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(239,68,68,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-red-600"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => navigate(event, link.href)}
                  className="w-fit text-sm font-semibold text-white/65 transition duration-300 hover:translate-x-1 hover:text-red-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <span key={service} className="text-sm font-semibold text-white/65">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
              Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Available for visual identity systems, campaign visuals, social
              media designs, and premium brand direction.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-black text-white/70 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500 hover:text-white"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs font-semibold text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} WELLS. All rights reserved.</p>
          <p>Designed for bold brands and unforgettable visuals.</p>
        </div>
      </div>
    </footer>
  );
}
