"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useI18n } from "@/lib/i18n";

export function TestimonialsSection() {
  const { t } = useI18n();
  const testimonials = [
    {
      quote:
        "Implementing Digital Workers was a game-changer for our startup. Our team can now focus on innovation while our Digital Assistants handle customer support and data processing 24/7. We scaled our operations without expanding headcount.",
      name: "Rideclover",
      designation: "Technology Startup",
      src: "https://play-lh.googleusercontent.com/3iMHNN3naf3YdAV3zdhCMDl-hCnPVdHBHxqjTdLso0oy12u9_MmsHKinTIAvwVXWL1TR",
    },
    {
      quote:
        "As an IT consultancy, we needed a solution that could adapt to different client needs. Promptemployee's multi-model architecture and visual orchestration panel allowed us to deploy customized Digital Workers for each project. Our efficiency increased by 40%.",
      name: "Beaglolabs",
      designation: "IT Consultancy",
      src: "https://i.postimg.cc/9MyyGLLg/beaglo.png",
    },
  ];

  return (
    <section className="bg-white pt-16">
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
