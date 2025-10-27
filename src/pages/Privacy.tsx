import React from "react";
import {usePageMeta} from "../hooks/usePageMeta.ts";

const PrivacyPage: React.FC = () => {
    usePageMeta({
        title: "Privacy Policy – Nurse Plus Bangalore",
        description:
            "Understand how Nurse Plus protects your privacy and personal information while using our home healthcare services in Bangalore.",
        keywords:
            "Nurse Plus privacy policy, Home healthcare Bangalore, Data protection, Personal information, Security",
        image: "https://nurseplus.shakiltech.com/privacy-banner.png",
        url: "https://nurseplus.shakiltech.com/privacy-policy",
    });

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="bg-teal-50 dark:bg-gray-800 py-12 md:py-20">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Privacy Policy
                        <span className="block text-teal-600 dark:text-teal-400 mt-2">Your Data & Confidentiality Matters to Us</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                        At Nurse Plus Medical, protecting your personal and medical information is our top priority. This policy explains how we collect, use, store, and safeguard your data.
                    </p>
                </div>
            </section>

            {/* Sections */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container px-4 md:px-6 mx-auto max-w-5xl space-y-12">
                    {/* Information We Collect */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">1. Information We Collect</h2>
                        <p className="mb-3">
                            To provide personalized home healthcare services, we collect information from you in the following ways:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Personal information: name, contact number, email, and address.</li>
                            <li>Medical information: health history, current conditions, medications, and treatment preferences.</li>
                            <li>Service usage: appointments, consultation records, and service feedback.</li>
                            <li>Technical information: IP address, browser type, device data, and interaction with our website.</li>
                        </ul>
                    </div>

                    {/* How We Use Data */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">2. How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Provide and manage home healthcare services efficiently.</li>
                            <li>Schedule appointments and send reminders.</li>
                            <li>Improve our services and offer personalized care solutions.</li>
                            <li>Communicate updates, promotions, and educational content.</li>
                            <li>Ensure security and prevent unauthorized use of our platform.</li>
                        </ul>
                    </div>

                    {/* Data Sharing */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">3. Data Sharing & Disclosure</h2>
                        <p className="mb-3">
                            Nurse Plus Medical respects your privacy and does not sell or rent your personal information. We may share your data only in the following situations:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>With healthcare professionals involved in your care (doctors, nurses, therapists).</li>
                            <li>For legal compliance: if required by law or government authorities.</li>
                            <li>With trusted third-party service providers who assist in delivering our services (IT, payment, or analytics providers).</li>
                        </ul>
                    </div>

                    {/* Data Security */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">4. Data Security</h2>
                        <p className="mb-3">
                            We implement strict technical, administrative, and physical safeguards to protect your data. This includes:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Encryption of sensitive data in transit and at rest.</li>
                            <li>Access controls for staff and authorized personnel only.</li>
                            <li>Regular security audits to identify and mitigate risks.</li>
                        </ul>
                    </div>

                    {/* User Rights */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">5. Your Rights</h2>
                        <p className="mb-3">
                            You have full control over your personal and medical information. You can:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Request access to your data.</li>
                            <li>Update or correct inaccurate information.</li>
                            <li>Request deletion of your data where legally permitted.</li>
                            <li>Opt out of marketing communications at any time.</li>
                        </ul>
                    </div>

                    {/* Policy Changes */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">6. Policy Updates</h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes in services, regulations, or data practices. Continued use of our services indicates acceptance of the updated policy.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-teal-600 dark:bg-teal-700 text-white">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Trust Nurse Plus With Your Care & Data</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Join thousands of satisfied patients in Bangalore who rely on Nurse Plus for safe, professional, and confidential home healthcare services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/book-now"
                            className="bg-white text-teal-600 hover:bg-gray-100 dark:hover:bg-gray-200 px-8 py-2 rounded font-medium transition"
                        >
                            Book a Service
                        </a>
                        <a
                            href="tel:+9183108537080"
                            className="border border-white text-white hover:bg-teal-700 dark:hover:bg-teal-800 px-8 py-2 rounded font-medium transition"
                        >
                            Contact Us
                        </a>
                        <a
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

export default PrivacyPage;
