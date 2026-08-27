import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const briefItems = [
  "Brand Identity",
  "Flyer Design",
  "Logo Design",
  "Campaign Visuals",
];

export default function CallToAction() {
  const navigate = (event, href) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("wells:navigate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050507] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-16 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(220,38,38,0.38),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(127,29,29,0.25),transparent_34%),linear-gradient(115deg,#230104_0%,#090507_48%,#050507_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />

      <div className="pointer-events-none absolute left-[-0.4rem] top-[7rem] select-none text-[clamp(4rem,17vw,13rem)] font-black leading-none tracking-normal text-red-950/55">
        CREATE
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -34, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75 }}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.34em] text-red-400 sm:text-xs">
            Work With WELLS
          </p>

          <h2 className="mt-5 max-w-4xl text-[clamp(2rem,5vw,4.4rem)] font-black leading-[0.95] tracking-normal">
            Let&apos;s create visuals your brand will be remembered for.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Bring your idea, event, brand, or campaign. I&apos;ll help shape it
            into a clean, bold, and premium visual experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              onClick={(event) => navigate(event, "/contact")}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-red-600 px-7 text-sm font-black text-white shadow-[0_18px_55px_rgba(220,38,38,0.34)] transition hover:-translate-y-1 hover:bg-red-700"
            >
              Start a Project
              <ArrowRight size={17} />
            </a>

            <a
              href="/portfolio"
              onClick={(event) => navigate(event, "/portfolio")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#160104]"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.12, duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_34px_120px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-5 lg:rounded-[2rem] lg:p-6">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-red-500/20 bg-[#070707] p-5 sm:p-6 lg:p-7">
              <div className="absolute right-[-3rem] top-[-3rem] h-40 w-40 rounded-full bg-red-600/25 blur-[70px]" />

              <div className="relative flex items-center justify-between">
                <span className="rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                  Brief Open
                </span>

                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                  WELLS
                </span>
              </div>

              <h3 className="relative mt-8 text-[clamp(1.6rem,4vw,3rem)] font-black leading-tight">
                Send the idea.
                <span className="block text-red-500">
                  I&apos;ll shape the visual.
                </span>
              </h3>

              <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
                {briefItems.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <span className="text-xs font-black text-red-400">
                      0{index + 1}
                    </span>

                    <p className="mt-3 text-sm font-black text-white">{item}</p>
                  </div>
                ))}
              </div>

              <div className="relative mt-7 border-t border-white/10 pt-5">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/35">
                  Response Time
                </p>

                <p className="mt-2 text-2xl font-black text-white">
                  Within 24 Hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
