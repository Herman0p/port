"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Work() {
    const experiences = [
        {
            role: "Frontend Engineer",
            company: "Contra / Freelance",
            period: "2023 — Present",
            description: "Developing scalable and high-performance web applications using React, Next.js, and modern JavaScript frameworks.",
        },
        {
            role: "UI/UX Designer",
            company: "Independent Contractor",
            period: "2022 — 2023",
            description: "Designing intuitive digital experiences with a focus on brutalist aesthetics, usability, and conversion optimization.",
        },
        {
            role: "Aviation Security (AVSEC)",
            company: "PT. Angkasa Pura Solusi",
            period: "2018 — 2022",
            description: "Maintained rigorous security operations and managed administrative duties in a high-stakes, fast-paced environment.",
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* 1. Work Hero Section */}
            <section className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 pt-48 pb-32 md:pb-48">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                    <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase mb-8">
                        Experience
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] max-w-7xl">
                        Work <br className="hidden md:block" />History.
                    </h1>
                </motion.div>
            </section>

            {/* 2. Experience List */}
            <section className="px-6 md:px-16 lg:px-24 pb-32">
                <div className="flex flex-col">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="border-t border-zinc-800 py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                        >
                            <div className="md:w-1/3 flex flex-col justify-start">
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                                    {exp.company}
                                </h3>
                                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mt-4">
                                    {exp.period}
                                </span>
                            </div>
                            <div className="md:w-2/3 flex flex-col justify-start">
                                <h4 className="text-2xl md:text-3xl font-medium text-zinc-300 mb-6 group-hover:text-white transition-colors">
                                    {exp.role}
                                </h4>
                                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-zinc-800"></div>
                </div>
            </section>

            {/* 3. Footer */}
            <Footer />
        </div>
    );
}
