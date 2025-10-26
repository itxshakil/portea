import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import HealthcarePackages from "./HealthcarePackages";
import Testimonials from "./Testimonials";
import BookAppointment from "./BookAppointment";
import FAQSection from "./FAQ";
import Nurse from "../assets/nurse.png";
import {PhoneIcon} from "lucide-react";
import {usePageMeta} from "../hooks/usePageMeta.ts";

export default function Hero() {
    usePageMeta({
        title: "Nurse Plus – Home Healthcare Services in Bangalore",
        description:
            "Nurse Plus provides trusted home healthcare in Bangalore — doctor consultations, nursing, physiotherapy, elder care, lab tests, and medical equipment at your doorstep.",
        keywords:
            "Home healthcare Bangalore, Nurse Plus, Doctor consultation, Nursing care, Physiotherapy, Elder care, Lab tests, Medical equipment",
        image: "https://yourwebsite.com/logo.png",
        url: "https://yourwebsite.com/",
    });

    return (
        <section className="relative bg-white dark:bg-gray-900 py-12 md:py-20 overflow-hidden transition-colors duration-300">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            Quality Medical Care at the{" "}
                            <span className="text-teal-600 dark:text-teal-300">Comfort of Your Home</span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
                            Nurse Plus brings trusted medical professionals right to your doorstep in Bangalore. <span className="font-semibold text-teal-600 dark:text-teal-400"> Day or night,</span>  Get quality, affordable, and compassionate healthcare—anytime you need it.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            {/* Primary CTA: Call Now */}
                            <a
                                href="tel:8310853708"
                                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                            >
                                <PhoneIcon className="mr-2 h-6 w-6" />
                                Call Now
                            </a>

                            {/* Secondary CTA: Book Now */}
                            <a
                                href="/book-now"
                                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-6 py-3 rounded-lg text-gray-800 dark:text-gray-200 font-medium text-base transition-all duration-200 flex items-center justify-center"
                            >
                                Book Now
                            </a>
                        </div>

                    </div>

                    <div className="relative">
                        <div className="relative z-10">
                            <div className="relative w-full h-[400px] md:h-[450px]">
                                <img
                                    src={Nurse}
                                    alt="Healthcare Professional"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sections below Hero */}
            <Services />
            <WhyChooseUs />
            <HealthcarePackages />
            <Testimonials />

            {/* Appointment Booking Section */}
            <div className="max-w-3xl mx-auto mb-12 my-12">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Book Your Home Healthcare Service
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-pretty">
                        Schedule personalized medical care in the comfort of your home. Fill in your details below and our team will
                        reach out to confirm your appointment shortly.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 dark:text-white rounded-2xl shadow-xl p-8 md:p-10">
                    <BookAppointment />
                </div>
            </div>

            <FAQSection />
        </section>
    );
}
