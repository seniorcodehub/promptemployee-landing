"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useI18n } from "@/lib/i18n";

export function TestimonialsSection() {
  const { t } = useI18n();
  const testimonials = [
    {
      quote:
        "Our help desk agents are now 10x more effective. The Digital Workers handle tier-1 support, allowing our human team to focus on complex issues. Response times dropped from 4 hours to minutes.",
      name: "Carlos Mendoza",
      designation: "Operations Director at Tech Services Corp",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Lead qualification was eating up 60% of our sales team's time. Now our Digital Sales Assistants handle it all - qualifying, scheduling, CRM updates. Our closing rate increased by 35%.",
      name: "Ana Silva",
      designation: "Sales Manager at Enterprise Solutions Inc",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Onboarding new hires used to take weeks of manual guidance. Our Digital HR Assistant now handles the entire process - documentation, training schedules, policy Q&A. New employees are productive on day one.",
      name: "Michael Zhang",
      designation: "HR Lead at Global Manufacturing Ltd",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("testimonials_title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials_sub")}
          </p>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}

