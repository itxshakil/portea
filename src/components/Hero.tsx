import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import HealthcarePackages from "./HealthcarePackages";
import Testimonials from "./Testimonials";
import BookAppointment from "./BookAppointment";
import HairCareSection from "./HairCareSection";
import FAQSection from "./FAQ";
import Nurse from "../assets/nurse.png";
import { PhoneIcon } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta.ts";

export default function Hero() {
    usePageMeta({
        title: "Injections, Dressing & IV at Home in Bangalore | Nursing Care by Nurse Plus",
        description:
            "Book certified nurses for injection, wound dressing, IV drip, and post-surgery care at home in Bangalore. Nurse Plus provides 24x7 professional and affordable home nursing services you can trust.",
        keywords:
            "nurse for injection at home, nursing care Bangalore, home nurse Bangalore, wound dressing at home, IV drip at home, home healthcare Bangalore, Nurse Plus",
        url: "https://nurseplus.in/",
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
        <section className="relative bg-white dark:bg-gray-900 py-12 md:py-20 overflow-hidden transition-colors duration-300">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Hero Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug">
                            <span className="text-teal-600 dark:text-teal-300">
                                Nursing Care at Home
                            </span>{" "}
                            in Bangalore
                        </h1>

                        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md leading-relaxed">
                            Get <span className="font-semibold text-teal-600 dark:text-teal-400">
                                professional nurses
                            </span>{" "}
                            at your doorstep for injections, wound dressing, IV drips, post-surgery care, and long-term patient support.
                            Trusted by hundreds of families across Bangalore for safe, compassionate, and affordable home nursing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="tel:8310853708"
                                onClick={() => trackEvent("call_now_click", "Hero - Call Nurse Now")}
                                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                            >
                                <PhoneIcon className="mr-2 h-6 w-6" />
                                Call Nurse Now
                            </a>

                            <a
                                href="/book-now"
                                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-6 py-3 rounded-lg text-gray-800 dark:text-gray-200 font-medium text-base transition-all duration-200 flex items-center justify-center"
                            >
                                Book a Home Visit
                            </a>
                        </div>

                        <div className="pt-3 text-sm text-gray-500 dark:text-gray-400">
                            ⏱️ Nurses available within 30 minutes across Bangalore. <span className="text-teal-600 dark:text-teal-400">Day or Night</span>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src={Nurse}
                            alt="Home Nurse providing care in Bangalore"
                            className="object-contain w-full h-[400px] md:h-[450px]"
                        />
                    </div>
                </div>
            </div>

            {/* 💉 Section 1: Our Core Service */}
            <section className="relative py-16 bg-gradient-to-b from-teal-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      <span className="relative inline-block">
        <span className="relative z-10">💉 Our Core Service</span>
        <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-teal-200 dark:bg-teal-700 opacity-40 rounded"></span>
      </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our qualified and compassionate nurses provide personalized medical support at your convenience.
                        From injections and wound dressing to post-surgery care and elderly assistance —
                        we bring <span className="font-semibold text-teal-600 dark:text-teal-400">hospital-quality care</span> to your home in Bangalore.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                icon: "💉",
                                title: "Injection & IV Drip at Home",
                                desc: "Get safe and hygienic injections and IV drips administered by certified nurses at your doorstep."
                            },
                            {
                                icon: "🩹",
                                title: "Wound Dressing & Post-Surgery Care",
                                desc: "Professional wound dressing and post-surgery care to prevent infections and promote recovery."
                            },
                            {
                                icon: "🧓",
                                title: "Elderly & Bedridden Patient Care",
                                desc: "Compassionate support and medical care for elderly or bedridden family members."
                            },
                            {
                                icon: "💧",
                                title: "Catheter & Ryle’s Tube Insertion",
                                desc: "Trained nurses handle catheterization, Ryle’s tube care, and other delicate procedures safely at home."
                            },
                            {
                                icon: "🕒",
                                title: "12/24-Hour Full-Time Nursing Support",
                                desc: "Round-the-clock assistance by professional nurses for patients requiring constant supervision."
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-teal-500 dark:hover:border-teal-600"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a
                        href="tel:8310853708"
                        onClick={() => trackEvent("call_now_click", "Core Service - Call Nurse Now")}
                        className="inline-flex items-center mt-12 px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold text-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <PhoneIcon className="mr-2 h-6 w-6" />
                        Call Nurse Now
                    </a>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 dark:bg-teal-900 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200 dark:bg-teal-800 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
            </section>


            <Services />
            <WhyChooseUs />
            <HealthcarePackages />
            <HairCareSection />
            <Testimonials />

            {/* Appointment Booking Section */}
            <div className="max-w-3xl mx-auto mb-12 my-12">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Book a Home Nurse in Bangalore
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                        Fill in your details below and our medical team will arrange a qualified nurse for injection, dressing, or patient care at your home within 30 minutes.
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
