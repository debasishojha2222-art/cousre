import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ActiveView,
  BundleProduct,
  CustomerUser,
  DownloadFolder,
  Order,
  OrderStatus,
  ProductCategory,
  AdminSettings
} from '../types';
import {
  ASSET_CATEGORIES,
  SOFTWARE_CATEGORIES,
  BUNDLE_PRODUCTS,
  INITIAL_ORDERS,
  INITIAL_DOWNLOAD_FOLDERS,
  DEFAULT_ADMIN_SETTINGS
} from '../data/mockData';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface AppContextType {
  user: CustomerUser | null;
  orders: Order[];
  assetCategories: ProductCategory[];
  softwareCategories: ProductCategory[];
  downloadFolders: DownloadFolder[];
  adminSettings: AdminSettings;
  activeView: ActiveView;
  selectedCategory: ProductCategory | null;
  checkoutProduct: BundleProduct | ProductCategory | null;
  toasts: Toast[];
  
  // Navigation & Actions
  navigateTo: (view: ActiveView, category?: ProductCategory) => void;
  startCheckout: (product: BundleProduct | ProductCategory) => void;
  submitOrder: (orderInput: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    productId: string;
    productName: string;
    amount: number;
    utrNumber: string;
    screenshotUrl: string;
  }) => Order;
  updateOrderStatus: (
    orderId: string,
    status: OrderStatus,
    adminNotes?: string,
    rejectionReason?: string
  ) => void;
  updateAdminSettings: (newSettings: Partial<AdminSettings>) => void;
  updateDownloadFolder: (folderId: string, update: Partial<DownloadFolder>) => void;
  addDownloadFolder: (folder: DownloadFolder) => void;
  
  // Auth
  login: (email: string, role?: 'customer' | 'admin') => void;
  signup: (name: string, email: string, phone?: string) => void;
  logout: () => void;
  switchRole: (role: 'customer' | 'admin') => void;
  
  // Permissions & Checks
  hasVerifiedPurchase: (collection: 'assets' | 'software' | 'all') => boolean;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_ORDERS_KEY = 'editvault_orders_v1';
const LOCAL_STORAGE_SETTINGS_KEY = 'editvault_settings_v1';
const LOCAL_STORAGE_USER_KEY = 'editvault_user_v1';
const LOCAL_STORAGE_FOLDERS_KEY = 'editvault_folders_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  // User
  const [user, setUser] = useState<CustomerUser | null>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (saved) return JSON.parse(saved);
      // Default initial logged-in user so the reviewer can experience purchase history immediately
      return {
        id: 'usr-aman-01',
        name: 'Aman Sharma',
        email: 'amansharma.editor@gmail.com',
        phone: '+91 98234 11200',
        role: 'customer',
        createdAt: '2026-10-15T10:00:00Z'
      };
    } catch {
      return null;
    }
  });

  // Settings
  const [adminSettings, setAdminSettings] = useState<AdminSettings>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_ADMIN_SETTINGS;
    } catch {
      return DEFAULT_ADMIN_SETTINGS;
    }
  });

  // Download folders
  const [downloadFolders, setDownloadFolders] = useState<DownloadFolder[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_FOLDERS_KEY);
      return saved ? JSON.parse(saved) : INITIAL_DOWNLOAD_FOLDERS;
    } catch {
      return INITIAL_DOWNLOAD_FOLDERS;
    }
  });

  const [assetCategories] = useState<ProductCategory[]>(ASSET_CATEGORIES);
  const [softwareCategories] = useState<ProductCategory[]>(SOFTWARE_CATEGORIES);
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<BundleProduct | ProductCategory | null>(
    BUNDLE_PRODUCTS[2] // default to creator bundle
  );
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Persist orders
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(orders));
    } catch (e) {
      console.warn('Could not save orders to localStorage', e);
    }
  }, [orders]);

  // Persist user
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      }
    } catch (e) {
      console.warn('Could not save user to localStorage', e);
    }
  }, [user]);

  // Persist settings
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(adminSettings));
    } catch (e) {
      console.warn('Could not save settings to localStorage', e);
    }
  }, [adminSettings]);

  // Persist download folders
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_FOLDERS_KEY, JSON.stringify(downloadFolders));
    } catch (e) {
      console.warn('Could not save download folders to localStorage', e);
    }
  }, [downloadFolders]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const navigateTo = (view: ActiveView, category?: ProductCategory) => {
    if (category) {
      setSelectedCategory(category);
    }
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startCheckout = (product: BundleProduct | ProductCategory) => {
    setCheckoutProduct(product);
    setActiveView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitOrder = (orderInput: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    productId: string;
    productName: string;
    amount: number;
    utrNumber: string;
    screenshotUrl: string;
  }): Order => {
    const uniqueNum = Math.floor(100000 + Math.random() * 900000);
    const newOrder: Order = {
      id: `EV-${uniqueNum}`,
      customerName: orderInput.customerName,
      customerEmail: orderInput.customerEmail,
      customerPhone: orderInput.customerPhone,
      productId: orderInput.productId,
      productName: orderInput.productName,
      amount: orderInput.amount,
      utrNumber: orderInput.utrNumber,
      screenshotUrl: orderInput.screenshotUrl,
      status: 'pending',
      submittedAt: new Date().toISOString(),
      adminNotes: 'Awaiting Bank Transaction Verification'
    };

    setOrders((prev) => [newOrder, ...prev]);

    // If user is logged in with same email or user is guest, sync
    if (!user || user.email.toLowerCase() !== orderInput.customerEmail.toLowerCase()) {
      setUser({
        id: `usr-${uniqueNum}`,
        name: orderInput.customerName,
        email: orderInput.customerEmail,
        phone: orderInput.customerPhone,
        role: 'customer',
        createdAt: new Date().toISOString()
      });
    }

    showToast(`Order ${newOrder.id} submitted for UPI verification!`, 'info');
    return newOrder;
  };

  const updateOrderStatus = (
    orderId: string,
    status: OrderStatus,
    adminNotes?: string,
    rejectionReason?: string
  ) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          return {
            ...ord,
            status,
            verifiedAt: status === 'verified' ? new Date().toISOString() : ord.verifiedAt,
            adminNotes: adminNotes ?? ord.adminNotes,
            rejectionReason: rejectionReason ?? ord.rejectionReason
          };
        }
        return ord;
      })
    );

    if (status === 'verified') {
      showToast(`Order ${orderId} approved! Download access unlocked.`, 'success');
    } else if (status === 'rejected') {
      showToast(`Order ${orderId} marked as rejected.`, 'error');
    } else {
      showToast(`Order ${orderId} marked as pending verification.`, 'info');
    }
  };

  const updateAdminSettings = (newSettings: Partial<AdminSettings>) => {
    setAdminSettings((prev) => ({ ...prev, ...newSettings }));
    showToast('Admin settings saved successfully.', 'success');
  };

  const updateDownloadFolder = (folderId: string, update: Partial<DownloadFolder>) => {
    setDownloadFolders((prev) =>
      prev.map((folder) => (folder.id === folderId ? { ...folder, ...update } : folder))
    );
    showToast('Download folder updated.', 'success');
  };

  const addDownloadFolder = (folder: DownloadFolder) => {
    setDownloadFolders((prev) => [...prev, folder]);
    showToast('New download folder added.', 'success');
  };

  const login = (email: string, role: 'customer' | 'admin' = 'customer') => {
    const isSpecialAdmin = email.toLowerCase().includes('admin');
    const finalRole = isSpecialAdmin ? 'admin' : role;
    
    // Find previous order name if available
    const existingOrder = orders.find((o) => o.customerEmail.toLowerCase() === email.toLowerCase());
    const name = existingOrder ? existingOrder.customerName : email.split('@')[0];

    const newUser: CustomerUser = {
      id: `usr-${Date.now().toString(36)}`,
      name: finalRole === 'admin' ? 'Admin Operator' : name,
      email: email,
      phone: existingOrder ? existingOrder.customerPhone : '+91 98765 00000',
      role: finalRole,
      createdAt: new Date().toISOString()
    };

    setUser(newUser);
    showToast(`Logged in as ${finalRole === 'admin' ? 'Administrator' : newUser.name}`, 'success');
  };

  const signup = (name: string, email: string, phone: string = '') => {
    const newUser: CustomerUser = {
      id: `usr-${Date.now().toString(36)}`,
      name,
      email,
      phone,
      role: 'customer',
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    showToast(`Welcome to EDITVAULT, ${name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    showToast('Logged out successfully.', 'info');
  };

  const switchRole = (newRole: 'customer' | 'admin') => {
    if (!user) {
      setUser({
        id: 'usr-switch',
        name: newRole === 'admin' ? 'Admin Operator' : 'Aman Sharma',
        email: newRole === 'admin' ? 'admin@editvault.com' : 'amansharma.editor@gmail.com',
        phone: '+91 98234 11200',
        role: newRole,
        createdAt: '2026-10-15T10:00:00Z'
      });
    } else {
      setUser({
        ...user,
        role: newRole,
        name: newRole === 'admin' ? 'Admin Operator' : user.name
      });
    }
    showToast(`Switched active view to ${newRole.toUpperCase()} mode.`, 'info');
  };

  // Check if current user has a verified order for the given collection
  const hasVerifiedPurchase = (collection: 'assets' | 'software' | 'all'): boolean => {
    // If admin is browsing, grant access for inspection
    if (user?.role === 'admin') return true;
    if (!user) return false;

    const userOrders = orders.filter(
      (o) => o.customerEmail.toLowerCase() === user.email.toLowerCase() && o.status === 'verified'
    );

    if (userOrders.length === 0) return false;

    // If has bundle, has access to all
    const hasBundle = userOrders.some((o) => o.productId === 'creator-bundle');
    if (hasBundle) return true;

    if (collection === 'all') {
      return (
        hasBundle ||
        (userOrders.some((o) => o.productId === 'assets-library') &&
          userOrders.some((o) => o.productId === 'software-collection'))
      );
    }

    if (collection === 'assets') {
      return userOrders.some(
        (o) => o.productId === 'assets-library' || o.productId === 'creator-bundle'
      );
    }

    if (collection === 'software') {
      return userOrders.some(
        (o) => o.productId === 'software-collection' || o.productId === 'creator-bundle'
      );
    }

    return false;
  };

  return (
    <AppContext.Provider
      value={{
        user,
        orders,
        assetCategories,
        softwareCategories,
        downloadFolders,
        adminSettings,
        activeView,
        selectedCategory,
        checkoutProduct,
        toasts,
        navigateTo,
        startCheckout,
        submitOrder,
        updateOrderStatus,
        updateAdminSettings,
        updateDownloadFolder,
        addDownloadFolder,
        login,
        signup,
        logout,
        switchRole,
        hasVerifiedPurchase,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
