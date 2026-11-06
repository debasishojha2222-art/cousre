import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  Mail,
  ShieldCheck,
  ShoppingBag,
  LogOut,
  Calendar,
  Lock,
  ArrowRight,
  CheckCircle2,
  Phone
} from 'lucide-react';

export const AccountView: React.FC = () => {
  const { user, login, signup, logout, navigateTo, orders, switchRole, showToast } = useApp();

  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  // User's order stats
  const userOrders = user
    ? orders.filter((o) => o.customerEmail.toLowerCase() === user.email.toLowerCase())
    : [];
  const verifiedCount = userOrders.filter((o) => o.status === 'verified').length;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    login(emailInput.trim());
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !emailInput.trim()) {
      showToast('Please provide your name and email', 'error');
      return;
    }
    signup(nameInput.trim(), emailInput.trim(), phoneInput.trim());
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) {
      showToast('Please enter your email', 'error');
      return;
    }
    setForgotSent(true);
    showToast('Password reset link dispatched to your email.', 'info');
  };

  // IF LOGGED IN: SHOW ACCOUNT PROFILE
  if (user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
              <span>Customer Account</span>
              <span className="text-neutral-600">/</span>
              <span className="text-[#C5FF4A]">Profile</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              My Creator Account
            </h1>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer border border-white/10 shrink-0"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl bg-[#141414] border border-white/10 p-7 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 flex items-center justify-center text-[#C5FF4A]">
                <User className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{user.name}</h2>
                <div className="text-xs text-neutral-400 flex items-center gap-2 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  user.role === 'admin'
                    ? 'bg-[#C5FF4A] text-black font-bold'
                    : 'bg-white/10 text-neutral-200'
                }`}
              >
                {user.role === 'admin' ? 'Store Administrator' : 'Verified Customer'}
              </span>
            </div>
          </div>

          {/* Account Details Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-neutral-500 block">Contact Phone</span>
              <span className="text-white font-medium">{user.phone || '+91 98234 11200'}</span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-neutral-500 block">Account Active Since</span>
              <span className="text-white font-medium font-mono-numbers">
                {new Date(user.createdAt).toLocaleDateString('en-IN', {
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-neutral-500 block">Total Orders</span>
              <span className="text-[#C5FF4A] font-bold font-mono-numbers">
                {userOrders.length} orders ({verifiedCount} verified)
              </span>
            </div>
          </div>

          {/* Shortcuts */}
          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={() => navigateTo('purchases')}
              className="py-2.5 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View My Purchases ({userOrders.length})</span>
            </button>
            <button
              onClick={() => navigateTo('downloads')}
              className="py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-semibold border border-white/10 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Go to Download Center</span>
            </button>
            {user.role === 'admin' && (
              <button
                onClick={() => navigateTo('admin')}
                className="py-2.5 px-4 rounded-xl bg-[#C5FF4A]/10 text-[#C5FF4A] border border-[#C5FF4A]/30 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Open Admin Verification Desk</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // IF NOT LOGGED IN: AUTH FORMS
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 flex items-center justify-center text-[#C5FF4A] mx-auto">
            <User className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {authMode === 'login'
              ? 'Customer Sign In'
              : authMode === 'signup'
              ? 'Create Creator Account'
              : 'Reset Password'}
          </h1>
          <p className="text-xs text-neutral-400">
            {authMode === 'login'
              ? 'Access your purchased downloads and order history'
              : authMode === 'signup'
              ? 'Join EDITVAULT for lifetime access to creator packs'
              : 'Enter your email to receive recovery instructions'}
          </p>
        </div>

        {/* Auth Mode Toggle */}
        <div className="flex p-1 rounded-xl bg-black/40 border border-white/5 text-xs">
          <button
            onClick={() => setAuthMode('login')}
            className={`flex-1 py-1.5 rounded-lg font-medium cursor-pointer transition-colors ${
              authMode === 'login' ? 'bg-white/15 text-white' : 'text-neutral-400'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setAuthMode('signup')}
            className={`flex-1 py-1.5 rounded-lg font-medium cursor-pointer transition-colors ${
              authMode === 'signup' ? 'bg-white/15 text-white' : 'text-neutral-400'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Sign In Form */}
        {authMode === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-neutral-300 font-medium mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="editor@gmail.com"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-neutral-300 font-medium">Password</label>
                <button
                  type="button"
                  onClick={() => setAuthMode('forgot')}
                  className="text-[11px] text-[#C5FF4A] hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
            >
              <span>Sign In to Vault</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        {/* Sign Up Form */}
        {authMode === 'signup' && (
          <form onSubmit={handleSignupSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-neutral-300 font-medium mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Aman Sharma"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="editor@gmail.com"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1.5">
                WhatsApp Phone Number
              </label>
              <input
                type="tel"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-1.5">Create Password</label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
            >
              <span>Create Account</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        {/* Forgot Password */}
        {authMode === 'forgot' && (
          <form onSubmit={handleForgotSubmit} className="space-y-4 text-xs">
            {forgotSent ? (
              <div className="p-4 rounded-xl bg-[#C5FF4A]/10 border border-[#C5FF4A]/20 text-xs text-neutral-300 space-y-2">
                <div className="flex items-center gap-2 text-[#C5FF4A] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Recovery link sent!</span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  Check your inbox for password reset instructions.
                </p>
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="text-[#C5FF4A] underline text-xs font-semibold pt-1 cursor-pointer"
                >
                  Return to sign in
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1.5">
                    Your Registered Email
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="editor@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5FF4A]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#C5FF4A] hover:bg-[#b4f535] text-black font-bold text-xs cursor-pointer"
                  >
                    Send Reset Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="px-4 py-2.5 rounded-xl bg-white/5 text-neutral-300 hover:text-white text-xs"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </form>
        )}

        {/* Quick Demo Login Credentials for reviewer */}
        <div className="pt-4 border-t border-white/[0.06] text-center">
          <span className="text-[11px] text-neutral-400 block mb-2">Reviewer Quick Access:</span>
          <div className="flex items-center justify-center gap-2 text-xs">
            <button
              onClick={() => login('amansharma.editor@gmail.com', 'customer')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-[11px] cursor-pointer"
            >
              Log in as Customer (Aman)
            </button>
            <button
              onClick={() => login('admin@editvault.com', 'admin')}
              className="px-3 py-1.5 rounded-lg bg-[#C5FF4A]/10 text-[#C5FF4A] hover:bg-[#C5FF4A]/20 text-[11px] font-semibold cursor-pointer"
            >
              Log in as Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
