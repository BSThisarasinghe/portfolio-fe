import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#121118] border-t border-border-dark py-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-text-muted text-sm">
                    © 2024 DevPortfolio. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a
                        className="text-gray-600 hover:text-white transition-colors"
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="sr-only">Twitter</span>
                        <span className="material-symbols-outlined">public</span>
                    </a>
                    <a
                        className="text-gray-600 hover:text-white transition-colors"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="sr-only">GitHub</span>
                        <span className="material-symbols-outlined">code</span>
                    </a>
                    <a
                        className="text-gray-600 hover:text-white transition-colors"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <span className="material-symbols-outlined">business_center</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
