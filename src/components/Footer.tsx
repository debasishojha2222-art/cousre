import React from 'react';
import { useApp } from '../context/AppContext';
import {
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  QrCode
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-white/[0.08] text-neutral-400 text-xs">
      {/* Trust Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-neutral-300">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-center text-[#C5FF4A] shrink-0">
              <HardDrive className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Direct Drive Delivery</div>
              <div className="text-neutral-400 text-[11px]">Authorized Google Drive master links upon verification</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-center text-[#C5FF4A] shrink-0">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">UPI Scanner Payment</div>
              <div className="text-neutral-400 text-[11px]">Scan SBI QR with any UPI app & submit UTR</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-center text-[#C5FF4A] shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Commercial License</div>
              <div className="text-neutral-400 text-[11px]">Use in client, personal & YouTube projects</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-center text-[#C5FF4A] shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Verified Creator Vault</div>
              <div className="text-neutral-400 text-[11px]">Curated master tools and production assets</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#161616] border border-white/10 flex items-center justify-center">
                <span className="font-heading font-black text-xs text-[#C5FF4A]">EV</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                EDIT<span className="text-[#C5FF4A]">VAULT</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              The premier digital creator resource marketplace. Curated editing assets, motion templates, sound effects, and legitimate creator workflow suites.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('support')}
                className="inline-flex items-center gap-2 text-xs text-[#C5FF4A] hover:underline cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Need assistance? Visit the Support Desk</span>
              </button>
            </div>
          </div>

          {/* Column: Marketplace */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">
              Marketplace
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => navigateTo('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Assets Library (₹700)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('software')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Software Collection (₹700)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('bundle')}
                  className="hover:text-white transition-colors cursor-pointer text-[#C5FF4A]"
                >
                  Complete Bundle (₹1,500)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('purchases')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  My Purchases
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('downloads')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Download Center
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Master Google Doc Categories */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">
              Key Packs
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Envato 30GB & 10GB Pack</li>
              <li>10,000+ SFX & Sam Kolder Pulse</li>
              <li>1000+ Motion Backgrounds</li>
              <li>Ali Abdaal & Dhruv Rathee Packs</li>
              <li>Adobe Suite & GeoLayers</li>
              <li>Dehancer Pro Color Grading</li>
            </ul>
          </div>

          {/* Column: Support & Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">
              Support & Legal
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => navigateTo('support')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Helpdesk & Verification Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('legal-license')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Digital Product License
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('legal-refund')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('legal-terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('legal-privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>
            © {new Date().getFullYear()} EDITVAULT. All rights reserved. Sourced from master creator collections.
          </p>
          <p className="text-neutral-400 max-w-lg text-center md:text-right">
            All resources and software workflows are organized directly from verified developer distributions.
          </p>
        </div>
      </div>
    </footer>
  );
};
