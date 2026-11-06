import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeHero } from './components/HomeHero';
import { HomeSections } from './components/HomeSections';
import { CollectionsView } from './components/CollectionsView';
import { ProductDetailView } from './components/ProductDetailView';
import { BundleView } from './components/BundleView';
import { CheckoutView } from './components/CheckoutView';
import { PurchasesView } from './components/PurchasesView';
import { DownloadCenterView } from './components/DownloadCenterView';
import { AdminDashboardView } from './components/AdminDashboardView';
import { AccountView } from './components/AccountView';
import { SupportView } from './components/SupportView';
import { LegalViews } from './components/LegalViews';
import { ToastContainer } from './components/ToastContainer';

const MainContent: React.FC = () => {
  const { activeView, selectedCategory, assetCategories } = useApp();

  return (
    <main className="min-h-[calc(100vh-16rem)]">
      {activeView === 'home' && (
        <>
          <HomeHero />
          <HomeSections />
        </>
      )}

      {activeView === 'collections' && <CollectionsView initialTab="assets" />}

      {activeView === 'software' && <CollectionsView initialTab="software" />}

      {activeView === 'bundle' && <BundleView />}

      {activeView === 'product-detail' && (
        <ProductDetailView category={selectedCategory || assetCategories[0]} />
      )}

      {activeView === 'checkout' && <CheckoutView />}

      {activeView === 'purchases' && <PurchasesView />}

      {activeView === 'downloads' && <DownloadCenterView />}

      {activeView === 'admin' && <AdminDashboardView />}

      {activeView === 'account' && <AccountView />}

      {activeView === 'support' && <SupportView />}

      {activeView === 'legal-about' && <LegalViews page="about" />}

      {activeView === 'legal-privacy' && <LegalViews page="privacy" />}

      {activeView === 'legal-terms' && <LegalViews page="terms" />}

      {activeView === 'legal-refund' && <LegalViews page="refund" />}

      {activeView === 'legal-license' && <LegalViews page="license" />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#090909] text-[#EDEDED] flex flex-col font-sans selection:bg-[#C5FF4A] selection:text-black">
        <Navbar />
        <MainContent />
        <Footer />
        <ToastContainer />
      </div>
    </AppProvider>
  );
}
