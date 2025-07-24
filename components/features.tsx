import { memo } from "react";

export type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

// Props for the FeaturesSection component
type FeaturesSectionProps = {
    title: string;
    features: Feature[];
    className?: string;
};

// Main reusable component
export const FeaturesSection = memo(function FeaturesSection({
    title,
    features,
    className = "",
}: FeaturesSectionProps) {
    return (
        <div
            className={`flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container ${className}`}
        >
            <div className="space-y-16 col-span-12 px-6 md:px-16 py-12">
                <h2 className="font-bold text-4xl text-center">{title}</h2>
                <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4 text-center">
                    {features.map((feature, index) => (
                        <div key={index}>
                            {feature.icon}
                            <h4 className="mb-2 font-semibold text-2xl">
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
