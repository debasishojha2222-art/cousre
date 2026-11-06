import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  Download,
  Calendar,
  CreditCard,
  FileText
} from 'lucide-react';

export const PurchasesView: React.FC = () => {
  const { orders, user, navigateTo, adminSettings } = useApp();
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending' | 'rejected'>('all');

  // Customer orders: filter by user email if logged in, or show all customer orders if guest/demo
  const customerOrders = user
    ? orders.filter(
        (o) =>
          o.customerEmail.toLowerCase() === user.email.toLowerCase() ||
          user.role === 'admin' // Admin can see all orders in testing
      )
    : orders;

  const filteredOrders = customerOrders.filter((ord) => {
    if (filter === 'all') return true;
    return ord.status === filter;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
            <span>Customer Account</span>
            <span className="text-neutral-600">/</span>
            <span className="text-[#C5FF4A]">Purchase History</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            My Purchases & Access Keys
          </h1>
          <p className="mt-1 text-xs text-neutral-400">
            Track your payment verification status and access authorized Google Drive download links.
          </p>
        </div>

        <button
          onClick={() => navigateTo('collections')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-semibold transition-colors cursor-pointer border border-white/10 shrink-0"
        >
          <span>Browse Marketplace</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 p-1 rounded-xl bg-[#141414] border border-white/10 self-start w-fit text-xs">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
            filter === 'all'
              ? 'bg-white/15 text-white font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          All Orders ({customerOrders.length})
        </button>
        <button
          onClick={() => setFilter('verified')}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
            filter === 'verified'
              ? 'bg-[#C5FF4A] text-black font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <span>Verified & Unlocked</span>
          <span className="font-mono-numbers text-[10px] bg-black/20 px-1.5 rounded">
            {customerOrders.filter((o) => o.status === 'verified').length}
          </span>
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
            filter === 'pending'
              ? 'bg-amber-400 text-black font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <span>Awaiting Verification</span>
          <span className="font-mono-numbers text-[10px] bg-black/20 px-1.5 rounded">
            {customerOrders.filter((o) => o.status === 'pending').length}
          </span>
        </button>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#141414] border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 mx-auto">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">No purchases found</h3>
          <p className="text-xs text-neutral-400 max-w-sm mx-auto">
            {filter === 'all'
              ? 'You have not submitted any orders yet. Choose from our Assets Library or Software Collection to get started.'
              : `No orders currently in "${filter}" status.`}
          </p>
          <button
            onClick={() => navigateTo('bundle')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C5FF4A] text-black font-bold text-xs hover:bg-[#b4f535] transition-all cursor-pointer shadow-md"
          >
            <span>Explore Complete Bundle (₹1,500)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => {
            const isVerified = order.status === 'verified';
            const isPending = order.status === 'pending';
            const isRejected = order.status === 'rejected';

            return (
              <div
                key={order.id}
                className={`rounded-2xl p-6 sm:p-7 transition-all bg-[#141414] border ${
                  isVerified
                    ? 'border-[#C5FF4A]/30 shadow-lg'
                    : isPending
                    ? 'border-amber-400/20'
                    : 'border-red-400/20'
                }`}
              >
                {/* Header row: Order ID, Date, Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-numbers text-sm font-bold text-white">
                        Order #{order.id}
                      </span>
                      <span className="text-neutral-600">·</span>
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        <span>{new Date(order.submittedAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}</span>
                      </span>
                    </div>
                    <div className="text-xs text-neutral-400">
                      Customer: <span className="text-neutral-200">{order.customerName}</span> ({order.customerEmail})
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div>
                    {isVerified && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5FF4A]/10 border border-[#C5FF4A]/30 text-[#C5FF4A] text-xs font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Verified & Access Active</span>
                      </div>
                    )}
                    {isPending && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                        <Clock className="w-4 h-4" />
                        <span>Awaiting Payment Verification</span>
                      </div>
                    )}
                    {isRejected && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-400/10 border border-red-400/30 text-red-400 text-xs font-semibold">
                        <AlertCircle className="w-4 h-4" />
                        <span>Payment Rejected</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Body Row: Product Info, UTR, Amount & Action */}
                <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  {/* Product Details */}
                  <div className="space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                      Purchased Resource
                    </div>
                    <h3 className="text-lg font-bold text-white">{order.productName}</h3>
                    <div className="text-xs text-neutral-400">
                      Amount: <span className="font-mono-numbers text-white font-semibold">₹{order.amount.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Transaction UTR Record */}
                  <div className="space-y-1 p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                    <div className="text-neutral-400 text-[11px]">Submitted SBI UTR Reference:</div>
                    <div className="font-mono-numbers text-white font-semibold tracking-wider">
                      {order.utrNumber}
                    </div>
                    {order.adminNotes && (
                      <div className="text-[11px] text-neutral-400 italic pt-1">
                        Note: {order.adminNotes}
                      </div>
                    )}
                  </div>

                  {/* Download Availability & Action Button */}
                  <div className="flex flex-col sm:items-end justify-center space-y-2">
                    {isVerified && (
                      <button
                        onClick={() => navigateTo('downloads')}
                        className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md lime-glow"
                      >
                        <Download className="w-4 h-4" />
                        <span>View Downloads in Drive</span>
                      </button>
                    )}

                    {isPending && (
                      <div className="text-right space-y-2">
                        <div className="text-[11px] text-amber-300">
                          Verification queue: usually ~15-30 mins
                        </div>
                        <button
                          onClick={() => navigateTo('support')}
                          className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs border border-white/10 transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#C5FF4A]" />
                          <span>Contact Support Helpdesk</span>
                        </button>
                      </div>
                    )}

                    {isRejected && (
                      <div className="text-right space-y-2">
                        <div className="text-[11px] text-red-400">
                          {order.rejectionReason || 'UTR did not match bank statement.'}
                        </div>
                        <button
                          onClick={() => navigateTo('support')}
                          className="py-1.5 px-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs border border-red-500/20 transition-colors"
                        >
                          Contact Support
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer status helper */}
                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-neutral-500">
                  <span>
                    Status: {isVerified ? 'Fully Authorized' : isPending ? 'Bank Statement Check In Progress' : 'Invalid or Uncredited'}
                  </span>
                  {isVerified && order.verifiedAt && (
                    <span>
                      Verified on {new Date(order.verifiedAt).toLocaleTimeString('en-IN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
