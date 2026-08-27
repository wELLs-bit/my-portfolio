import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <section className="fixed inset-0 z-[999] grid place-items-center overflow-hidden bg-[#050507] px-5 text-white">
      <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[110px]" />
      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-red-500/10 blur-[90px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -24, scale: 0.98 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-xl flex-col items-center text-center"
      >
        <motion.div
          initial={{ rotate: -8, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.75 }}
          className="mb-7 grid h-20 w-20 place-items-center rounded-[1.6rem] border border-red-500/35 bg-red-500/10 text-3xl font-black text-red-400 shadow-[0_0_70px_rgba(239,68,68,0.25)]"
        >
          W
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-xs font-black uppercase tracking-[0.36em] text-red-400"
        >
          WELLS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.35, duration: 0.75 }}
          className="mt-4 text-[clamp(2rem,7vw,4rem)] font-black leading-[0.95] tracking-tight"
        >
          Welcome to my Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.65 }}
          className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base"
        >
          A curated space for bold visuals, premium identity systems, and clean
          creative direction.
        </motion.p>

        <div className="mt-9 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-300"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ delay: 0.7, duration: 1.6, repeat: Infinity }}
          className="mt-5 text-[10px] font-black uppercase tracking-[0.32em] text-white/35"
        >
          Loading Experience
        </motion.p>
      </motion.div>
    </section>
  );
}
