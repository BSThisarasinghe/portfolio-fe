import React, { useState } from "react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const contactInfo = [
        {
            id: 1,
            type: "Email",
            value: "hello@developer.com",
            icon: "mail",
            link: "mailto:hello@developer.com",
        },
        {
            id: 2,
            type: "LinkedIn",
            value: "/in/tech-lead",
            icon: "business_center",
            link: "https://linkedin.com/in/tech-lead",
        },
        {
            id: 3,
            type: "GitHub",
            value: "/dev-architect",
            icon: "code",
            link: "https://github.com/dev-architect",
        },
        {
            id: 4,
            type: "StackOverflow",
            value: "User: 982103",
            icon: "layers",
            link: "https://stackoverflow.com/users/982103",
        },
    ];

    const subjectOptions = [
        { value: "", label: "How can I help you?" },
        { value: "collaboration", label: "Collaboration Inquiry" },
        { value: "hiring", label: "Full-time Opportunity" },
        { value: "consulting", label: "Consulting / Freelance" },
        { value: "other", label: "Other" },
    ];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <main className="flex-grow flex flex-col lg:grid lg:grid-cols-12 min-h-screen">
            {/* Left Column: Branding, Context & Contact Info */}
            <div className="lg:col-span-5 xl:col-span-6 relative flex flex-col justify-center p-6 sm:p-12 lg:p-16 code-bg border-b lg:border-b-0 lg:border-r border-border-dark overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Available for work
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                            Let's build something{" "}
                            <span className="text-primary">impactful</span> together.
                        </h1>

                        <p className="text-text-muted text-lg leading-relaxed">
                            I specialize in building scalable full-stack applications and leading technical teams.
                            Whether you have a project in mind or just want to say hi, I'm all ears.
                        </p>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contactInfo.map((info) => (
                            <a
                                key={info.id}
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col p-4 rounded-xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="mb-3 text-text-muted group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-3xl">{info.icon}</span>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-1">
                                        {info.type}
                                    </p>
                                    <p className="text-sm font-bold text-white break-all">{info.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 xl:col-span-6 bg-[#16151d] flex flex-col justify-center p-6 sm:p-12 lg:p-16">
                <div className="max-w-lg mx-auto w-full bg-surface-dark p-6 sm:p-8 rounded-2xl shadow-xl border border-border-dark">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                        <p className="text-text-muted text-sm">
                            Fill out the form below and I'll get back to you within 24 hours.
                        </p>
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        {/* Row 1: Name & Email */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <label className="flex flex-col flex-1 gap-2">
                                <span className="text-sm font-semibold text-gray-300">Name</span>
                                <input
                                    className="w-full h-12 rounded-lg bg-[#121118] border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600"
                                    placeholder="John Doe"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>

                            <label className="flex flex-col flex-1 gap-2">
                                <span className="text-sm font-semibold text-gray-300">Email</span>
                                <input
                                    className="w-full h-12 rounded-lg bg-[#121118] border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>

                        {/* Row 2: Subject */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-gray-300">Subject</span>
                            <div className="relative">
                                <select
                                    className="w-full h-12 rounded-lg bg-[#121118] border border-border-dark text-white px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {subjectOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </label>

                        {/* Row 3: Message */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-gray-300">Message</span>
                            <textarea
                                className="w-full min-h-[160px] rounded-lg bg-[#121118] border border-border-dark text-white p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600 resize-none"
                                placeholder="Tell me a bit about your project, timeline, and goals..."
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </label>

                        {/* Action */}
                        <div className="pt-2">
                            <button
                                className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-lg shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group"
                                type="submit"
                            >
                                <span>Send Message</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">
                  send
                </span>
                            </button>
                        </div>
                    </form>

                    {/* Code Decoration in Form */}
                    <div className="mt-8 pt-6 border-t border-border-dark">
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                            <span className="material-symbols-outlined text-sm">terminal</span>
                            <span>console.log("Ready to code.");</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
