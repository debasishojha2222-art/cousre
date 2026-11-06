import React from 'react';
import { useApp } from '../context/AppContext';
import { BUNDLE_PRODUCTS } from '../data/mockData';
import {
  CheckCircle2,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HardDrive,
  Layers,
  Zap
} from 'lucide-react';

export const BundleView: React.FC = () => {
  const { startCheckout, navigateTo } = useApp();

  const comparisonFeatures = [
    { name: '8 Master Asset Packs (10K SFX, Envato 30GB, Ali Abdaal)', assets: true, software: false, bundle: true },
    { name: '25,000+ Production Ready 4K Files', assets: true, software: false, bundle: true },
    { name: '10,000+ Sound Effects & Sam Kolder Pulse Pack', assets: true, software: false, bundle: true },
    { name: '1000+ Motion Backgrounds & Green Screen Studios', assets: true, software: false, bundle: true },
    { name: '5 Software & Plugin Suites (Adobe Suite, GeoLayers, Dehancer)', assets: false, software: true, bundle: true },
    { name: 'GeoLayers v3 Map Animation Tool for AE', assets: false, software: true, bundle: true },
    { name: 'Dehancer Pro Film Emulation & Halation Plugin', assets: false, software: true, bundle: true },
    { name: 'Direct Google Drive Folder Download Mirrors', assets: true, software: true, bundle: true },
    { name: 'Royalty-Free Commercial Project License', assets: true, software: true, bundle: true },
    { name: 'Instant SBI UPI QR Scanner Verification', assets: true, software: true, bundle: true },
    { name: 'VIP Priority Verification Queue', assets: false, software: false, bundle: true },
    { name: 'Direct In-App Priority Support Desk', assets: false, software: false, bundle: true },
    { name: 'Lifetime Google Drive File Access', assets: true, software: true, bundle: true }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300">
          <Sparkles className="w-3.5 h-3.5 text-[#C5FF4A]" />
          <span>Simple, Honest Creator Pricing</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Pricing & Bundles
        </h1>
        <p className="text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Transparent one-time pricing with zero subscriptions. Choose an individual collection or get everything in the Complete Creator Bundle.
        </p>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {BUNDLE_PRODUCTS.map((prod) => {
          const isBundle = prod.id === 'creator-bundle';
          return (
            <div
              key={prod.id}
              className={`rounded-2xl flex flex-col justify-between p-8 transition-all relative ${
                isBundle
                  ? 'bg-[#151515] border-2 border-[#C5FF4A] shadow-2xl lime-border-glow'
                  : 'bg-[#141414] border border-white/10 hover:border-white/20'
              }`}
            >
              {isBundle && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C5FF4A] text-black font-extrabold text-[11px] tracking-wider uppercase shadow-md">
                  MOST POPULAR CREATOR CHOICE
                </div>
              )}

              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span className="uppercase font-semibold tracking-wider">
                    {prod.categoriesCount} Categories
                  </span>
                  <span className="font-mono-numbers text-neutral-400">{prod.totalAssetsCount}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{prod.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6 min-h-[36px]">
                  {prod.description}
                </p>

                {/* Price Display */}
                <div className="py-4 border-y border-white/[0.07] mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white font-mono-numbers">
                      <span className={isBundle ? 'text-[#C5FF4A]' : 'text-white'}>
                        ₹{prod.price.toLocaleString()}
                      </span>
                    </span>
                    <span className="text-xs text-neutral-400">One-time payment</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    No recurring fees · Lifetime access
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <div className="space-y-3 text-xs text-neutral-300">
                  {prod.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isBundle ? 'text-[#C5FF4A]' : 'text-neutral-400'
                        }`}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Button */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => startCheckout(prod)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isBundle
                      ? 'bg-[#C5FF4A] hover:bg-[#b4f535] text-black lime-glow'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                  }`}
                >
                  <span>Purchase {prod.name} (₹{prod.price.toLocaleString()})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Comparison Table */}
      <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Full Feature Comparison</h2>
          <p className="text-xs text-neutral-400 mt-1">
            See exactly what is included in each package.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] text-neutral-400 font-semibold bg-black/30">
                <th className="py-4 px-6">Feature</th>
                <th className="py-4 px-6 text-center">Assets Library (₹700)</th>
                <th className="py-4 px-6 text-center">Software Collection (₹700)</th>
                <th className="py-4 px-6 text-center text-[#C5FF4A] bg-[#C5FF4A]/5">
                  Complete Bundle (₹1,500)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-neutral-300">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-6 font-medium text-white">{row.name}</td>
                  <td className="py-3.5 px-6 text-center">
                    {row.assets ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-neutral-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-center">
                    {row.software ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-neutral-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-center bg-[#C5FF4A]/5">
                    {row.bundle ? (
                      <CheckCircle2 className="w-4 h-4 text-[#C5FF4A] mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-neutral-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
