"use client";

import React, { useState } from "react";
import {
  CheckIcon,
  SparklesIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  PlusIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface Milestone {
  id: number;
  name: string;
  percentage: number;
}

export function InteractiveBuilderPreview() {
  const [currentStep, setCurrentStep] = useState(3);
  const [paymentModel, setPaymentModel] = useState("Milestone-based");
  const [currency, setCurrency] = useState("USD (US Dollar)");
  const [paymentTerms, setPaymentTerms] = useState("Net 14 (14 days)");
  const [suggestionDismissed, setSuggestionDismissed] = useState(false);
  const [showClauseModal, setShowClauseModal] = useState(false);

  const [milestones, setMilestones] = useState<Milestone[]>([
    { id: 1, name: "Project kickoff and initial draft", percentage: 40 },
    { id: 2, name: "Final delivery", percentage: 60 },
  ]);

  const steps = [
    { num: 1, label: "Parties", status: "completed" },
    { num: 2, label: "Jurisdiction", status: "completed" },
    { num: 3, label: "Payment", status: "active" },
    { num: 4, label: "Intellectual Property", status: "upcoming" },
    { num: 5, label: "Confidentiality", status: "upcoming" },
    { num: 6, label: "Review", status: "upcoming" },
  ];

  const handleAddMilestone = () => {
    const nextId = milestones.length + 1;
    setMilestones([
      ...milestones,
      { id: nextId, name: `Milestone ${nextId}`, percentage: 20 },
    ]);
  };

  const handleRemoveMilestone = (id: number) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="relative w-full rounded-2xl bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/60 overflow-hidden font-sans text-zinc-900 transition-all">
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100 bg-zinc-50/50">
        <div className="flex items-center gap-2">
          {/* Mini app logo */}
          <div className="flex items-center gap-1.5">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-4 h-4 text-zinc-900"
            >
              <path
                d="M10 6C6.68629 6 4 8.68629 4 12V20C4 23.3137 6.68629 26 10 26H12"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M22 6C25.3137 6 28 8.68629 28 12V20C28 23.3137 25.3137 26 22 26H20"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-semibold text-xs text-zinc-900">
              ClauseCraft
            </span>
          </div>
        </div>

        {/* User profile dropdown pill */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
            A
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-zinc-900 leading-none">
              Alex
            </span>
            <span className="text-[10px] text-zinc-500 leading-none mt-0.5">
              Freelancer
            </span>
          </div>
          <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 ml-0.5" />
        </div>
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-zinc-100 min-h-[480px]">
        {/* Left Stepper Sidebar */}
        <div className="md:col-span-3 p-4 sm:p-5 flex flex-col justify-between bg-zinc-50/30">
          <div className="space-y-3.5">
            {steps.map((step) => {
              const isCompleted = step.num < currentStep;
              const isActive = step.num === currentStep;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setCurrentStep(step.num)}
                  className={`w-full flex items-center gap-2.5 text-left transition-colors group ${
                    isActive
                      ? "text-zinc-900 font-semibold"
                      : isCompleted
                      ? "text-zinc-600 hover:text-zinc-900"
                      : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  {isCompleted ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : isActive ? (
                    <div className="w-5 h-5 rounded-full bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border border-zinc-300 text-zinc-400 text-[10px] flex items-center justify-center shrink-0 group-hover:border-zinc-400">
                      {step.num}
                    </div>
                  )}
                  <span className="text-xs truncate">{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Need help card */}
          <div className="mt-6 p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 text-[11px] text-zinc-600 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
              <SparklesIcon className="w-3.5 h-3.5 text-indigo-600" />
              <span>Need help?</span>
            </div>
            <p className="leading-snug text-zinc-500 text-[10px]">
              Our AI assistant can explain terms and suggest clauses.
            </p>
          </div>
        </div>

        {/* Center Form Editor */}
        <div className="md:col-span-5 p-5 sm:p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-zinc-950">
                Freelance Service Agreement
              </h2>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Step {currentStep} of 6 {steps[currentStep - 1]?.label || "Payment"}
              </p>
            </div>

            {/* Field: How will you be paid? */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-700">
                How will you be paid?
              </label>
              <div className="relative">
                <select
                  value={paymentModel}
                  onChange={(e) => setPaymentModel(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 cursor-pointer pr-8"
                >
                  <option>Milestone-based</option>
                  <option>Fixed Project Fee</option>
                  <option>Hourly Rate</option>
                  <option>Monthly Retainer</option>
                </select>
                <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field: Currency */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-700">
                Currency
              </label>
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 cursor-pointer pr-8"
                >
                  <option>USD (US Dollar)</option>
                  <option>EUR (Euro)</option>
                  <option>GBP (British Pound)</option>
                  <option>INR (Indian Rupee)</option>
                  <option>CAD (Canadian Dollar)</option>
                </select>
                <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field: Milestones */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-zinc-700">
                Milestones
              </label>
              <div className="space-y-1.5">
                {milestones.map((m, idx) => (
                  <div key={m.id} className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-zinc-400 w-3 text-center">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={m.name}
                      onChange={(e) => {
                        const updated = [...milestones];
                        updated[idx].name = e.target.value;
                        setMilestones(updated);
                      }}
                      className="flex-1 rounded-md border border-zinc-200 px-2.5 py-1.5 text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                    <div className="flex items-center gap-1 w-16">
                      <input
                        type="number"
                        value={m.percentage}
                        onChange={(e) => {
                          const updated = [...milestones];
                          updated[idx].percentage = Number(e.target.value);
                          setMilestones(updated);
                        }}
                        className="w-12 rounded-md border border-zinc-200 px-2 py-1.5 text-xs text-zinc-800 text-right focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                      />
                      <span className="text-xs text-zinc-500 font-medium">%</span>
                    </div>
                    {milestones.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMilestone(m.id)}
                        className="text-zinc-400 hover:text-zinc-600 p-0.5"
                        title="Remove milestone"
                      >
                        <XMarkIcon className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddMilestone}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-600 hover:text-zinc-900 mt-1 py-1 px-1.5 rounded hover:bg-zinc-100 transition-colors"
              >
                <PlusIcon className="w-3 h-3 stroke-[2.5]" />
                Add milestone
              </button>
            </div>

            {/* Field: Payment terms */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-700">
                Payment terms
              </label>
              <div className="relative">
                <select
                  value={paymentTerms}
                  onChange={(e) => setPaymentTerms(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 cursor-pointer pr-8"
                >
                  <option>Net 14 (14 days)</option>
                  <option>Net 30 (30 days)</option>
                  <option>Due on Receipt</option>
                  <option>50% Upfront, 50% on Delivery</option>
                </select>
                <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-100">
            <button
              type="button"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
            >
              <ArrowLeftIcon className="w-3 h-3" />
              Back
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-1.5 rounded-lg transition-colors shadow-xs"
            >
              Continue
              <ArrowRightIcon className="w-3 h-3 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Right Intelligence Drawer */}
        <div className="md:col-span-4 p-4 sm:p-5 bg-zinc-50/60 flex flex-col gap-3.5">
          {/* Card 1: Clause Suggestion */}
          {!suggestionDismissed && (
            <div className="relative p-3.5 rounded-xl bg-white border border-indigo-100 shadow-xs space-y-2 transition-all">
              <button
                type="button"
                onClick={() => setSuggestionDismissed(true)}
                className="absolute top-2.5 right-2.5 text-zinc-400 hover:text-zinc-600"
                title="Dismiss"
              >
                <XMarkIcon className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-1.5 text-indigo-600 font-semibold text-xs">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>Clause suggestion</span>
              </div>
              <p className="text-[11px] text-zinc-600 leading-snug">
                Based on your payment terms, this agreement includes a
                milestone-payment provision.
              </p>
              <button
                type="button"
                onClick={() => setShowClauseModal(!showClauseModal)}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-900 hover:text-indigo-600 transition-colors pt-1"
              >
                {showClauseModal ? "Hide preview ↑" : "Review suggestion →"}
              </button>

              {/* Clause preview expandable */}
              {showClauseModal && (
                <div className="mt-2 p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-[10px] text-zinc-700 font-mono leading-relaxed space-y-1">
                  <p className="font-bold text-zinc-900">
                    § 3.2 Milestone Disbursements:
                  </p>
                  <p>
                    &ldquo;Client agrees to disburse funds upon verified
                    completion of each milestone phase within {paymentTerms}. No
                    further deliverables shall proceed without full settlement of
                    antecedent milestone payments.&rdquo;
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Card 2: Why this matters */}
          <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-xs space-y-2">
            <div className="flex items-center gap-1.5 text-zinc-800 font-semibold text-xs">
              <InformationCircleIcon className="w-3.5 h-3.5 text-zinc-500" />
              <span>Why this matters</span>
            </div>
            <p className="text-[11px] text-zinc-600 leading-snug">
              Milestone-based payments help clarify expectations and reduce
              disputes. We&apos;ve added a clause that outlines deliverables,
              timelines, and payment conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
