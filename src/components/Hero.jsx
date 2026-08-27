import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image1 from '../assets/WhatsApp Image 2026-08-19 at 23.26.41.jpeg' 

// const heroImage =
//   "";

const highlights = [
  "Brand Identity",
  "Visual Storytelling",
  "Flyer & Campaign Design",
  "Digital Experiences",
];

export default function Hero() {
  const navigate = (event, href) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("wells:navigate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-[100svh] overflow-hidden bg-[#180104] px-5 pt-24 text-white sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(239,68,68,0.34),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(0,0,0,0.75),transparent_42%),linear-gradient(110deg,#260105_0%,#130103_48%,#050507_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />

      <div className="pointer-events-none absolute left-[-0.5rem] top-[5.5rem] select-none text-[clamp(4rem,17vw,13rem)] font-black leading-none tracking-normal text-red-950/55">
        PORTFOLIO
      </div>

      <div className="relative mx-auto grid h-full max-w-7xl items-center gap-8 pb-5 lg:grid-cols-[0.95fr_0.85fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, x: -34, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-red-500 text-white">
              <Sparkles size={15} />
            </span>

            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/65 sm:text-xs">
              Creative Designer
            </span>
          </div>

          <p className="font-serif text-2xl italic text-red-400 sm:text-3xl">
            Hello, I&apos;m
          </p>

          <h1 className="mt-2 text-[clamp(3.2rem,10vw,6rem)] font-black leading-[0.82] tracking-normal text-red-700">
            WELLS
          </h1>

          <h2 className="mt-3 text-[clamp(1.8rem,5vw,2rem)] font-black leading-none tracking-normal">
            CREATIVE DESIGNER
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
            Am a creative designer focused on branding, flyers, modern visuals,
            digital experiences, and identity systems that feel bold and
            premium.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/portfolio"
              onClick={(event) => navigate(event, "/portfolio")}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-red-600 px-6 text-sm font-black text-white shadow-[0_18px_55px_rgba(220,38,38,0.32)] transition hover:-translate-y-1 hover:bg-red-700"
            >
              View Portfolio
              <ArrowRight size={17} />
            </a>

            <a
              href="/contact"
              onClick={(event) => navigate(event, "/contact")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#180104]"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.85 }}
          className="relative z-10 mx-auto hidden items-center justify-center lg:flex"
        >
          <div className="absolute h-[23rem] w-[23rem] rounded-full bg-red-600/25 blur-[80px]" />

          <div className="relative grid h-[22rem] w-[22rem] place-items-center rounded-full border border-white/20 bg-white/10 p-3 shadow-[0_34px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl xl:h-[25rem] xl:w-[25rem]">
            <div className="h-full w-full overflow-hidden rounded-full border border-red-500/45 bg-[#08080b] p-2">
              <img
                src={Image1}
                alt="WELLS portfolio portrait"
                className="h-full w-full rounded-full object-cover object-center grayscale contrast-125"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.22, duration: 0.75 }}
          className="z-10 hidden lg:block"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-400">
            Focus Areas
          </p>

          <div className="mt-6 space-y-5">
            {highlights.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-white/10 pb-5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-600 text-xs font-black text-white">
                  0{index + 1}
                </span>

                <span className="text-sm font-black text-white/72">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/45">
              Available For
            </p>

            <p className="mt-3 text-2xl font-black leading-tight">
              Branding, flyers, campaigns, and creative direction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
