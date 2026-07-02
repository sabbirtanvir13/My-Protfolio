import { useEffect, useState } from "react";
import { FaShoppingCart, FaSun, FaMoon, FaDesktop, FaBars, FaTimes } from "react-icons/fa";
import { IoCodeSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "system"
    );
    const [accentColor, setAccentColor] = useState(
        localStorage.getItem("accentColor") || "blue"
    );
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = () => {
            if (theme === "system") {
                const systemTheme = mediaQuery.matches ? "dark" : "light";
                document.documentElement.setAttribute("data-theme", systemTheme);
                localStorage.removeItem("theme"); // clear local storage so it defaults to system next time
            } else {
                document.documentElement.setAttribute("data-theme", theme);
                localStorage.setItem("theme", theme);
            }
        };

        applyTheme();

        const handleChange = () => {
            if (theme === "system") {
                applyTheme();
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    useEffect(() => {
        document.documentElement.setAttribute("data-accent", accentColor);
        localStorage.setItem("accentColor", accentColor);
    }, [accentColor]);

    // Scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const toggleTheme = () => {
        if (theme === "system") setTheme("light");
        else if (theme === "light") setTheme("dark");
        else setTheme("system");
    };

    const links = (
        <>
            <NavLink 
                className={({ isActive }) => `mr-3 transition-colors duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'text-[var(--accent-color)] font-semibold' : 'hover:text-[var(--accent-color)]'}`} 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Home
            </NavLink>
            <NavLink 
                className={({ isActive }) => `mr-3 transition-colors duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'text-[var(--accent-color)] font-semibold' : 'hover:text-[var(--accent-color)]'}`} 
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                About
            </NavLink>
            <NavLink 
                className={({ isActive }) => `mr-3 transition-colors duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'text-[var(--accent-color)] font-semibold' : 'hover:text-[var(--accent-color)]'}`} 
                to="/experience"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Experience
            </NavLink>
            <NavLink 
                className={({ isActive }) => `mr-3 transition-colors duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'text-[var(--accent-color)] font-semibold' : 'hover:text-[var(--accent-color)]'}`} 
                to="/education"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Education
            </NavLink>
            <NavLink 
                className={({ isActive }) => `mr-3 transition-colors duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'text-[var(--accent-color)] font-semibold' : 'hover:text-[var(--accent-color)]'}`} 
                to="/certifications"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Certifications
            </NavLink>
            <NavLink 
                className={({ isActive }) => `mr-3 transition-colors duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'text-[var(--accent-color)] font-semibold' : 'hover:text-[var(--accent-color)]'}`} 
                to="/project"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Projects
            </NavLink>
            <NavLink 
                className={({ isActive }) => `mr-3 transition-colors duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'text-[var(--accent-color)] font-semibold' : 'hover:text-[var(--accent-color)]'}`} 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Contact
            </NavLink>
        </>
    );

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* Desktop Navbar */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`transition-all duration-300 ${
                    isScrolled 
                        ? 'dark:bg-gray-900/95 bg-white/95 backdrop-blur-lg shadow-lg border-b dark:border-gray-800 border-gray-200' 
                        : 'dark:bg-gray-900/80 bg-white/80 backdrop-blur-md'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold dark:text-white text-gray-900">
                            Tanvir <span className="text-yellow-400">Ahmed</span>
                            <IoCodeSharp className="text-[var(--accent-color)]" />
                        </NavLink>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {links}
                        </div>

                        {/* Right Side Controls */}
                        <div className="flex items-center gap-3">
                            {/* Accent Color Picker */}
                            <div className="relative dropdown dropdown-end">
                                <button 
                                    className="btn btn-ghost btn-circle" 
                                    title="Accent Color"
                                >
                                    <div className={`w-5 h-5 rounded-full ${
                                        accentColor === 'blue' ? 'bg-blue-500' : 
                                        accentColor === 'purple' ? 'bg-purple-500' : 
                                        accentColor === 'emerald' ? 'bg-emerald-500' : 'bg-orange-500'
                                    }`}></div>
                                </button>
                                <ul className="menu menu-sm dropdown-content bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl z-[100] mt-3 w-40 p-2 shadow-xl">
                                    <li>
                                        <button onClick={() => setAccentColor('blue')} className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                            Blue
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setAccentColor('purple')} className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                                            Purple
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setAccentColor('emerald')} className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                                            Emerald
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setAccentColor('orange')} className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                                            Orange
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            {/* Theme Toggle */}
                            <button 
                                onClick={toggleTheme} 
                                className="btn btn-ghost btn-circle" 
                                title={`Current theme: ${theme}`}
                            >
                                {theme === "system" && <FaDesktop size={20} />}
                                {theme === "light" && <FaSun size={20} />}
                                {theme === "dark" && <FaMoon size={20} />}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden btn btn-ghost btn-circle"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="mobile-menu-container fixed top-16 right-0 bottom-0 w-72 dark:bg-gray-900/95 bg-white/95 backdrop-blur-lg border-l dark:border-gray-800 border-gray-200 z-50 overflow-y-auto"
                        >
                            <div className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <NavLink 
                                        to="/"
                                        className={({ isActive }) => `block px-4 py-3 rounded-xl transition-all duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'bg-[var(--accent-color)]/20 text-[var(--accent-color)] font-semibold' : 'dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-[var(--accent-color)]'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink 
                                        to="/about"
                                        className={({ isActive }) => `block px-4 py-3 rounded-xl transition-all duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'bg-[var(--accent-color)]/20 text-[var(--accent-color)] font-semibold' : 'dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-[var(--accent-color)]'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About
                                    </NavLink>
                                    <NavLink 
                                        to="/experience"
                                        className={({ isActive }) => `block px-4 py-3 rounded-xl transition-all duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'bg-[var(--accent-color)]/20 text-[var(--accent-color)] font-semibold' : 'dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-[var(--accent-color)]'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Experience
                                    </NavLink>
                                    <NavLink 
                                        to="/education"
                                        className={({ isActive }) => `block px-4 py-3 rounded-xl transition-all duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'bg-[var(--accent-color)]/20 text-[var(--accent-color)] font-semibold' : 'dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-[var(--accent-color)]'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Education
                                    </NavLink>
                                    <NavLink 
                                        to="/certifications"
                                        className={({ isActive }) => `block px-4 py-3 rounded-xl transition-all duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'bg-[var(--accent-color)]/20 text-[var(--accent-color)] font-semibold' : 'dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-[var(--accent-color)]'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Certifications
                                    </NavLink>
                                    <NavLink 
                                        to="/project"
                                        className={({ isActive }) => `block px-4 py-3 rounded-xl transition-all duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'bg-[var(--accent-color)]/20 text-[var(--accent-color)] font-semibold' : 'dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-[var(--accent-color)]'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Projects
                                    </NavLink>
                                    <NavLink 
                                        to="/contact"
                                        className={({ isActive }) => `block px-4 py-3 rounded-xl transition-all duration-300 dark:text-gray-300 text-gray-700 ${isActive ? 'bg-[var(--accent-color)]/20 text-[var(--accent-color)] font-semibold' : 'dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-[var(--accent-color)]'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </NavLink>
                                </div>

                                {/* Mobile Accent Color Picker */}
                                <div className="pt-4 border-t dark:border-gray-800 border-gray-200">
                                    <p className="text-sm dark:text-gray-400 text-gray-600 mb-3 px-4">Accent Color</p>
                                    <div className="grid grid-cols-4 gap-2 px-4">
                                        <button
                                            onClick={() => setAccentColor('blue')}
                                            className={`w-10 h-10 rounded-full bg-blue-500 hover:scale-110 transition-transform ${accentColor === 'blue' ? 'ring-2 ring-white ring-offset-2 dark:ring-offset-gray-900 ring-offset-white' : ''}`}
                                        />
                                        <button
                                            onClick={() => setAccentColor('purple')}
                                            className={`w-10 h-10 rounded-full bg-purple-500 hover:scale-110 transition-transform ${accentColor === 'purple' ? 'ring-2 ring-white ring-offset-2 dark:ring-offset-gray-900 ring-offset-white' : ''}`}
                                        />
                                        <button
                                            onClick={() => setAccentColor('emerald')}
                                            className={`w-10 h-10 rounded-full bg-emerald-500 hover:scale-110 transition-transform ${accentColor === 'emerald' ? 'ring-2 ring-white ring-offset-2 dark:ring-offset-gray-900 ring-offset-white' : ''}`}
                                        />
                                        <button
                                            onClick={() => setAccentColor('orange')}
                                            className={`w-10 h-10 rounded-full bg-orange-500 hover:scale-110 transition-transform ${accentColor === 'orange' ? 'ring-2 ring-white ring-offset-2 dark:ring-offset-gray-900 ring-offset-white' : ''}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;