import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Order, OrderStatus, DownloadFolder } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Search,
  Check,
  X,
  Eye,
  Settings,
  HardDrive,
  Users,
  Layers,
  Save,
  Plus,
  ExternalLink,
  QrCode
} from 'lucide-react';

export const AdminDashboardView: React.FC = () => {
  const {
    orders,
    updateOrderStatus,
    adminSettings,
    updateAdminSettings,
    downloadFolders,
    updateDownloadFolder,
    addDownloadFolder,
    assetCategories,
    softwareCategories,
    showToast
  } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<
    'overview' | 'verification' | 'orders' | 'downloads' | 'products' | 'customers' | 'settings'
  >('overview');

  // Search & Filter
  const [orderSearchQuery, setOrderSearchQuery] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState<'all' | OrderStatus>('all');
  const [downloadFolderSearch, setDownloadFolderSearch] = useState('');
  const [downloadCollectionFilter, setDownloadCollectionFilter] = useState<'all' | 'assets' | 'software'>('all');

  // Modal for Viewing Screenshot
  const [selectedScreenshotOrder, setSelectedScreenshotOrder] = useState<Order | null>(null);

  // Rejection note prompt
  const [rejectionModalOrder, setRejectionModalOrder] = useState<Order | null>(null);
  const [rejectionReasonInput, setRejectionReasonInput] = useState('');

  // Settings form
  const [settingsForm, setSettingsForm] = useState(adminSettings);

  // New folder form
  const [newFolderForm, setNewFolderForm] = useState({
    name: '',
    collectionId: 'assets' as 'assets' | 'software',
    categorySlug: '',
    resourceCount: 100,
    totalSize: '5.0 GB',
    driveUrl: ''
  });
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);

  // Metrics
  const totalOrders = orders.length;
  const verifiedOrders = orders.filter((o) => o.status === 'verified');
  const pendingOrders = orders.filter((o) => o.status === 'pending');
  const totalRevenue = verifiedOrders.reduce((sum, o) => sum + o.amount, 0);

  // Distinct customers
  const customerEmails = Array.from(new Set(orders.map((o) => o.customerEmail.toLowerCase())));
  const totalCustomers = customerEmails.length;

  // Filtered orders
  const filteredOrders = orders.filter((ord) => {
    const matchesSearch =
      ord.id.toLowerCase().includes(orderSearchQuery.toLowerCase()) ||
      ord.customerName.toLowerCase().includes(orderSearchQuery.toLowerCase()) ||
      ord.customerEmail.toLowerCase().includes(orderSearchQuery.toLowerCase()) ||
      ord.utrNumber.toLowerCase().includes(orderSearchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (orderStatusFilter === 'all') return true;
    return ord.status === orderStatusFilter;
  });

  // Filtered download folders
  const filteredDownloadFolders = downloadFolders.filter((folder) => {
    const matchesSearch =
      folder.name.toLowerCase().includes(downloadFolderSearch.toLowerCase()) ||
      folder.driveUrl.toLowerCase().includes(downloadFolderSearch.toLowerCase());
    if (!matchesSearch) return false;
    if (downloadCollectionFilter === 'all') return true;
    return folder.collectionId === downloadCollectionFilter;
  });

  const handleApprove = (order: Order) => {
    updateOrderStatus(
      order.id,
      'verified',
      `SBI Bank QR Statement Verified at ${new Date().toLocaleTimeString()} by Admin.`
    );
  };

  const handleOpenRejectModal = (order: Order) => {
    setRejectionModalOrder(order);
    setRejectionReasonInput('UTR not credited in SBI statement / Invalid transaction proof.');
  };

  const handleConfirmReject = () => {
    if (rejectionModalOrder) {
      updateOrderStatus(
        rejectionModalOrder.id,
        'rejected',
        'Rejected by Admin',
        rejectionReasonInput.trim() || 'Payment not found in bank records.'
      );
      setRejectionModalOrder(null);
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateAdminSettings(settingsForm);
  };

  const handleCreateFolder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderForm.name.trim() || !newFolderForm.driveUrl.trim()) {
      showToast('Please enter folder name and Google Drive URL', 'error');
      return;
    }

    const newFolder: DownloadFolder = {
      id: `folder-${Date.now()}`,
      collectionId: newFolderForm.collectionId,
      name: newFolderForm.name,
      categorySlug: newFolderForm.categorySlug || 'custom-pack',
      resourceCount: Number(newFolderForm.resourceCount) || 50,
      totalSize: newFolderForm.totalSize || '2.0 GB',
      driveUrl: newFolderForm.driveUrl,
      files: [
        {
          id: `file-${Date.now()}`,
          name: `${newFolderForm.name.replace(/\s+/g, '_')}_Master_Drive`,
          type: 'DRIVE / ZIP',
          size: newFolderForm.totalSize || '2.0 GB',
          driveLink: newFolderForm.driveUrl
        }
      ]
    };

    addDownloadFolder(newFolder);
    setShowAddFolderModal(false);
    setNewFolderForm({
      name: '',
      collectionId: 'assets',
      categorySlug: '',
      resourceCount: 100,
      totalSize: '5.0 GB',
      driveUrl: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 text-[#C5FF4A] text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Master Admin Console</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            EDITVAULT Verification & Links Hub
          </h1>
          <p className="text-xs text-neutral-400 mt-0.5">
            Audit SBI QR payments against submitted UTR numbers and manage master Google Drive resource links.
          </p>
        </div>

        {/* Quick Pending Alert */}
        {pendingOrders.length > 0 && (
          <button
            onClick={() => setActiveAdminTab('verification')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold hover:bg-amber-400/20 transition-all cursor-pointer"
          >
            <Clock className="w-4 h-4 animate-pulse" />
            <span>{pendingOrders.length} Pending Payments Require UTR Audit</span>
          </button>
        )}
      </div>

      {/* Admin Nav Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/[0.06] text-xs">
        <button
          onClick={() => setActiveAdminTab('overview')}
          className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer ${
            activeAdminTab === 'overview'
              ? 'bg-[#C5FF4A] text-black font-bold'
              : 'text-neutral-400 hover:text-white bg-white/[0.03]'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveAdminTab('verification')}
          className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
            activeAdminTab === 'verification'
              ? 'bg-[#C5FF4A] text-black font-bold'
              : 'text-neutral-400 hover:text-white bg-white/[0.03]'
          }`}
        >
          <span>Payment Verification</span>
          {pendingOrders.length > 0 && (
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeAdminTab === 'verification' ? 'bg-black text-[#C5FF4A]' : 'bg-amber-400 text-black'
              }`}
            >
              {pendingOrders.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveAdminTab('downloads')}
          className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
            activeAdminTab === 'downloads'
              ? 'bg-[#C5FF4A] text-black font-bold'
              : 'text-neutral-400 hover:text-white bg-white/[0.03]'
          }`}
        >
          <HardDrive className="w-3.5 h-3.5" />
          <span>Resource Links ({downloadFolders.length})</span>
        </button>
        <button
          onClick={() => setActiveAdminTab('orders')}
          className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer ${
            activeAdminTab === 'orders'
              ? 'bg-[#C5FF4A] text-black font-bold'
              : 'text-neutral-400 hover:text-white bg-white/[0.03]'
          }`}
        >
          All Orders ({totalOrders})
        </button>
        <button
          onClick={() => setActiveAdminTab('products')}
          className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer ${
            activeAdminTab === 'products'
              ? 'bg-[#C5FF4A] text-black font-bold'
              : 'text-neutral-400 hover:text-white bg-white/[0.03]'
          }`}
        >
          Catalog Collections
        </button>
        <button
          onClick={() => setActiveAdminTab('customers')}
          className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer ${
            activeAdminTab === 'customers'
              ? 'bg-[#C5FF4A] text-black font-bold'
              : 'text-neutral-400 hover:text-white bg-white/[0.03]'
          }`}
        >
          Customers ({totalCustomers})
        </button>
        <button
          onClick={() => setActiveAdminTab('settings')}
          className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
            activeAdminTab === 'settings'
              ? 'bg-[#C5FF4A] text-black font-bold'
              : 'text-neutral-400 hover:text-white bg-white/[0.03]'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Settings</span>
        </button>
      </div>

      {/* 1. OVERVIEW TAB */}
      {activeAdminTab === 'overview' && (
        <div className="space-y-8">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-1">
              <span className="text-neutral-400 text-xs">Total Orders</span>
              <div className="text-2xl font-bold font-mono-numbers text-white">{totalOrders}</div>
              <div className="text-[10px] text-neutral-500">All submitted transactions</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-1">
              <span className="text-neutral-400 text-xs">Verified Payments</span>
              <div className="text-2xl font-bold font-mono-numbers text-[#C5FF4A]">
                {verifiedOrders.length}
              </div>
              <div className="text-[10px] text-emerald-400/80">Drive links dispatched</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-1">
              <span className="text-neutral-400 text-xs">Pending Verification</span>
              <div className="text-2xl font-bold font-mono-numbers text-amber-300">
                {pendingOrders.length}
              </div>
              <div className="text-[10px] text-amber-400/80">Awaiting UTR match</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-1">
              <span className="text-neutral-400 text-xs">Verified Revenue</span>
              <div className="text-2xl font-bold font-mono-numbers text-white">
                ₹{totalRevenue.toLocaleString()}
              </div>
              <div className="text-[10px] text-neutral-400">SBI UPI credits only</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-1">
              <span className="text-neutral-400 text-xs">Master Resources Linked</span>
              <div className="text-2xl font-bold font-mono-numbers text-white">
                {downloadFolders.length}
              </div>
              <div className="text-[10px] text-neutral-500">From Google Doc</div>
            </div>
          </div>

          {/* Quick Verification Queue Snippet */}
          <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Orders Awaiting UPI Verification</h3>
                <p className="text-xs text-neutral-400">
                  Transactions scanned via SBI QR waiting for bank statement reconciliation.
                </p>
              </div>
              <button
                onClick={() => setActiveAdminTab('verification')}
                className="text-xs text-[#C5FF4A] hover:underline font-semibold"
              >
                Go to Verification Desk ({pendingOrders.length}) →
              </button>
            </div>

            {pendingOrders.length === 0 ? (
              <div className="p-8 text-center text-xs text-neutral-500 bg-black/20 rounded-xl">
                All submitted orders have been reviewed! Zero pending transactions.
              </div>
            ) : (
              <div className="divide-y divide-white/[0.05]">
                {pendingOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-numbers text-xs font-bold text-white">
                          {ord.id}
                        </span>
                        <span className="text-[11px] text-[#C5FF4A] font-semibold">
                          ₹{ord.amount.toLocaleString()}
                        </span>
                        <span className="text-neutral-500 text-xs">·</span>
                        <span className="text-xs text-neutral-300 font-medium">{ord.productName}</span>
                      </div>
                      <div className="text-xs text-neutral-400">
                        {ord.customerName} ({ord.customerEmail}) · UTR:{' '}
                        <span className="font-mono-numbers text-white font-semibold">{ord.utrNumber}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedScreenshotOrder(ord)}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] text-xs text-white transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Receipt</span>
                      </button>
                      <button
                        onClick={() => handleApprove(ord)}
                        className="px-3 py-1.5 rounded-lg bg-[#C5FF4A] hover:bg-[#b4f535] text-xs text-black font-bold transition-all flex items-center gap-1 cursor-pointer shadow"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Approve</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. PAYMENT VERIFICATION TAB */}
      {activeAdminTab === 'verification' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-1">
            <h3 className="text-base font-bold text-white">Bank UTR Verification Desk</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Verify customer orders against your official State Bank of India account transactions. Click "Inspect Receipt" to view their uploaded payment proof, verify the 12-digit UTR, and approve to unlock their Google Drive links.
            </p>
          </div>

          {pendingOrders.length === 0 ? (
            <div className="p-16 text-center rounded-2xl bg-[#141414] border border-white/10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#C5FF4A] mx-auto" />
              <h3 className="text-base font-bold text-white">No Pending Payments</h3>
              <p className="text-xs text-neutral-400">
                All customer transactions have been audited and verified.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingOrders.map((ord) => (
                <div
                  key={ord.id}
                  className="rounded-2xl bg-[#141414] border border-amber-400/30 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-numbers text-sm font-bold text-white">
                        Order #{ord.id}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 text-xs font-semibold border border-amber-400/20">
                        Pending Verification
                      </span>
                      <span className="text-xs text-neutral-400 font-mono-numbers">
                        {new Date(ord.submittedAt).toLocaleTimeString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs">
                      <div>
                        <span className="text-neutral-500">Customer:</span>{' '}
                        <span className="text-white font-medium">{ord.customerName}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">Email:</span>{' '}
                        <span className="text-neutral-200">{ord.customerEmail}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">Product:</span>{' '}
                        <span className="text-white font-medium">{ord.productName}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/50 border border-white/5 flex flex-wrap items-center gap-6 text-xs">
                      <div>
                        <span className="text-neutral-500 text-[11px] block">Payable Amount:</span>
                        <span className="font-mono-numbers text-[#C5FF4A] font-bold text-sm">
                          ₹{ord.amount.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-500 text-[11px] block">Submitted 12-Digit UTR:</span>
                        <span className="font-mono-numbers text-white font-bold tracking-widest text-sm">
                          {ord.utrNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => setSelectedScreenshotOrder(ord)}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs font-semibold text-white transition-colors flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                    >
                      <Eye className="w-4 h-4 text-[#C5FF4A]" />
                      <span>Inspect Receipt</span>
                    </button>

                    <button
                      onClick={() => handleApprove(ord)}
                      className="px-4 py-2.5 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Check className="w-4 h-4" />
                      <span>Approve & Grant Drive Access</span>
                    </button>

                    <button
                      onClick={() => handleOpenRejectModal(ord)}
                      className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer border border-red-500/20"
                    >
                      <X className="w-4 h-4" />
                      <span>Reject Payment</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. DOWNLOAD LINKS MANAGEMENT TAB (ALL MASTER DOC LINKS) */}
      {activeAdminTab === 'downloads' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-[#141414] border border-white/10">
            <div>
              <h3 className="text-base font-bold text-white">Master Resource Links Directory</h3>
              <p className="text-xs text-neutral-400">
                All 35+ packs from the Google Doc. You can edit any Drive URL or add new custom folders.
              </p>
            </div>
            <button
              onClick={() => setShowAddFolderModal(true)}
              className="px-4 py-2 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow self-start"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Resource Folder</span>
            </button>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="inline-flex p-1 rounded-xl bg-[#141414] border border-white/10 text-xs self-start">
              <button
                onClick={() => setDownloadCollectionFilter('all')}
                className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                  downloadCollectionFilter === 'all' ? 'bg-white/15 text-white font-semibold' : 'text-neutral-400'
                }`}
              >
                All Folders ({downloadFolders.length})
              </button>
              <button
                onClick={() => setDownloadCollectionFilter('assets')}
                className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                  downloadCollectionFilter === 'assets' ? 'bg-[#C5FF4A] text-black font-semibold' : 'text-neutral-400'
                }`}
              >
                Assets ({downloadFolders.filter((f) => f.collectionId === 'assets').length})
              </button>
              <button
                onClick={() => setDownloadCollectionFilter('software')}
                className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                  downloadCollectionFilter === 'software' ? 'bg-[#C5FF4A] text-black font-semibold' : 'text-neutral-400'
                }`}
              >
                Software ({downloadFolders.filter((f) => f.collectionId === 'software').length})
              </button>
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={downloadFolderSearch}
                onChange={(e) => setDownloadFolderSearch(e.target.value)}
                placeholder="Search folder or URL..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#141414] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>
          </div>

          {/* Folders List */}
          <div className="space-y-4">
            {filteredDownloadFolders.map((folder) => (
              <div
                key={folder.id}
                className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white">{folder.name}</h4>
                    <span className="text-xs text-neutral-400">
                      Collection: <strong className="text-white">{folder.collectionId === 'assets' ? 'Assets Library' : 'Software Collection'}</strong> · {folder.resourceCount} files ({folder.totalSize})
                    </span>
                  </div>

                  <button
                    onClick={() => window.open(folder.driveUrl, '_blank')}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-neutral-300 transition-colors flex items-center gap-1 self-start sm:self-auto"
                  >
                    <ExternalLink className="w-3 h-3 text-[#C5FF4A]" />
                    <span>Test Drive URL</span>
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-neutral-400 block">
                    Google Drive Master / Download Link (Editable):
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="url"
                      defaultValue={folder.driveUrl}
                      onBlur={(e) => updateDownloadFolder(folder.id, { driveUrl: e.target.value })}
                      className="flex-1 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-[#C5FF4A] font-mono-numbers"
                    />
                    <span className="text-[11px] text-neutral-500 whitespace-nowrap">
                      Saved on blur
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. ALL ORDERS TAB */}
      {activeAdminTab === 'orders' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#141414] border border-white/10 text-xs self-start">
              <button
                onClick={() => setOrderStatusFilter('all')}
                className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                  orderStatusFilter === 'all' ? 'bg-white/15 text-white font-semibold' : 'text-neutral-400'
                }`}
              >
                All ({orders.length})
              </button>
              <button
                onClick={() => setOrderStatusFilter('verified')}
                className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                  orderStatusFilter === 'verified' ? 'bg-[#C5FF4A] text-black font-semibold' : 'text-neutral-400'
                }`}
              >
                Verified ({verifiedOrders.length})
              </button>
              <button
                onClick={() => setOrderStatusFilter('pending')}
                className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                  orderStatusFilter === 'pending' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-400'
                }`}
              >
                Pending ({pendingOrders.length})
              </button>
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={orderSearchQuery}
                onChange={(e) => setOrderSearchQuery(e.target.value)}
                placeholder="Search Order ID, name, UTR..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#141414] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08] text-neutral-400 font-semibold bg-black/40">
                    <th className="py-3.5 px-4">Order ID</th>
                    <th className="py-3.5 px-4">Customer</th>
                    <th className="py-3.5 px-4">Product</th>
                    <th className="py-3.5 px-4">Amount</th>
                    <th className="py-3.5 px-4">Submitted UTR</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05] text-neutral-300">
                  {filteredOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4 font-mono-numbers font-semibold text-white">
                        {ord.id}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-white">{ord.customerName}</div>
                        <div className="text-[11px] text-neutral-400">{ord.customerEmail}</div>
                      </td>
                      <td className="py-3.5 px-4">{ord.productName}</td>
                      <td className="py-3.5 px-4 font-mono-numbers font-semibold text-[#C5FF4A]">
                        ₹{ord.amount.toLocaleString()}
                      </td>
                      <td className="py-3.5 px-4 font-mono-numbers text-neutral-200">
                        {ord.utrNumber}
                      </td>
                      <td className="py-3.5 px-4">
                        {ord.status === 'verified' && (
                          <span className="inline-flex items-center gap-1 text-[#C5FF4A] text-[11px] font-semibold bg-[#C5FF4A]/10 px-2 py-0.5 rounded border border-[#C5FF4A]/20">
                            Verified
                          </span>
                        )}
                        {ord.status === 'pending' && (
                          <span className="inline-flex items-center gap-1 text-amber-300 text-[11px] font-semibold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                            Pending
                          </span>
                        )}
                        {ord.status === 'rejected' && (
                          <span className="inline-flex items-center gap-1 text-red-400 text-[11px] font-semibold bg-red-400/10 px-2 py-0.5 rounded border border-red-400/20">
                            Rejected
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <button
                          onClick={() => setSelectedScreenshotOrder(ord)}
                          className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] text-neutral-300 cursor-pointer"
                        >
                          Screenshot
                        </button>
                        {ord.status === 'pending' && (
                          <button
                            onClick={() => handleApprove(ord)}
                            className="px-2 py-1 rounded bg-[#C5FF4A] hover:bg-[#b4f535] text-[11px] text-black font-bold cursor-pointer"
                          >
                            Approve
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 5. PRODUCTS & CATALOG TAB */}
      {activeAdminTab === 'products' && (
        <div className="space-y-8">
          <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Google Doc Catalog Collections</h3>
              <p className="text-xs text-neutral-400">
                8 Master Asset categories and 5 Software Suites categorized from your Google Doc.
              </p>
            </div>
            <div className="text-xs text-neutral-400">
              Bundle Price: <span className="font-mono-numbers text-[#C5FF4A] font-bold">₹1,500</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Assets Library Categories (8 Master Packs · ₹700)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {assetCategories.map((cat) => (
                <div key={cat.id} className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{cat.name}</span>
                    <span className="font-mono-numbers text-[#C5FF4A]">₹{cat.price}</span>
                  </div>
                  <p className="text-neutral-400 text-[11px] line-clamp-2">{cat.description}</p>
                  <div className="text-[10px] text-neutral-500 pt-2 border-t border-white/5">
                    {cat.resourceCount} files ({cat.totalSize})
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Software Collection Suites (5 Master Suites · ₹700)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {softwareCategories.map((soft) => (
                <div key={soft.id} className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{soft.name}</span>
                    <span className="font-mono-numbers text-[#C5FF4A]">{soft.version}</span>
                  </div>
                  <p className="text-neutral-400 text-[11px] line-clamp-2">{soft.description}</p>
                  <div className="text-[10px] text-neutral-500 pt-2 border-t border-white/5">
                    License: {soft.licenseInfo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. CUSTOMERS TAB */}
      {activeAdminTab === 'customers' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-[#141414] border border-white/10">
            <h3 className="text-base font-bold text-white">Customer Directory</h3>
            <p className="text-xs text-neutral-400">
              Creators with registered accounts or submitted UPI transactions.
            </p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] text-neutral-400 font-semibold bg-black/40">
                  <th className="py-3.5 px-4">Customer Email</th>
                  <th className="py-3.5 px-4">Customer Name</th>
                  <th className="py-3.5 px-4">Total Orders</th>
                  <th className="py-3.5 px-4">Verified Purchases</th>
                  <th className="py-3.5 px-4">Total Spent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-neutral-300">
                {customerEmails.map((email) => {
                  const custOrders = orders.filter((o) => o.customerEmail.toLowerCase() === email);
                  const firstOrder = custOrders[0];
                  const verifiedCustOrders = custOrders.filter((o) => o.status === 'verified');
                  const spent = verifiedCustOrders.reduce((sum, o) => sum + o.amount, 0);

                  return (
                    <tr key={email} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4 font-mono-numbers text-white">{email}</td>
                      <td className="py-3.5 px-4 font-medium text-neutral-200">
                        {firstOrder?.customerName || 'Registered User'}
                      </td>
                      <td className="py-3.5 px-4 font-mono-numbers">{custOrders.length}</td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-mono-numbers ${
                            verifiedCustOrders.length > 0
                              ? 'bg-[#C5FF4A]/10 text-[#C5FF4A]'
                              : 'bg-white/5 text-neutral-500'
                          }`}
                        >
                          {verifiedCustOrders.length} verified
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono-numbers font-semibold text-white">
                        ₹{spent.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 7. SETTINGS TAB */}
      {activeAdminTab === 'settings' && (
        <form onSubmit={handleSaveSettings} className="space-y-6 max-w-2xl">
          <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-1">
            <h3 className="text-base font-bold text-white">System Configuration</h3>
            <p className="text-xs text-neutral-400">
              Manage your top announcement ticker and master root drive mirror.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 space-y-4 text-xs">
            <div>
              <label className="block text-neutral-300 font-medium mb-1">
                Top Announcement Ticker Text
              </label>
              <input
                type="text"
                value={settingsForm.announcementText}
                onChange={(e) => setSettingsForm({ ...settingsForm, announcementText: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1">
                Master Google Drive Root Link (For VIP bundle customers)
              </label>
              <input
                type="url"
                value={settingsForm.driveMasterLink}
                onChange={(e) => setSettingsForm({ ...settingsForm, driveMasterLink: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-white font-mono-numbers focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="py-2.5 px-6 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow"
              >
                <Save className="w-4 h-4" />
                <span>Save Settings</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* MODAL: INSPECT SCREENSHOT MODAL */}
      {selectedScreenshotOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-xl w-full rounded-2xl bg-[#141414] border border-white/15 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-base font-bold text-white">Payment Receipt Inspection</h3>
                <span className="text-xs text-neutral-400 font-mono-numbers">
                  Order #{selectedScreenshotOrder.id} · Customer: {selectedScreenshotOrder.customerName}
                </span>
              </div>
              <button
                onClick={() => setSelectedScreenshotOrder(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-black p-2 max-h-[420px] flex items-center justify-center border border-white/10">
              <img
                src={selectedScreenshotOrder.screenshotUrl}
                alt="Submitted Payment Screenshot"
                className="max-h-[380px] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
              <div>
                <span className="text-neutral-500 block text-[10px]">Submitted UTR:</span>
                <span className="font-mono-numbers font-bold text-white tracking-wider">
                  {selectedScreenshotOrder.utrNumber}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">Payable Amount:</span>
                <span className="font-mono-numbers font-bold text-[#C5FF4A]">
                  ₹{selectedScreenshotOrder.amount.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  handleApprove(selectedScreenshotOrder);
                  setSelectedScreenshotOrder(null);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow"
              >
                <Check className="w-4 h-4" />
                <span>Approve Payment & Release Access</span>
              </button>
              <button
                onClick={() => {
                  handleOpenRejectModal(selectedScreenshotOrder);
                  setSelectedScreenshotOrder(null);
                }}
                className="py-2.5 px-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-semibold border border-red-500/20 transition-colors"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: REJECTION REASON PROMPT */}
      {rejectionModalOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-md w-full rounded-2xl bg-[#141414] border border-red-500/30 p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white">Reject Transaction #{rejectionModalOrder.id}</h3>
            <p className="text-xs text-neutral-400">
              Please enter the reason for rejection. This note will be visible to the customer on their My Purchases page.
            </p>

            <textarea
              rows={3}
              value={rejectionReasonInput}
              onChange={(e) => setRejectionReasonInput(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-white focus:outline-none focus:border-red-400"
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setRejectionModalOrder(null)}
                className="px-4 py-2 rounded-xl text-xs text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReject}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-xs cursor-pointer shadow"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD DOWNLOAD FOLDER */}
      {showAddFolderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <form
            onSubmit={handleCreateFolder}
            className="relative max-w-lg w-full rounded-2xl bg-[#141414] border border-white/15 p-6 space-y-4 shadow-2xl text-xs"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-base font-bold text-white">Add Master Download Folder</h3>
              <button
                type="button"
                onClick={() => setShowAddFolderModal(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1">Folder Name</label>
              <input
                type="text"
                required
                value={newFolderForm.name}
                onChange={(e) => setNewFolderForm({ ...newFolderForm, name: e.target.value })}
                placeholder="e.g. New Master Pack"
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">Collection</label>
                <select
                  value={newFolderForm.collectionId}
                  onChange={(e) =>
                    setNewFolderForm({
                      ...newFolderForm,
                      collectionId: e.target.value as 'assets' | 'software'
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[#C5FF4A]"
                >
                  <option value="assets">Assets Library (₹700)</option>
                  <option value="software">Software Collection (₹700)</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">Resource Count</label>
                <input
                  type="number"
                  value={newFolderForm.resourceCount}
                  onChange={(e) =>
                    setNewFolderForm({ ...newFolderForm, resourceCount: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white font-mono-numbers focus:outline-none focus:border-[#C5FF4A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1">
                Google Drive URL
              </label>
              <input
                type="url"
                required
                value={newFolderForm.driveUrl}
                onChange={(e) => setNewFolderForm({ ...newFolderForm, driveUrl: e.target.value })}
                placeholder="https://drive.google.com/drive/folders/..."
                className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white font-mono-numbers focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3">
              <button
                type="button"
                onClick={() => setShowAddFolderModal(false)}
                className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#C5FF4A] text-black font-bold hover:bg-[#b4f535] cursor-pointer shadow"
              >
                Create Folder
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
