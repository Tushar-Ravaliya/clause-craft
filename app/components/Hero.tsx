"use client";

import React, { useState } from "react";
import { ArrowRightIcon, PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { InteractiveBuilderPreview } from "./InteractiveBuilderPreview";

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Legal documents, simplified
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-tight text-zinc-950 leading-[1.12] mb-5">
              Professional agreements, without starting from a blank page.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl">
              Create customizable agreement drafts based on your business terms,
              document type, and jurisdiction — with AI assistance when you need
              it.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-5">
              <a
                href="#builder"
                className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm active:scale-[0.98]"
              >
                Create your first document
                <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
              </a>
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-medium text-sm px-5 py-3.5 rounded-xl transition-all shadow-2xs hover:border-zinc-300"
              >
                See how it works
                <PlayIcon className="w-3.5 h-3.5 text-zinc-900 fill-zinc-900 ml-0.5" />
              </button>
            </div>

            {/* Trust statement */}
            <p className="text-xs text-zinc-500 mb-10">
              No legal jargon required. You answer the questions. ClauseCraft
              builds the document.
            </p>

            {/* Stats Metrics Row */}
            <div className="pt-8 border-t border-zinc-200/90 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                  3+
                </div>
                <div className="text-xs text-zinc-500 mt-1 font-normal">
                  Document types
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                  50+
                </div>
                <div className="text-xs text-zinc-500 mt-1 font-normal">
                  Jurisdictions (and growing)
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                  10K+
                </div>
                <div className="text-xs text-zinc-500 mt-1 font-normal">
                  Freelancers and solopreneurs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-App Interactive Builder Card */}
          <div id="builder" className="lg:col-span-7">
            <InteractiveBuilderPreview />
          </div>
        </div>
      </div>

      {/* Video / Interactive demo modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-zinc-200">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-zinc-700 rounded-lg"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-zinc-950 mb-2">
              How ClauseCraft Works
            </h3>
            <p className="text-xs text-zinc-600 mb-4">
              Watch how our jurisdiction-aware engine converts simple transaction terms into enforceable, modular contracts in under 3 minutes.
            </p>
            <div className="aspect-video bg-zinc-950 rounded-xl flex flex-col items-center justify-center text-white p-6 text-center">
              <PlayIcon className="w-12 h-12 text-white/80 mb-3" />
              <p className="font-semibold text-sm">Interactive Product Walkthrough</p>
              <p className="text-xs text-zinc-400 mt-1">Click the interactive builder on the right to test it live!</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
