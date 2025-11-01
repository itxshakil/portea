import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X, Phone, ChevronRight } from "lucide-react"
import Logo from "../assets/logo.png"
import IndiaFlag from "../assets/ind.png"
import {Link} from "react-router-dom";

const services = [
    { name: "Nursing Care", href: "/services/nursing-care", description: "Professional nursing services at your home" },
    { name: "Doctor Consultation", href: "/services/doctor-consultation", description: "Connect with qualified doctors online or in-person" },
    { name: "Elder Care", href: "/services/elder-care", description: "Specialized care services for elderly family members" },
    { name: "Lab Tests", href: "/services/lab-tests", description: "Convenient diagnostic services at your doorstep" },
    { name: "Medical Equipment", href: "/services/medical-equipment", description: "Quality healthcare equipment for rent or purchase" },
]

// Services dropdown with dark mode
const ServicesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1 font-medium transition-colors duration-200 py-2 px-3 rounded-lg ${
                    isOpen
                        ? "text-teal-600 bg-teal-50 dark:bg-teal-900 dark:text-teal-200"
                        : "text-gray-700 hover:text-teal-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-teal-400 dark:hover:bg-gray-800"
                }`}
                aria-expanded={isOpen}
            >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown panel with adaptive dark mode header */}
            <div
                className={`absolute left-0 mt-2 w-80 rounded-lg border overflow-hidden transform transition-all duration-200 origin-top-left z-50
  ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
  bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-700`}
            >
                <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-700 dark:to-teal-800 text-white">
                    <h3 className="font-medium">Our Healthcare Services</h3>
                    <p className="text-xs text-teal-50 dark:text-teal-200 mt-1">Quality healthcare at your convenience</p>
                </div>

                <div className="py-2">
                    {services.map((service) => (
                        <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 group"
                        >
                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-200 flex items-center justify-center">
                                <span className="text-xs font-medium">{service.name.charAt(0)}</span>
                            </div>
                            <div>
                                <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-teal-600 transition-colors duration-150 flex items-center">
                                    {service.name}
                                    <ChevronRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
                    <Link to="/services" className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center">
                        View all services
                        <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

// Header with dark mode
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const trackEvent = (eventName: string, label: string) => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", eventName, {
                event_category: "Engagement",
                event_label: label,
                value: 1,
            });
        }
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white dark:bg-gray-900 ${
                isScrolled ? "shadow-md" : "border-b border-gray-100 dark:border-gray-700"
            }`}
        >
            <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
                <Link to="/" className="flex items-center mr-6">
                    <img loading="lazy" src={Logo} alt="Nurse Plus Logo" width={150} height={40} className="h-24 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2 flex-grow justify-end">
                    <ServicesDropdown />
                    <Link
                        to="/about"
                        className="font-medium px-3 py-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-teal-400 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/services"
                        className="font-medium px-3 py-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-teal-400 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                        Our Services
                    </Link>

                    <div className="flex items-center ml-6 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center">
                            <a
                                href="tel:+918310853708"
                                onClick={() => trackEvent("call_now_click", "Header Call")}
                                className="flex items-center ml-6 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium text-sm hover:bg-teal-50 dark:hover:bg-teal-700 transition-colors duration-200"
                            >
                                <img loading="lazy" src={IndiaFlag} alt="India Flag" className="h-4 w-auto mr-2" />
                                <Phone className="w-4 h-4 text-teal-600 mr-1" />
                                8310853708
                            </a>
                        </div>
                        {/*<span className="text-sm font-medium text-gray-800 dark:text-gray-200">8310853708</span>*/}
                    </div>

                    <Link
                        to="/book-now"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 ml-4 px-5 py-2 rounded-lg text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center"
                    >
                        Book Now
                    </Link>
                </nav>

                <button
                    className="p-2 md:hidden rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white transition-colors duration-200 relative w-8 h-8"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {/* Menu Icon */}
                    <Menu
                        className={`absolute top-0 left-0 w-6 h-6 transition-transform duration-300 ${
                            isMenuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                        }`}
                    />
                    {/* Close Icon */}
                    <X
                        className={`absolute top-0 left-0 w-6 h-6 transition-transform duration-300 ${
                            isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-0 top-16 z-40 bg-white dark:bg-gray-900 dark:text-white transform transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="h-full flex flex-col">
                    <div className="p-4 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-700 dark:to-teal-800 text-white">
                        <h3 className="font-medium">Healthcare Services</h3>
                        <p className="text-xs text-teal-50 dark:text-teal-200 mt-1">Quality care at your doorstep</p>
                    </div>

                    <nav className="flex-1 overflow-y-auto">
                        <div className="p-4 space-y-3">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    to={service.href}
                                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-700 hover:text-teal-700 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-200 flex items-center justify-center">
                                            <span className="text-xs font-medium">{service.name.charAt(0)}</span>
                                        </div>
                                        <span className="font-medium">{service.name}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-200" />
                                </Link>
                            ))}
                        </div>

                        <div className="px-4 pb-4">
                            <div className="h-px bg-gray-200 dark:bg-gray-700 dark:text-white my-4"></div>
                            <Link
                                to="/about"
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="font-medium">About Us</span>
                                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-200" />
                            </Link>
                            <Link
                                to="/services"
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="font-medium">Our Services</span>
                                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-200" />
                            </Link>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 my-4"></div>

                            <a href="tel:+918310853708"
                               onClick={() => trackEvent("call_now_click", "Header Call")}
                               className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <img loading="lazy" src={IndiaFlag} alt="India Flag" width={24} height={16} className="h-4 w-auto" />
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">8310853708</span>
                                </div>
                                <Phone className="w-5 h-5 text-teal-600" />
                            </a>
                            <a href="tel:+916006393917"
                               onClick={() => trackEvent("call_now_click", "Header Call")}
                               className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <img loading="lazy" src={IndiaFlag} alt="India Flag" width={24} height={16} className="h-4 w-auto" />
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">6006393917</span>
                                </div>
                                <Phone className="w-5 h-5 text-teal-600" />
                            </a>
                        </div>
                    </nav>

                    <div className="sticky bottom-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
                        <Link
                            to="/book-now"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 text-center rounded-lg text-white font-medium shadow-sm hover:shadow block w-full transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
