import { ContactForm } from "@/components/contact-form";
import { contactInfo } from "@/data/contact";

export function Contact() {
    return (
        <section
            id="kontakt"
            className="bg-gray-50 py-16 md:py-24"
            aria-label="Kontaktní formulář"
        >
            <div className="mx-auto px-4 cs-container">
                <div className="flex lg:flex-row flex-col gap-12">
                    <div className="lg:w-1/2">
                        <p className="font-bold text-muted-foreground text-base md:text-left text-center uppercase tracking-widest">
                            kontakt
                        </p>
                        <h2
                            className="font-bold text-3xl md:text-5xl md:text-left text-center"
                            aria-label="Kontaktní formulář"
                        >
                            Kontaktujte mě
                        </h2>
                        <p
                            className="mt-4 text-muted-foreground text-xl md:text-left text-center"
                            aria-label="Popis kontaktního formuláře"
                        >
                            Máte dotaz ohledně mých služeb? Rád vám poradím s
                            výběrem optimálního řešení pro Váš domov či firmu.
                        </p>

                        <div
                            className="space-y-6 mt-8"
                            aria-label="Kontaktní informace"
                        >
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start"
                                    aria-label={item.title}
                                >
                                    <div className="flex flex-shrink-0 justify-center items-center bg-foreground rounded-full size-10 text-background">
                                        {item.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg">
                                            {item.title}
                                        </h3>
                                        <div className="mt-1 text-muted-foreground">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div
                            className="bg-background shadow-lg p-6 md:p-8 rounded-xl"
                            aria-label="Formulář"
                        >
                            <h3
                                className="mb-4 font-bold text-3xl md:text-left text-center"
                                aria-label="Napište mi zprávu"
                            >
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
