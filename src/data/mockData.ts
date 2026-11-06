import { ProductCategory, BundleProduct, Order, DownloadFolder, AdminSettings } from '../types';

/**
 * MASTER CATALOG SOURCED DIRECTLY FROM THE GOOGLE DOC
 * All original resource names, URLs, notes, and packs preserved exactly.
 */

export const ASSET_CATEGORIES: ProductCategory[] = [
  {
    id: 'cat-creator-mega-packs',
    slug: 'creator-mega-packs',
    name: 'Creator Mega Packs',
    collection: 'assets',
    tagline: 'Envato 30GB, 10GB Pack, Designsburner & Premium Assets',
    description: 'Massive all-in-one production asset packs featuring thousands of templates, graphics, presets, and creator project files curated from top design studios.',
    resourceCount: 4500,
    formats: ['.ZIP', '.PRPROJ', '.AEP', '.PSD', '.MOV'],
    totalSize: '58.5 GB',
    compatibility: ['Premiere Pro', 'After Effects', 'Photoshop', 'DaVinci Resolve', 'Final Cut Pro'],
    thumbnail: '/src/assets/images/hero_creator_workspace_1793988784212.jpg',
    includedItems: [
      'Envato 30 GB Pack (Full master template & asset archive)',
      '10GB Master Pack (Essential video creator toolset)',
      'Designsburner Massive Pack (High-retention graphic layouts)',
      'Premium Assets Pack 1 (Studio production presets)',
      'Warrior Assets (Pack A & Pack B complete collection)'
    ],
    highlights: ['Multi-Gigabyte Bundles', 'Direct Drive Links', 'Commercial Use'],
    price: 700
  },
  {
    id: 'cat-sound-effects-music',
    slug: 'sound-effects-and-music',
    name: 'Sound Effects & Music Library',
    collection: 'assets',
    tagline: '10,000+ SFX, Sam Kolder Pulse SFX, Viral audio & Wedding music',
    description: 'Comprehensive high-fidelity audio vault with over 10,000 sound effects, cinematic whooshes, ambient risers, viral trending TikTok/Reels sounds, and full wedding edit music.',
    resourceCount: 11200,
    formats: ['.WAV', '.MP3', '.RAR', '.ZIP'],
    totalSize: '18.4 GB',
    compatibility: ['All NLEs & DAWs (Premiere, DaVinci, CapCut, Logic, Ableton)'],
    thumbnail: '/src/assets/images/assets_sound_design_1793988785750.jpg',
    includedItems: [
      'SFX 10000+ Ultimate Archive (.rar lossless master file)',
      'Huge SFX Pack (Categorized foley, hits, transitions)',
      'Sam Kolder Pulse SFX Pack (Signature cinematic audio design)',
      'Trending Sound Effects to Go Viral (High retention audio triggers)',
      '50 Sound Effect Pack (Quick essential drops)',
      'BG Music Collection (Royalty-free background tracks)',
      'Music Playlist for Wedding Edits (Curated wedding soundtrack guide)'
    ],
    highlights: ['10,000+ Audio Files', 'Trending Audio Triggers', 'Lossless WAV & MP3'],
    price: 700
  },
  {
    id: 'cat-motion-backgrounds-studios',
    slug: 'motion-backgrounds-studios',
    name: 'Motion Backgrounds & Studio Sets',
    collection: 'assets',
    tagline: '1000+ motion backgrounds, dark grid loops & green screen sets',
    description: 'Pristine 4K looping background textures, dynamic gradient waves, abstract geometric grids, and professional studio backdrops built for green screen talking-head footage.',
    resourceCount: 1250,
    formats: ['.MOV', '.MP4', '.PNG (4K UHD)'],
    totalSize: '24.8 GB',
    compatibility: ['Premiere, AE, DaVinci, OBS Studio, Final Cut'],
    thumbnail: '/src/assets/images/assets_motion_graphics_1793988783471.jpg',
    includedItems: [
      '1000+ Motion Backgrounds Link (Extensive high-res motion loop library)',
      'Motion Backgrounds Core Pack (Dark ambient creator backdrops)',
      'BG Pack (Curated talking-head and podcast visuals)',
      'Studio Backgrounds for Green Screen Footage (Realistic pro virtual setups)'
    ],
    highlights: ['1,000+ 4K Loops', 'Seamless Loop Points', 'Green Screen Optimized'],
    price: 700
  },
  {
    id: 'cat-overlays-halation-presets',
    slug: 'overlays-and-halation',
    name: 'Overlays & Halation Presets',
    collection: 'assets',
    tagline: '100+ overlays, 30 overlays pack & Halation effect presets',
    description: 'Analog film grain textures, light leaks, lens flares, dust overlays, and authentic red halation film bloom presets to replicate high-end 35mm cinema cameras.',
    resourceCount: 160,
    formats: ['.MOV (ProRes)', '.PRFPSYSET', '.FFX', '.PNG'],
    totalSize: '14.6 GB',
    compatibility: ['Screen & Overlay blend modes in any editing app'],
    thumbnail: '/src/assets/images/assets_color_grading_1793988784562.jpg',
    includedItems: [
      '100+ Overlays Vault (Light leaks, film burns, lens flares & dust)',
      '30 Overlays Pack (Quick drag-and-drop cinematic textures)',
      'Halation Effect Preset (Authentic analog red edge glow emulation)'
    ],
    highlights: ['Real Optical Textures', 'ProRes Quality', 'Instant Drag-and-Drop'],
    price: 700
  },
  {
    id: 'cat-youtube-viral-creator-kit',
    slug: 'youtube-viral-creator-kit',
    name: 'YouTube & Viral Creator Kit',
    collection: 'assets',
    tagline: '10+GB thumbnail pack, Ali Abdaal assets, Dhruv Rathee BXC & 30 Hooks',
    description: 'The exact visual assets, text animation presets, and thumbnail packs used by multi-million subscriber creators like Ali Abdaal and Dhruv Rathee.',
    resourceCount: 2200,
    formats: ['.PSD', '.ZIP', '.MOGRT', '.PNG', '.PDF'],
    totalSize: '19.2 GB',
    compatibility: ['Photoshop, Premiere Pro, After Effects, Canva'],
    thumbnail: '/src/assets/images/assets_motion_graphics_1793988783471.jpg',
    includedItems: [
      '10+GB Thumbnail Pack (Massive PSD masters, 3D elements, cutouts)',
      'YouTube Thumbnail Assets Pack (Badges, arrows, CTR boosters)',
      'Ali Abdaal Assets (Minimalist paper animations, highlights, markers)',
      'Dhruv Rathee BXC Highlight Text (Signature animated text presets)',
      '30 Viral Hooks for Videos (Retention-tested opening script frameworks)'
    ],
    highlights: ['Top Creator Formats', 'High CTR Tested', 'PSD & MOGRT Masters'],
    price: 700
  },
  {
    id: 'cat-transitions-paper-effects',
    slug: 'transitions-paper-effects',
    name: 'Transitions & Paper Effects',
    collection: 'assets',
    tagline: 'Transitions master pack, Paper folding templates & stop-motion presets',
    description: 'High-energy video transitions, kinetic camera wipes, tactile paper ripping animations, and folding stop-motion effect templates.',
    resourceCount: 420,
    formats: ['.PRPROJ', '.MOGRT', '.AEP', '.MOV'],
    totalSize: '9.3 GB',
    compatibility: ['Premiere Pro CC', 'After Effects CC', 'DaVinci Resolve'],
    thumbnail: '/src/assets/images/hero_creator_workspace_1793988784212.jpg',
    includedItems: [
      'Transitions Master Vault (Whips, warps, camera zooms, glitches)',
      'Paper Folding Effect Template (MotionEditz official folding template)',
      'Paper Animation Preset (Realistic stop-motion crumple and unfold)'
    ],
    highlights: ['Paper Stop-Motion', 'Includes Audio Foley', 'One-Click Apply'],
    price: 700
  },
  {
    id: 'cat-2d-3d-visual-elements',
    slug: '2d-3d-visual-elements',
    name: '2D & 3D Visual Elements',
    collection: 'assets',
    tagline: '3D Icons, Stickman & Hand animations, Character PNGs & HUD carousel',
    description: 'Rich graphic visual elements including 3D glass icons, animated hand gestures, stickman explainer animations, studio character cutouts, and HUD carousels.',
    resourceCount: 1850,
    formats: ['.PNG (Alpha)', '.MOV (ProRes 4444)', '.AEP', '.GIF'],
    totalSize: '15.1 GB',
    compatibility: ['Universal transparent alpha, all editors and design suites'],
    thumbnail: '/src/assets/images/assets_color_grading_1793988784562.jpg',
    includedItems: [
      '3D Icons Pack (High-resolution 3D creator objects & tech symbols)',
      'Character PNG Pack (Pre-keyed studio human reactions & poses)',
      'Business Character Pack by Luca (Professional character cutouts)',
      'Stickman Animations (Fun, high-retention 2D stickman sketches)',
      'Hand Animations (Pointing, tapping, scrolling gesture animations)',
      'Loading Bars Assets Link (Dynamic kinetic progress indicators)',
      'HUD Carousel (Futuristic circular tracking rings and metrics)'
    ],
    highlights: ['Transparent Alpha Channel', '4K UHD Resolution', 'Studio Rotoscoped'],
    price: 700
  },
  {
    id: 'cat-raw-podcast-footage',
    slug: 'raw-podcast-footage',
    name: 'Raw Podcast Clips for Editing',
    collection: 'assets',
    tagline: 'Multi-cam raw podcast studio footage for video editing practice',
    description: 'Authentic multi-camera raw studio footage from real podcast interviews. Perfect for editors looking to build a high-ticket portfolio or practice talking-head cuts.',
    resourceCount: 35,
    formats: ['.MOV', '.MP4 (1080p & 4K)'],
    totalSize: '12.8 GB',
    compatibility: ['All video editing suites'],
    thumbnail: '/src/assets/images/hero_creator_workspace_1793988784212.jpg',
    includedItems: [
      'Multi-Angle Studio Cameras (Host angle, guest angle, wide master)',
      'Isolated Studio Microphone Audio Tracks (.WAV)',
      'Full unedited conversation files for reel and short-form practice'
    ],
    highlights: ['Multi-Cam Angles', 'Studio Mics Included', 'Portfolio Building'],
    price: 700
  }
];

export const SOFTWARE_CATEGORIES: ProductCategory[] = [
  {
    id: 'soft-adobe-creative-suite',
    slug: 'adobe-creative-suite-archive',
    name: 'Adobe Creative Suite Archive',
    collection: 'software',
    tagline: 'Adobe Premiere Pro + After Effects + Photoshop Archive',
    description: 'Complete creative software suite archive containing Adobe Premiere Pro, After Effects, and Photoshop. Includes full extraction instructions (WinRAR / BreeZip password: 123).',
    resourceCount: 3,
    formats: ['.ZIP', '.EXE', '.DMG'],
    totalSize: '8.4 GB',
    compatibility: ['Windows 10/11 (64-bit)', 'macOS'],
    thumbnail: '/src/assets/images/hero_creator_workspace_1793988784212.jpg',
    includedItems: [
      'Adobe Premiere Pro Master Archive',
      'Adobe After Effects Master Archive',
      'Adobe Photoshop Master Archive',
      'Password & extraction documentation (Password: "123")'
    ],
    highlights: ['Password Protected: 123', 'WinRAR / BreeZip Supported', 'Direct Google Drive'],
    version: 'Creative Pro Archive',
    licenseInfo: 'Archival creator bundle with step-by-step installation and extraction guide.',
    officialSource: 'Master Google Drive Mirror',
    price: 700
  },
  {
    id: 'soft-premiere-after-plugins',
    slug: 'premiere-after-plugins',
    name: 'Premiere & After Effects Plugins',
    collection: 'software',
    tagline: 'Comprehensive plugin suite for Premiere Pro & After Effects',
    description: 'Essential workflow plugins, transitions engines, keyframers, and timeline enhancers designed to accelerate video rendering and visual effects generation.',
    resourceCount: 65,
    formats: ['.ZXP', '.JSXBIN', '.ZIP', '.EXE', '.PKG'],
    totalSize: '5.2 GB',
    compatibility: ['Adobe Premiere Pro & After Effects CC 2021-2025'],
    thumbnail: '/src/assets/images/assets_motion_graphics_1793988783471.jpg',
    includedItems: [
      'Premiere Pro Timeline Accelerator Plugins',
      'After Effects Visual FX & Motion Extenders',
      'ZXP Installer packages with automated setup scripts'
    ],
    highlights: ['Seamless Timeline Integration', 'Automated Installers', 'Mac & PC'],
    version: 'v4.5 Plugin Suite',
    licenseInfo: 'Authorized open plugins and community developer extensions.',
    officialSource: 'Master Google Drive Mirror',
    price: 700
  },
  {
    id: 'soft-intro-hd-plugins-vault',
    slug: 'intro-hd-plugins-vault',
    name: 'Intro HD Plugins Vault',
    collection: 'software',
    tagline: 'Official Intro-HD developer plugin archive and extensions',
    description: 'Exclusive plugin repository from Intro-HD providing specialized animation tools, kinetic titlers, and video compositing enhancements.',
    resourceCount: 42,
    formats: ['.ZIP', '.ZXP', '.WEB LINK'],
    totalSize: '4.1 GB',
    compatibility: ['Premiere Pro, After Effects, DaVinci Resolve'],
    thumbnail: '/src/assets/images/hero_creator_workspace_1793988784212.jpg',
    includedItems: [
      'Intro-HD Token-Authorized Plugin Library Access',
      'Title and Lower-Third Motion Generator Panels',
      'Color and Visual Enhancement Modules'
    ],
    highlights: ['Token-Verified Access', 'Motion Generator Panels', 'Pro NLE Support'],
    version: 'Intro-HD Pro 2026',
    licenseInfo: 'Dedicated partner repository access with security token included.',
    officialSource: 'Intro-HD Dedicated Portal',
    price: 700
  },
  {
    id: 'soft-geolayers-map-animation',
    slug: 'geolayers-map-animation',
    name: 'GeoLayers Map Animation Tool',
    collection: 'software',
    tagline: 'GeoLayers map animation extension for Adobe After Effects',
    description: 'The industry-standard map animation tool for After Effects used by Vox, Johnny Harris, and documentary creators. Animate 3D topography, territory borders, and route tracking.',
    resourceCount: 2,
    formats: ['.JSXBIN', '.ZIP', '.ZXP'],
    totalSize: '3.6 GB',
    compatibility: ['After Effects CC 2020-2025 (Windows & macOS)'],
    thumbnail: '/src/assets/images/assets_motion_graphics_1793988783471.jpg',
    includedItems: [
      'GeoLayers Master Extension File (Link 1 - Drive)',
      'GeoLayers Supplementary Data & Map Server Assets (Link 2 - Drive)',
      'Custom vector map styles and camera path presets'
    ],
    highlights: ['Documentary Standard', '3D Terrain & Routes', 'Includes Dual Drive Links'],
    version: 'GeoLayers v3.4',
    licenseInfo: 'Creator extension file bundle with pre-configured map styling templates.',
    officialSource: 'Google Drive Direct Mirrors',
    price: 700
  },
  {
    id: 'soft-dehancer-pro-color',
    slug: 'dehancer-pro-color-grading',
    name: 'Dehancer Pro Film Emulation',
    collection: 'software',
    tagline: 'Dehancer Pro authentic film emulation & color grading plugin',
    description: 'The world-renowned analog film emulation plugin. Features real Kodak/Fujifilm print profiles, authentic halation, bloom, film grain, and gate weave.',
    resourceCount: 1,
    formats: ['.ZIP', '.OFX', '.PLUGIN'],
    totalSize: '2.8 GB',
    compatibility: ['Premiere Pro, After Effects, DaVinci Resolve, Final Cut'],
    thumbnail: '/src/assets/images/assets_color_grading_1793988784562.jpg',
    includedItems: [
      'Dehancer Pro Plugin Master Package',
      'Analog Film Stock Profiles (Kodak Vision3, Portra, Ektachrome, Fuji)',
      'Film Halation, Bloom, and Defocus calibration presets'
    ],
    highlights: ['60+ Film Stocks', 'Authentic Halation & Bloom', 'OFX & Adobe Native'],
    version: 'Dehancer Pro 7.0',
    licenseInfo: 'Plugin archive with film stock profiles and calibration manual.',
    officialSource: 'Google Drive Direct Mirror',
    price: 700
  }
];

export const BUNDLE_PRODUCTS: BundleProduct[] = [
  {
    id: 'assets-library',
    name: 'ASSETS LIBRARY',
    price: 700,
    originalPrice: 1999,
    description: 'All 8 master asset categories from the Google Doc: 10,000+ SFX, Envato 30GB, 1000+ Backgrounds, Ali Abdaal pack, Overlays, and 3D icons.',
    categoriesCount: 8,
    totalAssetsCount: '25,000+ Files (160+ GB)',
    features: [
      'Envato 30 GB Pack & 10GB Master Pack included',
      'SFX 10,000+ Archive + Sam Kolder Pulse SFX',
      '1000+ Motion Backgrounds & Studio Green Screens',
      'Ali Abdaal Assets & Dhruv Rathee BXC Highlight Text',
      '30 Overlays, 100+ Overlays & Halation Presets',
      '3D Icons, Stickman & Hand Animations',
      'Direct Google Drive Links upon UPI QR verification',
      'Royalty-free commercial use license'
    ]
  },
  {
    id: 'software-collection',
    name: 'SOFTWARE COLLECTION',
    price: 700,
    originalPrice: 1999,
    description: 'All 5 software and plugin archives from the master doc: Adobe Suite (Premiere, AE, PS), GeoLayers, Dehancer Pro, and Plugins.',
    categoriesCount: 5,
    totalAssetsCount: 'Full Tool & Plugin Suites',
    features: [
      'Adobe Premiere Pro + After Effects + Photoshop Archive (Password: 123)',
      'GeoLayers Map Animation Tool for AE (Dual Drive Links)',
      'Dehancer Pro Film Emulation & Halation Plugin',
      'Premiere & After Effects Plugins Suite',
      'Intro-HD Plugins Token-Authorized Archive',
      'Step-by-step extraction & setup instructions',
      'Windows & macOS compatibility'
    ]
  },
  {
    id: 'creator-bundle',
    name: 'COMPLETE CREATOR BUNDLE',
    price: 1500,
    originalPrice: 3999,
    popular: true,
    description: 'The complete EDITVAULT Master Collection. Unlocks EVERYTHING from the Google Doc: all Assets categories AND all Software tools.',
    categoriesCount: 13,
    totalAssetsCount: 'Complete Master Catalog (200+ GB)',
    features: [
      'Full Assets Library (All 8 Asset Categories & 25,000+ Files)',
      'Full Software Collection (All 5 Software Suites & Plugins)',
      'VIP Priority QR Payment Verification',
      'Direct Google Drive mirrors for every single resource link',
      'All master extraction passwords and instructions included',
      'Single one-time payment with permanent lifetime file access',
      'Commercial royalty-free rights for all your content'
    ]
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'EV-849201',
    customerName: 'Aman Sharma',
    customerEmail: 'amansharma.editor@gmail.com',
    customerPhone: '+91 98234 11200',
    productId: 'creator-bundle',
    productName: 'COMPLETE CREATOR BUNDLE',
    amount: 1500,
    utrNumber: '431289047168',
    screenshotUrl: '/assets/aistudio/image_6ffc31cc.png',
    status: 'verified',
    submittedAt: '2026-11-05T14:22:00Z',
    verifiedAt: '2026-11-05T14:38:00Z',
    adminNotes: 'SBI UPI transaction verified via QR scanner. Access granted.'
  },
  {
    id: 'EV-849202',
    customerName: 'Rohit Verma',
    customerEmail: 'rohitverma.fx@outlook.com',
    customerPhone: '+91 97120 54321',
    productId: 'assets-library',
    productName: 'ASSETS LIBRARY',
    amount: 700,
    utrNumber: '431290114421',
    screenshotUrl: '/assets/aistudio/image_6ffc31cc.png',
    status: 'pending',
    submittedAt: '2026-11-06T09:45:00Z',
    adminNotes: 'Awaiting SBI statement update for UTR 431290114421.'
  }
];

/**
 * EXACT DOWNLOAD FOLDERS SOURCED DIRECTLY FROM THE GOOGLE DOC
 * Every link and title matches the source document exactly.
 */
export const INITIAL_DOWNLOAD_FOLDERS: DownloadFolder[] = [
  // SOFTWARE COLLECTION FOLDERS
  {
    id: 'folder-adobe-suite',
    collectionId: 'software',
    name: 'Adobe Premiere Pro + After Effects + Photoshop',
    categorySlug: 'adobe-creative-suite-archive',
    resourceCount: 3,
    totalSize: '8.4 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1mZBHmPNg9du6HzpWaEVAjtr8xTOQNo14?usp=drive_link',
    files: [
      {
        id: 'doc-file-1',
        name: 'Adobe Premiere Pro + After Effects + Photoshop Complete Archive',
        type: 'ZIP / EXE / DMG',
        size: '8.4 GB',
        version: 'Password: 123',
        driveLink: 'https://drive.google.com/drive/folders/1mZBHmPNg9du6HzpWaEVAjtr8xTOQNo14?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-premier-after-plugins',
    collectionId: 'software',
    name: 'Premier, After Plugins',
    categorySlug: 'premiere-after-plugins',
    resourceCount: 65,
    totalSize: '5.2 GB',
    driveUrl: 'https://drive.google.com/drive/folders/13SR5OqIpeCO1hgI3PJqs7j5fAs1YqzIB?usp=drive_link',
    files: [
      {
        id: 'doc-file-2',
        name: 'Premier, After Plugins Master Folder',
        type: 'ZIP / ZXP',
        size: '5.2 GB',
        driveLink: 'https://drive.google.com/drive/folders/13SR5OqIpeCO1hgI3PJqs7j5fAs1YqzIB?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-intro-hd-plugins',
    collectionId: 'software',
    name: 'Plugins (Intro-HD Archive)',
    categorySlug: 'intro-hd-plugins-vault',
    resourceCount: 42,
    totalSize: '4.1 GB',
    driveUrl: 'https://intro-hd.net/?mcp_token=eyJwaWQiOjEwNzc0MDcsInNpZCI6ODM4NjA0NzAxLCJheCI6Ijk0NmI3YmU1MzZjYjlhMDI1YjAzMGQ0OGY3ZDIwZWY0IiwidHMiOjE3MjMyMjI3NDIsImV4cCI6MTcyNTY0MTk0Mn0.leFYpKVN3EmdPNC5b7z5Eqtt_X5xxhH7Lfy4nTaP_h8',
    files: [
      {
        id: 'doc-file-3',
        name: 'Intro-HD Plugins Repository with Access Token',
        type: 'PORTAL / ZIP',
        size: '4.1 GB',
        driveLink: 'https://intro-hd.net/?mcp_token=eyJwaWQiOjEwNzc0MDcsInNpZCI6ODM4NjA0NzAxLCJheCI6Ijk0NmI3YmU1MzZjYjlhMDI1YjAzMGQ0OGY3ZDIwZWY0IiwidHMiOjE3MjMyMjI3NDIsImV4cCI6MTcyNTY0MTk0Mn0.leFYpKVN3EmdPNC5b7z5Eqtt_X5xxhH7Lfy4nTaP_h8'
      }
    ]
  },
  {
    id: 'folder-geolayers',
    collectionId: 'software',
    name: 'Geo layers (AE Map Animation Tool)',
    categorySlug: 'geolayers-map-animation',
    resourceCount: 2,
    totalSize: '3.6 GB',
    driveUrl: 'https://drive.google.com/file/d/1zs_A_89ZPEFDAk-x1h2-tiwNQATgiNE6/view?usp=drive_link',
    files: [
      {
        id: 'doc-file-4',
        name: 'Geo layers Master File (Link 1)',
        type: 'ZIP / JSXBIN',
        size: '1.8 GB',
        driveLink: 'https://drive.google.com/file/d/1zs_A_89ZPEFDAk-x1h2-tiwNQATgiNE6/view?usp=drive_link'
      },
      {
        id: 'doc-file-5',
        name: 'Geo layers Supplementary Archive (Link 2)',
        type: 'ZIP',
        size: '1.8 GB',
        driveLink: 'https://drive.google.com/file/d/1BV8DOy3f_fzl6m5VPsdHmXqnSJUa_QCu/view?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-dehancer-pro',
    collectionId: 'software',
    name: 'Dehancer Pro Color grading plugin',
    categorySlug: 'dehancer-pro-color-grading',
    resourceCount: 1,
    totalSize: '2.8 GB',
    driveUrl: 'https://drive.google.com/file/d/1p7_g07iLl2vjtdqlAEM_qaGXq_Vb1sa6/view?usp=sharing',
    files: [
      {
        id: 'doc-file-6',
        name: 'Dehancer Pro Color Grading Plugin Master Package',
        type: 'ZIP / PLUGIN',
        size: '2.8 GB',
        driveLink: 'https://drive.google.com/file/d/1p7_g07iLl2vjtdqlAEM_qaGXq_Vb1sa6/view?usp=sharing'
      }
    ]
  },

  // ASSETS LIBRARY FOLDERS (EXACT FROM GOOGLE DOC)
  {
    id: 'folder-envato-30gb',
    collectionId: 'assets',
    name: 'Envato 30 GB Pack',
    categorySlug: 'creator-mega-packs',
    resourceCount: 3500,
    totalSize: '30.0 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1qErlzYmApZt7DN1RPB_1Lnu2A5Ek8gPH?usp=drive_link',
    files: [
      {
        id: 'doc-file-7',
        name: 'Envato 30 GB Master Asset Collection',
        type: 'ZIP / FOLDERS',
        size: '30.0 GB',
        driveLink: 'https://drive.google.com/drive/folders/1qErlzYmApZt7DN1RPB_1Lnu2A5Ek8gPH?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-10gb-pack',
    collectionId: 'assets',
    name: '10GB Pack',
    categorySlug: 'creator-mega-packs',
    resourceCount: 1200,
    totalSize: '10.0 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1gno2NMHNM2E7obfDM_V3SmJK2u3lw19G?usp=sharing',
    files: [
      {
        id: 'doc-file-8',
        name: '10GB Pack Master Resource Drive',
        type: 'ZIP / ASSETS',
        size: '10.0 GB',
        driveLink: 'https://drive.google.com/drive/folders/1gno2NMHNM2E7obfDM_V3SmJK2u3lw19G?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-premium-assets-pack-1',
    collectionId: 'assets',
    name: 'Premium Assets Pack 1',
    categorySlug: 'creator-mega-packs',
    resourceCount: 850,
    totalSize: '7.8 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1nys2iMIVEppw48CzRAGffa4wIXzkACAi?usp=drive_link',
    files: [
      {
        id: 'doc-file-9',
        name: 'Premium Assets Pack 1 Folder',
        type: 'DRIVE FOLDER',
        size: '7.8 GB',
        driveLink: 'https://drive.google.com/drive/folders/1nys2iMIVEppw48CzRAGffa4wIXzkACAi?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-designsburner-massive',
    collectionId: 'assets',
    name: 'Designsburner Massiv Pack',
    categorySlug: 'creator-mega-packs',
    resourceCount: 950,
    totalSize: '6.4 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1lpNHhmKVvlRXDeRQ-lMsnoy45fLCMIKb?usp=drive_link',
    files: [
      {
        id: 'doc-file-10',
        name: 'Designsburner Massiv Pack Drive',
        type: 'DRIVE FOLDER',
        size: '6.4 GB',
        driveLink: 'https://drive.google.com/drive/folders/1lpNHhmKVvlRXDeRQ-lMsnoy45fLCMIKb?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-warrior-assets',
    collectionId: 'assets',
    name: 'Warrior Assets',
    categorySlug: 'creator-mega-packs',
    resourceCount: 650,
    totalSize: '5.1 GB',
    driveUrl: 'https://drive.google.com/drive/mobile/folders/1ZGuhQbwYZdIvPAx1gW-NBCikp-tjPmEt?usp=sharing',
    files: [
      {
        id: 'doc-file-11',
        name: 'Warrior Assets (Folder 1)',
        type: 'DRIVE FOLDER',
        size: '2.6 GB',
        driveLink: 'https://drive.google.com/drive/mobile/folders/1ZGuhQbwYZdIvPAx1gW-NBCikp-tjPmEt?usp=sharing'
      },
      {
        id: 'doc-file-12',
        name: 'Warrior Assets (Folder 2)',
        type: 'DRIVE FOLDER',
        size: '2.5 GB',
        driveLink: 'https://drive.google.com/drive/folders/1ub_iJrF9tYM1IVhWGr8lYqziyTgrThkq?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-sfx-10000',
    collectionId: 'assets',
    name: 'Sfx 10000+',
    categorySlug: 'sound-effects-and-music',
    resourceCount: 10000,
    totalSize: '8.2 GB',
    driveUrl: 'https://cdn.beacons.ai/user_content/CyA1Rn773ubbBWWlllexOn5d3q42/store_files/0bcfaeb5-2e54-4674-b5ec-d6561775dd13__3b7ddba7-6156-436c-8615-e3b5eab64786.rar?t=1720698965129',
    files: [
      {
        id: 'doc-file-13',
        name: 'Sfx 10000+ Master Direct Archive (.rar)',
        type: 'RAR / WAV',
        size: '8.2 GB',
        driveLink: 'https://cdn.beacons.ai/user_content/CyA1Rn773ubbBWWlllexOn5d3q42/store_files/0bcfaeb5-2e54-4674-b5ec-d6561775dd13__3b7ddba7-6156-436c-8615-e3b5eab64786.rar?t=1720698965129'
      }
    ]
  },
  {
    id: 'folder-huge-sfx-pack',
    collectionId: 'assets',
    name: 'Huge SFX Pack',
    categorySlug: 'sound-effects-and-music',
    resourceCount: 1800,
    totalSize: '4.5 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1er8dG3CzVPSeY8eB3cMw-OJjzYUkhNb-?usp=drive_link',
    files: [
      {
        id: 'doc-file-14',
        name: 'Huge SFX Pack Drive Directory',
        type: 'DRIVE FOLDER',
        size: '4.5 GB',
        driveLink: 'https://drive.google.com/drive/folders/1er8dG3CzVPSeY8eB3cMw-OJjzYUkhNb-?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-sam-kolder-sfx',
    collectionId: 'assets',
    name: 'Sam Kolder Pulse SFX Pack',
    categorySlug: 'sound-effects-and-music',
    resourceCount: 150,
    totalSize: '1.2 GB',
    driveUrl: 'https://drive.google.com/file/d/1TUf5_q7CUM8Wh9zIpXXeQqpOQym8qMho/view?usp=sharing',
    files: [
      {
        id: 'doc-file-15',
        name: 'Sam Kolder Pulse SFX Pack File',
        type: 'ZIP / WAV',
        size: '1.2 GB',
        driveLink: 'https://drive.google.com/file/d/1TUf5_q7CUM8Wh9zIpXXeQqpOQym8qMho/view?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-trending-sfx',
    collectionId: 'assets',
    name: 'Trending sound effects to go Viral',
    categorySlug: 'sound-effects-and-music',
    resourceCount: 380,
    totalSize: '1.5 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1BF8K5uLm_1CJbHqs-AEtgBYuMfHWos7w?usp=drive_link',
    files: [
      {
        id: 'doc-file-16',
        name: 'Trending Sound Effects to Go Viral Directory',
        type: 'DRIVE FOLDER',
        size: '1.5 GB',
        driveLink: 'https://drive.google.com/drive/folders/1BF8K5uLm_1CJbHqs-AEtgBYuMfHWos7w?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-50-sfx-pack',
    collectionId: 'assets',
    name: '50 Sound Effect Pack',
    categorySlug: 'sound-effects-and-music',
    resourceCount: 50,
    totalSize: '450 MB',
    driveUrl: 'https://motioneditz.com/download/50-sound-effects-pack/',
    files: [
      {
        id: 'doc-file-17',
        name: '50 Sound Effect Pack (MotionEditz)',
        type: 'ZIP / WAV',
        size: '450 MB',
        driveLink: 'https://motioneditz.com/download/50-sound-effects-pack/'
      }
    ]
  },
  {
    id: 'folder-bg-music',
    collectionId: 'assets',
    name: 'BG Music',
    categorySlug: 'sound-effects-and-music',
    resourceCount: 220,
    totalSize: '2.4 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1p0wmWtBwRaVHhsHS511CgBD5C6uJQkle?usp=sharing',
    files: [
      {
        id: 'doc-file-18',
        name: 'BG Music Collection Drive',
        type: 'DRIVE FOLDER',
        size: '2.4 GB',
        driveLink: 'https://drive.google.com/drive/folders/1p0wmWtBwRaVHhsHS511CgBD5C6uJQkle?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-wedding-music',
    collectionId: 'assets',
    name: 'Music Playlist for Wedding edits',
    categorySlug: 'sound-effects-and-music',
    resourceCount: 85,
    totalSize: 'Stream',
    driveUrl: 'https://music.youtube.com/playlist?list=PLmQvqpLhh7VZGu5ry540mSetDvvobb4Ss',
    files: [
      {
        id: 'doc-file-19',
        name: 'Music Playlist for Wedding Edits',
        type: 'PLAYLIST / AUDIO',
        size: 'Streaming',
        driveLink: 'https://music.youtube.com/playlist?list=PLmQvqpLhh7VZGu5ry540mSetDvvobb4Ss'
      }
    ]
  },
  {
    id: 'folder-1000-motion-bg',
    collectionId: 'assets',
    name: '1000+ motion backgrounds link',
    categorySlug: 'motion-backgrounds-studios',
    resourceCount: 1000,
    totalSize: '16.5 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1O26Kw-PkmR6i31WONDUUXYYBvP1exjgj?usp=drive_link',
    files: [
      {
        id: 'doc-file-20',
        name: '1000+ Motion Backgrounds Link Folder',
        type: 'DRIVE FOLDER',
        size: '16.5 GB',
        driveLink: 'https://drive.google.com/drive/folders/1O26Kw-PkmR6i31WONDUUXYYBvP1exjgj?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-motion-bg-core',
    collectionId: 'assets',
    name: 'Motion backgrounds',
    categorySlug: 'motion-backgrounds-studios',
    resourceCount: 340,
    totalSize: '5.2 GB',
    driveUrl: 'https://drive.google.com/drive/mobile/folders/1qSl_Jw8E6BrIM7O9rVMsjGYEbt6-MIHL?usp=sharing',
    files: [
      {
        id: 'doc-file-21',
        name: 'Motion Backgrounds Core Folder',
        type: 'DRIVE FOLDER',
        size: '5.2 GB',
        driveLink: 'https://drive.google.com/drive/mobile/folders/1qSl_Jw8E6BrIM7O9rVMsjGYEbt6-MIHL?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-bg-pack',
    collectionId: 'assets',
    name: 'BG Pack',
    categorySlug: 'motion-backgrounds-studios',
    resourceCount: 260,
    totalSize: '3.8 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1smaRnwAsyxdlS_w_gnlXifbPsmnQnyyd?usp=sharing',
    files: [
      {
        id: 'doc-file-22',
        name: 'BG Pack Drive Folder',
        type: 'DRIVE FOLDER',
        size: '3.8 GB',
        driveLink: 'https://drive.google.com/drive/folders/1smaRnwAsyxdlS_w_gnlXifbPsmnQnyyd?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-studio-bg',
    collectionId: 'assets',
    name: 'Studio Backgrounds for green screen footage',
    categorySlug: 'motion-backgrounds-studios',
    resourceCount: 180,
    totalSize: '4.2 GB',
    driveUrl: 'https://drive.google.com/drive/folders/162iZBy0a5OG63DKHFWhHaSx4TX_bedWR?usp=drive_link',
    files: [
      {
        id: 'doc-file-23',
        name: 'Studio Backgrounds for Green Screen Footage',
        type: 'DRIVE FOLDER',
        size: '4.2 GB',
        driveLink: 'https://drive.google.com/drive/folders/162iZBy0a5OG63DKHFWhHaSx4TX_bedWR?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-30-overlays',
    collectionId: 'assets',
    name: '30 Overlays Pack',
    categorySlug: 'overlays-and-halation',
    resourceCount: 30,
    totalSize: '3.4 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1s2NqycqJNS6pgAHI00GlpU0vB-EiYoDb?usp=drive_link',
    files: [
      {
        id: 'doc-file-24',
        name: '30 Overlays Pack Drive Directory',
        type: 'DRIVE FOLDER',
        size: '3.4 GB',
        driveLink: 'https://drive.google.com/drive/folders/1s2NqycqJNS6pgAHI00GlpU0vB-EiYoDb?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-100-overlays',
    collectionId: 'assets',
    name: '100+ Overlays',
    categorySlug: 'overlays-and-halation',
    resourceCount: 110,
    totalSize: '9.8 GB',
    driveUrl: 'https://drive.google.com/drive/mobile/folders/1uAc8m0ZiJSStHegQYZzbC2na3USMkYbP?usp=drive_link',
    files: [
      {
        id: 'doc-file-25',
        name: '100+ Overlays Drive Directory',
        type: 'DRIVE FOLDER',
        size: '9.8 GB',
        driveLink: 'https://drive.google.com/drive/mobile/folders/1uAc8m0ZiJSStHegQYZzbC2na3USMkYbP?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-halation-preset',
    collectionId: 'assets',
    name: 'Halation Effect Preset',
    categorySlug: 'overlays-and-halation',
    resourceCount: 20,
    totalSize: '1.4 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1UQpgcf50_2DuaIpQxBzK5BiVFrqEBRfm?usp=drive_link',
    files: [
      {
        id: 'doc-file-26',
        name: 'Halation Effect Preset Folder',
        type: 'DRIVE FOLDER',
        size: '1.4 GB',
        driveLink: 'https://drive.google.com/drive/folders/1UQpgcf50_2DuaIpQxBzK5BiVFrqEBRfm?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-10gb-thumbnail',
    collectionId: 'assets',
    name: '10+GB thumbnail pack',
    categorySlug: 'youtube-viral-creator-kit',
    resourceCount: 1500,
    totalSize: '10.2 GB',
    driveUrl: 'https://cdn.beacons.ai/user_content/CyA1Rn773ubbBWWlllexOn5d3q42/store_files/ec80ddb9-7290-48d2-8050-28ff0f2c436e__b4c819d9-837c-4833-b80c-304558185742.zip?t=1719297258675',
    files: [
      {
        id: 'doc-file-27',
        name: '10+GB Thumbnail Pack Direct Archive (.zip)',
        type: 'ZIP / PSD',
        size: '10.2 GB',
        driveLink: 'https://cdn.beacons.ai/user_content/CyA1Rn773ubbBWWlllexOn5d3q42/store_files/ec80ddb9-7290-48d2-8050-28ff0f2c436e__b4c819d9-837c-4833-b80c-304558185742.zip?t=1719297258675'
      }
    ]
  },
  {
    id: 'folder-yt-thumbnail-pack',
    collectionId: 'assets',
    name: 'Youtube Thumbnail Assets Pack',
    categorySlug: 'youtube-viral-creator-kit',
    resourceCount: 650,
    totalSize: '4.8 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1tmPdr7NQIeQnZPhX84lGB_v--szudW7F?usp=drive_link',
    files: [
      {
        id: 'doc-file-28',
        name: 'Youtube Thumbnail Assets Pack Drive',
        type: 'DRIVE FOLDER',
        size: '4.8 GB',
        driveLink: 'https://drive.google.com/drive/folders/1tmPdr7NQIeQnZPhX84lGB_v--szudW7F?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-ali-abdaal',
    collectionId: 'assets',
    name: 'Ali Abdaal Assets',
    categorySlug: 'youtube-viral-creator-kit',
    resourceCount: 380,
    totalSize: '3.1 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1rGM45z3y3sK0lDBrmI_20q7JzFQR4NLY?usp=sharing',
    files: [
      {
        id: 'doc-file-29',
        name: 'Ali Abdaal Assets Drive Folder',
        type: 'DRIVE FOLDER',
        size: '3.1 GB',
        driveLink: 'https://drive.google.com/drive/folders/1rGM45z3y3sK0lDBrmI_20q7JzFQR4NLY?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-dhruv-rathee',
    collectionId: 'assets',
    name: 'Dhruv Rathee BXC Highlight Text',
    categorySlug: 'youtube-viral-creator-kit',
    resourceCount: 120,
    totalSize: '850 MB',
    driveUrl: 'https://drive.google.com/drive/folders/1gXBdDrEkMs0b4utPoG_-CBcTj67NAHGM?usp=drive_link',
    files: [
      {
        id: 'doc-file-30',
        name: 'Dhruv Rathee BXC Highlight Text Folder',
        type: 'DRIVE FOLDER',
        size: '850 MB',
        driveLink: 'https://drive.google.com/drive/folders/1gXBdDrEkMs0b4utPoG_-CBcTj67NAHGM?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-30-hooks',
    collectionId: 'assets',
    name: '30 Viral Hooks for Videos',
    categorySlug: 'youtube-viral-creator-kit',
    resourceCount: 30,
    totalSize: '120 MB',
    driveUrl: 'https://drive.google.com/file/d/13y7nBlYiyBDu71OU591KETMfJr-78dY_/view?usp=sharing',
    files: [
      {
        id: 'doc-file-31',
        name: '30 Viral Hooks for Videos File',
        type: 'PDF / DOC',
        size: '120 MB',
        driveLink: 'https://drive.google.com/file/d/13y7nBlYiyBDu71OU591KETMfJr-78dY_/view?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-transitions',
    collectionId: 'assets',
    name: 'Transitions',
    categorySlug: 'transitions-paper-effects',
    resourceCount: 420,
    totalSize: '6.5 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1jPr_FB5CR1rPQKOhfzYNCGRyqUOnUJp0?usp=drive_link',
    files: [
      {
        id: 'doc-file-32',
        name: 'Transitions Master Folder',
        type: 'DRIVE FOLDER',
        size: '6.5 GB',
        driveLink: 'https://drive.google.com/drive/folders/1jPr_FB5CR1rPQKOhfzYNCGRyqUOnUJp0?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-paper-folding',
    collectionId: 'assets',
    name: 'Paper Folding Effect Template',
    categorySlug: 'transitions-paper-effects',
    resourceCount: 45,
    totalSize: '1.2 GB',
    driveUrl: 'https://motioneditz.com/paper-folding-template/',
    files: [
      {
        id: 'doc-file-33',
        name: 'Paper Folding Effect Template (MotionEditz)',
        type: 'TEMPLATE / AEP',
        size: '1.2 GB',
        driveLink: 'https://motioneditz.com/paper-folding-template/'
      }
    ]
  },
  {
    id: 'folder-paper-animation',
    collectionId: 'assets',
    name: 'Paper Animation Preset',
    categorySlug: 'transitions-paper-effects',
    resourceCount: 60,
    totalSize: '1.6 GB',
    driveUrl: 'https://drive.google.com/drive/mobile/folders/17eNZpb3bHVEOOJzC5DBgqUnEnNxvoxgR?usp=sharing',
    files: [
      {
        id: 'doc-file-34',
        name: 'Paper Animation Preset Folder',
        type: 'DRIVE FOLDER',
        size: '1.6 GB',
        driveLink: 'https://drive.google.com/drive/mobile/folders/17eNZpb3bHVEOOJzC5DBgqUnEnNxvoxgR?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-3d-icons',
    collectionId: 'assets',
    name: '3D Icons',
    categorySlug: '2d-3d-visual-elements',
    resourceCount: 450,
    totalSize: '3.8 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1qXkf-fK6JSARtXRsSLhIz_ScJc9ZaQvt?usp=sharing',
    files: [
      {
        id: 'doc-file-35',
        name: '3D Icons Pack Folder',
        type: 'DRIVE FOLDER',
        size: '3.8 GB',
        driveLink: 'https://drive.google.com/drive/folders/1qXkf-fK6JSARtXRsSLhIz_ScJc9ZaQvt?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-stickman',
    collectionId: 'assets',
    name: 'Stickman Animations',
    categorySlug: '2d-3d-visual-elements',
    resourceCount: 320,
    totalSize: '2.1 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1MMrERpkN7ZTgMgg0fH8OJaHvhMAiFdAj?usp=sharing',
    files: [
      {
        id: 'doc-file-36',
        name: 'Stickman Animations Folder',
        type: 'DRIVE FOLDER',
        size: '2.1 GB',
        driveLink: 'https://drive.google.com/drive/folders/1MMrERpkN7ZTgMgg0fH8OJaHvhMAiFdAj?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-hand-animations',
    collectionId: 'assets',
    name: 'Hand Animations',
    categorySlug: '2d-3d-visual-elements',
    resourceCount: 280,
    totalSize: '1.9 GB',
    driveUrl: 'https://drive.google.com/drive/folders/184YBPephpNbqgEnwGRlMAB7c4ieu21Qp?usp=sharing',
    files: [
      {
        id: 'doc-file-37',
        name: 'Hand Animations Folder',
        type: 'DRIVE FOLDER',
        size: '1.9 GB',
        driveLink: 'https://drive.google.com/drive/folders/184YBPephpNbqgEnwGRlMAB7c4ieu21Qp?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-character-png',
    collectionId: 'assets',
    name: 'Character PNG',
    categorySlug: '2d-3d-visual-elements',
    resourceCount: 520,
    totalSize: '3.2 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1Ak-xTO2mbfzHVlbIjPj5kwu8vHHGixzW?usp=sharing',
    files: [
      {
        id: 'doc-file-38',
        name: 'Character PNG Folder',
        type: 'DRIVE FOLDER',
        size: '3.2 GB',
        driveLink: 'https://drive.google.com/drive/folders/1Ak-xTO2mbfzHVlbIjPj5kwu8vHHGixzW?usp=sharing'
      }
    ]
  },
  {
    id: 'folder-business-character-luca',
    collectionId: 'assets',
    name: 'Business Character Pack by Luca',
    categorySlug: '2d-3d-visual-elements',
    resourceCount: 240,
    totalSize: '2.5 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1P0me8s05x0Nlgbvae7lN55hs7BPOwEDR?usp=drive_link',
    files: [
      {
        id: 'doc-file-39',
        name: 'Business Character Pack by Luca Drive',
        type: 'DRIVE FOLDER',
        size: '2.5 GB',
        driveLink: 'https://drive.google.com/drive/folders/1P0me8s05x0Nlgbvae7lN55hs7BPOwEDR?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-loading-bars',
    collectionId: 'assets',
    name: 'Loading bars assets link',
    categorySlug: '2d-3d-visual-elements',
    resourceCount: 160,
    totalSize: '1.1 GB',
    driveUrl: 'https://drive.google.com/drive/folders/17ttvkBdlhzU6mope6ZZiigBbfyGbWWy-?usp=drive_link',
    files: [
      {
        id: 'doc-file-40',
        name: 'Loading Bars Assets Link Folder',
        type: 'DRIVE FOLDER',
        size: '1.1 GB',
        driveLink: 'https://drive.google.com/drive/folders/17ttvkBdlhzU6mope6ZZiigBbfyGbWWy-?usp=drive_link'
      }
    ]
  },
  {
    id: 'folder-hud-carousel',
    collectionId: 'assets',
    name: 'HUD Carousel',
    categorySlug: '2d-3d-visual-elements',
    resourceCount: 80,
    totalSize: '540 MB',
    driveUrl: 'https://drive.google.com/file/d/11gOCrg5BGGNFCoEQ8ZkoENgy2VMzrnbB/view',
    files: [
      {
        id: 'doc-file-41',
        name: 'HUD Carousel Motion File',
        type: 'MOV / ALPHA',
        size: '540 MB',
        driveLink: 'https://drive.google.com/file/d/11gOCrg5BGGNFCoEQ8ZkoENgy2VMzrnbB/view'
      }
    ]
  },
  {
    id: 'folder-raw-podcast',
    collectionId: 'assets',
    name: 'Raw Podcast clips for editing',
    categorySlug: 'raw-podcast-footage',
    resourceCount: 35,
    totalSize: '12.8 GB',
    driveUrl: 'https://drive.google.com/drive/folders/1vjaZuMCdTMbuXzAoPgPA3hFWPZERR_hz?usp=drive_link',
    files: [
      {
        id: 'doc-file-42',
        name: 'Raw Podcast Clips for Editing Drive',
        type: 'DRIVE FOLDER',
        size: '12.8 GB',
        driveLink: 'https://drive.google.com/drive/folders/1vjaZuMCdTMbuXzAoPgPA3hFWPZERR_hz?usp=drive_link'
      }
    ]
  }
];

export const DEFAULT_ADMIN_SETTINGS: AdminSettings = {
  supportWhatsapp: '',
  supportEmail: '',
  upiId: '',
  accountHolder: 'State Bank of India (SBI)',
  qrCodeImagePath: '/assets/aistudio/image_6ffc31cc.png',
  driveMasterLink: 'https://drive.google.com/drive/folders/1qErlzYmApZt7DN1RPB_1Lnu2A5Ek8gPH?usp=drive_link',
  announcementText: '⚡ Complete Google Doc Catalog Integrated · Scan SBI QR Code to Unlock All Links'
};
