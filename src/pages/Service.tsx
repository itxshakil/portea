import type React from "react";
import TrainedAttendants from "../assets/trained-attendants.jpg";
import Baby from "../assets/baby.png";
import CriticalCare from "../assets/critical-care.jpg";
import MedicalEquipment from "../assets/medical-equipment.jpg";
import NursingCare from "../assets/nursing.jpg";
import {usePageMeta} from "../hooks/usePageMeta.ts";

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    link: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "Nursing Care",
        description: "Professional nursing services at home for patients in Bangalore",
        icon: NursingCare,
        link: "/services/nursing-care",
    },
    {
        id: 2,
        title: "Doctor Consultation",
        description: "Consult with experienced doctors in the comfort of your home in Bangalore",
        icon: TrainedAttendants,
        link: "/services/doctor-consultation",
    },
    {
        id: 3,
        title: "Elder Care",
        description: "Specialized care services for elderly patients in Bangalore",
        icon: Baby,
        link: "/services/elder-care",
    },
    {
        id: 4,
        title: "Lab Tests",
        description: "Convenient lab sample collection from your home in Bangalore",
        icon: CriticalCare,
        link: "/services/lab-tests",
    },
    {
        id: 5,
        title: "Medical Equipment",
        description: "Rent or purchase medical equipment delivered to your home in Bangalore",
        icon: MedicalEquipment,
        link: "/services/medical-equipment",
    },
];

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div
            className={`bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm transition-all duration-300 ${className || ""}`}
        >
            {children}
        </div>
    );
};

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <div className={className || ""}>{children}</div>;
};

const Services = () => {

    usePageMeta({
        title: "Our Healthcare Services – Nurse Plus Bangalore",
        description:
            "Explore Nurse Plus’ wide range of home healthcare services in Bangalore, including doctor consultations, nursing, physiotherapy, elder care, and lab tests.",
        keywords:
            "Home healthcare Bangalore, Nurse Plus services, Doctor consultation, Nursing, Physiotherapy, Elder care, Lab tests",
        url: "https://nurseplus.shakiltech.com/services",
    });

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Medical Services Offered At Home</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Nurse Plus Medical offers a variety of healthcare services in the comfort of our patient's homes in
                        Bangalore including:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <a
                            key={service.id}
                            href={service.link}
                            className="group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
                            aria-label={`View details of ${service.title}`}
                        >
                            <Card className="h-full hover:shadow-lg hover:scale-105 transform transition-all duration-300 group-hover:border-teal-500">
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 mb-4 relative">
                                            <img
                                                src={service.icon || "/placeholder.svg"}
                                                alt={service.title}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
