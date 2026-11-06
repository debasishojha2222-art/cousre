import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCategory } from '../types';
import {
  ArrowLeft,
  CheckCircle2,
  HardDrive,
  ShieldCheck,
  FileCode,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  Download,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ProductDetailViewProps {
  category: ProductCategory;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ category }) => {
  const { navigateTo, startCheckout, hasVerifiedPurchase } = useApp();
  const [expandContent, setExpandContent] = useState(true);

  const isUnlocked = hasVerifiedPurchase(category.collection);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-neutral-400">
        <button
          onClick={() => navigateTo('collections')}
          className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Collections</span>
        </button>
        <span className="text-neutral-600">/</span>
        <span className="text-neutral-300">
          {category.collection === 'assets' ? 'Assets Library' : 'Software Collection'}
        </span>
        <span className="text-neutral-600">/</span>
        <span className="text-[#C5FF4A] font-medium">{category.name}</span>
      </div>

      {/* Main Grid: Left Gallery/Info & Right Sticky Purchase Module */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Image, Story, Included Content */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Showcase Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-white/10 aspect-video shadow-2xl">
            <img
              src={category.thumbnail}
              alt={category.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-xs font-mono-numbers text-white border border-white/10">
                  {category.resourceCount} {category.collection === 'assets' ? 'Files' : 'Tools'}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#C5FF4A]/10 text-[#C5FF4A] text-xs font-semibold border border-[#C5FF4A]/20">
                  {category.totalSize}
                </span>
              </div>
              {category.version && (
                <span className="px-2.5 py-1 rounded bg-white/10 text-white text-xs font-mono-numbers">
                  {category.version}
                </span>
              )}
            </div>
          </div>

          {/* Description & Overview */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {category.name}
            </h1>
            <p className="text-base text-neutral-300 leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Highlights */}
          {category.highlights && (
            <div className="flex flex-wrap gap-2 pt-2">
              {category.highlights.map((h, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-neutral-200 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5FF4A]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}

          {/* Expandable Included Content Section */}
          <div className="rounded-xl bg-[#141414] border border-white/10 overflow-hidden">
            <button
              onClick={() => setExpandContent(!expandContent)}
              className="w-full p-5 text-left flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C5FF4A]" />
                <span className="text-sm font-bold text-white">
                  Included Content & Pack Breakdown
                </span>
                <span className="text-xs text-neutral-500 font-mono-numbers">
                  ({category.includedItems.length} items)
                </span>
              </div>
              {expandContent ? (
                <ChevronUp className="w-4 h-4 text-neutral-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              )}
            </button>

            {expandContent && (
              <div className="p-5 pt-0 border-t border-white/[0.05] space-y-3">
                {category.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Technical Specifications Table */}
          <div className="rounded-xl bg-[#141414] border border-white/10 p-6 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="text-neutral-500 text-[11px] block">Supported Formats</span>
                <div className="flex flex-wrap gap-1 font-mono-numbers text-white">
                  {category.formats.map((f) => (
                    <span key={f} className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="text-neutral-500 text-[11px] block">File Archive Size</span>
                <div className="font-mono-numbers text-white font-semibold">
                  {category.totalSize}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1 sm:col-span-2">
                <span className="text-neutral-500 text-[11px] block">System & Software Compatibility</span>
                <div className="text-white">
                  {category.compatibility.join(' · ')}
                </div>
              </div>

              {category.licenseInfo && (
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1 sm:col-span-2">
                  <span className="text-neutral-500 text-[11px] block">Distribution & License</span>
                  <div className="text-neutral-300 text-[11px] leading-relaxed">
                    {category.licenseInfo}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Purchase Module */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          <div className="rounded-2xl bg-[#141414] border border-white/15 p-7 shadow-2xl space-y-6">
            <div className="space-y-1">
              <div className="text-xs uppercase font-bold tracking-wider text-neutral-400">
                {category.collection === 'assets' ? 'Collection A Access' : 'Collection B Access'}
              </div>
              <h2 className="text-xl font-bold text-white">
                {category.collection === 'assets' ? 'Assets Library Pass' : 'Software Collection Pass'}
              </h2>
              <p className="text-xs text-neutral-400">
                Purchasing this collection gives you access to <strong>{category.name}</strong> as well as <strong>all other {category.collection === 'assets' ? '14 asset' : '6 software'} categories</strong>!
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-extrabold text-[#C5FF4A] font-mono-numbers">
                  ₹700
                </span>
                <span className="text-neutral-500 text-xs line-through ml-2 font-mono-numbers">
                  ₹1,999
                </span>
              </div>
              <span className="text-[11px] text-neutral-400">One-time payment</span>
            </div>

            {/* Included in this pass */}
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                <span>Complete Google Drive folder download link</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                <span>All {category.resourceCount} files in this pack + full collection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                <span>100% Commercial Royalty-Free usage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                <span>Manual SBI UPI Verification support</span>
              </div>
            </div>

            {/* Security Notice on Drive link */}
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-neutral-400">
              <Lock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-neutral-200">Protected Drive Access:</span>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Private Google Drive download links are protected and unlocked in your account immediately after admin verification of your UPI UTR reference.
                </p>
              </div>
            </div>

            {/* Purchase CTA */}
            <div className="space-y-3 pt-2">
              {isUnlocked ? (
                <button
                  onClick={() => navigateTo('downloads')}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Access Unlocked Downloads</span>
                </button>
              ) : (
                <button
                  onClick={() =>
                    startCheckout({
                      id: category.collection === 'assets' ? 'assets-library' : 'software-collection',
                      name: category.collection === 'assets' ? 'ASSETS LIBRARY' : 'SOFTWARE COLLECTION',
                      price: 700,
                      originalPrice: 1999,
                      description: `Includes full access to ${category.name} and all packs in this collection.`,
                      categoriesCount: category.collection === 'assets' ? 14 : 6,
                      totalAssetsCount: category.collection === 'assets' ? '15,000+ Files' : '200+ Tools',
                      features: []
                    })
                  }
                  className="w-full py-3.5 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg lime-glow"
                >
                  <span>Buy Collection Pass (₹700)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {/* Upgrade to Bundle Option */}
              <button
                onClick={() => navigateTo('bundle')}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-semibold text-center border border-white/10 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Upgrade to Complete Bundle (Both for ₹1,500)</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C5FF4A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
