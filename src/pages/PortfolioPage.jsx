import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const imageBank = {
  product: [
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787226646/AKOSIWA_flyer.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787233504/AKOSIWA.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787233588/AKOSIWA_petroleum_jelly.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787233815/AKOSIWA_LOGO.png",
  ],
  church: [
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787227480/97f72ed1-9857-45af-8869-23bfb9b1a6c3.jpg",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787234032/HSPCC_prayer_flyer.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787234239/HSPCC_The_Holy_Spirit.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787234335/DOMINION_CITY_Ablaze_flyer_1.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323273/RELATIONSHIP_HSPCC.png",
  ],
  brand: [
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787234685/idify_psycology_1.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787234737/idify_monday_post.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787823601/idify_carousel_1.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787234810/idify_monday.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787234993/idify_identity_launch_revealed.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787235093/idify_friday_2.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787235144/idify_friday.png",
  ],
  // fashion: [
  //   "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  //   "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  //   "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  //   "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80",
  // ],
  promo: [
    "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?auto=format&fit=crop&w=900&q=80",
  ],
  bonus: [
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787322645/CHAKAM.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787322704/David_Flyer_2.jpg",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787322859/JENTECH_QUOTE_DESIGN.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787322921/MONDAY_Flyer_H-D.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787322987/New_post.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323033/NewWeekFlyer_Haven_Wear.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323111/ROAMING_FLYER_2.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323167/ROAMING_FLYER_3.png",
  ],
  birthday: [
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  ],
  logo: [
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323371/SHANDYB_LOGO_slide_3.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323415/SHANDYB_LOGO_slide_2.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323457/SHANDYB_LOGO_slide_4.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323497/SHANDYB_FLYER.png",
    "https://res.cloudinary.com/sseqke3v/image/upload/v1787323567/SHANDYB_LOGO_slide_6.png",
  ],
};

const createWorks = (titles, type, category, images) =>
  titles.map((title, index) => ({
    title,
    type,
    year: index < 4 ? "2026" : "2025",
    image: images[index % images.length],
    description: `${title} is a ${category.toLowerCase()} project focused on clean hierarchy, strong composition, and premium visual direction.`,
  }));

const portfolioSections = [
  {
    id: "product-design-flyers",
    eyebrow: "Product Design Flyers",
    title: "Product visuals designed with clarity, polish, and premium attention.",
    works: createWorks(
      [
        "AKOSIWA",
        "AKOSIWA",
        "AKOSIWA",
        "AKOSIWA",
        "Skin Care Campaign",
        "Bottle Mockup Promo",
        "Digital Product Sale",
        "Premium Pack Launch",
      ],
      "Product Flyer",
      "Product Design Flyer",
      imageBank.product
    ),
  },
  {
    id: "church-media-flyers",
    eyebrow: "Church & Media Flyers",
    title: "Faith-based visuals with atmosphere, clarity, and emotional impact.",
    works: createWorks(
      [
        "QUICKEN",
        "PRAYER FLYER",
        "THE HOLY SPIRIT",
        "ABLAZE",
        "Prayer Conference",
        "Choir Concert",
        "Grace Encounter",
        "Faith Convention",
      ],
      "Church Flyer",
      "Church Media Flyer",
      imageBank.church
    ),
  },
  {
    id: "brand-visual-identities",
    eyebrow: "Brand & Visual Identities",
    title: "Identity systems with strong marks, color, type, and visual rules.",
    works: createWorks(
      [
        "BRANDING",
        "MONDAY FLYER",
        "GOAL FLYER",
        "MONDAY FLYER",
        "LAUNCH DAY FLYER",
        "FRIDAY POSTER",
        "FRIDAY POSTER",
        
      ],
      "Brand Identity",
      "Brand Visual Identity",
      imageBank.brand
    ),
  },
  // {
  //   id: "fashion-brand-flyers",
  //   eyebrow: "Fashion Brand Flyers",
  //   title: "Fashion visuals with editorial taste, rhythm, and launch polish.",
  //   works: createWorks(
  //     [
  //       "Atelier Drop",
  //       "Urban Lookbook",
  //       "Streetwear Release",
  //       "Monochrome Sale",
  //       "Luxury Fashion Drop",
  //       "New Season Campaign",
  //       "Style Weekend",
  //       "Runway Promo",
  //     ],
  //     "Fashion Flyer",
  //     "Fashion Brand Flyer",
  //     imageBank.fashion
  //   ),
  // },
  // {
  //   id: "promotional-flyers",
  //   eyebrow: "Promotional Flyers",
  //   title: "Promotional designs built for attention, urgency, and conversion.",
  //   works: createWorks(
  //     [
  //       "Mega Discount",
  //       "Weekend Offer",
  //       "Flash Campaign",
  //       "Launch Deal",
  //       "Black Friday Promo",
  //       "Sales Blast",
  //       "Limited Offer",
  //       "Market Rush",
  //     ],
  //     "Promo Flyer",
  //     "Promotional Flyer",
  //     imageBank.promo
  //   ),
  // },
  {
    id: "bonus-flyers",
    eyebrow: "Bonus Flyers",
    title: "Extra concepts, experiments, and flexible creative directions.",
    works: createWorks(
      [
        "CHAKAM",
        "HOLYDAVID TECH",
        "JENTECH AI",
        "HOLYDAVID TECH",
        "POSTER FLYER",
        "POSTER FLYER",
        "ROAMING TRAVELS",
        "ROAMING TRAVELS",
      ],
      "Bonus Design",
      "Bonus Flyer",
      imageBank.bonus
    ),
  },
  // {
  //   id: "birthday-flyers",
  //   eyebrow: "Birthday Flyers",
  //   title: "Birthday visuals with personality, celebration, and clean composition.",
  //   works: createWorks(
  //     [
  //       "Royal Birthday",
  //       "Golden Celebration",
  //       "Soft Glam Day",
  //       "Milestone Party",
  //       "Luxury Birthday",
  //       "Birthday Dinner",
  //       "Celebration Invite",
  //       "Queen Day Flyer",
  //     ],
  //     "Birthday Flyer",
  //     "Birthday Flyer",
  //     imageBank.birthday
  //   ),
  // },
  {
    id: "logo-designs",
    eyebrow: "Logo Designs",
    title: "Logo marks created for recognition, simplicity, and long-term use.",
    works: createWorks(
      [
        "SHANDIB LOGISTICS",
        "SHANDIB LOGISTICS",
        "SHANDIB LOGISTICS",
        "POSTER FLYER",
        "POSTER FLYER",
      ],
      "Logo Design",
      "Logo Design",
      imageBank.logo
    ),
  },
];

function PortfolioCard({ work, index, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.04, duration: 0.45 }}
      className="group w-[78vw] shrink-0 text-left sm:w-[21rem] lg:w-[23rem]"
    >
      <div className="relative aspect-[1.35/1] overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
        <img
          src={work.image}
          alt={work.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
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
            {work.type}
          </p>
        </div>

        <span className="text-lg font-black leading-none text-red-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.button>
  );
}

function PortfolioSection({ section, sectionIndex, onOpen }) {
  return (
    <section
      id={section.id}
      className="relative flex h-[100svh] items-center overflow-hidden bg-[#050507] px-5 py-16 text-white sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(220,38,38,0.16),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(220,38,38,0.08),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/45">
              0{sectionIndex + 1} / {section.eyebrow}
            </p>

            <h2 className="mt-3 max-w-3xl text-[clamp(1.45rem,3.4vw,2.6rem)] font-black leading-tight">
              {section.title}
            </h2>
          </div>

          <p className="text-xs font-black uppercase tracking-[0.24em] text-red-500">
            {section.works.length} Projects
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="portfolio-slide-track flex w-max"
            style={{ "--slide-duration": `${section.works.length * 7}s` }}
          >
            {[0, 1].map((groupIndex) => (
              <div key={groupIndex} className="flex shrink-0 gap-4 pr-4">
                {section.works.map((work, index) => (
                  <PortfolioCard
                    key={`${section.id}-${work.title}-${groupIndex}`}
                    work={work}
                    index={index}
                    onClick={() =>
                      onOpen({
                        ...work,
                        section: section.eyebrow,
                        number: String(index + 1).padStart(2, "0"),
                      })
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioModal({ selectedWork, onClose }) {
  return (
    <AnimatePresence>
      {selectedWork && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-[#050507]/88 p-4 text-white backdrop-blur-2xl"
          onClick={onClose}
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
            className="grid max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b0d13] p-3 shadow-[0_40px_140px_rgba(0,0,0,0.55)] md:grid-cols-[1fr_1fr]"
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
                    {selectedWork.section} / {selectedWork.year}
                  </p>

                  <h3 className="mt-3 text-[clamp(2rem,5vw,3.8rem)] font-black leading-[0.95]">
                    {selectedWork.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.07] transition hover:bg-white/10"
                  aria-label="Close project details"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/62 md:text-base md:leading-8">
                {selectedWork.description}
              </p>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PortfolioPage() {
  const [selectedWork, setSelectedWork] = useState(null);

  const navigate = (event, href) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new Event("wells:navigate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-[#050507] text-white">
      <section className="relative flex h-[100svh] items-center overflow-hidden bg-[#050507] px-5 pt-24 text-white sm:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(220,38,38,0.24),transparent_30%),linear-gradient(135deg,#170104_0%,#050507_52%,#100102_100%)]" />

        <div className="pointer-events-none absolute left-[-0.5rem] top-[6rem] select-none text-[clamp(3rem,13vw,9rem)] font-black leading-none tracking-normal text-red-950/45">
          PORTFOLIO
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <a
            href="/"
            onClick={(event) => navigate(event, "/")}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-black text-white/70 backdrop-blur-xl transition hover:bg-white hover:text-[#050507]"
          >
            <ArrowLeft size={17} />
            Back Home
          </a>

          <p className="text-xs font-black uppercase tracking-[0.34em] text-red-400">
            Portfolio Archive
          </p>

          <h1 className="mt-5 max-w-4xl text-[clamp(2rem,4.8vw,4.2rem)] font-black leading-[0.98]">
            A categorized collection of visual design work.
          </h1>

          <div className="mt-8 flex max-w-5xl flex-wrap gap-2.5">
            {portfolioSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] text-white/55 transition hover:border-red-500/50 hover:text-white"
              >
                {section.eyebrow}
              </a>
            ))}
          </div>

          <a
            href="/contact"
            onClick={(event) => navigate(event, "/contact")}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-red-600 px-6 text-sm font-black text-white transition hover:bg-red-700"
          >
            Start a Project
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {portfolioSections.map((section, index) => (
        <PortfolioSection
          key={section.id}
          section={section}
          sectionIndex={index}
          onOpen={setSelectedWork}
        />
      ))}

      <PortfolioModal
        selectedWork={selectedWork}
        onClose={() => setSelectedWork(null)}
      />

      <style>
        {`
          .portfolio-slide-track {
            animation: wells-portfolio-slide var(--slide-duration, 56s) linear infinite;
            will-change: transform;
          }

          .portfolio-slide-track:hover {
            animation-play-state: paused;
          }

          @keyframes wells-portfolio-slide {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .portfolio-slide-track {
              animation: none;
              transform: none;
            }
          }
        `}
      </style>
    </main>
  );
}