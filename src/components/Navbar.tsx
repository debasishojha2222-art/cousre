import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Menu,
  X,
  ShieldCheck,
  User,
  ShoppingBag,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeView,
    navigateTo,
    user,
    switchRole,
    orders,
    adminSettings
  } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Count pending orders for admin badge
  const pendingOrdersCount = orders.filter((o) => o.status === 'pending').length;

  const handleNav = (view: any) => {
    navigateTo(view);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090909]/90 backdrop-blur-md border-b border-white/[0.07]">
      {/* Optional Announcement Bar */}
      {adminSettings.announcementText && (
        <div className="bg-[#141414] border-b border-white/[0.05] px-4 py-1.5 text-center text-xs text-neutral-300 font-medium overflow-hidden">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A] shrink-0" />
            <span className="truncate">{adminSettings.announcementText}</span>
          </div>
        </div>
      )}

      {/* Main Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (Action / User) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 group cursor-pointer shrink-0 text-left"
          aria-label="EDITVAULT Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center group-hover:border-[#C5FF4A]/40 transition-colors">
            <span className="font-heading font-black text-sm text-[#C5FF4A]">EV</span>
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-white whitespace-nowrap">
            EDIT<span className="text-[#C5FF4A]">VAULT</span>
          </span>
        </button>

        {/* Zone 2: 4-5 single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <button
            onClick={() => handleNav('home')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              activeView === 'home' ? 'text-[#C5FF4A] font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav('collections')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              activeView === 'collections' || activeView === 'product-detail'
                ? 'text-[#C5FF4A] font-semibold'
                : ''
            }`}
          >
            Collections
          </button>
          <button
            onClick={() => handleNav('bundle')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              activeView === 'bundle' ? 'text-[#C5FF4A] font-semibold' : ''
            }`}
          >
            Bundle
          </button>
          <button
            onClick={() => handleNav('purchases')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer flex items-center gap-1.5 ${
              activeView === 'purchases' ? 'text-[#C5FF4A] font-semibold' : ''
            }`}
          >
            <span>My Purchases</span>
            {orders.length > 0 && (
              <span className="font-mono-numbers text-[11px] text-neutral-400 bg-white/5 px-1.5 py-0.2 rounded border border-white/5">
                {orders.length}
              </span>
            )}
          </button>
          <button
            onClick={() => handleNav('support')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              activeView === 'support' ? 'text-[#C5FF4A] font-semibold' : ''
            }`}
          >
            Support
          </button>
        </nav>

        {/* Zone 3: 1 primary action & Account / Admin Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Admin switch toggle button for easy demonstration of verification workflow */}
          <div className="hidden lg:flex items-center p-1 rounded-lg bg-[#141414] border border-white/10 text-xs">
            <button
              onClick={() => {
                switchRole('customer');
                if (activeView === 'admin') handleNav('purchases');
              }}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                user?.role === 'customer'
                  ? 'bg-white/10 text-white font-medium'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => {
                switchRole('admin');
                handleNav('admin');
              }}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                user?.role === 'admin'
                  ? 'bg-[#C5FF4A] text-black font-semibold'
                  : 'text-neutral-400 hover:text-[#C5FF4A]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin</span>
              {pendingOrdersCount > 0 && (
                <span className="bg-amber-400 text-black text-[10px] font-bold px-1 rounded-full">
                  {pendingOrdersCount}
                </span>
              )}
            </button>
          </div>

          {/* Account / Login dropdown or button */}
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141414] border border-white/10 text-neutral-200 hover:text-white hover:border-white/20 transition-all text-xs font-medium cursor-pointer"
              aria-label="User account menu"
            >
              <User className="w-3.5 h-3.5 text-[#C5FF4A]" />
              <span className="hidden sm:inline max-w-[100px] truncate">
                {user ? user.name.split(' ')[0] : 'Account'}
              </span>
              <ChevronDown className="w-3 h-3 text-neutral-400" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#141414] border border-white/10 shadow-2xl p-2 z-50 text-xs text-neutral-200 backdrop-blur-xl">
                <div className="px-3 py-2 border-b border-white/5 mb-1">
                  <div className="font-semibold text-white truncate">
                    {user ? user.name : 'Guest Visitor'}
                  </div>
                  <div className="text-neutral-400 truncate text-[11px]">
                    {user ? user.email : 'Not signed in'}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-[10px] text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A]" />
                    <span>Role: {user?.role === 'admin' ? 'Store Administrator' : 'Customer'}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleNav('account')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>My Account Details</span>
                  <User className="w-3.5 h-3.5 text-neutral-400" />
                </button>

                <button
                  onClick={() => handleNav('purchases')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>My Purchases & Orders</span>
                  <ShoppingBag className="w-3.5 h-3.5 text-neutral-400" />
                </button>

                <button
                  onClick={() => handleNav('downloads')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Download Center</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5FF4A]" />
                </button>

                <div className="my-1 border-t border-white/5" />

                <button
                  onClick={() => {
                    switchRole(user?.role === 'admin' ? 'customer' : 'admin');
                    if (user?.role !== 'admin') handleNav('admin');
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-[#C5FF4A] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Switch to {user?.role === 'admin' ? 'Customer' : 'Admin'} Mode</span>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </button>

                {user?.role === 'admin' && (
                  <button
                    onClick={() => handleNav('admin')}
                    className="w-full text-left px-3 py-2 rounded-lg bg-[#C5FF4A]/10 text-[#C5FF4A] hover:bg-[#C5FF4A]/20 transition-colors flex items-center justify-between font-medium cursor-pointer"
                  >
                    <span>Open Admin Panel</span>
                    <span className="text-[10px] bg-[#C5FF4A] text-black px-1.5 py-0.5 rounded font-bold">
                      {pendingOrdersCount}
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => handleNav('bundle')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#090909] bg-[#C5FF4A] rounded-lg hover:bg-[#b4f535] transition-all lime-glow whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get Creator Bundle
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-[#141414] border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-b border-white/10 px-4 py-5 space-y-3">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNav('home')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-200 hover:text-white font-medium text-sm"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('collections')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-200 hover:text-white font-medium text-sm"
            >
              Collections (Assets & Software)
            </button>
            <button
              onClick={() => handleNav('bundle')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-[#C5FF4A] font-semibold text-sm"
            >
              Complete Bundle (₹1,500)
            </button>
            <button
              onClick={() => handleNav('purchases')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-200 hover:text-white font-medium text-sm flex items-center justify-between"
            >
              <span>My Purchases</span>
              <span className="font-mono-numbers text-xs bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                {orders.length}
              </span>
            </button>
            <button
              onClick={() => handleNav('downloads')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-200 hover:text-white font-medium text-sm"
            >
              Download Center
            </button>
            <button
              onClick={() => handleNav('support')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-neutral-200 hover:text-white font-medium text-sm"
            >
              Support & Verification
            </button>
            <button
              onClick={() => handleNav('admin')}
              className="text-left py-2 px-3 rounded-lg bg-white/5 text-[#C5FF4A] font-medium text-sm flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Admin Verification Panel
              </span>
              {pendingOrdersCount > 0 && (
                <span className="bg-amber-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {pendingOrdersCount}
                </span>
              )}
            </button>
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => handleNav('bundle')}
              className="w-full py-2.5 text-center text-xs font-semibold text-[#090909] bg-[#C5FF4A] rounded-lg shadow-lg"
            >
              Explore Complete Bundle (₹1,500)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
