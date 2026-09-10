"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            How it works
          </a>
          <a
            href="#documents"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Documents
          </a>
          <a
            href="#jurisdictions"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Jurisdictions
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Right Action buttons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#signin"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            Sign in
          </a>
          <a
            href="#builder"
            className="inline-flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-xs active:scale-[0.98]"
          >
            Create a document
            <ArrowRightIcon className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-950 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-700 hover:text-zinc-950 py-1"
          >
            How it works
          </a>
          <a
            href="#documents"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-700 hover:text-zinc-950 py-1"
          >
            Documents
          </a>
          <a
            href="#jurisdictions"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-700 hover:text-zinc-950 py-1"
          >
            Jurisdictions
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-700 hover:text-zinc-950 py-1"
          >
            Pricing
          </a>
          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
            <a
              href="#signin"
              className="text-base font-medium text-zinc-700 hover:text-zinc-950 py-1"
            >
              Sign in
            </a>
            <a
              href="#builder"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-zinc-950 text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center"
            >
              Create a document
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
