import React from "react";

const NavBar: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full border-b border-[#2b2839] bg-[#121118]/80 backdrop-blur-md sticky top-0 z-50">
            <div className="layout-container flex justify-center">
                <header className="flex w-full max-w-[1280px] items-center justify-between whitespace-nowrap px-6 py-4 lg:px-10">
                    <div className="flex items-center gap-4 text-white">
                        <div className="size-6 text-primary">
                            <span className="material-symbols-outlined text-[28px]">terminal</span>
                        </div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                            Portfolio
                        </h2>
                    </div>

                    <div className="flex items-center justify-end gap-8">
                        <div className="hidden md:flex items-center gap-9">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-white text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-white text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="text-white text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                            >
                                Work
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-white text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                            >
                                Contact
                            </button>
                        </div>

                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-primary-light transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Resume</span>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default NavBar;
