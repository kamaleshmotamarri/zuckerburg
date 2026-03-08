"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, ChevronRight, Globe, Cpu, HelpCircle, Trophy, RotateCcw } from "lucide-react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const QUIZ_QUESTIONS = [
  {
    question: "Where was Facebook originally launched?",
    options: ["Stanford", "Harvard", "MIT", "Yale"],
    correct: 1
  },
  {
    question: "What year did Meta rebrand from Facebook Inc.?",
    options: ["2019", "2020", "2021", "2022"],
    correct: 2
  },
  {
    question: "Which company did Meta acquire in 2014?",
    options: ["Twitter", "Snapchat", "WhatsApp", "LinkedIn"],
    correct: 2
  },
  {
    question: "What is the name of Meta's open-source AI model family?",
    options: ["GPT", "Claude", "Llama", "Gemini"],
    correct: 2
  }
];

export default function Home() {
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } }
  };

  const navItem = {
    hidden: { opacity: 0, y: -8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 + i * 0.06, duration: 0.4, ease: easeOutExpo }
    })
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-blue-500/40 selection:text-white noise">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[50%] aspect-square rounded-full bg-blue-950/25 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[45%] aspect-square rounded-full bg-indigo-950/25 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full bg-cyan-950/10 blur-[100px]" />
      </div>

      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto border-b border-white/[0.06] bg-black/50 backdrop-blur-xl transition-colors duration-300"
      >
        <motion.a
          href="#"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image src="/facebooklogo.png" alt="Facebook" width={36} height={36} className="w-full h-full object-cover" />
          </motion.div>
          <span className="font-display font-semibold text-lg tracking-tight text-white">Mark Zuckerberg</span>
        </motion.a>
        <div className="hidden md:flex items-center gap-1">
          {["About", "Vision", "Milestones", "Quiz", "Connect"].map((label, i) => (
            <motion.a
              key={label}
              href={label === "About" ? "#vision" : label === "Vision" ? "#vision" : label === "Milestones" ? "#timeline" : label === "Quiz" ? "#quiz" : "#contact"}
              custom={i}
              variants={navItem}
              initial="hidden"
              animate="visible"
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Hero Section - fits in viewport so buttons and full image are visible */}
        <section className="min-h-[100dvh] flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 py-10 md:py-14">
          <motion.div
            className="flex-1 space-y-6 min-w-0"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-medium tracking-wide border border-blue-500/20"
              whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.35)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-blue-400"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
              Founder & CEO, Meta
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Connecting the world,{" "}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400"
                initial={{ opacity: 0.9 }}
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                building the future.
              </motion.span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/55 max-w-xl leading-[1.7]">
              From a Harvard dorm room to the global stage. I build technology that helps people connect, find communities, and grow businesses.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="#vision"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 30px -6px rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Read My Vision
              </motion.a>
              <motion.a
                href="#timeline"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 text-white font-medium border border-white/15 hover:bg-white/10 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.25)", backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                View Milestones <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><ChevronRight className="w-4 h-4 inline-block" /></motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-md md:max-w-lg relative flex justify-center items-center h-[45vh] md:h-[52vh] min-h-[280px] max-h-[420px] md:max-h-[480px]"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-950/30 ring-1 ring-white/5 bg-black/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 pointer-events-none" />
              <Image
                src="/zuck.webp"
                alt="Mark Zuckerberg"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-right-8 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center"
            >
              <Image src="/metaimage.png" alt="Meta Logo" width={80} height={40} className="w-16 md:w-20 object-contain" />
            </motion.div>
          </motion.div>
        </section>

        {/* Vision / About Section */}
        <section id="vision" className="py-28 md:py-36 border-t border-white/[0.06]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <motion.div
              variants={fadeInUp}
              className="order-2 lg:order-1 relative aspect-video rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Image
                src="/zucktwo.webp"
                alt="Zuckerberg presentation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <div className="order-1 lg:order-2 space-y-7">
              <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                The Next Horizon of <br /><span className="text-white/50 font-medium">Human Expression</span>.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/55 text-lg leading-[1.75]">
                When I started Facebook in 2004, the idea was simply to connect a college campus. Today, Meta is building the next evolution of social connection through artificial intelligence and the metaverse.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-white/55 text-lg leading-[1.75]">
                We believe that giving people the power to build community brings the world closer together. With open-source AI like Llama, we're putting powerful technology into the hands of developers worldwide.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <motion.div
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors cursor-default"
                  whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.35)", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                    <Globe className="w-7 h-7 text-blue-400 mb-3" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-lg text-white">Global Reach</h3>
                  <p className="text-sm text-white/50 mt-1 leading-relaxed">Connecting billions of users daily across our family of apps.</p>
                </motion.div>
                <motion.div
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-colors cursor-default"
                  whileHover={{ y: -4, borderColor: "rgba(99, 102, 241, 0.35)", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                    <Cpu className="w-7 h-7 text-indigo-400 mb-3" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-lg text-white">Open Source AI</h3>
                  <p className="text-sm text-white/50 mt-1 leading-relaxed">Advancing AI research and democratizing access.</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Milestones / Timeline */}
        <section id="timeline" className="py-28 md:py-36 border-t border-white/[0.06]">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Journey & Milestones</h2>
            <p className="text-white/50 text-lg">Two decades of connecting people and charting the future of technology.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              { year: "2004", title: "The Beginning", desc: "Launched TheFacebook from a Harvard dorm room." },
              { year: "2012", title: "Going Public & Instagram", desc: "Facebook IPO and the visionary acquisition of Instagram." },
              { year: "2014", title: "WhatsApp & Oculus", desc: "Expanding communication globally and stepping into VR." },
              { year: "2021", title: "Meta Rebrand", desc: "Refocusing the company to build the metaverse." },
              { year: "Present", title: "AI & Open Source", desc: "Releasing state-of-the-art Llama models to the world." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: easeOutExpo }}
                className="relative flex gap-8 md:gap-14 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-black z-10"
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    initial={{ scale: 0 }}
                    transition={{ delay: i * 0.08 + 0.15, type: "spring", stiffness: 400, damping: 25 }}
                    whileHover={{ scale: 1.3, backgroundColor: "rgba(59, 130, 246, 0.5)", borderColor: "rgb(96, 165, 250)" }}
                  />
                  {i < 4 && (
                    <motion.div
                      className="w-px flex-1 min-h-[60px] bg-gradient-to-b from-white/20 to-white/5 mt-1 origin-top"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ delay: i * 0.08 + 0.2, duration: 0.4, ease: easeOutExpo }}
                    />
                  )}
                </div>
                <motion.div
                  className="pb-12 md:pb-14"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="font-mono text-xs font-medium text-blue-400/90 tracking-wider mb-2">{item.year}</div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/55 leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Life & Gallery */}
        <section className="py-28 md:py-36 border-t border-white/[0.06]">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Into the arena.</h2>
            <p className="text-white/50 mt-2">Beyond the screen.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 25 } }}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 group"
            >
              <Image src="/zuckthree.png" alt="Zuckerberg portrait" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 25 } }}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 group"
            >
              <Image src="/zuckfour.png" alt="Zuckerberg casual" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </section>

        {/* Quiz Section */}
        <section id="quiz" className="py-28 md:py-36 border-t border-white/[0.06]">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle className="w-10 h-10 text-blue-400" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">How well do you know Zuck?</h2>
                <p className="text-white/50 mt-1">A quick quiz on Mark and Meta.</p>
              </div>
            </div>

            <div className="space-y-8">
              {QUIZ_QUESTIONS.map((q, qIndex) => (
                <motion.div
                  key={qIndex}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: qIndex * 0.06, duration: 0.4 }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
                >
                  <p className="font-display font-semibold text-white mb-4">{q.question}</p>
                  <div className="grid gap-2">
                    {q.options.map((opt, oIndex) => {
                      const selected = quizAnswers[qIndex] === oIndex;
                      const correct = q.correct === oIndex;
                      const showResult = quizSubmitted;
                      const isCorrectChoice = showResult && correct;
                      const isWrongChoice = showResult && selected && !correct;
                      return (
                        <button
                          key={oIndex}
                          type="button"
                          disabled={quizSubmitted}
                          onClick={() => {
                            const next = [...quizAnswers];
                            next[qIndex] = oIndex;
                            setQuizAnswers(next);
                          }}
                          className={`text-left px-4 py-3 rounded-xl border transition-all font-medium ${
                            showResult
                              ? isCorrectChoice
                                ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-200"
                                : isWrongChoice
                                  ? "border-red-500/40 bg-red-500/10 text-red-200"
                                  : correct
                                    ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-200"
                                    : "border-white/10 text-white/50"
                              : selected
                                ? "border-blue-500/50 bg-blue-500/10 text-white"
                                : "border-white/10 text-white/70 hover:bg-white/5 hover:border-white/20"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {!quizSubmitted ? (
              <motion.button
                type="button"
                onClick={() => setQuizSubmitted(true)}
                disabled={quizAnswers.length !== QUIZ_QUESTIONS.length}
                className="mt-10 w-full py-4 rounded-xl bg-blue-500 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black transition-colors"
              >
                Submit answers
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="w-10 h-10 text-amber-400" />
                  <div>
                    <p className="font-display font-bold text-white">
                      {quizAnswers.filter((a, i) => a === QUIZ_QUESTIONS[i].correct).length} / {QUIZ_QUESTIONS.length} correct
                    </p>
                    <p className="text-white/50 text-sm">Thanks for playing!</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setQuizAnswers([]);
                    setQuizSubmitted(false);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Try again
                </button>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Footer / Connect */}
        <footer id="contact" className="py-20 md:py-24 border-t border-white/[0.06] mt-4">
          <motion.div
            className="flex flex-col items-center text-center max-w-xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <motion.div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center font-display font-bold text-white text-2xl mb-8"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Z
            </motion.div>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">Connect</h2>
            <p className="text-white/50 mb-10">Across the metaverse and beyond.</p>
            <div className="flex items-center gap-3 mb-14">
              {[
                { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/zuck/" },
                { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/zuck/?hl=en" },
                { label: "Threads", href: "https://www.threads.com/@zuck", threads: true }
              ].map((item, i) => {
                const Icon = "Icon" in item ? item.Icon : null;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06, type: "spring", stiffness: 400, damping: 25 }}
                    whileHover={{ scale: 1.12, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {Icon ? (
                      <Icon className="w-5 h-5" />
                    ) : (
                      <span className="text-[1.15rem] font-bold leading-none" aria-hidden="true">@</span>
                    )}
                  </motion.a>
                );
              })}
            </div>
            <p className="text-white/40 text-sm font-medium">© {new Date().getFullYear()} Mark Zuckerberg. Built for the future.</p>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}
