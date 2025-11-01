import React from "react";
import {usePageMeta} from "../hooks/usePageMeta.ts";

const TermsPage: React.FC = () => {
    usePageMeta({
        title: "Terms and Conditions – Nurse Plus Bangalore",
        description:
            "Read the terms and conditions of using Nurse Plus home healthcare services in Bangalore, including appointments, payments, and service policies.",
        keywords:
            "Nurse Plus terms, Home healthcare Bangalore, Terms and conditions, Service policies, Appointments, Payments",
        url: "https://nurseplus.in/terms-conditions",
    });

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
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="bg-teal-50 dark:bg-gray-800 py-12 md:py-20">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Terms of Service
                        <span className="block text-teal-600 dark:text-teal-400 mt-2">
                            Please Read Carefully Before Using Our Services
                        </span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                        By using Nurse Plus Medical&apos;s website and services, you agree to comply with our terms and conditions. These terms outline your rights, responsibilities, and the rules for using our platform.
                    </p>
                </div>
            </section>

            {/* Sections */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container px-4 md:px-6 mx-auto space-y-12 max-w-5xl">
                    {/* Use of Services */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">1. Use of Services</h2>
                        <p className="mb-3">
                            Our platform is intended for lawful use only. By using our services, you agree not to:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Provide false or misleading information.</li>
                            <li>Engage in illegal or unauthorized activities.</li>
                            <li>Attempt to disrupt the functionality of our website or services.</li>
                        </ul>
                    </div>

                    {/* Appointments & Cancellations */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">2. Appointment Booking & Cancellations</h2>
                        <p className="mb-3">
                            Appointments confirm your intent to use our healthcare services. Important points:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>All bookings are subject to confirmation by our care team.</li>
                            <li>Cancellations or rescheduling require at least 24 hours’ notice.</li>
                            <li>Repeated no-shows may limit future bookings.</li>
                            <li>We are not responsible for delays caused by provider unavailability or emergencies.</li>
                        </ul>
                    </div>

                    {/* Liability */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">3. Limitation of Liability</h2>
                        <p className="mb-3">
                            While we strive for high-quality service, Nurse Plus Medical is not liable for:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Medical outcomes or results.</li>
                            <li>Indirect, incidental, or consequential damages.</li>
                            <li>Errors or omissions caused by third-party partners or providers.</li>
                        </ul>
                    </div>

                    {/* Privacy */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">4. Privacy & Data Use</h2>
                        <p>
                            Your personal and medical information is handled according to our Privacy Policy. By using our services, you consent to data collection, storage, and use.
                        </p>
                    </div>

                    {/* Changes & Governing Law */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">5. Changes & Governing Law</h2>
                        <p className="mb-2">
                            We may update these terms at any time. Continued use indicates acceptance of the updated terms.
                        </p>
                        <p>
                            These terms are governed by Indian law. Disputes are subject to Bangalore courts.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-teal-600 dark:bg-teal-700 text-white">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Experience Quality Healthcare at Home</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Join thousands of satisfied patients in Bangalore who trust Nurse Plus for their home healthcare needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/book-now"
                            className="bg-white text-teal-600 hover:bg-gray-100 dark:hover:bg-gray-200 px-8 py-2 rounded font-medium transition"
                        >
                            Book a Service
                        </a>
                        <a
                            onClick={() => trackEvent("call_now_click", "Term Page 1")}
                            href="tel:+9183108537080"
                            className="border border-white text-white hover:bg-teal-700 dark:hover:bg-teal-800 px-8 py-2 rounded font-medium transition"
                        >
                            Contact Us
                        </a>
                        <a
                            onClick={() => trackEvent("whatsapp_click", "Term Page 2")}
                            href="https://wa.me/9183108537080"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-2 rounded font-medium transition"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
