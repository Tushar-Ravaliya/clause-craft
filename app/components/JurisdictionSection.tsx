"use client";

import React, { useState } from "react";
import {
  ScaleIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface JurisdictionData {
  country: string;
  flag: string;
  states: {
    name: string;
    governingLaw: string;
    clauseSet: string;
    requiredInputs: string;
    warnings: string[];
  }[];
}

const jurisdictionDatabase: Record<string, JurisdictionData> = {
  India: {
    country: "India",
    flag: "🇮🇳",
    states: [
      {
        name: "Maharashtra",
        governingLaw: "Laws of India (Maharashtra)",
        clauseSet: "Standard (Freelance Services – IN-MH)",
        requiredInputs: "GST, notice period, dispute resolution",
        warnings: [
          "Stamp duty applicability under Maharashtra Stamp Act",
          "Arbitration seated in Mumbai under the Arbitration and Conciliation Act",
        ],
      },
      {
        name: "Karnataka",
        governingLaw: "Laws of India (Karnataka)",
        clauseSet: "Standard (Tech Services – IN-KA)",
        requiredInputs: "GST, IP assignment, dispute resolution",
        warnings: [
          "Karnataka Professional Tax compliance note for independent contractors",
        ],
      },
      {
        name: "Delhi NCT",
        governingLaw: "Laws of India (Delhi NCT)",
        clauseSet: "Standard (Commercial Services – IN-DL)",
        requiredInputs: "GST, payment schedule, non-disclosure",
        warnings: [
          "High Court of Delhi jurisdiction for commercial arbitration",
        ],
      },
    ],
  },
  "United States": {
    country: "United States",
    flag: "🇺🇸",
    states: [
      {
        name: "California",
        governingLaw: "Laws of California (USA)",
        clauseSet: "US Independent Contractor (CA AB5 Compliant)",
        requiredInputs: "Borello test certification, payment timing, IP waiver",
        warnings: [
          "Strict independent contractor classification under California AB 5",
          "Post-employment non-compete agreements are void under Cal. Bus. & Prof. Code § 16600",
        ],
      },
      {
        name: "New York",
        governingLaw: "Laws of New York (USA)",
        clauseSet: "NY Freelance Isn't Free Act (FIFA)",
        requiredInputs: "Mandatory 30-day payment term, itemized rates",
        warnings: [
          "Strict adherence to NYC Freelance Isn't Free Act payment schedule",
          "Double damages liability for delayed contractor payments",
        ],
      },
    ],
  },
  "United Kingdom": {
    country: "United Kingdom",
    flag: "🇬🇧",
    states: [
      {
        name: "England & Wales",
        governingLaw: "Laws of England and Wales",
        clauseSet: "UK Commercial Contractor Standard (IR35 safe)",
        requiredInputs: "VAT number, IR35 status determination, substitution clause",
        warnings: [
          "IR35 off-payroll working rules require explicit right of substitution",
          "UK GDPR data processing addendum required if client data is handled",
        ],
      },
    ],
  },
};

export function JurisdictionSection() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedStateName, setSelectedStateName] = useState("Maharashtra");
  const [showWarningsModal, setShowWarningsModal] = useState(false);

  const countryData = jurisdictionDatabase[selectedCountry] || jurisdictionDatabase["India"];
  const currentState =
    countryData.states.find((s) => s.name === selectedStateName) ||
    countryData.states[0];

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedStateName(jurisdictionDatabase[country].states[0].name);
  };

  return (
    <section id="jurisdictions" className="py-20 sm:py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 block mb-3">
              Jurisdictions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 leading-tight mb-4">
              Built with jurisdiction in mind.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              ClauseCraft doesn&apos;t simply swap the governing-law field.
              Jurisdiction is part of the document-generation workflow.
            </p>
          </div>

          {/* Right Configuration Inspector Card */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-md shadow-zinc-100/80 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
                {/* Left Sub-Panel: Jurisdiction Selectors */}
                <div className="md:col-span-5 p-6 sm:p-7 bg-zinc-50/40 flex flex-col justify-center space-y-4">
                  <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                    Select jurisdiction
                  </h3>

                  {/* Country Select */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-zinc-600">
                      Country
                    </label>
                    <div className="relative">
                      <select
                        value={selectedCountry}
                        onChange={(e) => handleCountryChange(e.target.value)}
                        className="w-full appearance-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 cursor-pointer pr-8"
                      >
                        <option value="India">🇮🇳 India</option>
                        <option value="United States">🇺🇸 United States</option>
                        <option value="United Kingdom">🇬🇧 United Kingdom</option>
                      </select>
                      <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* State Select */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-zinc-600">
                      State / Region
                    </label>
                    <div className="relative">
                      <select
                        value={selectedStateName}
                        onChange={(e) => setSelectedStateName(e.target.value)}
                        className="w-full appearance-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 cursor-pointer pr-8"
                      >
                        {countryData.states.map((s) => (
                          <option key={s.name} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Right Sub-Panel: Applicable Configuration Details */}
                <div className="md:col-span-7 p-6 sm:p-7 relative flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-4">
                      Applicable document configuration
                    </h3>

                    <div className="space-y-3.5 text-xs">
                      {/* Governing Law */}
                      <div className="flex items-start gap-2.5">
                        <ScaleIcon className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-zinc-500 font-medium">
                            Governing law:{" "}
                          </span>
                          <span className="font-semibold text-zinc-900">
                            {currentState.governingLaw}
                          </span>
                        </div>
                      </div>

                      {/* Clause Set */}
                      <div className="flex items-start gap-2.5">
                        <DocumentDuplicateIcon className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-zinc-500 font-medium">
                            Clause set:{" "}
                          </span>
                          <span className="font-semibold text-zinc-900">
                            {currentState.clauseSet}
                          </span>
                        </div>
                      </div>

                      {/* Required Inputs */}
                      <div className="flex items-start gap-2.5">
                        <ClipboardDocumentCheckIcon className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-zinc-500 font-medium">
                            Required inputs:{" "}
                          </span>
                          <span className="font-semibold text-zinc-900">
                            {currentState.requiredInputs}
                          </span>
                        </div>
                      </div>

                      {/* Review Warnings */}
                      <div className="flex items-start gap-2.5">
                        <ExclamationTriangleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-zinc-500 font-medium">
                            Review warnings:{" "}
                          </span>
                          <button
                            type="button"
                            onClick={() => setShowWarningsModal(!showWarningsModal)}
                            className="font-semibold text-rose-600 hover:text-rose-700 underline decoration-rose-300 underline-offset-2 ml-1"
                          >
                            {currentState.warnings.length} items to review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Map Silhouette Vector matching reference graphic */}
                  <div className="hidden sm:block absolute right-5 bottom-5 w-24 h-24 opacity-25 pointer-events-none">
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full text-zinc-800"
                    >
                      <path
                        d="M45 10C55 12 60 22 58 30C56 38 65 42 68 50C70 58 64 68 58 76C52 84 48 92 42 90C36 88 38 78 34 70C30 62 26 55 28 45C30 35 35 25 45 10Z"
                        fill="currentColor"
                      />
                      <circle cx="50" cy="55" r="4" fill="#E11D48" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Warnings detail expansion card */}
            {showWarningsModal && (
              <div className="mt-3 p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <div className="flex items-center gap-1.5">
                    <ExclamationTriangleIcon className="w-4 h-4 text-rose-600" />
                    <span>Jurisdiction Advisory: {currentState.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowWarningsModal(false)}
                    className="text-rose-400 hover:text-rose-700"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-rose-800 text-[11px]">
                  {currentState.warnings.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fine print disclaimer */}
            <p className="text-center text-[11px] text-zinc-400 mt-5 leading-normal">
              Jurisdiction-specific functionality is provided as
              document-generation assistance and should not be treated as legal
              advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
