import React from "react";

function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded bg-primary/20 text-primary">
                            <span className="material-symbols-outlined text-xl">terminal</span>
                        </div>
                        <h1 className="text-white text-lg font-bold tracking-tight">Buwaneka Sudheera</h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        <a className="text-sm font-medium text-white hover:text-primary transition-colors" href="#home">Home</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#about">About</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#skills">Skills</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#projects">Projects</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#research">Research</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#leadership">Leadership</a>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <a className="flex items-center gap-2 text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-all px-4 py-2 rounded-lg shadow-lg shadow-primary/20" href="#contact">
                            <span className="material-symbols-outlined text-[18px]">mail</span>
                            <span>Contact</span>
                        </a>
                    </div>

                    <button className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors" aria-label="Open menu">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
