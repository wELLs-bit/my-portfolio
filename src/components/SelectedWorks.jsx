import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const selectedWorks = [
  {
    title: "QUICKEN",
    category: "Church & Media Flyer",
    year: "2026",
    number: "01",
    image:
      "https://res.cloudinary.com/sseqke3v/image/upload/v1787227480/97f72ed1-9857-45af-8869-23bfb9b1a6c3.jpg",
    description:
      "A bold church media flyer designed with strong visual contrast, atmosphere, and clear typography.",
  },
  {
    title: "HAVEN WEAR",
    category: "Fashion Brand Flyer",
    year: "2026",
    number: "02",
    image:
      "https://res.cloudinary.com/sseqke3v/image/upload/v1787227620/Haven_Wear.jpg",
    description:
      "A fashion campaign visual created for a clean launch experience with premium brand energy.",
  },
  {
    title: "AKOSIWA",
    category: "Product Design Flyer",
    year: "2026",
    number: "03",
    image:
      "https://res.cloudinary.com/sseqke3v/image/upload/v1787226646/AKOSIWA_flyer.png",
    description:
      "A product flyer direction focused on clarity, polished layout, and scroll-stopping presentation.",
  },
  {
    title: "IDIFY",
    category: "Visual Identity",
    year: "2026",
    number: "04",
    image:
      "https://res.cloudinary.com/sseqke3v/image/upload/v1787227884/idify_trend_post.png",
    description:
      "A visual identity concept built around modern composition, hierarchy, and strong brand presence.",
  },
];

export default function SelectedWorks() {
  const [selectedWork, setSelectedWork] = useState(null);

  const navigate = (event, href) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("wells:navigate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="portfolio"
      className="relative flex h-[100svh] items-center overflow-hidden bg-[#050507] px-5 py-16 text-white sm:px-8 lg:px-16"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/45">
              Selected Projects
            </p>

            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-none">
              Selected Works
            </h2>
          </div>

          <a
            href="/portfolio"
            onClick={(event) => navigate(event, "/portfolio")}
            className="hidden min-h-11 items-center justify-center gap-3 rounded-full border border-white/10 bg-white px-5 text-xs font-black text-[#050507] transition hover:bg-red-500 hover:text-white sm:inline-flex"
          >
            View All
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {selectedWorks.map((work, index) => (
            <motion.button
              key={work.title}
              type="button"
              onClick={() => setSelectedWork(work)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group w-[78vw] shrink-0 text-left sm:w-auto"
            >
              <div className="relative aspect-[1.35/1] overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                  WELLS
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[1fr_auto] items-start gap-4 border-t border-white/10 pt-4">
                <div>
                  <h3 className="text-sm font-black leading-tight text-white">
                    {work.title}
                  </h3>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                    {work.category}
                  </p>
                </div>

                <span className="text-lg font-black leading-none text-red-500">
                  {work.number}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <a
          href="/portfolio"
          onClick={(event) => navigate(event, "/portfolio")}
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/10 bg-white px-5 text-xs font-black text-[#050507] transition hover:bg-red-500 hover:text-white sm:hidden"
        >
          View All
          <ArrowRight size={15} />
        </a>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-[#050507]/88 p-4 text-white backdrop-blur-2xl"
            onClick={() => setSelectedWork(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.article
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
              className="grid max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/12 bg-[#0b0d13] p-3 shadow-[0_40px_140px_rgba(0,0,0,0.55)] md:grid-cols-[0.95fr_1fr]"
            >
              <div className="h-[48svh] min-h-[300px] overflow-hidden rounded-[1.5rem] md:h-full">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5 md:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-400">
                      {selectedWork.category} / {selectedWork.year}
                    </p>

                    <h3 className="mt-3 text-[clamp(2rem,5vw,3.8rem)] font-black leading-[0.95]">
                      {selectedWork.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedWork(null)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.07] transition hover:bg-white/12"
                    aria-label="Close project details"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="mt-6 text-sm leading-7 text-white/62 md:text-base md:leading-8">
                  {selectedWork.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["Visual Direction", "Flyer Design", "Typography", "Campaign Ready"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-bold text-white/70"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}