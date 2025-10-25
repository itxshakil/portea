import React from "react";
import About from "../assets/about.png";
import Journey from "../assets/Journey.png";
import SurenderImage from "../assets/surender.avif";

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Hero Section */}
            <section className="bg-teal-50 dark:bg-gray-800 py-12 md:py-20 transition-colors duration-300">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                About Nurse Plus Medical
                                <span className="block text-teal-600 mt-2">
                  Bangalore&apos;s Trusted Home Healthcare Provider
                </span>
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">
                                Since our inception, Nurse Plus has been committed to transforming healthcare delivery in India by
                                providing high-quality medical services in the comfort of patients&apos; homes.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative h-[300px] md:h-[700px] w-full rounded-lg overflow-hidden">
                                <img src={About} alt="Nurse Plus Medical Team" className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Story</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Founded with a vision to revolutionize healthcare delivery in India, Nurse Plus has grown to become the
                            leading provider of home healthcare services in Bangalore and across the country.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                            <img src={Journey} alt="Nurse Plus's Journey" className="object-cover w-full h-full" />
                        </div>
                        <div className="space-y-6 text-gray-600 dark:text-gray-300">
                            <p>
                                Nurse Plus was established in 2013 with the goal of addressing the growing need for quality healthcare
                                services outside of hospital settings...
                            </p>
                            <p>
                                Starting with a small team in Bangalore, we have expanded our services across India, bringing
                                professional healthcare to thousands of homes...
                            </p>
                            <p>
                                Today, Nurse Plus is a trusted name in home healthcare, known for our professional team, comprehensive
                                services, and dedication to quality care...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Values */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission & Values</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Guided by our commitment to excellence and compassion, we strive to make quality healthcare accessible to
                            all in the comfort of their homes.
                        </p>
                    </div>
                    {/* Mission & Values Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-teal-600">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                To transform healthcare delivery by providing high-quality, patient-centered medical services in the
                                comfort of patients' homes...
                            </p>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                {[
                                    "Bringing healthcare to your doorstep in Bangalore",
                                    "Making quality care accessible to all",
                                    "Improving health outcomes through personalized care",
                                ].map((text, index) => (
                                    <li className="flex items-start gap-2" key={index}>
                                        <div className="h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="h-2 w-2 rounded-full bg-teal-600"></div>
                                        </div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-teal-600">Our Values</h3>
                            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                                {[
                                    { title: "Patient-Centered Care", desc: "We put patients first..." },
                                    { title: "Excellence", desc: "We strive for excellence..." },
                                    { title: "Compassion", desc: "We approach every patient with empathy..." },
                                    { title: "Innovation", desc: "We continuously seek innovative solutions..." },
                                ].map((val, idx) => (
                                    <li className="flex items-start gap-3" key={idx}>
                                        <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-orange-600 dark:text-orange-300 font-semibold">{idx + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{val.title}</h4>
                                            <p>{val.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Leadership Team</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Meet the experienced professionals leading Nurse Plus's mission to transform healthcare delivery in Bangalore
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((member) => (
                            <div key={member} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                                <div className="relative h-64 w-full">
                                    <img src={SurenderImage} alt={`Team Member ${member}`} className="object-cover w-full h-full" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Dr. Anil Kumar</h3>
                                    <p className="text-teal-600 mb-4">Chief Medical Officer</p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        With over 15 years of experience in healthcare management, Dr. Kumar leads our medical team in
                                        Bangalore...
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-teal-600 text-white transition-colors duration-300">
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
                        <a
                            href="https://wa.me/9183108537080"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded font-medium transition"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
