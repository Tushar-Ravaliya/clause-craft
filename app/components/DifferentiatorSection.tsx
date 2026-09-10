"use client";

import React, { useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  Square3Stack3DIcon,
  DocumentDuplicateIcon,
  SparklesIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export function DifferentiatorSection() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const pipeline = [
    {
      id: 1,
      title: "User answers",
      description: "You provide key information.",
      icon: AdjustmentsHorizontalIcon,
      accent: "text-blue-600",
    },
    {
      id: 2,
      title: "Structured terms",
      description: "Your answers are structured into defined terms.",
      icon: DocumentTextIcon,
      accent: "text-emerald-600",
    },
    {
      id: 3,
      title: "Jurisdiction rules",
      description: "We apply jurisdiction-specific rules and logic.",
      icon: ShieldCheckIcon,
      accent: "text-purple-600",
    },
    {
      id: 4,
      title: "Clause selection",
      description: "The right clauses are selected from our library.",
      icon: Square3Stack3DIcon,
      accent: "text-teal-600",
    },
    {
      id: 5,
      title: "Document template",
      description: "Clauses are assembled into a coherent document.",
      icon: DocumentDuplicateIcon,
      accent: "text-amber-600",
    },
    {
      id: 6,
      title: "AI assistance",
      description: "AI helps explain, refine, and review.",
      icon: SparklesIcon,
      accent: "text-indigo-600",
    },
    {
      id: 7,
      title: "Final draft",
      description: "You get a customizable draft.",
      icon: DocumentCheckIcon,
      accent: "text-zinc-900",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-zinc-50/60 border-y border-zinc-200/80 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 block mb-3">
              Our Differentiator
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 leading-tight mb-4">
              Not just AI-generated text. A structured document engine.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8">
              ClauseCraft combines structured inputs, jurisdiction-aware rules,
              a reusable clause library, and AI assistance to help you create
              professional agreement drafts.
            </p>
            <a
              href="#builder"
              className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-xs active:scale-[0.98]"
            >
              See how it works
              <ArrowRightIcon className="w-4 h-4 stroke-[2]" />
            </a>
          </div>

          {/* Right Pipeline Cards */}
          <div className="lg:col-span-8 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="inline-flex items-center gap-2 min-w-max">
              {pipeline.map((item, idx) => {
                const Icon = item.icon;
                const isLast = idx === pipeline.length - 1;
                const isHovered = activeStage === item.id;

                return (
                  <React.Fragment key={item.id}>
                    <div
                      onMouseEnter={() => setActiveStage(item.id)}
                      onMouseLeave={() => setActiveStage(null)}
                      className={`w-32 sm:w-36 p-3.5 sm:p-4 rounded-xl border bg-white flex flex-col items-center text-center transition-all cursor-pointer ${
                        isHovered
                          ? "border-zinc-900 shadow-md scale-[1.02]"
                          : "border-zinc-200/80 shadow-2xs hover:border-zinc-300"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-3 ${item.accent}`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <h4 className="text-xs font-bold text-zinc-950 mb-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-zinc-500 leading-normal">
                        {item.description}
                      </p>
                    </div>

                    {!isLast && (
                      <div className="text-zinc-300 px-0.5 shrink-0">
                        <ArrowRightIcon className="w-3.5 h-3.5 stroke-[2]" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
