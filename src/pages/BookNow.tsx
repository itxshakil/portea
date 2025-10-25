import BookAppointment from "../components/BookAppointment"

export const metadata = {
    title: "Book Home Healthcare Services in Bangalore | Nurse Plus",
    description:
        "Easily schedule doctor consultations, nursing care, physiotherapy, elder care, lab tests, or equipment delivery in Bangalore. Book your home healthcare appointment now.",
}

export default function BookNowPage() {
    return (
        <section className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Book Your Home Healthcare Service
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                        Schedule personalized medical care in the comfort of your home. Fill in your details below and our team will
                        reach out to confirm your appointment shortly.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 dark:text-white rounded-2xl shadow-xl p-8 md:p-10">
                    <BookAppointment />
                </div>
            </div>
        </section>
    )
}
