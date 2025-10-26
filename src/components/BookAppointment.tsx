import React, { useState } from "react";
import { Calendar, CheckCircle2 } from "lucide-react";

const services = [
    "Nursing Care",
    "Doctor Consultation",
    "Elder Care",
    "Lab Tests",
    "Medical Equipment",
];

const bangaloreAreas = [
    "Indiranagar",
    "Koramangala",
    "Whitefield",
    "Jayanagar",
    "JP Nagar",
    "Marathahalli",
    "Electronic City",
    "Bannerghatta Road",
    "Hebbal",
    "Yelahanka",
];

export default function BookAppointment() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        area: "",
        service: "",
        message: "",
    });
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<any>({});

    const today = new Date().toISOString().split("T")[0];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setErrors((prev: any) => ({ ...prev, [id]: "" })); // Clear error on change
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

    const validate = () => {
        const newErrors: any = {};
        if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
        if (!formData.phone.match(/^[0-9]{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number.";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email address.";
        if (!formData.area) newErrors.area = "Select your area.";
        if (!formData.service) newErrors.service = "Select a service.";
        if (!date) newErrors.date = "Choose your preferred appointment date.";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormData({ name: "", phone: "", email: "", area: "", service: "", message: "" });
            setDate("");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 1500);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 md:p-6 transition-colors duration-300">
            {success ? (
                <div className="text-center py-12 animate-fadeIn">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-50 animate-bounce">
                            <CheckCircle2 className="h-8 w-8" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Appointment Request Received</h3>
                    <p className="mb-8">
                        Thank you for choosing <span className="font-medium">Nurse Plus</span>. Our care team will call you shortly
                        to confirm your booking and discuss your healthcare needs.
                    </p>
                    <button
                        onClick={() => setSuccess(false)}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-all duration-200"
                    >
                        Book Another Appointment
                    </button>
                </div>
            ) : (
                <form className="space-y-8 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            id="name"
                            label="Full Name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                            helpText="Your official name for appointment purposes."
                        />
                        <InputField
                            id="phone"
                            label="Phone Number"
                            type="tel"
                            placeholder="Enter your 10-digit phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            helpText="We will call or WhatsApp you to confirm."
                        />
                        <InputField
                            id="email"
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            helpText="We will send your booking details here."
                        />
                        <div>
                            <label htmlFor="area" className="block text-sm font-medium mb-2">
                                Area in Bangalore
                            </label>
                            <input
                                list="areaSuggestions"
                                id="area"
                                value={formData.area}
                                onChange={handleChange}
                                placeholder="Type or select your area"
                                className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all bg-white border-gray-300 text-gray-900 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 ${
                                    errors.area ? "border-red-500 animate-shake" : ""
                                }`}
                            />
                            <datalist id="areaSuggestions">
                                {bangaloreAreas.map((area) => (
                                    <option key={area} value={area} />
                                ))}
                            </datalist>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                                Start typing to see suggestions.
                            </p>
                            {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area}</p>}
                        </div>

                        <SelectField
                            id="service"
                            label="Service Required"
                            value={formData.service}
                            onChange={handleChange}
                            options={services}
                            placeholder="Select a service"
                            error={errors.service}
                            helpText="Choose the healthcare service you need."
                        />
                        <div>
                            <label htmlFor="appointmentDate" className="block text-sm font-medium mb-2">
                                Preferred Date
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 pointer-events-none" />
                                <input
                                    id="appointmentDate"
                                    type="date"
                                    value={date}
                                    onChange={handleDateChange}
                                    min={today}
                                    className={`w-full border rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all bg-white border-gray-300 text-gray-900 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 ${
                                        errors.date ? "border-red-500 animate-shake" : ""
                                    }`}
                                />
                            </div>
                            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Additional Information
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe your healthcare needs or preferred time (optional)"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all bg-white border-gray-300 text-gray-900 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                        />
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                            Optional: provide details for smoother service.
                        </p>
                    </div>

                    <div>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`w-full font-semibold px-6 py-4 rounded-lg text-white text-lg shadow-md transition-all duration-200 ${
                                loading
                                    ? "bg-teal-400 cursor-not-allowed"
                                    : "bg-teal-600 hover:bg-teal-700 hover:-translate-y-0.5"
                            }`}
                        >
                            {loading ? "Processing..." : "Confirm Booking"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

// 🔹 Reusable Components with Error & Help Text
function InputField({ id, label, type = "text", placeholder, value, onChange, error, helpText }: any) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium mb-2">
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all bg-white border-gray-300 text-gray-900 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 ${
                    error ? "border-red-500 animate-shake" : ""
                }`}
            />
            {helpText && <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{helpText}</p>}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

function SelectField({ id, label, value, onChange, options, placeholder, error, helpText }: any) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium mb-2">
                {label}
            </label>
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none appearance-none transition-all bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 ${
                    error ? "border-red-500 animate-shake" : ""
                }`}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((opt: string) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            {helpText && <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{helpText}</p>}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
