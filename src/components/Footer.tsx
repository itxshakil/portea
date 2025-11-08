import {Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart} from "lucide-react"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.png" // Adjust the path as necessary

export default function Footer() {
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
        <footer className="bg-gray-900 text-gray-200 dark:bg-gray-800 dark:text-gray-200">
            <div className="container px-4 md:px-6 mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block">
                            <img loading="lazy" src={Logo} alt="Nurse Plus Logo" width={150} height={40} className="h-auto" />
                        </Link>
                        <p className="text-gray-400 dark:text-gray-300">
                            Nurse Plus Medical delivers quality healthcare services at the comfort of your home in Bangalore.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#"
                               onClick={() => trackEvent("social_click", "Facebook")}
                               className="text-gray-400 hover:text-white dark:hover:text-teal-400" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#"
                               onClick={() => trackEvent("social_click", "Twitter")}
                               className="text-gray-400 hover:text-white dark:hover:text-teal-400" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#"
                               onClick={() => trackEvent("social_click", "Instagram")}
                               className="text-gray-400 hover:text-white dark:hover:text-teal-400" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#"
                               onClick={() => trackEvent("social_click", "LinkedIn")}
                               className="text-gray-400 hover:text-white dark:hover:text-teal-400" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100 dark:text-gray-200">Our Services</h3>
                        <ul className="space-y-2">
                            {[
                                ["Nursing Care", "/services/nursing-care"],
                                ["Doctor Consultation", "/services/doctor-consultation"],
                                ["Elder Care", "/services/elder-care"],
                                ["Lab Tests", "/services/lab-tests"],
                                ["Medical Equipment", "/services/medical-equipment"],
                            ].map(([name, href], idx) => (
                                <li key={idx}>
                                    <Link
                                        to={href}
                                        className="text-gray-400 hover:text-white dark:hover:text-teal-400 transition-colors"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100 dark:text-gray-200">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                ["About Us", "/about"],
                                ["Services", "/services"],
                                ["Privacy Policy", "/privacy-policy"],
                                ["Terms & Conditions", "/terms-conditions"],
                            ].map(([name, href], idx) => (
                                <li key={idx}>
                                    <Link
                                        to={href}
                                        className="text-gray-400 hover:text-white dark:hover:text-teal-400 transition-colors"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100 dark:text-gray-200">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://maps.app.goo.gl/2xYVLBsvsNDsSBPX6?utm_source=website"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3"
                                    onClick={() => trackEvent("location_click", "Google Maps")}
                                >
                                    <MapPin className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-400 dark:text-gray-300">
                                      1st Floor, 812, Opposite Mahadeshwara Temple, 13th Cross, 16th Main Rd,
                                      BTM 2nd Stage, Bengaluru, Karnataka 560076
                                    </span>
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-teal-500 flex-shrink-0" />
                                <a
                                    onClick={() => trackEvent("call_now_click", "Footer - Call Nurse 1")}
                                    href="tel:+918310853708"
                                    className="text-gray-400 dark:text-gray-300 hover:text-teal-400 transition-colors"
                                >
                                    +91 83108 53708
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-teal-500 flex-shrink-0" />
                                <a
                                    onClick={() => trackEvent("call_now_click", "Footer - Call Nurse 2")}
                                    href="tel:+916006393917"
                                    className="text-gray-400 dark:text-gray-300 hover:text-teal-400 transition-colors"
                                >
                                    +91 60063 93917
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-teal-500 flex-shrink-0" />
                                <a
                                    href="mailto:chandan.cm1010@gmail.com"
                                    onClick={() => trackEvent("email_click", "Footer - chandan.cm1010@gmail.com")}
                                    className="text-gray-400 dark:text-gray-300 hover:text-teal-400 transition-colors"
                                >
                                    chandan.cm1010@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400 dark:text-gray-300 text-sm space-y-2">
                    <p>&copy; {new Date().getFullYear()} Nurse Plus Medical. All rights reserved.</p>

                    <p className="flex items-center justify-center gap-1 invisible">
                        Designed and Developed with{" "}
                        <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by{" "}
                        <a href="https://nargis-khatun.vercel.app/" className="text-teal-400 font-medium">Nargis Khatun</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
