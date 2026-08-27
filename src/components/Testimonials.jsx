const testimonials = [
  {
    name: "James Eniola",
    role: "Beauty Brand Founder",
    initials: "JE",
    title: "The identity felt expensive instantly.",
    text: "WELLS turned our scattered ideas into a premium visual system that finally made our brand look confident, clean, and unforgettable.",
  },
  {
    name: "Daniel Okoro",
    role: "Event Director",
    initials: "DO",
    title: "Every flyer looked like a campaign.",
    text: "The designs were sharp, modern, and easy to promote. Our event visuals looked professional across Instagram, print, and ads.",
  },
  {
    name: "Jennifer G.",
    role: "Fashion Creative",
    initials: "JG",
    title: "Clean taste with serious impact.",
    text: "I loved the balance of minimal design and bold energy. The visuals gave my fashion brand a stronger voice online.",
  },
  {
    name: "Iyanuoluwa Adeleke",
    role: "Church Media Lead",
    initials: "IA",
    title: "Fast, beautiful, and intentional.",
    text: "The church graphics felt fresh without losing clarity. Everything was delivered with care and a strong creative direction.",
  },
  {
    name: "Anora Williams",
    role: "Product Designer",
    initials: "AW",
    title: "The presentation changed everything.",
    text: "WELLS gave the project a premium look that made our pitch stronger. The details, spacing, and colors were excellent.",
  },
  {
    name: "Samuel Prince",
    role: "Startup Founder",
    initials: "SP",
    title: "Our brand finally looked ready.",
    text: "From logo direction to social templates, every piece felt consistent and polished. The process was smooth from start to finish.",
  },
  {
    name: "Teni Ifedayo",
    role: "Content Creator",
    initials: "TI",
    title: "My visuals started getting noticed.",
    text: "The graphics gave my page a cleaner, more premium feel. People immediately started asking who handled the design.",
  },
  {
    name: "David Stone",
    role: "Music Promoter",
    initials: "DS",
    title: "Strong concepts every time.",
    text: "The promotional flyers had energy and style. They were bold enough to stop the scroll but still looked refined.",
  },
  {
    name: "Amara Ikechuckwu",
    role: "Brand Consultant",
    initials: "AI",
    title: "A very sharp creative eye.",
    text: "WELLS understands hierarchy, mood, and brand presence. The final visuals felt strategic, not just beautiful.",
  },
  {
    name: "Jentech AI",
    role: "CEO",
    initials: "J",
    title: "Reliable design partner.",
    text: "The work always feels premium and well-composed. Great communication, clean execution, and strong attention to detail.",
  },
];

const scrollingTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050507] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-16">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-red-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-red-400">
              Testimonials
            </p>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              What Clients Love.
              <span className="block text-white/45">What They Say.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            A few words from brands, creatives, ministries, and teams who trusted
            WELLS with their visual identity, campaign graphics, and digital presence.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#050507] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#050507] to-transparent sm:w-28" />

          <div className="overflow-hidden">
            <div className="testimonial-track flex w-max gap-5">
              {scrollingTestimonials.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="group relative h-[286px] w-[275px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-red-500/45 hover:bg-red-500/[0.06] sm:h-[315px] sm:w-[340px] sm:p-6 lg:w-[370px]"
                >
                  <div className="absolute right-5 top-5 text-5xl font-black leading-none text-red-500/15">
                    &ldquo;
                  </div>

                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-full border border-red-500/30 bg-red-500/10 text-sm font-black text-red-300">
                          {item.initials}
                        </div>

                        <div>
                          <h3 className="text-sm font-black text-white">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs font-semibold text-white/40">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex text-[11px] tracking-[0.18em] text-red-400">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-black leading-snug text-white sm:text-2xl">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-[13px] leading-6 text-white/60 sm:text-sm sm:leading-7">
                      {item.text}
                    </p>

                    <div className="mt-auto pt-6">
                      <span className="inline-flex rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/40">
                        Verified Client
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .testimonial-track {
            animation: wells-testimonials-slide 42s linear infinite;
          }

          .testimonial-track:hover {
            animation-play-state: paused;
          }

          @keyframes wells-testimonials-slide {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .testimonial-track {
              animation: none;
            }
          }
        `}
      </style>
    </section>
  );
}
