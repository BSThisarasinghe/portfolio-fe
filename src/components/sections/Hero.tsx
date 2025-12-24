import React from "react";

const heroBgUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDIQLHUhh4GV62egYZvznznMjopshXbrp13RbAgSSDJsqxokcyPhJsfrsKelZdhjstF9NwVKaqLBdiTUicMw0UArC1ReciYj5DVYnm4PIW3N9rZ8U8whxSn2PpZjKV425VaDlc4h82Gv9peyjAL9-2ET1xSefQlUCpv9hLwmcwFY4yJ3p5EdQ5i4o6OYkl7ZnIsQnIZN1oFu1IZxDprjt7oXIuA05S3xZOsk5tv5cZRbHPxrhUwIOgoLQ1sUTn4d0hmtvf7YoNrNAfW";

const Hero: React.FC = () => {
    return (
        <>
            <main className="flex-grow flex items-center justify-center relative" id="home">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left column (text / badges / buttons) */}
                        <div className="flex flex-col gap-6 lg:gap-8 z-10 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 border border-primary/20 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Associate Tech Lead</span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                                    Engineering <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Scalable Solutions</span>
                                </h2>

                                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                                    I am <strong className="text-white">Buwaneka Sudheera</strong>, an Associate Tech Lead at <span className="text-white underline decoration-primary decoration-2 underline-offset-4">Sysco Labs</span>. I build robust platforms, lead high-performing teams, and solve complex enterprise problems with clean architecture.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-2">
                                <a className="group flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(75,43,238,0.4)]" href="#projects">
                                    <span>View Projects</span>
                                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </a>

                                <a className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border-dark bg-background-card/50 px-6 text-sm font-bold text-white transition-all hover:bg-background-card hover:border-gray-500" href="#">
                                    <span className="material-symbols-outlined text-[18px]">download</span>
                                    <span>Download CV</span>
                                </a>

                                <a className="flex md:hidden h-12 items-center justify-center gap-2 rounded-lg border border-transparent px-4 text-sm font-bold text-gray-300 hover:text-white transition-all" href="#contact">
                                    <span>Contact Me</span>
                                </a>
                            </div>

                            <div className="pt-8 border-t border-border-dark/50 mt-4">
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Core Technologies</p>

                                <div className="flex flex-wrap gap-6 text-gray-400">
                                    <div className="flex items-center gap-2" title="Cloud Architecture">
                                        <span className="material-symbols-outlined">cloud</span>
                                        <span className="text-sm">AWS</span>
                                    </div>

                                    <div className="flex items-center gap-2" title="Backend Development">
                                        <span className="material-symbols-outlined">dns</span>
                                        <span className="text-sm">Node.js</span>
                                    </div>

                                    <div className="flex items-center gap-2" title="Frontend Frameworks">
                                        <span className="material-symbols-outlined">code_blocks</span>
                                        <span className="text-sm">React</span>
                                    </div>

                                    <div className="flex items-center gap-2" title="System Design">
                                        <span className="material-symbols-outlined">hub</span>
                                        <span className="text-sm">Microservices</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column (visual / code card) */}
                        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end order-1 lg:order-2 perspective-[1000px]">
                            <div
                                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40 mix-blend-lighten"
                                data-alt="Abstract glowing network grid lines representing digital infrastructure"
                                style={{ backgroundImage: `url('${heroBgUrl}')` }}
                                aria-hidden
                            />

                            <div className="glass-panel w-full max-w-md rounded-xl p-6 shadow-2xl animate-float relative z-10 transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform hover:rotate-0">
                                <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-3">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>

                                    <div className="text-xs text-gray-500 font-mono">ProfileController.ts</div>
                                </div>

                                <div className="code-snippet text-sm space-y-1">
                                    <div className="flex">
                                        <span className="text-pink-500 mr-2">class</span>
                                        <span className="text-yellow-300">Buwaneka</span>
                                        <span className="text-gray-400 mx-2">extends</span>
                                        <span className="text-blue-400">Engineer</span>
                                        <span className="text-gray-300"> {'{'}</span>
                                    </div>

                                    <div className="pl-4 flex">
                                        <span className="text-gray-400 mr-2">role:</span>
                                        <span className="text-green-400">'Associate Tech Lead'</span>;
                                    </div>

                                    <div className="pl-4 flex">
                                        <span className="text-gray-400 mr-2">company:</span>
                                        <span className="text-green-400">'Sysco Labs'</span>;
                                    </div>

                                    <div className="pl-4 mt-2">
                                        <span className="text-pink-500">buildPlatform</span>
                                        <span> (</span>
                                        <span className="text-orange-300">scale</span>
                                        <span>) {'{'}</span>
                                    </div>

                                    <div className="pl-8 text-gray-400">// Implementing clean architecture</div>

                                    <div className="pl-8 flex">
                                        <span className="text-purple-400">return</span>
                                        <span className="text-blue-300 ml-2">new</span>
                                        <span className="text-yellow-300 ml-2">Solution</span>
                                        <span>(</span>
                                        <span className="text-orange-300">scale</span>
                                        <span>);</span>
                                    </div>

                                    <div className="pl-4 text-gray-300">{'}'}</div>
                                    <div className="text-gray-300">{'}'}</div>
                                </div>

                                <div className="absolute -bottom-4 -right-4 bg-background-card border border-primary/30 p-3 rounded-lg shadow-lg flex items-center gap-3">
                                    <div className="bg-green-500/20 p-2 rounded-md">
                                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                    </div>

                                    <div>
                                        <div className="text-[10px] text-gray-400 uppercase font-bold">System Status</div>
                                        <div className="text-xs font-bold text-white">All Systems Operational</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* subtle grid overlay */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#4b2bee 1px, transparent 1px), linear-gradient(90deg, #4b2bee 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                    aria-hidden
                />
            </main>
        </>
    );
};

export default Hero;
