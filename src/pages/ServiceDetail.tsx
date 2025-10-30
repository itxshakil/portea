import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TrainedAttendants from "../assets/trained-attendants.jpg"
import NursingCare from "../assets/nursing.jpg"
import Physiotherapy from "../assets/physiotherapy.avif"
import Baby from "../assets/baby.png"
import CriticalCare from "../assets/critical-care.jpg"
import MedicalEquipment from "../assets/medical-equipment.jpg"
import {usePageMeta} from "../hooks/usePageMeta.ts";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  faqs: FAQ[];
}

interface Services {
  [key: string]: ServiceData;
}

const services: Services = {
  "doctor-consultation": {
    title: "Doctor Consultation at Home",
    description: "Get expert medical consultation from qualified doctors in the comfort of your home in Bangalore.",
    image: TrainedAttendants,
    features: [
      "Consultation with experienced general physicians and specialists",
      "Comprehensive health assessment",
      "Prescription and medication guidance",
      "Follow-up consultations as needed",
      "Available 7 days a week in Bangalore",
    ],
    benefits: [
      "Avoid hospital visits and waiting rooms",
      "Personalized attention in familiar surroundings",
      "Convenient for elderly, disabled, or busy individuals",
      "Same quality care as clinic visits",
    ],
    faqs: [
      {
        question: "What types of doctors are available for home visits?",
        answer:
          "We offer consultations with general physicians, pediatricians, geriatricians, and various specialists including cardiologists, neurologists, and orthopedic doctors in Bangalore.",
      },
      {
        question: "How soon can I get a doctor to visit my home?",
        answer:
          "In most areas of Bangalore, we can arrange for a doctor visit within 24 hours, and in some cases, on the same day for urgent needs.",
      },
      {
        question: "What should I prepare before the doctor's visit?",
        answer:
          "Have your previous medical records, current medications, and a list of symptoms ready. Also, prepare a comfortable space for the examination.",
      },
    ],
  },
  "nursing-care": {
    title: "Professional Nursing Care at Home",
    description: "Experienced nurses providing quality healthcare in the comfort of your home in Bangalore.",
    image: NursingCare,
    features: [
      "Skilled nursing procedures and treatments",
      "Post-surgical care and wound management",
      "Medication administration and management",
      "Vital signs monitoring and health assessment",
      "Short-term and long-term care options",
    ],
    benefits: [
      "Professional medical care in familiar surroundings",
      "Personalized attention and care plans",
      "Reduced risk of hospital-acquired infections",
      "Greater comfort and convenience for patients",
    ],
    faqs: [
      {
        question: "Are your nurses qualified and experienced?",
        answer:
          "Yes, all our nurses are registered, qualified professionals with extensive experience in hospital and home care settings in Bangalore.",
      },
      {
        question: "Can I get nursing care for 24 hours?",
        answer:
          "Yes, we offer 24-hour nursing care with multiple nurses working in shifts to ensure continuous care for patients who need round-the-clock attention.",
      },
      {
        question: "What nursing procedures can be done at home?",
        answer:
          "Our nurses can perform various procedures including IV administration, catheter care, tube feeding, wound dressing, injections, and vital signs monitoring.",
      },
    ],
  },
  physiotherapy: {
    title: "Expert Physiotherapy Services at Home",
    description: "Professional physiotherapy sessions delivered at your doorstep in Bangalore.",
    image: Physiotherapy,
    features: [
      "Personalized treatment plans",
      "Musculoskeletal rehabilitation",
      "Post-surgical rehabilitation",
      "Neurological rehabilitation",
      "Geriatric physiotherapy",
    ],
    benefits: [
      "Convenience of therapy in familiar surroundings",
      "Customized home exercise programs",
      "No travel required for patients with mobility issues",
      "Consistent follow-up and progress tracking",
    ],
    faqs: [
      {
        question: "How many physiotherapy sessions will I need?",
        answer:
          "The number of sessions varies based on your condition, severity, and response to treatment. Our physiotherapist will assess and recommend a treatment plan during the first session.",
      },
      {
        question: "What should I wear for a physiotherapy session?",
        answer:
          "Wear comfortable, loose-fitting clothes that allow easy movement and access to the area being treated.",
      },
      {
        question: "Do I need any special equipment for home physiotherapy?",
        answer:
          "Our physiotherapists bring essential equipment for your treatment. They may recommend some basic equipment for your home exercises, which can be purchased or rented through us.",
      },
    ],
  },
  "elder-care": {
    title: "Specialized Elder Care Services",
    description: "Compassionate and professional care for elderly patients in the comfort of their homes in Bangalore.",
    image: Baby,
    features: [
      "Personal care assistance (bathing, grooming, toileting)",
      "Medication management and reminders",
      "Mobility assistance and fall prevention",
      "Companionship and emotional support",
      "Specialized care for dementia and Alzheimer's patients",
    ],
    benefits: [
      "Allows seniors to age in place with dignity",
      "Personalized care addressing individual needs",
      "Peace of mind for family members",
      "Improved quality of life and independence",
    ],
    faqs: [
      {
        question: "How are your caregivers trained for elder care?",
        answer:
          "Our caregivers undergo specialized training in geriatric care, including handling mobility issues, dementia care, fall prevention, and emergency response.",
      },
      {
        question: "Can your caregivers help with household tasks?",
        answer:
          "Yes, our caregivers can assist with light housekeeping, meal preparation, laundry, and other tasks that help maintain a comfortable living environment for the elderly.",
      },
      {
        question: "How do you match caregivers with elderly clients?",
        answer:
          "We consider factors like care needs, personality, language preferences, and specific requirements to ensure a good match between the caregiver and the elderly client.",
      },
    ],
  },
  "lab-tests": {
    title: "Convenient Lab Tests at Home",
    description: "Accurate diagnostic testing with sample collection from your home in Bangalore.",
    image: CriticalCare,
    features: [
      "Blood sample collection at home",
      "Urine and other specimen collection",
      "Wide range of diagnostic tests available",
      "Digital reports delivered via email/app",
      "Expert interpretation of results",
    ],
    benefits: [
      "No waiting in queues or traveling to labs",
      "Convenient for elderly, disabled, or busy individuals",
      "Same accuracy as laboratory visits",
      "Faster turnaround time for results",
    ],
    faqs: [
      {
        question: "How soon will I get my test results?",
        answer:
          "Most routine test results are available within 6-8 hours. Some specialized tests may take longer. The exact timeframe will be communicated during booking.",
      },
      {
        question: "Do I need to prepare for blood tests?",
        answer:
          "Some tests require fasting or other preparations. Our team will inform you about any specific preparations needed when you book the test.",
      },
      {
        question: "Are home collected samples as accurate as lab collected ones?",
        answer:
          "Yes, our phlebotomists are trained to collect samples properly, and we use appropriate preservation methods to ensure sample integrity during transport to our labs.",
      },
    ],
  },
  "medical-equipment": {
    title: "Medical Equipment Rental & Sales",
    description: "Quality medical equipment delivered and set up at your home in Bangalore.",
    image: MedicalEquipment,
    features: [
      "Wide range of medical equipment available",
      "Rental and purchase options",
      "Delivery, setup, and demonstration",
      "Maintenance and technical support",
      "Sanitized and quality-checked equipment",
    ],
    benefits: [
      "Cost-effective rental options for temporary needs",
      "Expert guidance on choosing the right equipment",
      "Convenient delivery and setup at home",
      "Technical support throughout the rental period",
    ],
    faqs: [
      {
        question: "What types of medical equipment do you provide?",
        answer:
          "We offer hospital beds, wheelchairs, oxygen concentrators, CPAP machines, patient lifts, nebulizers, and various other medical and mobility equipment.",
      },
      {
        question: "Do you provide training on how to use the equipment?",
        answer:
          "Yes, our team provides complete demonstration and training on how to use the equipment safely and effectively during the setup.",
      },
      {
        question: "What if the equipment malfunctions during the rental period?",
        answer:
          "We provide 24/7 technical support and will replace the equipment promptly if there are any issues that cannot be resolved remotely.",
      },
    ],
  },
};

// Custom Button component to replace Next.js Button
function Button({ 
  children, 
  className, 
  asChild = false, 
  variant = "default" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  asChild?: boolean; 
  variant?: "default" | "outline"; 
}) {
  if (asChild) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default function ServicePage() {
    const { service } = useParams<{ service: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!service || !services[service]) {
            navigate('/404');
        }
    }, [service, navigate]);

    if (!service || !services[service]) return null;

    const serviceData = services[service];

    const formatServiceName = (serviceName: string) =>
        serviceName
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    useEffect(() => {
        document.title = `${serviceData.title} - Nurse Plus Bangalore`;
    }, [serviceData.title]);

    usePageMeta({
        title: `${serviceData.title} - Nurse Plus Bangalore`,
        description: serviceData.description,
        keywords: `${serviceData.title}, Home healthcare Bangalore, Nurse Plus, Doctor consultation, Nursing care, Physiotherapy, Elder care, Lab tests, Medical equipment`,
        url: window.location.href,
    });

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
            {/* Hero Section */}
            <section className="bg-teal-50 dark:bg-gray-800 py-12 md:py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                                {serviceData.title}
                                <span className="block text-teal-600 dark:text-teal-400 mt-2">in Bangalore</span>
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">{serviceData.description}</p>
                            <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 ml-4 px-5 py-2 rounded-lg text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center">
                                <Link to="/book-now" className="inline-block">Book Now</Link>
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="relative h-[400px] md:h-[400px] w-full rounded-lg overflow-hidden">
                                <img
                                    src={serviceData.image || "/placeholder.svg"}
                                    alt={serviceData.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Our {formatServiceName(service)} Services
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive healthcare solutions delivered at your doorstep in Bangalore
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors duration-300">
                            <h3 className="text-xl font-semibold mb-4">Service Features</h3>
                            <ul className="space-y-3">
                                {serviceData.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors duration-300">
                            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                            <ul className="space-y-3">
                                {serviceData.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400"></div>
                                        </div>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Common questions about our {formatServiceName(service)} services in Bangalore
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {serviceData.faqs.map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm transition-colors duration-300">
                                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/* CTA Section */}
            <section className="py-16 bg-teal-600 dark:bg-teal-700 text-white transition-colors duration-300">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-white/90">
                        Experience professional healthcare in the comfort of your home in Bangalore. Our expert team is ready to assist you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Primary CTA: Call Now */}
                        <a
                            href="tel:+918310853708"
                            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.85.32 1.68.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.82.25 1.65.44 2.5.57a2 2 0 0 1 1.72 2z" />
                            </svg>
                            Call Now
                        </a>

                        {/* Secondary CTA: Book Now */}
                        <a
                            href="/book-now"
                            className="bg-white text-teal-600 dark:bg-gray-100 dark:text-teal-600 px-6 py-3 rounded-lg font-medium text-lg shadow hover:shadow-md transition transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                        >
                            Book Now
                        </a>

                        {/* Tertiary CTA: WhatsApp */}
                        <button
                            onClick={() => {
                                const phoneNumber = "918310853708";
                                const message =
                                    "Hello! 👋 I'm interested in Nurse Plus’s home healthcare services. Could you please help me book an appointment or share more details?";
                                const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                window.open(whatsappLink, "_blank");
                            }}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg shadow hover:shadow-md transition transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
                                <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                            </svg>
                            WhatsApp
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}
