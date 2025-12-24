import React from "react";

interface NavigationProps {
    activeSection?: string;
}

const NavBar: React.FC<NavigationProps> = () => {
    const [activeSection, setActiveSection] = React.useState("home");
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        setActiveSection(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-solid border-border-dark bg-[#121118]/80 backdrop-blur-md">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-10 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">terminal</span>
                    </div>
                    <h2 className="text-white text-lg font-bold tracking-tight">DevPortfolio</h2>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection("home")}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === "home"
                                ? "text-primary"
                                : "text-gray-300 hover:text-white"
                        }`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === "about"
                                ? "text-primary"
                                : "text-gray-300 hover:text-white"
                        }`}
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection("technologies")}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === "technologies"
                                ? "text-primary"
                                : "text-gray-300 hover:text-white"
                        }`}
                    >
                        Technologies
                    </button>
                    <button
                        onClick={() => scrollToSection("projects")}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === "projects"
                                ? "text-primary"
                                : "text-gray-300 hover:text-white"
                        }`}
                    >
                        Work
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === "contact"
                                ? "text-primary"
                                : "text-gray-300 hover:text-white"
                        }`}
                    >
                        Contact
                    </button>
                </div>

                <button
                    onClick={() => scrollToSection("contact")}
                    className="hidden md:flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/25">
                    <span>Hire Me</span>
                </button>

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
