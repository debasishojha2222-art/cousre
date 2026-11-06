import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCategory } from '../types';
import {
  Folder,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  FileCode,
  Zap,
  Film,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Sliders,
  Award,
  Layers,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export const HomeSections: React.FC = () => {
  const {
    assetCategories,
    softwareCategories,
    navigateTo,
    startCheckout
  } = useApp();

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does payment and download access work?',
      a: 'We use manual SBI UPI QR verification. When you purchase, you scan our verified SBI QR code in PhonePe, Google Pay, Paytm, or any UPI app, enter your 12-digit UTR transaction reference number, and upload the payment screenshot. Once our admin verifies the bank statement, download access is immediately unlocked in your "My Purchases" and "Download Center".'
    },
    {
      q: 'Do I get instant Google Drive links?',
      a: 'Yes! Upon verification by our admin team (usually within 15 to 30 minutes during active hours), your account receives authorized Google Drive folder links organized cleanly by category. You can download individual files or entire folders with high-speed Google cloud bandwidth.'
    },
    {
      q: 'Can I use these assets for client projects and YouTube?',
      a: 'Yes, 100%. All resources in EDITVAULT come with a royalty-free commercial license. You can use them in client projects, commercial advertisements, monetized YouTube videos, Instagram Reels, TikTok, feature films, and broadcast television without paying royalties.'
    },
    {
      q: 'Are the tools in the Software Collection cracked?',
      a: 'No. EDITVAULT strictly prohibits cracked or pirated software. The Software Collection consists of authorized creator workflow tools, open-source automation binaries, custom-compiled panel scripts (.jsx/.zxp), DSP audio algorithms, and comprehensive video installation documentation.'
    },
    {
      q: 'What is included in the Complete Creator Bundle for ₹1,500?',
      a: 'The Complete Creator Bundle includes EVERYTHING on EDITVAULT: all 8 Master Assets Library packs (25,000+ files) AND all 5 Software Collection workflow suites sourced from our master catalog. Bundle owners also receive VIP priority payment verification and lifetime Google Drive link access.'
    },
    {
      q: 'What if I entered the wrong UTR or have an issue with payment?',
      a: 'You can immediately submit an inquiry through our in-app Support Helpdesk with your Order ID or submitted reference. Our administration team can look up your order, update your transaction reference, and verify your account.'
    }
  ];

  return (
    <div className="space-y-24 py-16">
      {/* 1. Featured Collections Comparison (Collection A vs Collection B) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase font-bold tracking-widest text-[#C5FF4A] mb-2">
            Two Master Vaults
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Curated For High-End Creators
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Choose either specialized collection for ₹700, or unlock both with the Complete Creator Bundle for ₹1,500.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Collection A: Assets Library */}
          <div className="group rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C5FF4A]/40 transition-all p-7 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5FF4A]/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  COLLECTION A
                </span>
                <span className="font-mono-numbers text-xl font-bold text-[#C5FF4A]">
                  ₹700
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Assets Library
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                8 specialized creator categories directly from the master collection including 10,000+ SFX, Envato 30GB, 1000+ motion loops, Ali Abdaal pack, and overlays.
              </p>

              <div className="space-y-2.5 py-4 border-y border-white/[0.06] text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  <span>8 Master Packs & 25,000+ Production Files</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  <span>Native 4K UHD ProRes & Lossless 24-bit 96kHz SFX</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  <span>Commercial & Monetized Video Royalty-Free License</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  <span>Organized Google Drive Folders with Lifetime Mirror</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => navigateTo('collections')}
                className="flex-1 py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-semibold text-center border border-white/10 transition-colors cursor-pointer"
              >
                Browse 8 Master Packs
              </button>
              <button
                onClick={() =>
                  startCheckout({
                    id: 'assets-library',
                    name: 'ASSETS LIBRARY',
                    price: 700,
                    originalPrice: 1999,
                    description: 'The master vault of 25,000+ files from the Google Doc collection.',
                    categoriesCount: 8,
                    totalAssetsCount: '25,000+ Files',
                    features: []
                  })
                }
                className="py-3 px-6 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Buy Library ₹700</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Collection B: Software Collection */}
          <div className="group rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C5FF4A]/40 transition-all p-7 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  COLLECTION B
                </span>
                <span className="font-mono-numbers text-xl font-bold text-[#C5FF4A]">
                  ₹700
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Software Collection
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Curated legitimate creator workflow software, keyframe ease panels, audio DSP VSTs, video auto-cut scripts, and GPU transcoder utilities.
              </p>

              <div className="space-y-2.5 py-4 border-y border-white/[0.06] text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  <span>6 Software Categories: Video, Motion, Design, Audio & Plugins</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  <span>Auto-Silence Cutter & Keyframe Anchor Alignment Panels</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  <span>Broadcast LUFS Vocal Levelers & Reverb Removers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  <span>Complete License Transparency (Zero Cracked Software)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => navigateTo('software')}
                className="flex-1 py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-semibold text-center border border-white/10 transition-colors cursor-pointer"
              >
                Browse Software Tools
              </button>
              <button
                onClick={() =>
                  startCheckout({
                    id: 'software-collection',
                    name: 'SOFTWARE COLLECTION',
                    price: 700,
                    originalPrice: 1999,
                    description: 'Curated suite of authorized creator software, motion panels, VST audio tools, and timeline workflow extensions.',
                    categoriesCount: 6,
                    totalAssetsCount: '200+ Tools',
                    features: []
                  })
                }
                className="py-3 px-6 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Buy Suite ₹700</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Complete Creator Bundle Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#171717] via-[#1A1A1A] to-[#141414] border border-[#C5FF4A]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5FF4A]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5FF4A]/15 border border-[#C5FF4A]/30 text-[#C5FF4A] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ALL-IN-ONE VALUE PACK</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Complete Creator Bundle
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
                Get both the <strong>Assets Library</strong> (15,000+ files across 14 categories) and the <strong>Software Collection</strong> (all 6 tool suites) in one master vault.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-neutral-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />
                  <span>All 20 Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />
                  <span>VIP Priority Approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />
                  <span>Master Drive Mirror</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />
                  <span>Direct In-App Helpdesk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />
                  <span>Free Future Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />
                  <span>Zero Monthly Fees</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col items-center lg:items-end justify-center p-6 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
              <div className="text-neutral-400 text-xs line-through mb-1 font-mono-numbers">
                Individual: ₹1,400+
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono-numbers mb-1">
                <span className="text-[#C5FF4A]">₹1,500</span>
              </div>
              <div className="text-xs text-neutral-400 mb-6 text-center lg:text-right">
                One-time payment · Lifetime access
              </div>

              <button
                onClick={() => navigateTo('bundle')}
                className="w-full py-3.5 px-6 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-sm transition-all flex items-center justify-center gap-2 lime-glow cursor-pointer shadow-lg"
              >
                <span>Get Complete Bundle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editing Assets Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#C5FF4A] mb-2">
              Collection A · Master Assets Packs
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Editing Assets Library
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Every category is meticulously organized with high-resolution master files, alpha transparent channels, and direct Google Drive folders.
            </p>
          </div>

          <button
            onClick={() => navigateTo('collections')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5FF4A] hover:underline cursor-pointer"
          >
            <span>View All Detail Pages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {assetCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="group rounded-xl bg-[#141414] border border-white/[0.07] hover:border-[#C5FF4A]/40 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-[16/10] bg-[#1c1c1c] overflow-hidden relative">
                  <img
                    src={cat.thumbnail}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono-numbers text-neutral-300 border border-white/10">
                    {cat.resourceCount} files
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="text-[11px] text-neutral-500 font-mono-numbers mb-1">
                    Category {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#C5FF4A] transition-colors line-clamp-1">
                    {cat.name}
                  </h4>
                  <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.formats.slice(0, 3).map((fmt) => (
                      <span
                        key={fmt}
                        className="text-[10px] font-mono-numbers text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => navigateTo('product-detail', cat)}
                  className="w-full py-2.5 px-3 rounded-lg bg-white/[0.05] group-hover:bg-[#C5FF4A] group-hover:text-black text-white text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Collection</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Software Collection Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#C5FF4A] mb-2">
              Collection B · 6 Workflow Suites
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Software & Workflow Tools
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Legitimate utilities, motion panels, and audio DSP algorithms engineered to eliminate repetitive timeline friction.
            </p>
          </div>

          <button
            onClick={() => navigateTo('software')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5FF4A] hover:underline cursor-pointer"
          >
            <span>Explore All 6 Software Suites</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareCategories.map((soft) => (
            <div
              key={soft.id}
              className="rounded-xl bg-[#141414] border border-white/[0.07] hover:border-[#C5FF4A]/40 transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="font-mono-numbers">{soft.version}</span>
                  <span className="text-[#C5FF4A] font-medium font-mono-numbers">{soft.resourceCount} tools</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{soft.name}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {soft.description}
                </p>

                <div className="space-y-1.5 py-3 border-t border-white/[0.05] text-[11px] text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 font-medium">Compatibility:</span>
                    <span className="truncate">{soft.compatibility.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 font-medium">License:</span>
                    <span className="truncate">{soft.licenseInfo}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={() => navigateTo('product-detail', soft)}
                  className="w-full py-2 px-3 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Details & Tools</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose EDITVAULT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#121212] border border-white/10 p-8 sm:p-12">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase font-bold tracking-widest text-[#C5FF4A] mb-2">
              The EDITVAULT Standard
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Top Creators Trust EDITVAULT
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Unlike bloated marketplaces with broken torrents and unorganized folders, every megabyte in EDITVAULT is curated by working video editors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C5FF4A]">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Direct Google Drive Mirror</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                No slow file-hosting timers, captcha loops, or bandwidth throttling. Stream directly or download full folders at multi-gigabit speeds.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C5FF4A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Manual Bank Verification</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Zero risky third-party payment gateways collecting your bank card info. Simple, direct SBI UPI transfer with human verified UTR matching.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C5FF4A]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Zero Bloat / Pro Grade</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every asset is checked for native 4K UHD, ProRes 4444 alpha transparency, or 24-bit 96kHz audio clarity. Ready to drop onto your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs uppercase font-bold tracking-widest text-[#C5FF4A] mb-2">
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Everything you need to know about purchasing, UPI verification, and Google Drive access.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#141414] border border-white/[0.08] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-neutral-400 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Helpdesk Kicker */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <HelpCircle className="w-4 h-4 text-[#C5FF4A]" />
            <span>Have a question about Google Drive links, extraction, or payment?</span>
          </div>
          <button
            onClick={() => navigateTo('support')}
            className="text-xs font-semibold text-[#C5FF4A] hover:underline cursor-pointer"
          >
            Visit Support & Verification Helpdesk →
          </button>
        </div>
      </section>
    </div>
  );
};
