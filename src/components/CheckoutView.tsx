import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  CheckCircle2,
  Upload,
  ArrowRight,
  Clock,
  ArrowLeft,
  FileCheck2,
  QrCode,
  Scan
} from 'lucide-react';

export const CheckoutView: React.FC = () => {
  const {
    checkoutProduct,
    submitOrder,
    navigateTo,
    user,
    showToast
  } = useApp();

  // If no checkout product, default to Bundle
  const product = checkoutProduct || {
    id: 'creator-bundle',
    name: 'COMPLETE CREATOR BUNDLE',
    price: 1500,
    originalPrice: 3999,
    description: 'Full Assets Library + Software Collection (Master Google Doc Catalog)',
    categoriesCount: 13,
    totalAssetsCount: '25,000+ Files',
    features: []
  };

  // Form states
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [utrNumber, setUtrNumber] = useState('');
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<any | null>(null);

  // Handle screenshot upload (convert file to data URL)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please upload a valid image file (PNG, JPG, JPEG, WEBP)', 'error');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      showToast('Image file size should be under 10MB', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setScreenshotPreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      showToast('Please enter your full name', 'error');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address to receive download access', 'error');
      return;
    }
    if (!utrNumber.trim() || utrNumber.trim().length < 8) {
      showToast('Please enter a valid 12-digit UPI UTR / Transaction Reference number', 'error');
      return;
    }
    if (!screenshotPreview) {
      showToast('Please upload your payment screenshot from your UPI app', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const order = submitOrder({
        customerName: name.trim(),
        customerEmail: email.trim(),
        customerPhone: phone.trim() || '',
        productId: product.id,
        productName: product.name,
        amount: product.price,
        utrNumber: utrNumber.trim(),
        screenshotUrl: screenshotPreview
      });

      setSubmittedOrder(order);
    } catch (err) {
      showToast('Failed to submit order. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS / POST-SUBMISSION STATE
  if (submittedOrder) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 sm:p-10 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mx-auto">
            <Clock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono-numbers px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 font-semibold border border-amber-400/20">
              Order ID: {submittedOrder.id}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-2">
              Payment Submitted Successfully
            </h1>
            <p className="text-sm font-medium text-amber-300/90">
              Your order is awaiting verification.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-black/40 border border-white/5 text-left text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-neutral-400">Product Purchased</span>
              <span className="text-white font-semibold">{submittedOrder.productName}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-neutral-400">Amount Paid</span>
              <span className="font-mono-numbers text-[#C5FF4A] font-bold text-sm">
                ₹{submittedOrder.amount.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-neutral-400">Submitted UTR Reference</span>
              <span className="font-mono-numbers text-white font-semibold">{submittedOrder.utrNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Account Email</span>
              <span className="text-neutral-200">{submittedOrder.customerEmail}</span>
            </div>
          </div>

          {/* Verification Protocol Notice */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-left text-xs text-neutral-300 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C5FF4A]" />
              <span>Admin Bank Verification in Progress</span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-[11px]">
              Our administration team audits every incoming transaction against our official SBI bank statement using your 12-digit UTR reference before granting Google Drive download permissions. Verification typically takes 15–30 minutes.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => navigateTo('purchases')}
              className="flex-1 py-3 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Track in My Purchases</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('downloads')}
              className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-white/10"
            >
              <span>View Download Center</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Back button */}
      <div>
        <button
          onClick={() => navigateTo('collections')}
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Collections</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Order Summary & Customer Details Form */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
              <span>Checkout</span>
              <span className="text-neutral-600">/</span>
              <span className="text-[#C5FF4A]">UPI QR Scanner Verification</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Order Details & Verification
            </h1>
            <p className="mt-1 text-xs text-neutral-400">
              Scan the payment QR code using your UPI app scanner, then submit your transaction reference.
            </p>
          </div>

          {/* Selected Product Card */}
          <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                Selected Product
              </span>
              <button
                onClick={() => navigateTo('bundle')}
                className="text-xs text-[#C5FF4A] hover:underline cursor-pointer"
              >
                Change Product
              </button>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <h3 className="text-base font-bold text-white">{product.name}</h3>
                <p className="text-xs text-neutral-400 mt-0.5">{product.description}</p>
              </div>
              <div className="text-right">
                <div className="font-mono-numbers text-xl font-bold text-[#C5FF4A]">
                  ₹{product.price.toLocaleString()}
                </div>
                <div className="text-[10px] text-neutral-400">One-time payment</div>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-300 font-medium">Total Payable Amount:</span>
              <span className="text-xl font-extrabold text-white font-mono-numbers">
                ₹{product.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Customer Details & Payment Proof Submission Form */}
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-[#141414] border border-white/10 space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              1. Customer Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aman Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@gmail.com (Used to map your Google Drive downloads)"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                2. Transaction Details (After Scanning QR Code)
              </h3>

              {/* UTR Input */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-medium text-neutral-300">
                      12-Digit UTR / UPI Ref ID <span className="text-red-400">*</span>
                    </label>
                    <span className="text-[11px] text-neutral-400 font-mono-numbers">
                      Example: 431289047168
                    </span>
                  </div>
                  <input
                    type="text"
                    required
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value.replace(/[^0-9A-Za-z]/g, ''))}
                    placeholder="Enter 12-digit UTR from your payment app"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono-numbers text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A] tracking-wider"
                  />
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Found in your UPI app under transaction details as "UPI Ref No" or "UTR".
                  </p>
                </div>

                {/* Screenshot Upload Dropzone */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Upload Payment Screenshot <span className="text-red-400">*</span>
                  </label>

                  <div className="relative border-2 border-dashed border-white/15 hover:border-[#C5FF4A]/50 rounded-xl p-5 text-center transition-colors bg-black/30">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    {screenshotPreview ? (
                      <div className="space-y-3">
                        <div className="w-32 h-32 mx-auto rounded-lg overflow-hidden border border-white/20 relative shadow-md">
                          <img
                            src={screenshotPreview}
                            alt="Payment Screenshot Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-xs text-[#C5FF4A] font-medium">
                          <FileCheck2 className="w-4 h-4" />
                          <span>Screenshot attached! Click or drop to replace.</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 mx-auto">
                          <Upload className="w-5 h-5 text-[#C5FF4A]" />
                        </div>
                        <div className="text-xs text-neutral-300 font-medium">
                          Click or drag payment screenshot here
                        </div>
                        <div className="text-[10px] text-neutral-400">
                          PNG, JPG, or WEBP up to 10MB
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 lime-glow"
              >
                {isSubmitting ? (
                  <span>Submitting Verification...</span>
                ) : (
                  <>
                    <span>Submit Payment Details (₹{product.price.toLocaleString()})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Clean SBI UPI Scanner Card (No numbers, no emails, no typed UPI text) */}
        <div className="lg:col-span-6 sticky top-24 space-y-6">
          <div className="rounded-2xl bg-[#141414] border border-white/15 p-7 shadow-2xl space-y-6">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 mb-1">
                <Scan className="w-3.5 h-3.5 text-[#C5FF4A]" />
                <span>UPI Scanner Gateway</span>
              </div>
              <h2 className="text-xl font-bold text-white">Scan SBI QR to Pay</h2>
              <p className="text-xs text-neutral-400">
                Use any UPI scanner on PhonePe, Google Pay, Paytm or BHIM
              </p>
            </div>

            {/* Uploaded QR Code image inside pristine dark scanner frame */}
            <div className="rounded-2xl p-4 sm:p-5 bg-[#090909] border border-white/10 flex flex-col items-center justify-center shadow-inner relative">
              <div className="w-full max-w-[280px] sm:max-w-[320px] rounded-xl overflow-hidden bg-black p-2.5 border border-white/10 shadow-2xl">
                <img
                  src="/assets/aistudio/image_6ffc31cc.png"
                  alt="State Bank of India UPI QR Code for Scanner"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block mx-auto rounded-lg"
                />
              </div>

              {/* Exact Amount Pill */}
              <div className="mt-4 px-5 py-2 rounded-full bg-[#161616] border border-white/10 flex items-center gap-2 shadow-md">
                <span className="text-neutral-400 text-xs">Exact Payable Amount:</span>
                <span className="font-mono-numbers text-[#C5FF4A] font-extrabold text-lg">
                  ₹{product.price.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Scanner Instructions */}
            <div className="space-y-3 text-xs text-neutral-300">
              <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-[#C5FF4A]" />
                <span>How to Pay Using Scanner:</span>
              </h4>
              <ol className="space-y-2 list-decimal list-inside text-neutral-300 text-[11px] leading-relaxed">
                <li>Open <strong>PhonePe, Google Pay, Paytm, or BHIM</strong> on your phone.</li>
                <li>Tap the <strong>Scan QR</strong> camera button and scan the SBI QR code above.</li>
                <li>Enter the exact amount: <strong>₹{product.price.toLocaleString()}</strong>.</li>
                <li>Complete payment inside your UPI app.</li>
                <li>Copy the <strong>12-digit UTR number</strong>, attach screenshot, and submit.</li>
              </ol>
            </div>

            {/* Admin Verification Security Note */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#C5FF4A] shrink-0 mt-0.5" />
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                <strong>Real bank verification:</strong> Every order is verified against the official bank transaction statement. Submitting the correct UTR unlocks all Google Drive links in your Download Center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
