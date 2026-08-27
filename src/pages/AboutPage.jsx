import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const aboutImage =
  "https://res.cloudinary.com/sseqke3v/image/upload/v1787231094/ae7a50cf-ad48-44c9-8aa8-4b4541c7c869.jpg";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "45+", label: "Clients Worked With" },
];

const philosophy = [
  {
    title: "Clarity First",
    text: "Every design should communicate quickly, beautifully, and with purpose.",
  },
  {
    title: "Strong Visual Voice",
    text: "I build visuals that help brands feel confident, premium, and memorable.",
  },
  {
    title: "Detail Matters",
    text: "Spacing, typography, color, and layout all work together to create trust.",
  },
  {
    title: "Design That Moves",
    text: "The goal is not just beauty. The goal is attention, emotion, and action.",
  },
];

const expertise = [
  "Brand Identity",
  "Logo Design",
  "Flyer Design",
  "Social Media Design",
  "Print Design",
  "Creative Direction",
  "UI/UX Concepts",
  "Visual Systems",
];

const tools = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "Canva",
  "CorelDRAW",
  "After Effects",
];

export default function AboutPage() {
  const navigate = (event, href) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("wells:navigate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-[#050507] text-white">
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#120103] px-5 pb-16 pt-28 sm:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(220,38,38,0.36),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(0,0,0,0.78),transparent_38%),linear-gradient(115deg,#260105_0%,#100103_48%,#050507_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />

        <div className="pointer-events-none absolute left-[-0.5rem] top-[6rem] select-none text-[clamp(4rem,17vw,13rem)] font-black leading-none tracking-normal text-red-950/55">
          ABOUT
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_0.9fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, x: -34, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-red-600 text-white">
                <Sparkles size={15} />
              </span>

              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/65 sm:text-xs">
                About WELLS
              </span>
            </div>

            <p className="font-serif text-2xl italic text-red-400 sm:text-3xl">
              Hello, I&apos;m
            </p>

            <h1 className="mt-2 text-[clamp(3.2rem,10vw,7rem)] font-black leading-[0.82] tracking-normal text-red-700">
              WELLS
            </h1>

            <h2 className="mt-3 text-[clamp(1.7rem,4.6vw,3.2rem)] font-black leading-none">
              CREATIVE DESIGNER
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
              Am a multidisciplinary creative designer focused on building
              bold visual identities, premium flyers, meaningful brand systems,
              and digital experiences that speak with clarity.
            </p>

            <a
              href="/contact"
              onClick={(event) => navigate(event, "/contact")}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-red-600 px-7 text-sm font-black text-white shadow-[0_18px_55px_rgba(220,38,38,0.34)] transition hover:-translate-y-1 hover:bg-red-700"
            >
              Let&apos;s Work Together
              <ArrowRight size={17} />
            </a>
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
                  src={aboutImage}
                  alt="WELLS portrait"
                  className="h-full w-full rounded-full object-cover object-center grayscale contrast-125"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.75 }}
            className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
              >
                <span className="text-xs font-black text-red-400">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-4xl font-black text-white">
                  {stat.value}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050507] px-5 py-24 text-white sm:px-8 lg:px-16">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/45">
              Design Philosophy
            </p>

            <h2 className="mt-3 max-w-3xl text-[clamp(1.9rem,4.5vw,3.8rem)] font-black leading-none">
              My approach is simple: make every visual feel intentional.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="min-h-[260px] rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-2 hover:border-red-500/45"
              >
                <span className="text-xl font-black text-red-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-8 text-2xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#100103] px-5 py-24 text-white sm:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(220,38,38,0.28),transparent_30%),linear-gradient(115deg,#170104_0%,#050507_58%,#100103_100%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-red-400">
              Expertise
            </p>

            <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,4.2rem)] font-black leading-[0.96]">
              Skills, tools, and visual strengths.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              I combine design taste, strong layout thinking, typography, color,
              and practical brand direction to create visuals that work across
              digital and print platforms.
            </p>

            <a
              href="/portfolio"
              onClick={(event) => navigate(event, "/portfolio")}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-white px-7 text-sm font-black text-[#150607] transition hover:-translate-y-1 hover:bg-red-600 hover:text-white"
            >
              View My Work
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-white/40">
                Skills
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {expertise.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <span className="text-sm font-black text-white">
                      {item}
                    </span>

                    <span className="text-xs font-black text-red-400">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-white/40">
                Tools
              </p>

              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-red-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
