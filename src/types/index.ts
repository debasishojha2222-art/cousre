export type CollectionType = 'assets' | 'software' | 'bundle';

export type OrderStatus = 'pending' | 'verified' | 'rejected';

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  collection: 'assets' | 'software';
  tagline: string;
  description: string;
  resourceCount: number;
  formats: string[];
  totalSize: string;
  compatibility: string[];
  thumbnail: string;
  previewImages?: string[];
  includedItems: string[];
  highlights: string[];
  version?: string;
  licenseInfo?: string;
  officialSource?: string;
  price: number;
}

export interface BundleProduct {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  categoriesCount: number;
  totalAssetsCount: string;
  features: string[];
  popular?: boolean;
}

export interface Order {
  id: string; // e.g. EV-849201
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  productId: 'assets-library' | 'software-collection' | 'creator-bundle' | string;
  productName: string;
  amount: number;
  utrNumber: string;
  screenshotUrl: string;
  status: OrderStatus;
  submittedAt: string;
  verifiedAt?: string;
  adminNotes?: string;
  rejectionReason?: string;
}

export interface CustomerUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'admin';
  createdAt: string;
}

export interface DownloadFile {
  id: string;
  name: string;
  type: string; // e.g. MOGRT, AEP, PSD, WAV, CUBE, ZIP, DMG, EXE
  size: string;
  version?: string;
  driveLink: string;
}

export interface DownloadFolder {
  id: string;
  collectionId: 'assets' | 'software';
  name: string;
  categorySlug: string;
  resourceCount: number;
  totalSize: string;
  driveUrl: string;
  files: DownloadFile[];
}

export interface AdminSettings {
  supportWhatsapp: string;
  supportEmail: string;
  upiId: string;
  accountHolder: string;
  qrCodeImagePath: string;
  driveMasterLink: string;
  announcementText: string;
}

export type ActiveView =
  | 'home'
  | 'collections'
  | 'software'
  | 'bundle'
  | 'product-detail'
  | 'checkout'
  | 'purchases'
  | 'downloads'
  | 'support'
  | 'account'
  | 'admin'
  | 'legal-about'
  | 'legal-privacy'
  | 'legal-terms'
  | 'legal-refund'
  | 'legal-license';
