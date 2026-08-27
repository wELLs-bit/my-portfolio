import { motion } from "framer-motion";
import { Layers3, PenTool, Sparkles, Target } from "lucide-react";

const skills = [
  "Brand Identity",
  "Logo Systems",
  "Social Campaigns",
  "Print Design",
  "UI Concepts",
  "Creative Direction"
];

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "148+", label: "Projects Completed" },
  { value: "62+", label: "Clients Worked With" }
];

const highlights = [
  {
    icon: Layers3,
    title: "Visual Systems",
    text: "Brand worlds built with structure, rhythm, and memorable design rules."
  },
  {
    icon: PenTool,
    title: "Identity Design",
    text: "Distinct logo marks, typography choices, and visual assets made to scale."
  },
  {
    icon: Target,
    title: "Creative Strategy",
    text: "Clear design direction shaped around audience, story, and positioning."
  }
];

export default function About() {
  return (
    <section id="about" className="bg-[#05060a] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/7 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0d111b] p-6">
              <div className="flex items-center justify-between">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-2xl font-black text-[#05060a]">
                  W
                </div>

                <span className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#05060a]">
                  WELLS
                </span>
              </div>

              <div className="mt-24">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  Multidisciplinary Designer
                </p>

                <h3 className="mt-3 text-4xl font-black leading-none">
                  Bold identity. Clean systems. Premium visuals.
                </h3>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/7 p-4"
                >
                  <p className="text-2xl font-black">{stat.value}</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/7 px-4 py-2">
              <Sparkles size={15} className="text-cyan-300" />

              <span className="text-xs font-black uppercase tracking-[0.22em] text-white/55">
                About WELLS
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,4rem)] font-black leading-[0.98]">
              A creative designer building identities that feel sharp, modern,
              and unforgettable.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">
              WELLS is a multidisciplinary creative designer focused on building
              bold visual identities and meaningful digital experiences. The
              work blends strategy, typography, composition, and visual emotion
              to help brands show up with clarity.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/50">
              The creative philosophy is simple: design should look premium,
              communicate fast, and leave people with a visual memory they can
              recognize anywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/7 px-4 py-3 text-sm font-bold text-white/68"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="rounded-[1.35rem] border border-white/10 bg-white/7 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#05060a]">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-5 text-lg font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
