import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  HelpCircle,
  DownloadCloud,
  CreditCard,
  CheckCircle2,
  QrCode,
  Lock,
  ChevronDown,
  ChevronUp,
  FileCheck2
} from 'lucide-react';

export const SupportView: React.FC = () => {
  const { showToast } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryOrderId, setInquiryOrderId] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submittedInquiry, setSubmittedInquiry] = useState(false);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail.trim() || !inquiryMessage.trim()) {
      showToast('Please fill out your email and message', 'error');
      return;
    }
    setSubmittedInquiry(true);
    showToast('Your support inquiry has been submitted to the admin desk.', 'success');
  };

  const supportFaqs = [
    {
      q: 'Where do I find my 12-digit UPI UTR number after scanning the QR code?',
      a: 'After scanning our SBI QR code in your payment app and completing payment:\n• PhonePe: Tap "History" > Select the payment > Check "UTR" or "UPI Ref ID" (12 digits).\n• Google Pay: Scroll down to "Show transaction history" > Tap the payment > Find "UPI transaction ID".\n• Paytm: Go to "Balance & History" > Tap the payment > Check "UPI Ref No.".\n• BHIM / Bank Apps: Check transaction details for the 12-digit RRN / UTR number.'
    },
    {
      q: 'What is the password to extract the Adobe Creative Suite zip archive?',
      a: 'As specified in the master documentation, when extracting the Adobe Premiere Pro + After Effects + Photoshop archive using WinRAR, BreeZip, or 7-Zip, enter the password: "123".'
    },
    {
      q: 'How long does payment verification take?',
      a: 'Our administration team manually matches your 12-digit UTR against our bank statement. Verification normally takes between 15 and 30 minutes. Once approved, the Download Center will automatically unlock all Google Drive folder links.'
    },
    {
      q: 'How do I download large ZIP archives from Google Drive?',
      a: 'Click any folder in the Download Center to open its authorized Google Drive directory. You can download individual files or click the top folder title > "Download" to fetch the complete pack. For files over 10GB (like Envato 30GB or 10GB Pack), we recommend using a reliable download manager.'
    },
    {
      q: 'What is your refund policy on digital products?',
      a: 'Because digital links grant permanent access to Google Drive archives, sales are final once verified. However, in cases of accidental duplicate payments or unverified orders, we promptly issue a full UPI refund.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300">
          <HelpCircle className="w-3.5 h-3.5 text-[#C5FF4A]" />
          <span>Creator Assistance & Helpdesk</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How Can We Help You?
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400">
          Get assistance with UPI QR scanning, finding your 12-digit UTR, or accessing your Google Drive download folders.
        </p>
      </div>

      {/* 2 Primary Assistance Guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scanner & Payment Guide */}
        <div className="p-7 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 flex items-center justify-center text-[#C5FF4A]">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Scanner & Payment Guide</h3>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              We exclusively use the official SBI UPI QR scanner to prevent fraudulent card charges. Simply scan using PhonePe, GPay, Paytm, or BHIM.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2 text-[11px] text-neutral-300">
            <div className="font-semibold text-white">Quick Steps:</div>
            <ol className="list-decimal list-inside space-y-1 text-neutral-400">
              <li>Scan the SBI QR code on the Checkout page.</li>
              <li>Pay the exact amount (₹700 for individual, ₹1,500 for Bundle).</li>
              <li>Copy the 12-digit UTR / UPI Ref ID from your payment receipt.</li>
              <li>Submit the UTR and screenshot on Checkout for approval.</li>
            </ol>
          </div>
        </div>

        {/* Download & Extraction Guide */}
        <div className="p-7 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5FF4A]">
            <DownloadCloud className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Download & Extraction Guide</h3>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              All 35+ packs are linked directly to high-speed Google Drive directories and standalone archives.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2 text-[11px] text-neutral-300">
            <div className="font-semibold text-white">Archive Extraction Details:</div>
            <ul className="list-disc list-inside space-y-1 text-neutral-400">
              <li>For Adobe Creative Suite archive: Use password <strong className="text-[#C5FF4A]">123</strong> in WinRAR / 7-Zip.</li>
              <li>Ensure at least 30GB free disk space for bulk packs.</li>
              <li>All links remain permanently saved in your My Purchases page.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Support FAQ */}
      <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-bold text-white">Frequently Asked Questions</h3>

        <div className="space-y-3">
          {supportFaqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-xl bg-black/40 border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-xs font-bold text-white">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C5FF4A] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed whitespace-pre-line border-t border-white/[0.04] pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* In-App Support Ticket Form */}
      <div className="max-w-2xl mx-auto rounded-2xl bg-[#141414] border border-white/10 p-8 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white">Submit a Verification Inquiry</h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            If you submitted an order and need assistance with your UTR or download link, submit a ticket below.
          </p>
        </div>

        {submittedInquiry ? (
          <div className="p-5 rounded-xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 text-xs text-neutral-300 space-y-2">
            <div className="flex items-center gap-2 text-[#C5FF4A] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Inquiry Dispatched</span>
            </div>
            <p className="text-neutral-400 text-[11px]">
              Thank you! Our administrative team will review your order details and update your account.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendInquiry} className="space-y-4 text-xs">
            <div>
              <label className="block text-neutral-300 font-medium mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                placeholder="Aman Sharma"
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1">Email Address</label>
              <input
                type="email"
                required
                value={inquiryEmail}
                onChange={(e) => setInquiryEmail(e.target.value)}
                placeholder="editor@gmail.com"
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1">
                Order ID or 12-Digit UTR Number <span className="text-neutral-500">(Optional)</span>
              </label>
              <input
                type="text"
                value={inquiryOrderId}
                onChange={(e) => setInquiryOrderId(e.target.value)}
                placeholder="e.g. EV-849201 or 431289047168"
                className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-white font-mono-numbers placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1">Message / Question</label>
              <textarea
                rows={4}
                required
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                placeholder="Describe your inquiry..."
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all cursor-pointer shadow"
            >
              Submit Ticket to Admin
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
