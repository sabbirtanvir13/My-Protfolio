import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaSpinner, FaTimes } from "react-icons/fa";
import Sabbir from "../assets/Sabbir.png";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      showNotification("error", "Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      showNotification("error", "Please enter your email");
      return;
    }

    if (!validateEmail(formData.email)) {
      showNotification("error", "Please enter a valid email address");
      return;
    }

    if (!formData.message.trim()) {
      showNotification("error", "Please enter your message");
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (typeof emailjs.send !== 'function') {
        throw new Error("EmailJS not properly configured");
      }

      // Replace with your EmailJS service ID, template ID, and public key
      // Get these from https://www.emailjs.com/
      const SERVICE_ID = "service_orwao59";
      const TEMPLATE_ID = "template_vbgkjit";
      const PUBLIC_KEY = "Ll87wxrCSl5X2Yg9J";

      // Demo mode - simulate successful submission for testing
      if (SERVICE_ID === "YOUR_SERVICE_ID" || TEMPLATE_ID === "YOUR_TEMPLATE_ID" || PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
        console.log("Demo mode: Simulating email send");
        console.log("Form data:", formData);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        showNotification("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      }

      // Actual EmailJS send
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
          to_email: "sabbirtanvirahmed18@gmail.com"
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        showNotification("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        showNotification("error", "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Email Error:", error);
      showNotification("error", "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showNotification = (type, customMessage = null) => {
    const messages = {
      success: {
        title: "Thank you!",
        message: "Your message has been sent successfully. I'll get back to you as soon as possible.",
        icon: <FaCheckCircle className="text-green-400 text-2xl" />
      },
      error: {
        title: "Failed to send message.",
        message: customMessage || "Please try again later.",
        icon: <FaTimesCircle className="text-red-400 text-2xl" />
      }
    };

    setNotification({ type, ...messages[type] });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="text-yellow-400">📬 Contact Me</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Profile Image & Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <div className="relative group">
              <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-[var(--accent-color)] shadow-2xl">
                <img
                  src={Sabbir}
                  alt="Tanvir Ahmed"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-3">
                <a
                  href="mailto:sabbirtanvirahmed18@gmail.com"
                  className="flex items-center gap-3 p-3 bg-gray-900/60 border border-gray-800 hover:border-[var(--accent-color)]/50 rounded-xl transition-all duration-300 group"
                >
                  <FaEnvelope className="text-[var(--accent-color)] text-lg" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">sabbirtanvirahmed18@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+8801777829308"
                  className="flex items-center gap-3 p-3 bg-gray-900/60 border border-gray-800 hover:border-[var(--accent-color)]/50 rounded-xl transition-all duration-300 group"
                >
                  <FaPhone className="text-[var(--accent-color)] text-lg" />
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">+880 1777-829308</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-gray-900/60 border border-gray-800 rounded-xl">
                  <FaMapMarkerAlt className="text-[var(--accent-color)] text-lg" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm text-gray-300">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href="https://github.com/sabbirtanvir13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-900/60 border border-gray-800 hover:border-[var(--accent-color)]/50 rounded-xl transition-all duration-300 group"
                  >
                    <FaGithub className="text-gray-400 group-hover:text-[var(--accent-color)] text-lg transition-colors" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tanvir-ahmed-sabbir-413a68389/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-900/60 border border-gray-800 hover:border-[var(--accent-color)]/50 rounded-xl transition-all duration-300 group"
                  >
                    <FaLinkedin className="text-gray-400 group-hover:text-[var(--accent-color)] text-lg transition-colors" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-[var(--accent-color)]/30 rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-2">
                Let's build something <span className="text-[var(--accent-color)]">great</span> together.
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (optional)"
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-color)]/80 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--accent-color)]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm"
          >
            <div
              className={`bg-gray-900/95 backdrop-blur-md border ${
                notification.type === "success" ? "border-green-500/50" : "border-red-500/50"
              } rounded-2xl p-5 shadow-2xl`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{notification.icon}</div>
                <div className="flex-1">
                  <h4
                    className={`font-bold text-base mb-1 ${
                      notification.type === "success" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {notification.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{notification.message}</p>
                </div>
                <button
                  onClick={() => setNotification(null)}
                  className="flex-shrink-0 text-gray-500 hover:text-white transition-colors"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
