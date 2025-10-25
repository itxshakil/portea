import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What areas in Bangalore do you serve?",
        answer:
            "We provide home healthcare services across all major areas in Bangalore including Indiranagar, Koramangala, Whitefield, Jayanagar, JP Nagar, Marathahalli, Electronic City, Bannerghatta Road, Hebbal, and Yelahanka.",
    },
    {
        question: "How do I book a home healthcare service?",
        answer:
            "You can book our services by filling out the appointment form on our website, calling our customer care number at +91-8310853708, or using our mobile app. Our team will contact you to confirm the appointment details.",
    },
    {
        question: "What qualifications do your healthcare professionals have?",
        answer:
            "All our healthcare professionals are fully qualified and experienced in their respective fields. Our doctors, nurses, and therapists are licensed practitioners with relevant certifications and undergo regular training to stay updated with the latest medical practices.",
    },
    {
        question: "Do you provide emergency services?",
        answer:
            "Yes, we provide emergency healthcare services in Bangalore. You can contact our 24/7 helpline for immediate assistance. However, for life-threatening emergencies, we recommend calling an ambulance service first.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept various payment methods including credit/debit cards, net banking, UPI, and cash. We also work with major health insurance providers for cashless services where applicable.",
    },
    {
        question: "Can I reschedule or cancel my appointment?",
        answer:
            "Yes, you can reschedule or cancel your appointment by contacting our customer care at least 4 hours before the scheduled time. Cancellations made less than 4 hours before the appointment may incur a nominal fee.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        faqs.forEach((_, i) => {
            const el = contentRefs.current[i];
            if (!el) return;
            el.style.maxHeight =
                openIndex === i ? `${el.scrollHeight}px` : "0px";
        });
    }, [openIndex]);

    return (
        <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white dark:from-gray-900/50 dark:to-gray-800 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Answers to common questions about our home healthcare services in Bangalore
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group border rounded-2xl transition-all duration-300 ${
                                openIndex === index
                                    ? "shadow-md border-teal-200 bg-teal-50/60 dark:bg-gray-700/50 dark:border-teal-600"
                                    : "border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-500"
                            }`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center px-6 py-5 text-left"
                            >
                                <span className="text-gray-900 dark:text-gray-100 text-lg font-medium pr-6 group-hover:text-teal-600 transition-colors duration-200">
                                    {faq.question}
                                </span>
                                <div
                                    className={`text-teal-500 dark:text-teal-400 transform transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : "rotate-0"
                                    }`}
                                >
                                    <ChevronDown size={22} />
                                </div>
                            </button>

                            {/* Smooth open/close animation */}
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
                            >
                                <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative background gradient blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 dark:bg-teal-800 rounded-full blur-3xl opacity-40 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200 dark:bg-teal-700 rounded-full blur-3xl opacity-30 -z-10"></div>
        </section>
    );
}
