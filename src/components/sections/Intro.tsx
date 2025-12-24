import React from "react";

const Intro: React.FC = () => {
    const profileImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBaRVeUMdhVOqKhIIZMkh7ETyIcekguAAOlseo7V3-aLew9d_aSn8fFpOvYVZ6oFXHF20ajpnz04OqqLNNDzf2srI4BiN7kIEeaF_ZyedmeF75_-pQYFTSym7v39ddIPyug0NBHZQ8gxsa_m35ksxUHhwBwIFm29-jdeftnPcN4ox6JCfVsWAN-hvx30nBtusa7na_jjKMuDVoFaJYdh3Qqj5e01hij0M89_oe-xzc0cNF5aPbqZ8Vd9TefcoDoyCaNfdQOYd5ocPmh";

    return (
        <section className="relative z-10 pt-16 pb-12 lg:pt-24 lg:pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Heading & Bio */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                                Open to Leadership Opportunities
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 dark:text-white leading-[1.1]">
                                Engineering <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  Leadership & Craft
                </span>
                            </h1>

                            <p className="text-xl text-gray-500 dark:text-[#a19db9] font-medium max-w-2xl">
                                Associate Tech Lead & Full-Stack Engineer
                            </p>
                        </div>

                        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                I am an Associate Tech Lead with{" "}
                                <span className="text-primary font-semibold">7+ years of experience</span>{" "}
                                in full-stack development, specializing in scalable web and mobile
                                applications.
                            </p>
                            <p>
                                I enjoy mentoring developers, designing clean architectures, and delivering
                                high-impact solutions for enterprise systems. My journey is defined by a
                                passion for solving complex problems and bridging the gap between
                                engineering and product vision.
                            </p>
                        </div>

                        {/* Tech Stack / Skills (Mini Grid) */}
                        <div className="mt-4">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 font-mono">
                                Core Competencies
                            </p>
                            <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium">
                  Scalable Architecture
                </span>
                                <span className="px-3 py-1.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium">
                  Full-Stack Dev
                </span>
                                <span className="px-3 py-1.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium">
                  Team Leadership
                </span>
                                <span className="px-3 py-1.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium">
                  Cloud Native
                </span>
                                <span className="px-3 py-1.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium">
                  Mentorship
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Profile Image & Stats */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-purple-600 opacity-30 blur transition duration-1000 group-hover:opacity-70 group-hover:duration-200"></div>

                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                                <img
                                    alt="Professional portrait of a software engineer working in a modern office environment with code on screens"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    src={profileImageUrl}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <div className="font-mono text-xs text-primary mb-1">
                                        &lt;Profile /&gt;
                                    </div>
                                    <div className="text-white font-bold">Coding the Future</div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col gap-1 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-900/5 dark:bg-card-dark dark:ring-white/10 text-center lg:text-left">
                                <dt className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    7+
                                </dt>
                                <dd className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Years Exp.
                                </dd>
                            </div>

                            <div className="flex flex-col gap-1 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-900/5 dark:bg-card-dark dark:ring-white/10 text-center lg:text-left">
                                <dt className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    20+
                                </dt>
                                <dd className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Projects
                                </dd>
                            </div>

                            <div className="flex flex-col gap-1 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-900/5 dark:bg-card-dark dark:ring-white/10 text-center lg:text-left">
                                <dt className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    3
                                </dt>
                                <dd className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Teams Led
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
