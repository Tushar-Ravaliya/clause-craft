import React from "react";
import {
  DocumentTextIcon,
  PencilSquareIcon,
  Cog6ToothIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      action: "Choose",
      icon: DocumentTextIcon,
      description: "Select NDA, Service Agreement, or IP Assignment.",
    },
    {
      num: "02",
      action: "Customize",
      icon: PencilSquareIcon,
      description:
        "Answer guided questions about the project, payment, IP, confidentiality, and more.",
    },
    {
      num: "03",
      action: "Generate",
      icon: Cog6ToothIcon,
      description:
        "Clause rules and templates assemble the document for your selected jurisdiction.",
    },
    {
      num: "04",
      action: "Review & export",
      icon: ArrowDownTrayIcon,
      description:
        "Review the draft, make edits, and export as PDF or DOCX.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 block mb-3">
            How it works
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950">
            From business terms to a polished agreement in minutes.
          </h2>
        </div>

        {/* 4-Step Process Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div key={idx} className="relative flex flex-col items-start pr-4">
                {/* Arrow to next item on large screens */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-4 -right-2 text-zinc-300 pointer-events-none">
                    <ArrowRightIcon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                )}

                {/* Step icon and number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono font-medium text-zinc-400">
                      {step.num}
                    </span>
                    <span className="text-base font-bold text-zinc-950">
                      {step.action}
                    </span>
                  </div>
                </div>

                {/* Step description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
