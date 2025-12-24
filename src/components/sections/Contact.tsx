import React, { useState } from "react";
import emailjs from '@emailjs/browser';

// In your code
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

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
        { value: "", label: "How can I help you?", disabled: true },
        { value: "Collaboration", label: "Collaboration Inquiry" },
        { value: "Hiring", label: "Full-time Opportunity" },
        { value: "Consulting", label: "Consulting / Freelance" },
        { value: "Other", label: "Other" },
    ];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear any previous submit status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fill in all required fields.'
            });
            return;
        }

        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setSubmitStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject || 'No subject provided',
                message: formData.message,
            };

            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            // Success
            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error('Failed to send message:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact me directly via email.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="flex-grow flex flex-col lg:grid lg:grid-cols-12 min-h-screen" id="contact">
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

                    {/* Status Message */}
                    {submitStatus.type && (
                        <div className={`mb-6 p-4 rounded-lg ${
                            submitStatus.type === 'success'
                                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                : 'bg-red-500/10 border border-red-500/20 text-red-400'
                        }`}>
                            <div className="flex items-start gap-2">
                <span className="material-symbols-outlined mt-0.5">
                  {submitStatus.type === 'success' ? 'check_circle' : 'error'}
                </span>
                                <span className="text-sm">{submitStatus.message}</span>
                            </div>
                        </div>
                    )}

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        {/* Row 1: Name & Email */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <label className="flex flex-col flex-1 gap-2">
                <span className="text-sm font-semibold text-gray-300">
                  Name <span className="text-red-400">*</span>
                </span>
                                <input
                                    className="w-full h-12 rounded-lg bg-[#121118] border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600 disabled:opacity-50"
                                    placeholder="John Doe"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    required
                                />
                            </label>

                            <label className="flex flex-col flex-1 gap-2">
                <span className="text-sm font-semibold text-gray-300">
                  Email <span className="text-red-400">*</span>
                </span>
                                <input
                                    className="w-full h-12 rounded-lg bg-[#121118] border border-border-dark text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600 disabled:opacity-50"
                                    placeholder="john@example.com"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                    required
                                />
                            </label>
                        </div>

                        {/* Row 2: Subject */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-gray-300">Subject</span>
                            <div className="relative">
                                <select
                                    className="w-full h-12 rounded-lg bg-[#121118] border border-border-dark text-white px-4 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                >
                                    {subjectOptions.map((option) => (
                                        <option key={option.value} value={option.value} disabled={option.disabled}>
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
              <span className="text-sm font-semibold text-gray-300">
                Message <span className="text-red-400">*</span>
              </span>
                            <textarea
                                className="w-full min-h-[160px] rounded-lg bg-[#121118] border border-border-dark text-white p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600 resize-none disabled:opacity-50"
                                placeholder="Tell me a bit about your project, timeline, and goals..."
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                                required
                            ></textarea>
                        </label>

                        {/* Action */}
                        <div className="pt-2">
                            <button
                                className={`w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-lg shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 ${
                                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">send</span>
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                <span className="text-red-400">*</span> Required fields
                            </p>
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
