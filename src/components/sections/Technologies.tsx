import React from "react";

const Technologies: React.FC = () => {
    // Frontend technologies data
    const frontendTech = [
        {
            name: "React",
            icon: "code_blocks",
            iconColor: "text-blue-400",
            proficiency: 95,
            level: "Advanced",
            levelColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            name: "React Native",
            icon: "smartphone",
            iconColor: "text-blue-300",
            proficiency: 85,
            level: "Proficient",
            levelColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        },
        {
            name: "Redux",
            icon: "account_tree",
            iconColor: "text-purple-400",
            proficiency: 85,
            level: "Proficient",
            levelColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        },
        {
            name: "Flutter",
            icon: "devices",
            iconColor: "text-cyan-400",
            proficiency: 60,
            level: "Intermediate",
            levelColor: "bg-gray-500/20 text-gray-300 border-gray-500/20",
        },
        {
            name: "Bootstrap",
            icon: "style",
            iconColor: "text-indigo-400",
            proficiency: 95,
            level: "Expert",
            levelColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        },
    ];

    // Auth & Infrastructure technologies data
    const authInfraTech = [
        {
            name: "Firebase",
            icon: "local_fire_department",
            iconColor: "text-yellow-500",
            proficiency: 90,
            level: "Advanced",
            levelColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            name: "Keycloak",
            icon: "vpn_key",
            iconColor: "text-orange-400",
            proficiency: 80,
            level: "Proficient",
            levelColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        },
    ];

    // Backend technologies data
    const backendTech = [
        {
            name: "Node.js",
            icon: "webhook",
            iconColor: "text-green-500",
            proficiency: 90,
            level: "Advanced",
            levelColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            name: "Express",
            icon: "javascript",
            iconColor: "text-gray-300",
            proficiency: 85,
            level: "Proficient",
            levelColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        },
        {
            name: "PHP",
            icon: "php",
            iconColor: "text-purple-300",
            proficiency: 90,
            level: "Advanced",
            levelColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            name: "Laravel",
            icon: "layers",
            iconColor: "text-red-400",
            proficiency: 85,
            level: "Proficient",
            levelColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        },
        {
            name: "Java",
            icon: "coffee",
            iconColor: "text-red-300",
            proficiency: 70,
            level: "Intermediate",
            levelColor: "bg-gray-500/20 text-gray-300 border-gray-500/20",
        },
        {
            name: "Yii / CodeIgniter",
            icon: "api",
            iconColor: "text-green-300",
            proficiency: 65,
            level: "Intermediate",
            levelColor: "bg-gray-500/20 text-gray-300 border-gray-500/20",
        },
    ];

    // Database technologies data
    const databaseTech = [
        {
            name: "MySQL",
            icon: "table_chart",
            iconColor: "text-blue-500",
            proficiency: 90,
            level: "Advanced",
            levelColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            name: "MSSQL",
            icon: "storage",
            iconColor: "text-red-500",
            proficiency: 70,
            level: "Intermediate",
            levelColor: "bg-gray-500/20 text-gray-300 border-gray-500/20",
        },
    ];

    return (
        <section className="relative py-16 bg-background-dark">
            {/* Background Pattern */}
            <div
                className="fixed inset-0 z-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#4b2bee 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            ></div>

            <div className="relative z-10 px-4 md:px-10 lg:px-40">
                <div className="max-w-[1200px] mx-auto">
                    {/* Header Section */}
                    <div className="text-center space-y-4 mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            Tech Stack
                        </div>
                        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                            Technologies & Tools
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">
                            My technical toolkit as an Associate Tech Lead & Full-Stack Software Engineer.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1: Frontend & Auth */}
                        <div className="flex flex-col gap-6">
                            {/* Frontend Card */}
                            <div className="flex flex-col overflow-hidden rounded-xl border border-[#3f3b54] bg-[#1d1c27]/50 backdrop-blur-sm">
                                <div className="px-6 py-5 border-b border-[#3f3b54] flex items-center gap-3 bg-[#1d1c27]">
                                    <span className="material-symbols-outlined text-primary">web</span>
                                    <h3 className="text-white text-xl font-bold leading-tight">
                                        Frontend Development
                                    </h3>
                                </div>
                                <div className="p-2">
                                    <table className="w-full text-left border-collapse">
                                        <tbody className="divide-y divide-[#3f3b54]/50">
                                        {frontendTech.map((tech, index) => (
                                            <tr
                                                key={index}
                                                className="group hover:bg-[#3f3b54]/20 transition-colors"
                                            >
                                                <td className="p-4 w-1/3">
                                                    <div className="flex items-center gap-3 text-white text-sm font-medium">
                              <span
                                  className={`material-symbols-outlined ${tech.iconColor} text-xl`}
                              >
                                {tech.icon}
                              </span>
                                                        {tech.name}
                                                    </div>
                                                </td>
                                                <td className="p-4 w-1/3">
                                                    <div className="w-full bg-[#3f3b54] rounded-full h-1.5">
                                                        <div
                                                            className="bg-primary h-1.5 rounded-full"
                                                            style={{ width: `${tech.proficiency}%` }}
                                                        ></div>
                                                    </div>
                                                </td>
                                                <td className="p-4 w-1/3 text-right">
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${tech.levelColor}`}
                            >
                              {tech.level}
                            </span>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Auth & Infra Card */}
                            <div className="flex flex-col overflow-hidden rounded-xl border border-[#3f3b54] bg-[#1d1c27]/50 backdrop-blur-sm">
                                <div className="px-6 py-5 border-b border-[#3f3b54] flex items-center gap-3 bg-[#1d1c27]">
                  <span className="material-symbols-outlined text-primary">
                    cloud_done
                  </span>
                                    <h3 className="text-white text-xl font-bold leading-tight">
                                        Auth & Infrastructure
                                    </h3>
                                </div>
                                <div className="p-2">
                                    <table className="w-full text-left border-collapse">
                                        <tbody className="divide-y divide-[#3f3b54]/50">
                                        {authInfraTech.map((tech, index) => (
                                            <tr
                                                key={index}
                                                className="group hover:bg-[#3f3b54]/20 transition-colors"
                                            >
                                                <td className="p-4 w-1/3">
                                                    <div className="flex items-center gap-3 text-white text-sm font-medium">
                              <span
                                  className={`material-symbols-outlined ${tech.iconColor} text-xl`}
                              >
                                {tech.icon}
                              </span>
                                                        {tech.name}
                                                    </div>
                                                </td>
                                                <td className="p-4 w-1/3">
                                                    <div className="w-full bg-[#3f3b54] rounded-full h-1.5">
                                                        <div
                                                            className="bg-primary h-1.5 rounded-full"
                                                            style={{ width: `${tech.proficiency}%` }}
                                                        ></div>
                                                    </div>
                                                </td>
                                                <td className="p-4 w-1/3 text-right">
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${tech.levelColor}`}
                            >
                              {tech.level}
                            </span>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Backend & Databases */}
                        <div className="flex flex-col gap-6">
                            {/* Backend Card */}
                            <div className="flex flex-col overflow-hidden rounded-xl border border-[#3f3b54] bg-[#1d1c27]/50 backdrop-blur-sm">
                                <div className="px-6 py-5 border-b border-[#3f3b54] flex items-center gap-3 bg-[#1d1c27]">
                  <span className="material-symbols-outlined text-primary">
                    dns
                  </span>
                                    <h3 className="text-white text-xl font-bold leading-tight">
                                        Backend Development
                                    </h3>
                                </div>
                                <div className="p-2">
                                    <table className="w-full text-left border-collapse">
                                        <tbody className="divide-y divide-[#3f3b54]/50">
                                        {backendTech.map((tech, index) => (
                                            <tr
                                                key={index}
                                                className="group hover:bg-[#3f3b54]/20 transition-colors"
                                            >
                                                <td className="p-4 w-1/3">
                                                    <div className="flex items-center gap-3 text-white text-sm font-medium">
                              <span
                                  className={`material-symbols-outlined ${tech.iconColor} text-xl`}
                              >
                                {tech.icon}
                              </span>
                                                        {tech.name}
                                                    </div>
                                                </td>
                                                <td className="p-4 w-1/3">
                                                    <div className="w-full bg-[#3f3b54] rounded-full h-1.5">
                                                        <div
                                                            className="bg-primary h-1.5 rounded-full"
                                                            style={{ width: `${tech.proficiency}%` }}
                                                        ></div>
                                                    </div>
                                                </td>
                                                <td className="p-4 w-1/3 text-right">
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${tech.levelColor}`}
                            >
                              {tech.level}
                            </span>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Databases Card */}
                            <div className="flex flex-col overflow-hidden rounded-xl border border-[#3f3b54] bg-[#1d1c27]/50 backdrop-blur-sm">
                                <div className="px-6 py-5 border-b border-[#3f3b54] flex items-center gap-3 bg-[#1d1c27]">
                  <span className="material-symbols-outlined text-primary">
                    database
                  </span>
                                    <h3 className="text-white text-xl font-bold leading-tight">
                                        Databases
                                    </h3>
                                </div>
                                <div className="p-2">
                                    <table className="w-full text-left border-collapse">
                                        <tbody className="divide-y divide-[#3f3b54]/50">
                                        {databaseTech.map((tech, index) => (
                                            <tr
                                                key={index}
                                                className="group hover:bg-[#3f3b54]/20 transition-colors"
                                            >
                                                <td className="p-4 w-1/3">
                                                    <div className="flex items-center gap-3 text-white text-sm font-medium">
                              <span
                                  className={`material-symbols-outlined ${tech.iconColor} text-xl`}
                              >
                                {tech.icon}
                              </span>
                                                        {tech.name}
                                                    </div>
                                                </td>
                                                <td className="p-4 w-1/3">
                                                    <div className="w-full bg-[#3f3b54] rounded-full h-1.5">
                                                        <div
                                                            className="bg-primary h-1.5 rounded-full"
                                                            style={{ width: `${tech.proficiency}%` }}
                                                        ></div>
                                                    </div>
                                                </td>
                                                <td className="p-4 w-1/3 text-right">
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${tech.levelColor}`}
                            >
                              {tech.level}
                            </span>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
