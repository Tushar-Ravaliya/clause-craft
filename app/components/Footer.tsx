import React from "react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-white">
              <div className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-7 h-7 text-white"
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
                <span className="font-bold text-xl tracking-tight text-white">
                  ClauseCraft
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Jurisdiction-aware legal agreement engine for independent
              professionals and growing businesses. Structure clauses, configure
              terms, and draft with clarity.
            </p>
          </div>

          {/* Links: Product */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-white transition-colors">
                  Document Library
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-white transition-colors">
                  Jurisdictions
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Documents */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Agreements
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#documents" className="hover:text-white transition-colors">
                  Non-Disclosure Agreement (NDA)
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-white transition-colors">
                  Freelance Service Agreement
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-white transition-colors">
                  IP Assignment Agreement
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-white transition-colors">
                  Statement of Work (SOW)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Disclaimer */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Legal Notice
            </h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              ClauseCraft is not a law firm and does not provide legal advice,
              representation, or attorney-client privileged services. All
              documents are templates provided for customization by users.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} ClauseCraft Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
