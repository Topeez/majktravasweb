import { ContactForm } from "@/components/contact-form";
import { contactInfo } from "@/data/contact";

export function Contact() {
    return (
        <section id="kontakt" className="bg-gray-50 py-16 md:py-24">
            <div className="mx-auto px-4 cs-container">
                <div className="flex lg:flex-row flex-col gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="font-bold text-3xl md:text-5xl md:text-left text-center">
                            Kontaktujte mě
                        </h2>
                        <p className="mt-4 text-gray-600 text-xl md:text-left text-center">
                            Máte dotaz ohledně mých služeb? Rád vám poradím s
                            výběrem optimálního řešení pro Váš domov či firmu.
                        </p>

                        <div className="space-y-6 mt-8">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex flex-shrink-0 justify-center items-center bg-foreground rounded-full w-10 h-10 text-white">
                                        {item.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg">
                                            {item.title}
                                        </h3>
                                        <div className="mt-1 text-gray-600">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white shadow-lg p-6 md:p-8 rounded-xl">
                            <h3 className="mb-4 font-bold text-3xl md:text-left text-center">
                                Napište mi zprávu
                            </h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
