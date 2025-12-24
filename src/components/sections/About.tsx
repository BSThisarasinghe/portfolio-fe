import React from "react";

const About: React.FC = () => {
    return (
        <section className="relative py-20 bg-white/50 dark:bg-[#0c0a15] border-t border-gray-200 dark:border-border-dark" id="about">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Experience Timeline
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        My professional growth from intern to leadership.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200 dark:bg-white/10"></div>
                    <div className="absolute left-4 md:left-1/2 top-0 h-1/3 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary to-transparent"></div>

                    <div className="space-y-12">
                        {/* Timeline Item 1 (Current) */}
                        <div className="relative flex flex-col md:flex-row gap-8 items-start group">
                            {/* Date (Desktop: Left) */}
                            <div className="md:w-1/2 md:text-right pt-1.5 md:pr-12 hidden md:block">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-mono font-semibold text-primary ring-1 ring-inset ring-primary/20">
                  Current Role
                </span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background-light dark:bg-[#0c0a15] ring-4 ring-background-light dark:ring-[#0c0a15]">
                                <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_12px_rgba(75,43,238,0.6)]"></div>
                            </div>

                            {/* Content Card */}
                            <div className="md:w-1/2 ml-12 md:ml-0 md:pl-12 w-full">
                                {/* Mobile Date Badge */}
                                <div className="md:hidden mb-2">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-mono font-semibold text-primary ring-1 ring-inset ring-primary/20">
                    Current Role
                  </span>
                                </div>

                                <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-primary/30 bg-white dark:bg-card-dark p-6 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/50">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                Associate Tech Lead
                                            </h3>
                                            <p className="text-base font-medium text-primary">Sysco Labs</p>
                                        </div>
                                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-background-light dark:bg-white/5">
                      <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">
                        groups
                      </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                                        Driving technical strategy and leading cross-functional teams to build
                                        enterprise-grade solutions. Focusing on system reliability and mentoring
                                        junior engineers.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-background-light dark:bg-white/5 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10">
                      Leadership
                    </span>
                                        <span className="inline-flex items-center rounded-md bg-background-light dark:bg-white/5 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10">
                      Ownership
                    </span>
                                        <span className="inline-flex items-center rounded-md bg-background-light dark:bg-white/5 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10">
                      System Design
                    </span>
                                        <span className="inline-flex items-center rounded-md bg-background-light dark:bg-white/5 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10">
                      Cross-team Collab
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="relative flex flex-col md:flex-row gap-8 items-start md:flex-row-reverse group">
                            {/* Date (Desktop: Right) */}
                            <div className="md:w-1/2 md:text-left pt-1.5 md:pl-12 hidden md:block">
                                <span className="font-mono text-sm text-gray-500">2021 - 2023</span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background-light dark:bg-[#0c0a15] ring-4 ring-background-light dark:ring-[#0c0a15]">
                                <div className="h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-primary transition-colors"></div>
                            </div>

                            {/* Content Card */}
                            <div className="md:w-1/2 ml-12 md:ml-0 md:pr-12 w-full">
                                <div className="md:hidden mb-2">
                                    <span className="font-mono text-xs text-gray-500">2021 - 2023</span>
                                </div>

                                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card-dark p-6 transition-all hover:border-gray-300 dark:hover:border-white/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                Senior Software Engineer
                                            </h3>
                                            <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                Just In Time
                                            </p>
                                        </div>
                                        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-background-light dark:bg-white/5">
                      <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-400">
                        code_blocks
                      </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Spearheaded the migration of legacy monoliths to microservices, improving
                                        deployment frequency by 40%.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="relative flex flex-col md:flex-row gap-8 items-start group">
                            {/* Date */}
                            <div className="md:w-1/2 md:text-right pt-1.5 md:pr-12 hidden md:block">
                                <span className="font-mono text-sm text-gray-500">2019 - 2021</span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background-light dark:bg-[#0c0a15] ring-4 ring-background-light dark:ring-[#0c0a15]">
                                <div className="h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-primary transition-colors"></div>
                            </div>

                            {/* Content Card */}
                            <div className="md:w-1/2 ml-12 md:ml-0 md:pl-12 w-full">
                                <div className="md:hidden mb-2">
                                    <span className="font-mono text-xs text-gray-500">2019 - 2021</span>
                                </div>

                                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-card-dark p-6 transition-all hover:border-gray-300 dark:hover:border-white/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                Software Engineer
                                            </h3>
                                            <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                Just In Time
                                            </p>
                                        </div>
                                        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-background-light dark:bg-white/5">
                      <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-400">
                        developer_mode
                      </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Developed full-stack features for the core product. Collaborated with QA
                                        to implement automated testing pipelines.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 4 */}
                        <div className="relative flex flex-col md:flex-row gap-8 items-start md:flex-row-reverse group">
                            {/* Date */}
                            <div className="md:w-1/2 md:text-left pt-1.5 md:pl-12 hidden md:block">
                                <span className="font-mono text-sm text-gray-500">2018 - 2019</span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background-light dark:bg-[#0c0a15] ring-4 ring-background-light dark:ring-[#0c0a15]">
                                <div className="h-3 w-3 rounded-full border-2 border-gray-400 dark:border-gray-600 bg-transparent group-hover:border-primary transition-colors"></div>
                            </div>

                            {/* Content Card */}
                            <div className="md:w-1/2 ml-12 md:ml-0 md:pr-12 w-full">
                                <div className="md:hidden mb-2">
                                    <span className="font-mono text-xs text-gray-500">2018 - 2019</span>
                                </div>

                                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-card-dark/50 p-6 transition-all hover:border-gray-300 dark:hover:border-white/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                Intern
                                            </h3>
                                            <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                Omobio
                                            </p>
                                        </div>
                                        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-background-light dark:bg-white/5">
                      <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-400">
                        school
                      </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Gained hands-on experience in telecom VAS solutions. Contributed to the
                                        frontend optimization of the admin dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 flex justify-center">
                        <a
                            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all"
                            href="#"
                        >
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Download Full Resume
              </span>
                            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-lg">
                arrow_forward
              </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
