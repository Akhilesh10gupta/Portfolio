import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formState, setFormState] = useState({
        from_name: "",
        from_email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // You can get them from https://dashboard.emailjs.com/admin
        const SERVICE_ID = 'service_4kj3xea';
        const TEMPLATE_ID = 'template_b3gjbpl';
        const PUBLIC_KEY = '-xx996Vg73bRrJfBi';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setIsSubmitting(false);
                setIsSent(true);
                setFormState({ from_name: "", from_email: "", message: "" });

                // Reset success message after 5 seconds
                setTimeout(() => setIsSent(false), 5000);
            }, (error) => {
                console.log(error.text);
                setIsSubmitting(false);
                alert("TRANSMISSION FAILED: " + error.text);
            });
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section
            id="contact"
            className="relative py-24 bg-[var(--bg-dark)] overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-24 relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="px-4 py-1 border border-[var(--primary)] text-[var(--primary)] font-mono text-xs mb-4 bg-[var(--primary)]/5 backdrop-blur-sm">
                 /// INCOMING TRANSMISSION ///
                    </div>
                    <h2 className="text-4xl md:text-6xl font-gaming font-bold text-white text-center">
                        COMMS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">UPLINK</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Left Panel: Contact Info */}
                    <motion.div
                        className="lg:w-1/3 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="p-1 border-l-2 border-[var(--primary)] pl-6">
                            <h3 className="text-2xl font-gaming text-white mb-2">OPERATIONAL BASE</h3>
                            <p className="text-gray-400 font-mono text-sm">
                                <FaMapMarkerAlt className="inline mr-2 text-[var(--primary)]" />
                                Lucknow, India (Sector 7)
                            </p>
                        </div>

                        <div className="p-1 border-l-2 border-[var(--secondary)] pl-6">
                            <h3 className="text-2xl font-gaming text-white mb-2">DIRECT LINE</h3>
                            <p className="text-gray-400 font-mono text-sm">
                                <FaEnvelope className="inline mr-2 text-[var(--secondary)]" />
                                gakhilesh946@gmail.com
                            </p>
                        </div>

                        <div className="p-6 bg-[rgba(20,20,35,0.6)] border border-gray-700 rounded-xl mt-8">
                            <p className="text-[var(--primary)] font-mono text-xs mb-2">STATUS:</p>
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-white font-gaming tracking-wider">OPEN FOR FREELANCE</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel: Form */}
                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form ref={form} onSubmit={handleSubmit} className="relative p-8 bg-[rgba(5,5,10,0.8)] border border-gray-800 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--primary)] rounded-tl-xl"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--primary)] rounded-br-xl"></div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <FaUser className="absolute top-4 left-4 text-gray-500 group-focus-within:text-[var(--primary)] transition-colors" />
                                        <input
                                            type="text"
                                            name="from_name" // Standard EmailJS name
                                            value={formState.from_name}
                                            onChange={handleChange}
                                            placeholder="AGENT IDENTITY / NAME"
                                            required
                                            className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white font-mono placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] transition-all"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <FaEnvelope className="absolute top-4 left-4 text-gray-500 group-focus-within:text-[var(--primary)] transition-colors" />
                                        <input
                                            type="email"
                                            name="from_email" // Standard EmailJS email
                                            value={formState.from_email}
                                            onChange={handleChange}
                                            placeholder="ROUTING ADDRESS / EMAIL"
                                            required
                                            className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white font-mono placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="ENCRYPTED DATA PACKET / MESSAGE..."
                                        required
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 px-4 text-white font-mono placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSent}
                                    className={`w-full py-4 rounded-lg font-gaming font-bold tracking-widest text-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group ${isSent
                                        ? "bg-green-500/20 text-green-400 border border-green-500"
                                        : "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-black"
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">TRANSMITTING...</span>
                                    ) : isSent ? (
                                        <span>TRANSMISSION COMPLETE</span>
                                    ) : (
                                        <>
                                            SEND TRANSMISSION <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
