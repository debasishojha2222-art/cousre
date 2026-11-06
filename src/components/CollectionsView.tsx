import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCategory } from '../types';
import {
  Search,
  Filter,
  ArrowRight,
  Layers,
  Sparkles,
  Download,
  CheckCircle2,
  HardDrive
} from 'lucide-react';

interface CollectionsViewProps {
  initialTab?: 'assets' | 'software';
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({ initialTab = 'assets' }) => {
  const {
    assetCategories,
    softwareCategories,
    navigateTo,
    startCheckout
  } = useApp();

  const [activeTab, setActiveTab] = useState<'assets' | 'software'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormatFilter, setSelectedFormatFilter] = useState<string>('all');

  const categories = activeTab === 'assets' ? assetCategories : softwareCategories;

  const filteredCategories = categories.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.formats.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cat.compatibility.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedFormatFilter === 'all') return true;
    return (
      cat.formats.some((f) => f.toLowerCase().includes(selectedFormatFilter.toLowerCase())) ||
      cat.compatibility.some((c) => c.toLowerCase().includes(selectedFormatFilter.toLowerCase()))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] text-neutral-400 text-xs mb-3">
            <span>EDITVAULT Catalog</span>
            <span className="text-neutral-600">/</span>
            <span className="text-[#C5FF4A]">Verified Creator Libraries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Product Collections
          </h1>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Choose between our high-octane <strong>Assets Library</strong> (14 categories for video editing) or our legitimate <strong>Software Collection</strong> (6 workflow suites), each available for ₹700 or bundled together for ₹1,500.
          </p>
        </div>

        {/* Quick CTA to complete bundle */}
        <div className="shrink-0">
          <button
            onClick={() => navigateTo('bundle')}
            className="py-2.5 px-4 rounded-xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 text-[#C5FF4A] hover:bg-[#C5FF4A] hover:text-black font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Need Both? Get Bundle (₹1,500)</span>
          </button>
        </div>
      </div>

      {/* Tabs & Search Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Segmented Tab Control */}
        <div className="inline-flex p-1 rounded-xl bg-[#141414] border border-white/10 self-start">
          <button
            onClick={() => setActiveTab('assets')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'assets'
                ? 'bg-[#C5FF4A] text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>Assets Library ({assetCategories.length} Master Packs)</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-mono-numbers ${
                activeTab === 'assets' ? 'bg-black/20 text-black' : 'bg-white/10 text-neutral-300'
              }`}
            >
              ₹700
            </span>
          </button>

          <button
            onClick={() => setActiveTab('software')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'software'
                ? 'bg-[#C5FF4A] text-black shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>Software Collection ({softwareCategories.length} Suites)</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-mono-numbers ${
                activeTab === 'software' ? 'bg-black/20 text-black' : 'bg-white/10 text-neutral-300'
              }`}
            >
              ₹700
            </span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search packs, tools, formats..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#141414] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
          />
        </div>
      </div>

      {/* Collection Details Banner */}
      <div className="p-6 rounded-2xl bg-[#121212] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C5FF4A]">
            {activeTab === 'assets' ? 'COLLECTION A' : 'COLLECTION B'}
          </div>
          <h2 className="text-xl font-bold text-white">
            {activeTab === 'assets'
              ? `Assets Library — ${assetCategories.length} Master Packs`
              : `Software Collection — ${softwareCategories.length} Suites`}
          </h2>
          <p className="text-xs text-neutral-400">
            {activeTab === 'assets'
              ? 'Complete editing assets with MOGRTs, After Effects compositing rigs, sound design, and 3D LUTs.'
              : 'Production workflow utilities, audio DSP vocal levelers, keyframe aligners, and automated scripts.'}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <div className="text-neutral-400 text-xs">Collection Price</div>
            <div className="text-2xl font-bold font-mono-numbers text-white">
              <span className="text-[#C5FF4A]">₹700</span>
            </div>
          </div>
          <button
            onClick={() =>
              startCheckout({
                id: activeTab === 'assets' ? 'assets-library' : 'software-collection',
                name: activeTab === 'assets' ? 'ASSETS LIBRARY' : 'SOFTWARE COLLECTION',
                price: 700,
                originalPrice: 1999,
                description:
                  activeTab === 'assets'
                    ? '15,000+ Files across 14 Master Editing Categories with Google Drive Access.'
                    : 'Curated suite of authorized creator workflow tools & utilities.',
                categoriesCount: activeTab === 'assets' ? 14 : 6,
                totalAssetsCount: activeTab === 'assets' ? '15,000+ Files' : '200+ Tools',
                features: []
              })
            }
            className="py-2.5 px-5 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black text-xs font-bold transition-all cursor-pointer shadow-lg"
          >
            Buy {activeTab === 'assets' ? 'Assets Library' : 'Software Suite'} (₹700)
          </button>
        </div>
      </div>

      {/* Grid of Categories */}
      {filteredCategories.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#141414] border border-white/10 text-neutral-400">
          <p className="text-sm">No categories found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFormatFilter('all');
            }}
            className="mt-3 text-xs text-[#C5FF4A] underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              className="group rounded-2xl bg-[#141414] border border-white/[0.08] hover:border-[#C5FF4A]/40 transition-all flex flex-col justify-between overflow-hidden shadow-lg"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="aspect-[16/9] bg-[#181818] overflow-hidden relative">
                  <img
                    src={category.thumbnail}
                    alt={category.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono-numbers text-white border border-white/10">
                    {category.resourceCount} {activeTab === 'assets' ? 'Resources' : 'Tools'}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#C5FF4A]/10 text-[#C5FF4A] text-[10px] font-semibold border border-[#C5FF4A]/20">
                    {category.totalSize}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[11px] font-mono-numbers text-neutral-500 mb-1">
                    {activeTab === 'assets'
                      ? `Pack ${index + 1 < 10 ? `0${index + 1}` : index + 1} of ${categories.length}`
                      : `Suite ${index + 1} of ${categories.length}`}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C5FF4A] transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Formats / Compatibility */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-500 text-[11px]">Formats:</span>
                      <div className="flex flex-wrap gap-1">
                        {category.formats.map((fmt) => (
                          <span
                            key={fmt}
                            className="text-[10px] font-mono-numbers text-neutral-300 bg-white/5 px-1.5 py-0.2 rounded border border-white/5"
                          >
                            {fmt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-neutral-500 text-[11px]">Compatibility:</span>
                      <span className="text-neutral-300 text-[11px] truncate">
                        {category.compatibility.join(', ')}
                      </span>
                    </div>

                    {category.version && (
                      <div className="flex items-center gap-2">
                        <span className="text-neutral-500 text-[11px]">Version:</span>
                        <span className="text-[#C5FF4A] text-[11px] font-mono-numbers">
                          {category.version}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  onClick={() => navigateTo('product-detail', category)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() =>
                    startCheckout({
                      id: activeTab === 'assets' ? 'assets-library' : 'software-collection',
                      name: activeTab === 'assets' ? 'ASSETS LIBRARY' : 'SOFTWARE COLLECTION',
                      price: 700,
                      originalPrice: 1999,
                      description: `Includes access to ${category.name} and all other categories in this collection.`,
                      categoriesCount: activeTab === 'assets' ? 14 : 6,
                      totalAssetsCount: activeTab === 'assets' ? '15,000+ Files' : '200+ Tools',
                      features: []
                    })
                  }
                  className="py-2.5 px-3 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  title="Purchase collection"
                >
                  <span>₹700</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
