"use client";
import { Link2, Settings, Rocket } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const steps = [
  {
    number: "01",
    icon: Link2,
    titleKey: "how_step_1_title",
    descKey: "how_step_1_desc",
  },
  {
    number: "02",
    icon: Settings,
    titleKey: "how_step_2_title",
    descKey: "how_step_2_desc",
  },
  {
    number: "03",
    icon: Rocket,
    titleKey: "how_step_3_title",
    descKey: "how_step_3_desc",
  },
];

export function HowItWorksSection() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("how_title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("how_sub")}
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-[#ef4444] to-red-200 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#ef4444]"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-[#ef4444] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#ef4444]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

