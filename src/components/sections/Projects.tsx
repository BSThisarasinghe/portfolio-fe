import React from "react";

const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Dialog Marketplace",
            role: "Lead Architect",
            description: "A scalable enterprise marketplace platform capable of handling high-volume transactions with 99.9% uptime. Engineered microservices architecture that reduced latency by 35%.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyz4Npyoiu6yvhGmtce6JppVX281xU_Pka1rVroIxQutFWoeRMcFUNegAW01xuAt6ZgFL-a2XbSbrPkTCsHHN0iULKQ12lb5VZQBTq9xXXbN80NiawL-1le9xDqtuL6SLsTT2COpfWF4wEln1MSTd08Xyx8DgA3luy-gsqK50RcjHR-q6UoNJfuGEBp8jgCPWf54SAMpFXWn0tPMTTzRWSghS-f-UFS0srSSemAAeGoXwlJQgxbIH1pjSDFv5HpO4irWqYB3zZugig",
            technologies: ["React", "Node.js", "AWS Lambda", "Docker"],
            metrics: "Increased user retention by 40%",
            featured: true,
            links: [
                { type: "code", icon: "code", title: "View Source" },
                { type: "demo", icon: "open_in_new", title: "Live Demo" }
            ]
        },
        {
            id: 2,
            title: "VdoMeet",
            role: "Senior Engineer",
            description: "Real-time video conferencing solution built on WebRTC. Optimized for low-bandwidth environments achieving HD quality at 500kbps.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJiyg31aIGc69IO4Gg-uBtDg6zj4LmayfY8VkuLvV4YV8Chto_kwGmMoR6NRZl1oJwJVfJArGiTwPJ6eJSGNbiZY3D63N27mT9phfNesw47JOREeOIAA50qGF6I9lvy7yWQr6I3le0qPt4_YGOnJqAHau14q3JSOdDkm-14ePNnRfcsFuxfr2Zu2HSTIebQw_Qr03jQPz3EeRiUplHCTVTk5cC-OODpwlsUxmv8D2FN4J8rsqMYtR35CaSjTGcZ2x1yv_FDyosmuA-",
            technologies: ["WebRTC", "Socket.io", "Redis"],
            metrics: "",
            featured: false,
            links: []
        },
        {
            id: 3,
            title: "GeoReach",
            role: "Full-Stack Dev",
            description: "Location-intelligence platform for logistics optimization. Integrated Google Maps API to solve complex multi-stop routing problems.",
            image: "https://placeholder.pics/svg/300",
            technologies: ["Google Maps API", "PostGIS", "Python"],
            metrics: "",
            featured: false,
            links: []
        },
        {
            id: 4,
            title: "QuickPass",
            role: "Backend Lead",
            description: "Secure, passwordless authentication SDK for fintech apps. Implemented OAuth 2.0 and biometric verification flows.",
            icon: "verified_user",
            technologies: ["OAuth 2.0", "Security"],
            metrics: "",
            featured: false,
            links: []
        },
        {
            id: 5,
            title: "Aduvata.lk",
            role: "Tech Lead",
            description: "High-traffic classifieds platform for the Sri Lankan market. Optimized database queries reduced page load by 50% during peak hours.",
            icon: "shopping_cart",
            technologies: ["Next.js", "MongoDB"],
            metrics: "",
            featured: false,
            links: []
        }
    ];

    return (
        <main className="relative flex flex-col items-center min-h-screen pt-10 pb-20 px-4 md:px-10 code-bg" id={"projects"}>
            {/* Background pattern is handled by code-bg class in index.css */}

            {/* Header Section */}
            <div className="flex flex-col max-w-[960px] w-full items-center text-center mb-16">
                <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.015em] mb-4">
                    Featured Work
                </h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2b2839]/50 border border-[#2b2839]">
                    <span className="text-primary font-mono text-sm font-bold">&gt;_</span>
                    <p className="text-text-subtle font-mono text-sm">
                        // SELECT * FROM projects WHERE quality = 'high'
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Footer Call to Action */}
            <div className="mt-16 text-center">
                <a
                    className="inline-flex items-center justify-center gap-2 text-white font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
                    href="#"
                >
                    <span>View all projects on GitHub</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </main>
    );
};

// Project Card Component
interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        role: string;
        description: string;
        image?: string;
        icon?: string;
        technologies: string[];
        metrics: string;
        featured: boolean;
        links: Array<{ type: string; icon: string; title: string }>;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    if (project.featured) {
        return (
            <div className="group relative rounded-xl border border-[#2b2839] bg-card-dark overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 lg:col-span-2 flex flex-col md:flex-row">
                {/* Left side with image */}
                <div className="w-full md:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-60 z-10 md:bg-gradient-to-r"></div>
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${project.image}')`, minHeight: '300px' }}
                        aria-label={`Modern dashboard interface for ${project.title}`}
                    />
                </div>

                {/* Right side with content */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-4">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">
              {project.role}
            </span>
                        <div className="flex gap-2">
                            {project.links.map((link, index) => (
                                <a
                                    key={index}
                                    className="text-text-subtle hover:text-white transition-colors"
                                    href="#"
                                    title={link.title}
                                >
                  <span className="material-symbols-outlined text-xl">
                    {link.icon}
                  </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-text-subtle text-base mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="mb-6">
                        <div className="flex gap-2 flex-wrap">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full bg-[#2b2839] text-xs font-medium text-white border border-white/5"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    {project.metrics && (
                        <div className="flex items-center gap-2 text-sm text-green-400 font-medium">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            <span>{project.metrics}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // For projects with images (VdoMeet, GeoReach)
    if (project.image) {
        return (
            <div className="group relative rounded-xl border border-[#2b2839] bg-card-dark overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
                <div className="w-full h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-80 z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${project.image}')` }}
                        aria-label={`Project interface for ${project.title}`}
                    />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              {project.role}
            </span>
                        <a
                            className="flex items-center gap-1 text-xs font-bold text-white bg-primary/20 hover:bg-primary px-3 py-1.5 rounded-lg transition-all"
                            href="#"
                        >
                            View Live <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                        </a>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-text-subtle text-sm mb-4 flex-grow">{project.description}</p>

                    <div className="flex gap-2 flex-wrap mt-auto">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 rounded bg-[#2b2839] text-[10px] font-medium text-gray-300"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // For icon-based projects (QuickPass, Aduvata.lk)
    return (
        <div className="group relative rounded-xl border border-[#2b2839] bg-card-dark overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col lg:col-span-1">
            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <span className="material-symbols-outlined">{project.icon}</span>
                    </div>
                    <a
                        className="text-text-subtle hover:text-white transition-colors"
                        href="#"
                        title="View Project"
                    >
                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-text-subtle text-sm mb-4">{project.description}</p>

                <div className="mt-auto pt-4 border-t border-[#2b2839]/50 flex justify-between items-center">
                    <div className="flex gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 rounded bg-[#2b2839] text-[10px] font-medium text-gray-300"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                    <span className="text-xs text-text-subtle font-mono">{project.role}</span>
                </div>
            </div>
        </div>
    );
};

export default Projects;
