import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import avatar from "../assets/avatar.avif"; // Placeholder for testimonial images

type Testimonial = {
    id: number;
    name: string;
    location: string;
    testimonial: string;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Santosh Narayana",
        location: "Indiranagar, Bangalore",
        testimonial:
            "Firstly Thank you, It was an emergency situation, and the technicians promptly arrived between 11–12 AM with a very positive attitude. They carried out the work with great professionalism, which left me completely satisfied and relieved. I truly appreciate their timely support during such a critical moment. Many thanks to the team—I would gladly recommend them for any emergency needs",
        image: avatar,
    },
    {
        id: 2,
        name: "Basavraj K",
        location: "Koramangala, Bangalore",
        testimonial:
            "Good service from the agency.\n" +
            "Nurse will arrive on time.\n" +
            "Very professional, polite and skilled.\n" +
            "Charges very less as compared to others\n" +
            "We have taken injection service for my mother 3 times a day. I can't thank them enough for their great service.\n" +
            "Anyone looking for home nursing services should definitely call them.\n" +
            "Recommended to everyone.",
        image: avatar,
    },
    {
        id: 3,
        name: "Madesh C",
        location: "Whitefield, Bangalore",
        testimonial:
            "Excellent service, arranged doctor at home consultation in just 30 minutes.\n" +
            "Got drips also done from them for my father.\n" +
            "Very polite and professional staff.\n" +
            "Highly recommended.\n" +
            "Thankyou for the service",
        image: avatar,
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoplay]);

    return (
        <section className="py-16 bg-gradient-to-b from-white to-teal-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container px-4 mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                        What Our Patients Say
                    </h2>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        Hear from our satisfied patients in Bangalore about their experience with Nurse Plus's home healthcare services
                    </p>
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <div
                        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 overflow-hidden border-l-4 border-teal-500 transition-all duration-300"
                        onMouseEnter={() => setAutoplay(false)}
                        onMouseLeave={() => setAutoplay(true)}
                    >
                        <Quote className="h-10 w-10 text-teal-500 opacity-20 mb-6" />
                        <p className="text-gray-700 dark:text-gray-200 text-lg italic mb-8">
                            {testimonials[activeIndex].testimonial}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-teal-500">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-100">{testimonials[activeIndex].name}</h4>
                                <p className="text-sm text-teal-600">{testimonials[activeIndex].location}</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6 gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setAutoplay(false);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                        activeIndex === index ? "bg-teal-500" : "bg-gray-300 dark:bg-gray-600"
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border-l-4 border-teal-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <Quote className="h-10 w-10 text-teal-500 opacity-20 mb-6" />
                            <p className="text-gray-700 dark:text-gray-200 text-lg italic mb-8">
                                "{testimonial.testimonial}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-teal-500">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{testimonial.name}</h4>
                                    <p className="text-sm text-teal-600">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
