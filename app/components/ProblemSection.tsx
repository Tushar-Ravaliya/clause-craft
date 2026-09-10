import React from "react";
import {
  DocumentTextIcon,
  GlobeAltIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export function ProblemSection() {
  const problems = [
    {
      icon: DocumentTextIcon,
      title: "Starting from scratch",
      description: "Every new client means another agreement to draft.",
    },
    {
      icon: GlobeAltIcon,
      title: "Jurisdiction matters",
      description:
        "Different jurisdictions can change what clauses and terms make sense.",
    },
    {
      icon: UserIcon,
      title: "Legal language is hard to navigate",
      description:
        "You shouldn't need to be a lawyer to understand what you're agreeing to.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-t border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 block mb-3">
            The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Contracts get complicated long before the work does.
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl border border-zinc-200/80 bg-white shadow-2xs hover:shadow-md hover:border-zinc-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
