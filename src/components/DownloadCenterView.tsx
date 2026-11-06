import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Folder,
  FolderOpen,
  Download,
  Lock,
  ExternalLink,
  ShieldCheck,
  HardDrive,
  FileText,
  FileCode,
  Music,
  Video,
  Layers,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const DownloadCenterView: React.FC = () => {
  const {
    downloadFolders,
    hasVerifiedPurchase,
    navigateTo,
    orders,
    adminSettings,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'all' | 'assets' | 'software'>('all');
  const [openFolderId, setOpenFolderId] = useState<string | null>('folder-pr');

  const hasAssetsAccess = hasVerifiedPurchase('assets');
  const hasSoftwareAccess = hasVerifiedPurchase('software');
  const hasAnyAccess = hasAssetsAccess || hasSoftwareAccess;

  // Filter folders by active tab
  const filteredFolders = downloadFolders.filter((folder) => {
    if (activeTab === 'all') return true;
    return folder.collectionId === activeTab;
  });

  const handleDownloadFile = (fileName: string, link: string) => {
    showToast(`Opening download stream for "${fileName}" from secure Google Drive mirror.`, 'info');
    window.open(link, '_blank');
  };

  const handleOpenMasterDrive = () => {
    showToast('Opening EDITVAULT Master Drive VIP directory...', 'success');
    window.open(adminSettings.driveMasterLink, '_blank');
  };

  // IF USER DOES NOT HAVE ANY VERIFIED PURCHASE
  if (!hasAnyAccess) {
    const hasPendingOrder = orders.some((o) => o.status === 'pending');

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 mx-auto">
            <Lock className="w-8 h-8 text-[#C5FF4A]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/5 uppercase tracking-wider">
              Protected Vault Storage
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-2">
              Download Center Locked
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
              Google Drive links and folder archives are strictly restricted to verified purchasers of the <strong>Assets Library</strong> or <strong>Software Collection</strong>.
            </p>
          </div>

          {hasPendingOrder ? (
            <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-left text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>You have an order awaiting manual verification</span>
              </div>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                Our admin team is currently verifying your submitted UTR against the bank statement. Once verified, this page will automatically unlock all folder downloads.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('purchases')}
                  className="text-xs text-amber-300 underline font-semibold cursor-pointer"
                >
                  View Order Status in My Purchases →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-400">
              No verified purchase found for your account. Complete payment for either library to unlock instant Drive access.
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <button
              onClick={() => navigateTo('bundle')}
              className="py-3 px-6 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg lime-glow"
            >
              <span>Get Creator Bundle (₹1,500)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('collections')}
              className="py-3 px-6 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold text-xs border border-white/10 transition-colors cursor-pointer"
            >
              <span>Browse Collections (₹700)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // UNLOCKED STATE FOR VERIFIED CUSTOMERS
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header with Master Drive Button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 text-[#C5FF4A] text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Authorized Customer Access Active</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Download Center
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-xl">
            Access your purchased folders and files. You can download individual resources or browse the entire Google Drive master archive.
          </p>
        </div>

        <button
          onClick={handleOpenMasterDrive}
          className="py-3 px-5 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-lg lime-glow shrink-0"
        >
          <HardDrive className="w-4 h-4" />
          <span>Open Master Google Drive</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="inline-flex p-1 rounded-xl bg-[#141414] border border-white/10 text-xs">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'all' ? 'bg-white/15 text-white' : 'text-neutral-400 hover:text-white'
          }`}
        >
          All Vault Folders ({downloadFolders.length})
        </button>
        <button
          onClick={() => setActiveTab('assets')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'assets' ? 'bg-[#C5FF4A] text-black font-semibold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <span>Assets Library</span>
          {!hasAssetsAccess && <Lock className="w-3 h-3 text-neutral-500" />}
        </button>
        <button
          onClick={() => setActiveTab('software')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'software' ? 'bg-[#C5FF4A] text-black font-semibold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <span>Software Collection</span>
          {!hasSoftwareAccess && <Lock className="w-3 h-3 text-neutral-500" />}
        </button>
      </div>

      {/* Folder-Style Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFolders.map((folder) => {
          const isOpen = openFolderId === folder.id;
          const isFolderLocked =
            (folder.collectionId === 'assets' && !hasAssetsAccess) ||
            (folder.collectionId === 'software' && !hasSoftwareAccess);

          return (
            <div
              key={folder.id}
              className={`rounded-2xl transition-all border flex flex-col justify-between overflow-hidden ${
                isOpen
                  ? 'bg-[#161616] border-[#C5FF4A]/40 shadow-xl'
                  : 'bg-[#141414] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="p-6">
                {/* Folder Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5FF4A]">
                    {isOpen ? <FolderOpen className="w-5 h-5" /> : <Folder className="w-5 h-5" />}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono-numbers text-neutral-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                      {folder.totalSize}
                    </span>
                  </div>
                </div>

                {/* Folder Title & Count */}
                <h3 className="text-base font-bold text-white mb-1">{folder.name}</h3>
                <div className="text-xs text-neutral-400 mb-4">
                  <span>{folder.resourceCount} files</span>
                  <span className="text-neutral-600 mx-1.5">·</span>
                  <span className="uppercase text-[10px] tracking-wider text-[#C5FF4A]">
                    {folder.collectionId === 'assets' ? 'Assets' : 'Software'}
                  </span>
                </div>

                {/* Files Preview list if open */}
                {isOpen && !isFolderLocked && (
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2.5">
                    <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Files Inside Folder:
                    </div>
                    {folder.files.map((file) => (
                      <div
                        key={file.id}
                        className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="font-mono-numbers text-white font-medium truncate text-[11px]">
                            {file.name}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-neutral-400 mt-0.5">
                            <span className="bg-white/10 px-1.5 py-0.2 rounded font-mono-numbers text-neutral-300">
                              {file.type}
                            </span>
                            <span>{file.size}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDownloadFile(file.name, file.driveLink)}
                          className="p-2 rounded-lg bg-[#C5FF4A]/10 hover:bg-[#C5FF4A] text-[#C5FF4A] hover:text-black transition-colors shrink-0 cursor-pointer"
                          title="Download file from Drive"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {isFolderLocked && (
                  <div className="mt-3 p-3 rounded-lg bg-black/30 border border-white/5 flex items-center gap-2 text-xs text-neutral-400">
                    <Lock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Purchase required to unlock this folder</span>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-white/[0.04] mt-4 flex items-center gap-2">
                {isFolderLocked ? (
                  <button
                    onClick={() => navigateTo('bundle')}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#C5FF4A] text-black text-xs font-bold transition-all text-center cursor-pointer"
                  >
                    Unlock Folder (₹700)
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenFolderId(isOpen ? null : folder.id)}
                      className="flex-1 py-2 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{isOpen ? 'Collapse Files' : 'Open Folder'}</span>
                    </button>
                    <button
                      onClick={() => window.open(folder.driveUrl, '_blank')}
                      className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                      title="Open full folder in Google Drive"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
