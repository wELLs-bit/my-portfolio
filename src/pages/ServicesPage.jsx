import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  Compass,
  Layers3,
  MonitorSmartphone,
  PenTool,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    tag: "Identity Systems",
    icon: Layers3,
    description:
      "Complete brand systems with visual rules, colors, typography, and reusable brand assets.",
    details:
      "A complete identity direction for brands that need to look sharp, consistent, and premium across every platform.",
    deliverables: ["Logo direction", "Color system", "Typography", "Brand assets"],
  },
  {
    title: "Logo Design",
    tag: "Brand Marks",
    icon: PenTool,
    description:
      "Clean, memorable, and scalable logo marks built for recognition and long-term use.",
    details:
      "Logo design focused on recognition, balance, simplicity, and strong usage across print, digital, and social media.",
    deliverables: ["Logo concepts", "Final mark", "Logo variations", "Export files"],
  },
  {
    title: "Social Media Design",
    tag: "Digital Content",
    icon: Sparkles,
    description:
      "Premium social graphics, carousels, campaign visuals, launch designs, and content templates.",
    details:
      "Social media visuals designed to help brands look professional, consistent, and attention-worthy online.",
    deliverables: ["Post designs", "Story graphics", "Campaign templates", "Launch visuals"],
  },
  {
    title: "Print Design",
    tag: "Flyers & Layouts",
    icon: Brush,
    description:
      "Flyers, posters, brochures, and print-ready layouts with strong visual hierarchy.",
    details:
      "Print-ready design for events, promotions, campaigns, churches, brands, and personal celebrations.",
    deliverables: ["Flyers", "Posters", "Brochures", "Print exports"],
  },
  {
    title: "Creative Direction",
    tag: "Visual Strategy",
    icon: Compass,
    description:
      "High-level visual direction for campaigns, launches, brand refreshes, and creative rollouts.",
    details:
      "A strategic creative direction service for projects that need a stronger concept, visual mood, and rollout plan.",
    deliverables: ["Mood direction", "Campaign idea", "Visual references", "Design guidance"],
  },
  {
    title: "UI/UX Design",
    tag: "Digital Experience",
    icon: MonitorSmartphone,
    description:
      "Modern landing pages, interface concepts, user-focused layouts, and responsive digital experiences.",
    details:
      "Clean digital interface design for websites, landing pages, product concepts, and online brand experiences.",
    deliverables: ["Landing pages", "UI concepts", "Wireframes", "Responsive layouts"],
  },
];

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] grid place-items-center bg-[#050507]/88 p-4 text-white backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.article
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.97 }}
          transition={{ duration: 0.35 }}
          onClick={(event) => event.stopPropagation()}
          className="max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/12 bg-[#0b0d13] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.55)] sm:p-7 md:p-8"
        >
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-red-500/25 bg-red-500/10 text-red-400">
                <Icon size={24} />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-400">
                  {service.tag}
                </p>

                <h3 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.96]">
                  {service.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.07] transition hover:bg-white/12"
              aria-label="Close service details"
            >
              <X size={18} />
            </button>
          </div>

          <p className="mt-6 text-sm leading-7 text-white/62 md:text-base md:leading-8">
            {service.details}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <BadgeCheck size={17} className="shrink-0 text-red-400" />
                <span className="text-sm font-bold text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const navigate = (event, href) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("wells:navigate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      <section className="relative min-h-[100svh] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-16">
        <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-red-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-black uppercase tracking-[0.32em] text-red-400">
                Services
              </p>

              <h1 className="mt-5 max-w-3xl text-[clamp(2rem,6vw,4.4rem)] font-black leading-[0.96] tracking-tight">
                Creative services built with clarity, taste, and purpose.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="lg:justify-self-end"
            >
              <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
                From identity systems to flyers, social visuals, print layouts,
                and digital experiences, every service is shaped to help your
                brand feel premium and memorable.
              </p>

              <a
                href="/contact"
                onClick={(event) => navigate(event, "/contact")}
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-red-500 px-6 text-sm font-black text-white shadow-[0_18px_55px_rgba(239,68,68,0.25)] transition hover:-translate-y-1 hover:bg-red-600"
              >
                Start a Project
                <ArrowRight size={17} />
              </a>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.button
                  key={service.title}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.05, duration: 0.55 }}
                  className="group flex min-h-[270px] flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-red-500/45 hover:bg-red-500/[0.06] sm:min-h-[300px] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-red-500/25 bg-red-500/10 text-red-400 transition duration-300 group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <span className="text-xs font-black uppercase tracking-[0.2em] text-white/25">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-9">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-400">
                      {service.tag}
                    </p>

                    <h2 className="mt-3 text-2xl font-black leading-tight text-white">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/58">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/40 transition group-hover:text-red-300">
                      View Details
                      <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8 lg:mt-16 lg:flex lg:items-center lg:justify-between lg:gap-10"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">
                Need something custom?
              </p>

              <h2 className="mt-4 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">
                Tell me what you want to create, and I will help shape the
                visual direction.
              </h2>
            </div>

            <a
              href="/contact"
              onClick={(event) => navigate(event, "/contact")}
              className="mt-7 inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-red-500/35 bg-red-500 px-6 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-red-600 lg:mt-0"
            >
              Let&apos;s Talk
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </main>
  );
}
