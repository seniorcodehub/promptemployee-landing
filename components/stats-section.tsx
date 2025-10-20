"use client";
import { useI18n } from "@/lib/i18n";

const stats = [
  {
    valueKey: "stats_1",
    labelKey: "stats_1_label",
  },
  {
    valueKey: "stats_2",
    labelKey: "stats_2_label",
  },
  {
    valueKey: "stats_3",
    labelKey: "stats_3_label",
  },
  {
    valueKey: "stats_4",
    labelKey: "stats_4_label",
  },
];

export function StatsSection() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="bg-[#1f1f1f] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#ef4444] text-center group"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#ef4444] mb-3">
                  {t(stat.valueKey)}
                </div>
                <div className="text-lg text-gray-300 leading-relaxed">
                  {t(stat.labelKey)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

