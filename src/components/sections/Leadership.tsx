import React from "react";

const Leadership: React.FC = () => {
    const leadershipSkills = [
        {
            id: 1,
            title: "Mentoring & Reviews",
            description: "Guiding junior developers through code reviews, pairing sessions, and career growth paths.",
            icon: "supervisor_account",
            color: "text-primary",
        },
        {
            id: 2,
            title: "Technical Ownership",
            description: "Taking full responsibility for architectural choices, tech debt management, and product delivery.",
            icon: "shield_person",
            color: "text-primary",
        },
        {
            id: 3,
            title: "Bilingual Communication",
            description: "Bridging technical gaps with fluent Sinhala and English communication across cross-functional teams.",
            icon: "translate",
            color: "text-primary",
        },
        {
            id: 4,
            title: "Critical Decisions",
            description: "Balancing trade-offs in tech stacks and timelines to ensure long-term scalability and business value.",
            icon: "balance",
            color: "text-primary",
        },
    ];

    const blogs = [
        {
            id: 1,
            name: "Coder Awesome",
            icon: "code",
            color: "text-primary",
        },
        {
            id: 2,
            name: "ReadHub",
            icon: "menu_book",
            color: "text-primary",
        },
        {
            id: 3,
            name: "Easy Photoshop",
            icon: "brush",
            color: "text-primary",
        },
    ];

    const youtubeChannel = {
        name: "DEV BUWA",
        platform: "YouTube Channel",
        description: "Teaching tech to the next generation through accessible video tutorials. Breaking down complex full-stack concepts into digestible lessons.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQpb1sV2rgPY_adenX8Pk155sdvsFxdzPpCkO_6uWu762L_25ccOBVtm2GqxmxQbQmzDG4EIg5KPWJQgh9xMyXArx1iy9sDwXU78YWk5fUuN1ywGLQO-vaLounHOlvZIFqxwv1Zdc17IVHO68El1FtIH-3qHip_PiVK1MIhS6qKyhJbuDcJ77OfsdyE3BqZcisZuBh1zRb-6WpfWctZafn3XmGfwDJ10JU5DS_KzA4iwqLoqIW4771_O_30ILts-0IXtu5wt3lv6qH",
    };

    const blogHeaderImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ab_DI6ycCYXVFT6hCryHJes9CJMoRNgEPGcT1wm4708GKBtuH6GWxthg8i5BfUy_f_hIzfOd3LAwWjHz8NqJuYe7DnS3kbq0Oo87CiKMXa8qcWHwSgRWCJ_FsO_WdO9oHAwtWGkIaemAkoNLGe8dHbfbhsOi6vYp6mwn7FLn0EzMwERZTm0wTgmGyD5ORATFvWRcUm3M1BypISw1cCTL04TZathj9XXtwgyXfsX1Jc6O7CUyEWsuyRcWfpRRUQCCv_So8kaTjrxV";

    return (
        <div className="relative flex flex-col w-full min-h-screen bg-background-dark text-white">
            {/* Background decorative elements */}
            <div className="absolute inset-0 z-0 pointer-events-none code-bg"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-12">
                    <div className="layout-content-container flex flex-col max-w-[1024px] flex-1 gap-12">
                        {/* Section 1: Leadership & Soft Skills */}
                        <div className="flex flex-col gap-10 animate-fade-in-up">
                            <div className="flex flex-col gap-4 border-l-4 border-primary pl-6">
                                <h1 className="text-white tracking-tight text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                                    Beyond the Code:
                                    <br />
                                    <span className="text-primary">Leadership & Impact</span>
                                </h1>
                                <p className="text-text-muted text-lg font-normal leading-relaxed max-w-[720px]">
                                    Moving beyond raw code to foster growth, own technical architecture, and communicate complex ideas effectively. Bridging the gap between engineering and product.
                                </p>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {leadershipSkills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="group flex flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(75,43,238,0.15)] hover:-translate-y-1"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>
                        {skill.icon}
                      </span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-white text-lg font-bold leading-tight">{skill.title}</h2>
                                            <p className="text-text-muted text-sm leading-relaxed">{skill.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-border-dark to-transparent"></div>

                        {/* Section 2: Content Creation */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-white tracking-tight text-[28px] font-bold leading-tight pb-3 pt-5 flex items-center gap-3">
                  <span className="bg-primary/20 p-2 rounded-lg text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">podcasts</span>
                  </span>
                                    Knowledge Sharing & Community
                                </h2>
                                <p className="text-text-muted text-base max-w-[600px]">
                                    Empowering the developer community through accessible education and technical writing.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* YouTube Card */}
                                <div className="relative overflow-hidden rounded-xl bg-card-dark border border-border-dark shadow-sm group hover:border-primary/50 transition-colors">
                                    {/* Decorative background gradient */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[80px] rounded-full pointer-events-none"></div>

                                    <div className="flex flex-col h-full p-6 gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg">
                        <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                          play_arrow
                        </span>
                                            </div>
                                            <div>
                                                <h3 className="text-white text-xl font-bold">{youtubeChannel.name}</h3>
                                                <p className="text-red-400 text-sm font-medium">{youtubeChannel.platform}</p>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-text-muted text-sm leading-relaxed mb-4">
                                                {youtubeChannel.description}
                                            </p>
                                            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black/50 border border-border-dark group-hover:border-red-500/30 transition-colors">
                                                <img
                                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                                    src={youtubeChannel.image}
                                                    alt="Code on a laptop screen with a dark coding environment"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <span className="material-symbols-outlined text-white">play_circle</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#2b2839] hover:bg-red-600 text-white text-sm font-medium transition-colors">
                                            <span>Visit Channel</span>
                                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                        open_in_new
                      </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Blog Card */}
                                <div className="relative overflow-hidden rounded-xl bg-card-dark border border-border-dark shadow-sm group hover:border-primary/50 transition-colors flex flex-col">
                                    {/* Background Image Header */}
                                    <div
                                        className="h-40 bg-cover bg-center relative"
                                        style={{ backgroundImage: `url('${blogHeaderImage}')` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
                                        <div className="absolute bottom-4 left-6">
                                            <h3 className="text-white text-2xl font-bold tracking-tight">Technical Blogging</h3>
                                            <p className="text-white/80 text-sm">Written tutorials & Insights</p>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col gap-6 flex-1">
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            Contributing to the developer ecosystem by documenting challenges, solutions, and best practices across multiple platforms.
                                        </p>

                                        <div className="flex flex-col gap-3 mt-auto">
                                            {blogs.map((blog) => (
                                                <div
                                                    key={blog.id}
                                                    className="flex items-center justify-between p-3 rounded-lg bg-[#252431] border border-border-dark hover:border-primary/50 transition-colors cursor-pointer group/item"
                                                >
                                                    <div className="flex items-center gap-3">
                            <span className={`material-symbols-outlined ${blog.color} group-hover/item:text-white transition-colors`}>
                              {blog.icon}
                            </span>
                                                        <span className="text-white text-sm font-semibold">{blog.name}</span>
                                                    </div>
                                                    <span className="material-symbols-outlined text-text-muted text-[18px]">arrow_forward</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-wide transition-colors mt-2">
                                            <span>Read Articles</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;
