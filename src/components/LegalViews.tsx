import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Lock,
  ArrowLeft,
  AlertTriangle,
  Award,
  HardDrive
} from 'lucide-react';

interface LegalViewsProps {
  page: 'about' | 'privacy' | 'terms' | 'refund' | 'license';
}

export const LegalViews: React.FC<LegalViewsProps> = ({ page }) => {
  const { navigateTo, adminSettings } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back button */}
      <div>
        <button
          onClick={() => navigateTo('home')}
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* 1. DIGITAL PRODUCT LICENSE INFORMATION */}
      {page === 'license' && (
        <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 sm:p-10 space-y-6 shadow-xl">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5FF4A]">
              EDITVAULT Commercial End-User License Agreement (EULA)
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Digital Product License & Usage Rights
            </h1>
            <p className="text-xs text-neutral-400">
              Last updated: March 2026 · Commercial Royalty-Free Creator License
            </p>
          </div>

          <div className="space-y-6 text-xs text-neutral-300 leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />
                <span>1. What You Can Do (Permitted Uses)</span>
              </h3>
              <p>
                When you purchase the <strong>Assets Library</strong> or <strong>Complete Creator Bundle</strong> on EDITVAULT, you receive a perpetual, non-exclusive, worldwide, royalty-free license to use all included visual assets, MOGRTs, sound effects, LUTs, and presets in:
              </p>
              <ul className="list-disc list-inside space-y-1 text-neutral-300 pl-2">
                <li>Commercial client work and paid client deliverables without attribution.</li>
                <li>Monetized YouTube videos, Facebook videos, TikToks, and Instagram Reels.</li>
                <li>Broadcast television, streaming platforms (Netflix, Prime), and indie films.</li>
                <li>Commercial advertisements, podcast intros, and website promotional reels.</li>
                <li>Personal creative projects and portfolios.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/5">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 text-red-400">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>2. What You Cannot Do (Strictly Prohibited)</span>
              </h3>
              <p>
                You may not sublicense, resell, share, redistribute, repackage, or broadcast the raw digital asset files in their standalone form. This includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-neutral-300 pl-2">
                <li>Re-selling the MOGRTs, SFX, or LUTs on any marketplace, website, or Telegram channel.</li>
                <li>Sharing your Google Drive access links with non-purchasers.</li>
                <li>Uploading the standalone sound files or LUTs as stock asset libraries.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/5">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 text-[#C5FF4A]">
                <ShieldCheck className="w-4 h-4 text-[#C5FF4A]" />
                <span>3. Legitimate Software Distribution Declaration</span>
              </h3>
              <p>
                EDITVAULT stands strictly against software piracy. The <strong>Software Collection</strong> includes only legitimate developer tools, open-source utilities (under MIT, Apache 2.0, and GNU licenses), workflow extension scripts compiled by our engineering team, and custom audio DSP presets. We never distribute cracked, patched, or keygen-altered commercial software.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. REFUND POLICY */}
      {page === 'refund' && (
        <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 sm:p-10 space-y-6 shadow-xl">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5FF4A]">
              Consumer Transparency
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs text-neutral-400">
              Clear guidelines on digital product access and transactions.
            </p>
          </div>

          <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
            <h3 className="text-sm font-bold text-white">Digital Download Nature</h3>
            <p>
              Because EDITVAULT provides immediate access to downloadable Google Drive master folders containing high-value assets and tools, all sales are considered final once the payment has been verified and download links unlocked.
            </p>

            <h3 className="text-sm font-bold text-white pt-2">Exceptions for Full Refunds:</h3>
            <ul className="list-disc list-inside space-y-1 text-neutral-300 pl-2">
              <li><strong>Duplicate Transaction:</strong> If your bank app debited twice for the same order, we will immediately refund the duplicate payment within 24 hours via UPI.</li>
              <li><strong>Unverified Orders:</strong> If your order has not yet been verified and you request cancellation before access is granted, we will reverse the transfer upon verification.</li>
              <li><strong>Technical File Inaccessibility:</strong> If any drive link is demonstrably non-functional and our support team cannot restore file delivery within 24 hours, you are entitled to a full refund.</li>
            </ul>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mt-4">
              To request assistance, please submit an inquiry through our in-app Support Helpdesk with your Order ID.
            </div>
          </div>
        </div>
      )}

      {/* 3. TERMS & CONDITIONS */}
      {page === 'terms' && (
        <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 sm:p-10 space-y-6 shadow-xl">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5FF4A]">
              Terms of Service
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Terms and Conditions
            </h1>
          </div>

          <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
            <p>
              By accessing EDITVAULT and submitting a payment order via our manual SBI UPI QR code, you agree to comply with and be bound by the following terms:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-neutral-300 pl-2">
              <li><strong>Payment Accuracy:</strong> The buyer agrees to submit genuine 12-digit UTR references corresponding to actual completed bank transfers. Submitting fabricated receipts is prohibited.</li>
              <li><strong>Delivery Verification:</strong> Download links are released upon human administrative verification of the bank statement. EDITVAULT reserves the right to delay delivery if bank networks experience clearance delays.</li>
              <li><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your customer login credentials and Google Drive links.</li>
              <li><strong>System Availability:</strong> While our Google Drive mirrors maintain 99.9% uptime, occasional maintenance may occur.</li>
            </ol>
          </div>
        </div>
      )}

      {/* 4. PRIVACY POLICY */}
      {page === 'privacy' && (
        <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 sm:p-10 space-y-6 shadow-xl">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5FF4A]">
              Data Protection
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
            <p>
              EDITVAULT respects your personal privacy. We do not sell, rent, or trade your personal information.
            </p>
            <h3 className="text-sm font-bold text-white pt-2">What We Collect:</h3>
            <ul className="list-disc list-inside space-y-1 text-neutral-300 pl-2">
              <li>Your Name and Email address (used to grant Google Drive folder permissions and order tracking).</li>
              <li>Your WhatsApp telephone number (if provided, strictly for order delivery notifications).</li>
              <li>The 12-digit UPI UTR reference and payment screenshot for bank reconciliation.</li>
            </ul>
            <p className="pt-2">
              We do not store your credit card details, debit card CVVs, or internet banking passwords because payments occur entirely inside your own UPI mobile app.
            </p>
          </div>
        </div>
      )}

      {/* 5. ABOUT US */}
      {page === 'about' && (
        <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 sm:p-10 space-y-6 shadow-xl">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5FF4A]">
              Our Story
            </span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              About EDITVAULT
            </h1>
          </div>

          <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
            <p>
              EDITVAULT was founded by professional video editors and VFX artists who were tired of spending hours searching through chaotic torrents, corrupted downloads, and overpriced subscriptions.
            </p>
            <p>
              Our mission is simple: provide content creators, commercial editors, and YouTube studios with a pristine, curated vault of 15,000+ battle-tested video assets and authorized workflow tools, backed by high-speed Google Drive access and transparent manual payment verification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-2xl font-bold font-mono-numbers text-[#C5FF4A]">15,000+</span>
                <span className="text-neutral-400 block text-[11px]">Assets Curated</span>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-2xl font-bold font-mono-numbers text-[#C5FF4A]">210+ GB</span>
                <span className="text-neutral-400 block text-[11px]">Production Master Files</span>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-2xl font-bold font-mono-numbers text-[#C5FF4A]">100%</span>
                <span className="text-neutral-400 block text-[11px]">Royalty-Free Commercial License</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
