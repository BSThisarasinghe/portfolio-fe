import React, { useState } from "react";

const Research: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const researchItems = [
        {
            id: 1,
            title: "Fog Computing Optimization",
            conference: "IEEE International Conference",
            year: "2023",
            yearColor: "bg-green-500",
            icon: "school",
            description: "Exploring the frontiers of Fog Computing, AI, and Blockchain through academic research. Addressing complex problems with rigorous algorithmic solutions.",
            problem: "Addressing high latency in critical edge devices caused by inefficient task offloading.",
            solution: "Implemented a heuristic search using Genetic Algorithms to optimize task scheduling between Fog nodes and Cloud servers.",
            technologies: ["Python", "Edge Sim", "Genetic Algo"],
            impact: "Reduces response time by 40% in critical IoT infrastructure simulations.",
            impactIcon: "bolt",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbxdLqeHiYn9HRJ7ciukn5WxPdSHF3Ueo0pVCMpggTl5_CbI_7XwKDevDRgCv9dUlZC8PHjQ9jPrlurg4Qdr9T2kUxU7lwqVTg-GTprZSem2Yao5hMlXv435ytMS6xEey31BwE-0JOhUTdUCa6EMDatPLZOYaZKbMjfNwfFLFDRPd1XLgzjLUFmkAZ5K7YQvrNjzKVnJwQLKe9oqjqLvC_OpqKi_x0LIaYVihdUAhRLuNrVEnp0Q0fRlMNKPuzpnE3gz5zWAGRbkv8",
            category: "iot"
        },
        {
            id: 2,
            title: "NLP for Sarcasm Detection",
            conference: "KDU IRC",
            year: "2022",
            yearColor: "bg-blue-500",
            icon: "mic",
            description: "Advanced NLP techniques for detecting sarcasm in social media content.",
            problem: "Traditional sentiment analysis fails to accurately interpret sarcasm in short-form social media text.",
            solution: "Fine-tuned a BERT-based transformer model with a context-aware attention mechanism specifically for Twitter datasets.",
            technologies: ["PyTorch", "BERT", "Transformers"],
            impact: "Improves brand monitoring accuracy by 25% in ambiguous contexts.",
            impactIcon: "psychology",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCopNHbU9M6dhAJduYx_Y6nMxYXsgvCzIujGEMNjGqk-hevaWMoW1CIjDBnHgQOKg1xqQ7attYYJtvq7aWBdYMmXw64UUAE7hRo6NI__d786hB-sAROilZrHyVFD-QUHRXY9xfGb39g4tIC12GBENn7YLsHeDcH6Lp3llvjxKlvyddnagLCQhsoJpkKbrk8hrVni6utqxqhFCgE2szpK7mk2Te862hxgckHSyUQBt_UILv-xod_dE5ZMZidu-Fbz6z3Ys8DoOVirEts",
            category: "ai"
        },
        {
            id: 3,
            title: "Blockchain for Supply Chain",
            conference: "ICSUSL",
            year: "2021",
            yearColor: "bg-purple-500",
            icon: "hub",
            description: "Blockchain solutions for transparent and secure supply chain management.",
            problem: "Lack of transparency and trust in multi-party logistics data, leading to disputes and delays.",
            solution: "Designed a decentralized ledger system using Ethereum smart contracts to immutable record every handover point.",
            technologies: ["Solidity", "Ethereum", "Web3.js"],
            impact: "Eliminates data tampering and reduces verification costs by 60%.",
            impactIcon: "verified_user",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLmCwG4bH4GN_Of7YkmkdzJX6-XJHefvYIUdweGPPI11PtvwGTvuMYGzgKBECaFdNkqEwg92a4XBcNvtLvE20aVuS2izFFn51VGIg8wvpY8dn_r-1VwFAt7LCZ04FGVTYS2fTLgW9ytdM_ek5uaYGqmyW6FvEk3Oz-UByRalFFrvc1BrptNGMoquFy4gHn2LN0MwG67ky2VcELb11MqaLHmCyoFRXxuTRvROf9EuOuRfGAR9vvFi__BtgFhj7NZ5HsYGfVuSqfAUtU",
            category: "blockchain"
        }
    ];

    const filters = [
        { id: "all", label: "All Topics" },
        { id: "ai", label: "AI & ML" },
        { id: "iot", label: "IoT / Fog Computing" },
        { id: "blockchain", label: "Blockchain" }
    ];

    const filteredItems = researchItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesFilter = activeFilter === "all" || item.category === activeFilter;

        return matchesSearch && matchesFilter;
    });

    return (
        <main className="flex min-h-screen w-full flex-col bg-background-dark text-white">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-10">
                        {/* Page Heading */}
                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-fade-in-up">
                            <div className="flex flex-col gap-4 max-w-2xl">
                                <div className="flex items-center gap-2">
                                    <span className="h-px w-8 bg-primary"></span>
                                    <span className="text-primary text-sm font-bold uppercase tracking-widest">
                    Academic Portfolio
                  </span>
                                </div>
                                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                    Research &{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                    Innovations
                  </span>
                                </h1>
                                <p className="text-gray-400 text-base md:text-lg font-normal leading-relaxed">
                                    Exploring the frontiers of Fog Computing, AI, and Blockchain through academic research.
                                    Addressing complex problems with rigorous algorithmic solutions.
                                </p>
                            </div>

                            {/* Search/Filter Area */}
                            <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                                <div className="relative w-full md:w-64">
                                    <input
                                        className="w-full bg-surface-dark border border-border-dark rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-gray-500"
                                        placeholder="Search topics..."
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[20px]">
                    search
                  </span>
                                </div>
                            </div>
                        </div>

                        {/* Chips / Filters */}
                        <div className="flex flex-wrap gap-3 pb-4 border-b border-border-dark/50">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-5 pr-5 transition-all hover:scale-105 active:scale-95 ${
                                        activeFilter === filter.id
                                            ? "bg-primary shadow-lg shadow-primary/25"
                                            : "bg-surface-dark border border-border-dark hover:border-primary/50 hover:bg-[#252331]"
                                    }`}
                                >
                  <span
                      className={`text-sm font-medium transition-colors ${
                          activeFilter === filter.id
                              ? "text-white"
                              : "text-gray-300 group-hover:text-primary"
                      }`}
                  >
                    {filter.label}
                  </span>
                                </button>
                            ))}
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 gap-8">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative flex flex-col md:flex-row bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-border-dark hover:border-primary/30"
                                >
                                    {/* Visual Side */}
                                    <div className="w-full md:w-2/5 relative min-h-[240px] md:min-h-auto overflow-hidden bg-black">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out"
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                            aria-label={item.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent md:bg-gradient-to-r"></div>

                                        {/* Diagram Overlay Badge */}
                                        <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                        <span className={`size-2 rounded-full ${item.yearColor} animate-pulse`}></span>
                        Published {item.year}
                      </span>
                                        </div>

                                        <div className="absolute bottom-4 left-4">
                                            <button className="flex items-center gap-2 text-white/90 text-xs hover:text-white font-medium bg-black/50 hover:bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg transition-all">
                                                <span className="material-symbols-outlined text-[16px]">visibility</span>
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            {item.icon}
                          </span>
                                                    <span className="text-sm font-bold text-primary tracking-wide uppercase">
                            {item.conference}
                          </span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <a
                                                        className="text-gray-400 hover:text-primary transition-colors"
                                                        href="#"
                                                        title="External Link"
                                                    >
                                                        <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {item.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2.5 py-1 rounded-md bg-border-dark text-gray-300 text-xs font-medium font-mono"
                                                    >
                            {tech}
                          </span>
                                                ))}
                                            </div>

                                            <div className="space-y-4">
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    <strong className="text-gray-200">Problem:</strong> {item.problem}
                                                </p>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    <strong className="text-gray-200">Solution:</strong> {item.solution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-border-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex-1">
                                                <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary mt-0.5 text-[20px]">
                            {item.impactIcon}
                          </span>
                                                    <div>
                                                        <p className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                                                            Why It Matters
                                                        </p>
                                                        <p className="text-xs text-gray-400">{item.impact}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                className={`shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                                                    item.id === 1
                                                        ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                                                        : "bg-surface-dark hover:bg-border-dark text-primary border border-border-dark"
                                                }`}
                                            >
                                                <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                                                Read Paper
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View More / Pagination */}
                        <div className="flex justify-center pt-8">
                            <button className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                                <span>View Archived Research</span>
                                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Research;
