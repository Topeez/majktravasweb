import { memo } from "react";

export type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

type FeaturesSectionProps = {
    title: React.ReactNode;
    subtitle?: string;
    features: Feature[];
    className?: string;
};

export const FeaturesSection = memo(function FeaturesSection({
    title,
    subtitle,
    features,
    className = "",
}: FeaturesSectionProps) {
    return (
        <div
            className={`flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container ${className}`}
            aria-label="Features Section"
        >
            <div className="space-y-16 col-span-12 py-12">
                <div className="space-y-8">
                    {title}
                    <h3 className="text-muted-foreground text-xl text-center">
                        {subtitle}
                    </h3>
                </div>
                <div
                    className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4 text-center"
                    aria-label="Features"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            aria-label={feature.title}
                            role="listitem"
                            className="space-y-6"
                        >
                            {feature.icon}
                            <h4 className="mb-2 font-bold text-2xl">
                                {feature.title}
                            </h4>
                            <p className="text-muted-foreground text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});
