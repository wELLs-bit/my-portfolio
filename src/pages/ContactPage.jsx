import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send
} from "lucide-react";

const contactCards = [
  {
    title: "Phone",
    value: "+234 906 489 4870",
    detail: "Call or send a WhatsApp message for quick project conversations.",
    icon: Phone
  },
  {
    title: "Email",
    value: "harrysticks75@gmail.com",
    detail: "Best for briefs, proposals, and collaboration requests.",
    icon: Mail
  },
  {
    title: "Location",
    value: "Lagos, Nigeria",
    detail: "Available for local and international creative projects.",
    icon: MapPin
  },
  {
    title: "Response Time",
    value: "Within 24 hours",
    detail: "Most messages receive a response within one business day.",
    icon: Clock3
  }
];

const socialLinks = [
  {
    name: "Instagram",
    handle: "@iamharrisonwells_",
    href: "https://www.instagram.com/"
  },
  {
    name: "LinkedIn",
    handle: "Godswill Harry",
    href: "https://www.linkedin.com/"
  },
  {
    name: "WhatsApp",
    handle: "+234 906 489 4870",
    href: "https://wa.me/+2349064894870"
  }
];

const faqs = [
  {
    question: "How do I start a project?",
    answer:
      "Send a short message with your project type, deadline, and references. I will reply with the next steps."
  },
  {
    question: "What services do you offer?",
    answer:
      "Brand identity, logo design, flyer design, social media design, creative direction, and UI/UX concepts."
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. WELLS works with clients locally and internationally through digital communication."
  },
  {
    question: "How fast can a flyer be completed?",
    answer:
      "It depends on the complexity, but simple flyer projects can be completed quickly once the content is ready."
  }
];

function ContactCard({ item, index }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-500 text-white">
          <Icon size={20} />
        </div>

        <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/30">
          0{index + 1}
        </span>
      </div>

      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
        {item.title}
      </p>

      <h3 className="mt-2 text-xl font-black leading-tight">
        {item.value}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/55">
        {item.detail}
      </p>
    </article>
  );
}

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span className="text-base font-black md:text-xl">
          {faq.question}
        </span>

        <ChevronDown
          size={20}
          className={`text-red-500 transition ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <p className="pb-5 text-sm leading-7 text-white/55 md:text-base">
          {faq.answer}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-[#05060a] text-white">
      <section className="min-h-[100svh] px-5 pb-10 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-500 md:text-xs">
            Contact WELLS
          </p>

          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,6vw,4.4rem)] font-black leading-[0.96]">
            Let&apos;s talk about your next visual identity, flyer, or creative project.
          </h1>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((item, index) => (
              <ContactCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:harrysticks75@gmail.com"
              className="inline-flex h-11 items-center gap-3 rounded-full bg-white px-5 text-sm font-black text-[#05060a] hover:bg-red-500 hover:text-white"
            >
              Email Me
              <Send size={16} />
            </a>

            <a
              href="https://wa.me/+2349064894870"
              className="inline-flex h-11 items-center gap-3 rounded-full border border-white/12 bg-white/[0.07] px-5 text-sm font-black text-white hover:border-red-500"
            >
              WhatsApp
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-[100svh] px-5 pb-10 pt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-500 md:text-xs">
              Project Inquiry
            </p>

            <h2 className="mt-3 max-w-3xl text-[clamp(1.9rem,5vw,3.8rem)] font-black leading-[1]">
              Send your brief and I&apos;ll reply with the next steps.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Share what you need, the deadline, and any references you already
              have. The clearer the brief, the faster we can shape the direction.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-[1.8rem] border border-white/10 bg-white/[0.07] p-5 md:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                  Name
                </span>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#05060a] px-4 text-sm font-bold text-white outline-none transition focus:border-red-500"
                />
              </label>

              <label>
                <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                  Email
                </span>
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#05060a] px-4 text-sm font-bold text-white outline-none transition focus:border-red-500"
                />
              </label>

              <label>
                <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                  Service
                </span>
                <input
                  type="text"
                  placeholder="Logo, flyer, branding..."
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#05060a] px-4 text-sm font-bold text-white outline-none transition focus:border-red-500"
                />
              </label>

              <label>
                <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                  Timeline
                </span>
                <input
                  type="text"
                  placeholder="This week, next month..."
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#05060a] px-4 text-sm font-bold text-white outline-none transition focus:border-red-500"
                />
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                  Project Details
                </span>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about the project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#05060a] px-4 py-4 text-sm font-bold leading-6 text-white outline-none transition focus:border-red-500"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-white/45">
                {submitted
                  ? "Your inquiry is ready. Connect this form to your inbox when you go live."
                  : "I usually respond within 24 hours."}
              </p>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-3 rounded-full bg-red-500 px-5 text-sm font-black text-white hover:bg-white hover:text-[#05060a]"
              >
                Send Inquiry
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="min-h-[100svh] px-5 pb-10 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-500 md:text-xs">
            Connect With Me
          </p>

          <h2 className="mt-3 max-w-3xl text-[clamp(1.8rem,5vw,3.5rem)] font-black leading-[1]">
            Follow the work, send a message, or start a conversation.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[13rem] flex-col justify-between rounded-[1.6rem] border border-white/10 bg-white/[0.07] p-6 hover:border-red-500/60"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-[#05060a] group-hover:bg-red-500 group-hover:text-white">
                    <ArrowRight size={20} />
                  </div>

                  <ArrowRight size={18} className="text-white/35" />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                    {social.name}
                  </p>

                  <h3 className="mt-2 text-2xl font-black md:text-3xl">
                    {social.handle}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-[100svh] px-5 pb-10 pt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-500 md:text-xs">
              Live Location
            </p>

            <h2 className="mt-3 max-w-2xl text-[clamp(1.8rem,5vw,3.6rem)] font-black leading-[1]">
              Based in Lagos, available for projects worldwide.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Use the map to locate the Lagos area. For private studio visits,
              send a message first so a proper time can be arranged.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Lagos%2C%20Nigeria"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex h-11 w-fit items-center gap-3 rounded-full bg-white px-5 text-sm font-black text-[#05060a] hover:bg-red-500 hover:text-white"
            >
              Open Map
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="h-[55svh] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-3 lg:h-[70svh]">
            <iframe
              title="WELLS location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.205%2C6.370%2C3.550%2C6.650&layer=mapnik&marker=6.5244%2C3.3792"
              className="h-full w-full rounded-[1.5rem] grayscale invert"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="min-h-[100svh] px-5 pb-10 pt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-500 md:text-xs">
              FAQ
            </p>

            <h2 className="mt-3 max-w-2xl text-[clamp(1.8rem,5vw,3.6rem)] font-black leading-[1]">
              Quick answers before we start.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              These cover common questions about timelines, services, and working remotely.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.07] p-5">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}

            <a
              href="mailto:hello@wells.design"
              className="mt-6 inline-flex h-11 items-center gap-3 rounded-full bg-red-500 px-5 text-sm font-black text-white hover:bg-white hover:text-[#05060a]"
            >
              Ask Another Question
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
