import { Link } from "react-router-dom";
import {usePageMeta} from "../hooks/usePageMeta.ts";

const NotFound = () => {
    usePageMeta({
        title: "404 - Page Not Found | Nurse Plus Bangalore",
        description:
            "Oops! The page you are looking for does not exist. Navigate back to the home page to explore Nurse Plus home healthcare services in Bangalore.",
        keywords:
            "404 page, Page not found, Nurse Plus, Home healthcare Bangalore, Doctor consultation, Nursing, Physiotherapy, Elder care, Lab tests, Medical equipment",
        url: window.location.href,
    });

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-7xl font-bold text-teal-600 mb-6">404</h1>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Page Not Found</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-teal-600 hover:bg-teal-700 text-white dark:text-white px-6 py-3 rounded-md transition-colors"
                    >
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
