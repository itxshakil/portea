import HairFall from "../assets/hair_fall_male.png";
import GFC from "../assets/hair_fall_girl.png";
import { PhoneIcon } from "lucide-react";

const HairCareSection = () => {
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
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-teal-50/20 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 transition-colors duration-500">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 w-[80%] h-[80%] -translate-x-1/2 bg-gradient-to-b from-teal-100/40 via-transparent to-transparent dark:from-teal-900/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        Nurture Your Hair Naturally, Right From Home 🌿
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
                        Restore{" "}
                        <span className="font-semibold text-teal-600 dark:text-teal-400">strength</span>,{" "}
                        <span className="font-semibold text-teal-600 dark:text-teal-400">shine</span>, and{" "}
                        <span className="font-semibold text-teal-600 dark:text-teal-400">confidence</span> with dermatologist-approved
                        scalp therapies and GFC treatments — performed at home with medical precision and human warmth.
                    </p>
                </div>

                {/* Flow Sections */}
                <div className="space-y-28">
                    {/* Why Hair Fall Happens */}
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="md:w-1/2">
                            <img
                                src={HairFall}
                                alt="Why Hair Fall Happens"
                                className="rounded-[2rem] object-contain w-full h-[460px] shadow-sm hover:scale-[1.02] transition-transform duration-700 ease-out"
                            />
                        </div>

                        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
                            <div className="space-y-6 md:space-y-8">
                                <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                                    Why Hair Fall Happens
                                </h3>
                                <div className="w-16 h-1 bg-teal-500 rounded-full mx-auto md:mx-0"></div>

                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                    Hair fall isn’t just cosmetic — it’s your body’s response to stress, hormonal imbalance,
                                    or environmental damage. Understanding these triggers helps build lasting recovery.
                                </p>

                                <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                    <li>
                                        <span className="font-medium text-gray-900 dark:text-gray-100">🧠 Stress:</span>{" "}
                                        Chronic stress constricts blood flow to the scalp, weakening hair roots over time.
                                    </li>
                                    <li>
                                        <span className="font-medium text-gray-900 dark:text-gray-100">⚖️ Hormonal Changes:</span>{" "}
                                        Imbalance in thyroid or androgens can shrink follicles and accelerate shedding.
                                    </li>
                                    <li>
                                        <span className="font-medium text-gray-900 dark:text-gray-100">🌫️ Pollution & Product Buildup:</span>{" "}
                                        Dust, toxins, and residue block follicles, making hair dull, dry, and brittle.
                                    </li>
                                    <li>
                                        <span className="font-medium text-gray-900 dark:text-gray-100">🥗 Nutritional Deficiency:</span>{" "}
                                        Low iron, protein, or biotin intake slows down natural growth cycles.
                                    </li>
                                </ul>

                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                    Our experts focus on restoring scalp health and follicle vitality — not just stopping hair fall,
                                    but reviving its natural rhythm.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Advanced GFC Therapy */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                        <div className="md:w-1/2">
                            <img
                                src={GFC}
                                alt="Advanced GFC Treatment"
                                className="rounded-[2rem] object-contain w-full h-[460px] shadow-sm hover:scale-[1.05] transition-transform duration-700 ease-out"
                            />
                        </div>

                        <div className="md:w-1/2 text-center md:text-left">
                            {/* Refined Pricing Card */}
                            <div className="relative inline-block bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-teal-100/50 dark:border-gray-700/60 rounded-2xl px-8 py-5 shadow-lg mb-8 text-left">
                                {/* Ribbon */}
                                <div className="absolute -top-3 right-5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    Best Value
                                </div>

                                <div className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                                    <strong>4-Session</strong> Home Therapy Package
                                </div>
                                <div className="flex items-end gap-3">
                                    <span className="text-4xl font-bold text-teal-600 dark:text-teal-400 leading-none">
                                        ₹17,499
                                    </span>
                                    <span className="text-base text-gray-500 dark:text-gray-400 mb-1">
                                        (All-Inclusive)
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-5 leading-snug">
                                Advanced GFC Therapy — Gentle, Powerful, Proven
                            </h3>

                            <ul className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 space-y-3">
                                <li>
                                    ✅{" "}
                                    <span className="font-medium text-gray-900 dark:text-gray-100">
                                        100% Natural:
                                    </span>{" "}
                                    Uses your own growth factors for safe, regenerative results.
                                </li>
                                <li>
                                    💆‍♀️{" "}
                                    <span className="font-medium text-gray-900 dark:text-gray-100">
                                        At-Home Care:
                                    </span>{" "}
                                    Expert clinicians perform every session in your comfort zone — no travel, no waiting.
                                </li>
                                <li>
                                    🌱{" "}
                                    <span className="font-medium text-gray-900 dark:text-gray-100">
                                        Visible Improvement:
                                    </span>{" "}
                                    Notice reduced hair fall and denser strands within weeks.
                                </li>
                            </ul>

                            <a
                                href="tel:8310853708"
                                onClick={() => trackEvent("hair_transplant_call", "Hair Transplant Call")}
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-teal-600 text-white font-semibold text-base hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                Call to Book Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HairCareSection;
