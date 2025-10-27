import { MapPin, Phone, Mail } from "lucide-react";
import BookAppointment from "../components/BookAppointment";
import {usePageMeta} from "../hooks/usePageMeta.ts";

export const metadata = {
    title: "Book Home Healthcare Services in Bangalore | Nurse Plus",
    description:
        "Easily schedule doctor consultations, nursing care, physiotherapy, elder care, lab tests, or equipment delivery in Bangalore. Book your home healthcare appointment now.",
};

export default function BookNowPage() {
    usePageMeta({
        title: "Book Home Healthcare Service – Nurse Plus Bangalore",
        description:
            "Schedule your home healthcare service with Nurse Plus. Choose doctor consultations, nursing, physiotherapy, elder care, and lab tests at your convenience.",
        keywords:
            "Book healthcare Bangalore, Nurse Plus appointment, Doctor consultation, Nursing, Physiotherapy, Elder care, Lab tests",
        image: "https://nurseplus.shakiltech.com/book-now-banner.png",
        url: "https://nurseplus.shakiltech.com/book-now",
    });

    return (
        <section className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Book Your Home Healthcare Service
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                        Schedule personalized medical care in the comfort of your home. Fill in your details below and our team will
                        reach out to confirm your appointment shortly.
                    </p>
                </div>

                {/* Appointment Form */}
                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 dark:text-white rounded-2xl shadow-xl p-8 md:p-10">
                    <BookAppointment />
                </div>

                {/* Contact Section */}
                <div className="max-w-4xl mx-auto mt-16 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-10 border border-teal-100 dark:border-gray-700">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-6">
                        Prefer to Contact Us Directly?
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
                        Our team is available every day from <span className="font-medium text-teal-600 dark:text-teal-400">8 AM to 8 PM</span>.
                        Reach out through any of the following:
                    </p>

                    <ul className="space-y-6 max-w-2xl mx-auto">
                        <li>
                            <a
                                href="https://maps.app.goo.gl/2xYVLBsvsNDsSBPX6?utm_source=website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 group"
                            >
                                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                                    <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                                </div>
                                <span className="text-gray-600 dark:text-gray-300 group-hover:text-teal-500 transition-colors">
                                    1st Floor, 812, Opposite Mahadeshwara Temple, 13th Cross, 16th Main Rd,<br />
                                    BTM 2nd Stage, Bengaluru, Karnataka 560076
                                </span>
                            </a>
                        </li>

                        <li className="flex items-center gap-4">
                            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                                <Phone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                            </div>
                            <a
                                href="tel:+918310853708"
                                className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors font-medium"
                            >
                                +91 83108 53708
                            </a>
                        </li>

                        <li className="flex items-center gap-4">
                            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                                <Phone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                            </div>
                            <a
                                href="tel:+916006393917"
                                className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors font-medium"
                            >
                                +91 60063 93917
                            </a>
                        </li>

                        <li className="flex items-center gap-4">
                            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                                <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                            </div>
                            <a
                                href="mailto:info@nurseplus.com"
                                className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors font-medium"
                            >
                                info@nurseplus.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
