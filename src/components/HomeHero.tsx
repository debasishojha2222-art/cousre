import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Layers, Sparkles, Check, DownloadCloud, Play } from 'lucide-react';

export const HomeHero: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-white/[0.06]">
      {/* Subtle radial ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#C5FF4A]/[0.04] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[300px] bg-emerald-500/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Subtle kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5FF4A]" />
            <span className="font-medium text-white">EDITVAULT 2026 Master Vault</span>
            <span className="text-neutral-500">·</span>
            <span className="text-[#C5FF4A]">Instant Drive Access</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
            Upgrade Your Creative <span className="text-[#C5FF4A]">Workflow.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto text-balance font-normal">
            Everything you need to edit, design and create better content — organized in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigateTo('collections')}
              className="px-6 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] text-white font-semibold text-sm border border-white/10 transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:border-white/20"
            >
              <span>Explore Collections</span>
              <Layers className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={() => navigateTo('bundle')}
              className="px-6 py-3 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-[#090909] font-bold text-sm transition-all flex items-center gap-2 cursor-pointer lime-glow"
            >
              <span>View Bundle (₹1,500)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Key Value Points */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#C5FF4A]" />
              <span>15,000+ Curated Files</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#C5FF4A]" />
              <span>UPI QR Scanner Verification</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#C5FF4A]" />
              <span>Lifetime Google Drive Access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#C5FF4A]" />
              <span>100% Commercial Royalty-Free</span>
            </div>
          </div>
        </div>

        {/* Hero Media Showcase Card */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl">
            <div className="relative rounded-xl overflow-hidden bg-[#121212] aspect-video">
              <img
                src="/src/assets/images/hero_creator_workspace_1793988784212.jpg"
                alt="EDITVAULT Professional Video Editing Studio and Resource Suite"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/30 pointer-events-none" />

              {/* Floating UI Chips */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-4 pointer-events-auto">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#090909]/80 backdrop-blur-md border border-white/10 text-xs text-white">
                    <span className="w-2 h-2 rounded-full bg-[#C5FF4A]" />
                    <span className="font-semibold">ProRes 4444 & MOGRT Active</span>
                  </div>
                  <p className="text-xs text-neutral-300 drop-shadow hidden sm:block">
                    Organized Google Drive folders with instant drag-and-drop support for Premiere & AE.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigateTo('collections')}
                    className="px-3.5 py-2 rounded-lg bg-[#090909]/80 hover:bg-[#090909] backdrop-blur-md text-white text-xs font-medium border border-white/15 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <DownloadCloud className="w-3.5 h-3.5 text-[#C5FF4A]" />
                    <span>Browse Master Catalog</span>
                  </button>
                  <button
                    onClick={() => navigateTo('bundle')}
                    className="px-3.5 py-2 rounded-lg bg-[#C5FF4A] text-black text-xs font-bold hover:bg-[#b4f535] transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
                  >
                    <span>Get All for ₹1,500</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
