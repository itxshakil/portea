import React from "react";

const TermsPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-teal-50 py-12 md:py-20">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Terms of Service
                        <span className="block text-teal-600 mt-2">Please Read Carefully Before Using Our Services</span>
                    </h1>
                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                        By using Nurse Plus Medical&apos;s website and services, you agree to comply with our terms and conditions. These terms outline your rights, responsibilities, and the rules for using our platform.
                    </p>
                </div>
            </section>

            {/* Sections */}
            <section className="py-16 bg-white">
                <div className="container px-4 md:px-6 mx-auto space-y-12 max-w-5xl">
                    {/* Use of Services */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600">1. Use of Services</h2>
                        <p className="text-gray-600 mb-3">
                            Our platform is intended for lawful use only. By using our services, you agree not to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Provide false or misleading information.</li>
                            <li>Engage in illegal or unauthorized activities.</li>
                            <li>Attempt to disrupt the functionality of our website or services.</li>
                        </ul>
                    </div>

                    {/* Appointments & Cancellations */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600">2. Appointment Booking & Cancellations</h2>
                        <p className="text-gray-600 mb-3">
                            Appointments confirm your intent to use our healthcare services. Important points:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>All bookings are subject to confirmation by our care team.</li>
                            <li>Cancellations or rescheduling require at least 24 hours’ notice.</li>
                            <li>Repeated no-shows may limit future bookings.</li>
                            <li>We are not responsible for delays caused by provider unavailability or emergencies.</li>
                        </ul>
                    </div>

                    {/* Liability */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600">3. Limitation of Liability</h2>
                        <p className="text-gray-600 mb-3">
                            While we strive for high-quality service, Nurse Plus Medical is not liable for:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Medical outcomes or results.</li>
                            <li>Indirect, incidental, or consequential damages.</li>
                            <li>Errors or omissions caused by third-party partners or providers.</li>
                        </ul>
                    </div>

                    {/* Privacy */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600">4. Privacy & Data Use</h2>
                        <p className="text-gray-600">
                            Your personal and medical information is handled according to our Privacy Policy. By using our services, you consent to data collection, storage, and use.
                        </p>
                    </div>

                    {/* Changes & Governing Law */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-teal-600">5. Changes & Governing Law</h2>
                        <p className="text-gray-600 mb-2">
                            We may update these terms at any time. Continued use indicates acceptance of the updated terms.
                        </p>
                        <p className="text-gray-600">
                            These terms are governed by Indian law. Disputes are subject to Bangalore courts.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-teal-600 text-white">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Experience Quality Healthcare at Home</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Join thousands of satisfied patients in Bangalore who trust Nurse Plus for their home healthcare needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/book-now"
                            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-2 rounded font-medium transition"
                        >
                            Book a Service
                        </a>
                        <a
                            href="tel:+9183108537080"
                            className="border border-white text-white hover:bg-teal-700 px-8 py-2 rounded font-medium transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
