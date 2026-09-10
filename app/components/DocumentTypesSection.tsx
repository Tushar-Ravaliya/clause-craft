import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function DocumentTypesSection() {
  const documents = [
    {
      id: "nda",
      title: "NDA",
      description:
        "Protect confidential information before you start working together.",
      cta: "Create NDA",
      docTitle: "NON-DISCLOSURE AGREEMENT",
    },
    {
      id: "fsa",
      title: "Freelance Service Agreement",
      description:
        "Define scope, payment, IP ownership, termination, and responsibilities.",
      cta: "Create Service Agreement",
      docTitle: "MASTER SERVICES AGREEMENT",
    },
    {
      id: "ipa",
      title: "IP Assignment",
      description:
        "Clearly document ownership and transfer of agreed intellectual property.",
      cta: "Create IP Assignment",
      docTitle: "INTELLECTUAL PROPERTY ASSIGNMENT",
    },
  ];

  return (
    <section id="documents" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and "View all documents" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 block mb-3">
              Document Types
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Start with the agreements freelancers use most.
            </h2>
          </div>
          <a
            href="#all-documents"
            className="inline-flex items-center gap-1.5 border border-zinc-200 hover:border-zinc-300 text-zinc-800 text-xs font-medium px-4 py-2 rounded-lg transition-colors hover:bg-zinc-50 shrink-0 self-start md:self-end"
          >
            View all documents
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="p-6 sm:p-7 rounded-2xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-md transition-all flex items-start gap-5 group"
            >
              {/* Realistic Mini Paper Document Thumbnail */}
              <div className="w-16 h-22 sm:w-20 sm:h-26 rounded-md bg-white border border-zinc-200 shadow-sm p-2 flex flex-col justify-between shrink-0 group-hover:shadow transition-shadow">
                <div className="space-y-1">
                  <div className="w-8 h-1 bg-zinc-800 rounded-xs mb-1.5" />
                  <div className="w-full h-0.5 bg-zinc-200 rounded-xs" />
                  <div className="w-full h-0.5 bg-zinc-200 rounded-xs" />
                  <div className="w-3/4 h-0.5 bg-zinc-200 rounded-xs" />
                  <div className="w-full h-0.5 bg-zinc-200 rounded-xs mt-1" />
                  <div className="w-5/6 h-0.5 bg-zinc-200 rounded-xs" />
                  <div className="w-2/3 h-0.5 bg-zinc-200 rounded-xs" />
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-zinc-100">
                  <div className="w-3 h-0.5 bg-zinc-300 rounded-xs" />
                  <div className="w-2 h-2 rounded-full border border-zinc-300" />
                </div>
              </div>

              {/* Text & Action */}
              <div className="flex flex-col justify-between h-full space-y-4">
                <div>
                  <h3 className="text-base font-bold text-zinc-950 mb-1.5 leading-snug">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
                <a
                  href="#builder"
                  className="inline-flex items-center gap-1.5 border border-zinc-200 hover:border-zinc-950 text-zinc-900 text-xs font-medium px-3.5 py-1.5 rounded-lg transition-colors hover:bg-zinc-900 hover:text-white self-start"
                >
                  {doc.cta}
                  <ArrowRightIcon className="w-3 h-3 stroke-[2]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
