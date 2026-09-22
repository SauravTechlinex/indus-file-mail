export type VerifiedItemType = 'Product' | 'Certificate' | 'Shipment' | 'Employee';

export interface RouteNode {
  location: string;
  status: 'Completed' | 'Active' | 'Pending';
  date: string;
}

export interface VerifiedItem {
  id: string;
  name: string;
  category: string;
  type: VerifiedItemType;
  status: string;
  date: string;
  securityHash: string;
  specifications: Record<string, string>;
  transitRoute?: RouteNode[];
  isDynamic?: boolean; // Indicates if this was generated on-the-fly
}

// Pre-defined "Golden Records" for official Indus queries
export const OFFICIAL_REGISTRY: Record<string, VerifiedItem> = {
  'WB27/0428/7983/2026': {
    id: 'WB27/0428/7983/2026',
    name: 'Milan Biswas',
    category: 'Luxury Bar License Validation',
    type: 'Certificate',
    status: 'VERIFIED & ACTIVE',
    date: '2026-06-06',
    securityHash: '8e1f0a223bc799de88902ca51bc182fd94e2e3e7894bbdc6e379ff73a812ba55b6',
    specifications: {
      'Company Name': 'Indus Limited',
      'Category': 'Luxury Bar',
      'Partner Name': 'Milan Biswas',
      'Mobile Number': '+91 9339492781',
      'Profit Ratio': '70:30',
      'Contract Validity': '5 years',
      'Partner Investment': '₹1,40,000 (One Lakh Forty Thousand Rupees)',
      'Company Investment': '₹7,00,00,000 (Seven Crore Rupees)',
      'Company Affiliation': 'Indus Limited (under Indus Tower, valued at ₹1.13 lakh crore / over USD 13.5 billion)',
      'High-level Government Officer License Verification': 'Hare Krishna Bandopadhyay (IAS Officer)',
      'Police-level Verification': 'Bidda Ganguly (IPS)',
      'State-level Verification': 'West Bengal Government',
      'License Validity': '2035',
      'Category Class': 'h5d Luxury',
      'Indus Groups MD': 'Dhiren Karmakar',
      'FSSAI Number': 'MD2026-7843-FASS-8890031 (verified and linked)',
      'Trade License': 'Verified and connected',
      'Agreement': 'Milan Biswas (verified)',
      'Profit Transfer Method': 'SBI bank transfer',
      'Documents': 'Aadhaar, PAN, Voter ID (verified)',
      'Address': 'Bagangram',
      'Coordinates': "Lat: 23.0000245'9900589 & Lon: 78'3489'0089'4455598"
    }
  },
  'IL-PRD-8842': {
    id: 'IL-PRD-8842',
    name: 'Vanguard Titan-IV Cryo-Thruster Core',
    category: 'Aerospace Propulsion & High-Fusion Metallurgy',
    type: 'Product',
    status: 'VERIFIED AUTHENTIC',
    date: '2026-03-12',
    securityHash: '8ae4b1c90df035dd11f81cf05dbb3fac8960fd1237bb9ee11a50bc02240b013a',
    specifications: {
      'Material Composition': 'Titanium-Aluminide Superalloy (Grade 9)',
      'Thermal Tolerance': '-150°C to +1,650°C Heavy Cycle',
      'Tensile Yield Strength': '1,450 MPa Peak Pressure',
      'Manufacturing Facility': 'Indus Advanced Forge, Bengaluru (IF-04)',
      'Lead Quality Inspector': 'Dr. Sarah H. Lin (Employee ID: IL-EMP-8803)',
      'QC Calibration Score': '99.87% Peak Structural Efficiency',
      'Warranty Lifespan': 'Active till 2031 (5-Year Enterprise Warrant)'
    }
  },
  'IL-CERT-7731': {
    id: 'IL-CERT-7731',
    name: 'Carbon-Neutral Maritime Compliance Warrant',
    category: 'Global Environmental Regulatory Approval',
    type: 'Certificate',
    status: 'ACTIVE COMPLIANT',
    date: '2026-05-18',
    securityHash: 'c0183bdfa40efd6288ea19ff0891001a110294e09f8c050a4bf8fce1b88e0012',
    specifications: {
      'Regulatory Authority': 'SGS International Marine Standards Council',
      'Compliance Standard': 'EU-ETS-MRV / IMO Level 4 (Zero Emission Grid)',
      'Annual Carbon Cap': '0.00g/gWh Combined Lifecycle Emissions',
      'Sustainable Initiative': 'Indus Green Cargo Corridor Alpha',
      'First Approved Date': '2024-01-10',
      'Recertified Status': 'Audit Verified on May 01, 2026',
      'Compliance Quality Class': 'Class A-1 Platinum Grade Warrant'
    }
  },
  'IL-TRK-9345': {
    id: 'IL-TRK-9345',
    name: 'Liquid-Neon Cryogenic Power Container',
    category: 'High-Value Energy Supply-Chain Logistics',
    type: 'Shipment',
    status: 'IN TRANSIT (ON SCHEDULE)',
    date: '2026-06-04',
    securityHash: 'd199ca2238fac91206f855a01bc182ed94e1e3e7894bbdc6e379ff73a812ba66',
    transitRoute: [
      { location: 'Indus Giga-Factory, Pune Hub', status: 'Completed', date: '2026-06-04 02:00' },
      { location: 'Nhava Sheva Port, Customs Desk', status: 'Completed', date: '2026-06-05 14:30' },
      { location: 'Suez Canal Transit (Vessel: Indus-Calypso)', status: 'Active', date: 'In Transit' },
      { location: 'Port of Rotterdam (Terminal 3C)', status: 'Pending', date: 'ETA: 2026-06-18' }
    ],
    specifications: {
      'Gross Shipped Cargo Weight': '18.42 Metric Tons',
      'Cryogenic Core Temperature': 'Stably maintained at -246.2°C',
      'Real-Time GPS Coordinates': '27.8427° N, 33.9184° E (Suez Gulf)',
      'Authorized Carrier': 'IMO Marine Registry 982174 (Indus-Calypso)',
      'Customs Declaration Ref': 'IL-E-55102-M4 Registered Cargo',
      'Hazard Classification': 'Class 9 Pressurized Fluid (UN 3480)'
    }
  },
  'IL-EMP-4052': {
    id: 'IL-EMP-4052',
    name: 'Vikram R. Sarabhai',
    category: 'Global Engineering & Hypersonic Research',
    type: 'Employee',
    status: 'ACTIVE PERSONNEL',
    date: '2021-08-15',
    securityHash: 'a9a836d50ff2e34d61fc72a5015b63fac10294e09f8c050a4bf8fce1b88e0012',
    specifications: {
      'Corporate Title': 'Principal System Architect (Hypersonic Systems)',
      'Security Clearance Cap': 'Level 5 (Aero-Defense Critical Infrastructure)',
      'Primary Research Lab': 'Indus Advanced Laboratories, Hyderabad (IL-AL-02)',
      'Biometric Check Status': 'Registered Dual-Iris Verification Active',
      'Assigned Initiative': 'Project Starfire (Phase III Hypersonic)',
      'Authorized Office Phone': '+91 (040) 555-0104 (Ext: 882)'
    }
  }
};

// Deterministic hashing to map any input to a consistent premium record!
export function getDeterministicItem(query: string): VerifiedItem {
  const cleanQuery = query.trim();
  const upperQuery = cleanQuery.toUpperCase();

  // Handle normalized match for the West Bengal govt license
  const normQuery = cleanQuery.replace(/[\/\-\s]/g, '').toUpperCase();
  if (normQuery === 'WB27042879832026') {
    return OFFICIAL_REGISTRY['WB27/0428/7983/2026'];
  }

  // If it's directly in our registry, return it
  if (OFFICIAL_REGISTRY[upperQuery]) {
    return OFFICIAL_REGISTRY[upperQuery];
  }

  // Attempt to match close formats (e.g., 8842 instead of IL-PRD-8842)
  for (const key of Object.keys(OFFICIAL_REGISTRY)) {
    if (key.endsWith(upperQuery) || upperQuery.endsWith(key.replace('IL-', ''))) {
      return OFFICIAL_REGISTRY[key];
    }
  }

  // Generating a deterministic hash seed from the query string
  let hash = 0;
  for (let i = 0; i < cleanQuery.length; i++) {
    hash = cleanQuery.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);

  const types: VerifiedItemType[] = ['Product', 'Certificate', 'Shipment', 'Employee'];
  const typeSelected = types[hash % types.length];

  // Specific thematic lists for generator
  const facilities = [
    'Pune Giga-Plant (FP-01)',
    'Bengaluru Aerospace Core (BAC-05)',
    'Hyderabad Micro-Fab Hub (HMF-12)',
    'Chennai Deep-Sea Forge (CDF-02)',
    'Gurugram Automation lab (GAL-08)'
  ];

  const inspectors = [
    'Elena Rostova (ID: IL-EMP-2901)',
    'Rajesh K. Mehta (ID: IL-EMP-7412)',
    'Maya Lin (ID: IL-EMP-3209)',
    'Marcus Thorne (ID: IL-EMP-1090)',
    'Amara Okafor (ID: IL-EMP-4055)'
  ];

  const carbonOffsets = [
    'Verified Windfarm Grid Alpha',
    'Indus Deccan Forestation Grid 4B',
    'Ocean-Algae Carbon Sinks Plan',
    'E-Waste Recycling Nodule Hub'
  ];

  let id = '';
  let name = '';
  let category = '';
  let status = 'AUTHENTICATED RECORD';
  const specifications: Record<string, string> = {};
  let transitRoute: RouteNode[] | undefined = undefined;

  // Set randomized details based on type
  if (typeSelected === 'Product') {
    const products = [
      'Zenith Graphene Heat-Dissipator Shield',
      'Helios-9 Solid-state Semiconductor Module',
      'Apex Titanium Tension-Calibrated Bolt Spec-C',
      'Aero-Drone Gyroscopic Thrust Array',
      'Symmetra High-Refractive Quartz Prism'
    ];
    id = `IL-PRD-${(hash % 9000) + 1000}`;
    name = products[hash % products.length];
    category = 'Advanced Material Engineering & Nanotech';
    status = 'VERIFIED SECURED';
    specifications['Standard Model Rating'] = `IL-SPEC-${(hash % 900) + 100}`;
    specifications['Material Grade'] = (hash % 2 === 0) ? 'Synthetic Diamond Thin-Film' : 'Graphene-Shield Alloy';
    specifications['Stress Strain Yield'] = `${(hash % 300) + 1200} MPa Ultimate Limit`;
    specifications['Thermal Safety Rating'] = `${-100 - (hash % 100)}°C up to ${1000 + (hash % 800)}°C`;
    specifications['Authorized Manufacturer'] = facilities[hash % facilities.length];
    specifications['Lead QA Specialist'] = inspectors[(hash + 1) % inspectors.length];
    specifications['Production Certificate'] = `REF-CERT-${hash % 100000}`;
  } else if (typeSelected === 'Certificate') {
    const certs = [
      'Advanced Metallurgical Elasticity Pass Certificate',
      'ISO 9001:2026 Micro-Solenoid Quality Accord',
      'Indus Strategic Materials Integrity Assurance',
      'High-Load Hydraulic Safety Cleared Warrant',
      'EU-Aero-Symmetric Structural Clearance'
    ];
    id = `IL-CERT-${(hash % 9000) + 1000}`;
    name = certs[hash % certs.length];
    category = 'Regulatory Compliance & System Audits';
    status = 'APPROVED COMPLIANT';
    specifications['Authorized Agency'] = 'Indus Group Compliance Council (GCC)';
    specifications['Accreditation Standard'] = `Standard ISO/IEC ${(hash % 50) + 17020}`;
    specifications['Compliance Audit Block'] = `BLOCK-REG-${hash % 99999}`;
    specifications['Carbon Offset Plan'] = carbonOffsets[hash % carbonOffsets.length];
    specifications['Certificate Issue Stamped'] = `2025-0${(hash % 9) + 1}-15`;
    specifications['Recertification Audit'] = 'Scheduled for 2027';
    specifications['Registry Hash Seed'] = `REG-SHA256-${hash.toString(16).toUpperCase()}`;
  } else if (typeSelected === 'Shipment') {
    const shipments = [
      'Liquid-Helium Magnet Core Consignment',
      'Pressurized Drone Propeller Shipping Block',
      'Pristine Silicon Ingot Sterile Vacuum Pod',
      'High-Tension Core-Assembly Shipped Nodule'
    ];
    id = `IL-TRK-${(hash % 90000) + 10000}`;
    name = shipments[hash % shipments.length];
    category = 'Precision Secure Transit & Supply Chain';
    status = 'IN TRANSIT (ON TIME)';
    
    // Build deterministic route
    const startOffset = hash % 5;
    const finalEta = `2026-06-${10 + (hash % 15)}`;
    transitRoute = [
      { location: `${facilities[hash % facilities.length]} Dispatch`, status: 'Completed', date: `2026-06-01 08:30` },
      { location: `Indus Express Clearance Nodule`, status: 'Completed', date: `2026-06-03 14:15` },
      { location: `Transit Core Hub (Sector ${hash % 9})`, status: 'Active', date: 'In Progress' },
      { location: `Interstate Logistics Node`, status: 'Pending', date: `ETA: ${finalEta}` }
    ];

    specifications['Consignment Weight'] = `${((hash % 1500) / 100 + 1.5).toFixed(2)} Metric Tons`;
    specifications['Container Type'] = 'Hermetically Sealed Cleanpod Type-A';
    specifications['Active Temperature Monitor'] = (hash % 3 === 0) ? '-196.1°C (Liquid Nitrogen)' : '18.5°C Ambient Controlled';
    specifications['Customs Declaration'] = `IL-CUST-${hash % 88888}`;
    specifications['Registered Logistics Carrier'] = `Indus Logistic Fleet V-${(hash % 90) + 10}`;
    specifications['Security Ledger Point'] = `LEDGER-X-${hash % 1000}`;
  } else {
    // Employee
    const firstNames = ['Aarav', 'Elena', 'Kabir', 'Julian', 'Meera', 'Rohan', 'Ananya', 'Sarah', 'Kaelen'];
    const lastNames = ['Nair', 'Siddiqui', 'Sen', 'Vance', 'Chatterjee', 'Mennon', 'Patel', 'Chen', 'McGregor'];
    const employeeName = `${firstNames[hash % firstNames.length]} ${lastNames[(hash + 3) % lastNames.length]}`;
    id = `IL-EMP-${(hash % 9000) + 1000}`;
    name = employeeName;
    category = 'Global Human Capital & Intelligence Staff';
    status = 'CONFIRMED ACTIVE';

    const designations = [
      'Senior Materials Integrity Inspector',
      'Principal Cryogenic Fluid Consultant',
      'Head Safety Lead (Aerospace Division)',
      'Global Lead Logistics Controller',
      'Micro-Solenoid Systems Architect'
    ];

    specifications['Official Title'] = designations[hash % designations.length];
    specifications['Internal Security Clear'] = `Level ${(hash % 3) + 3} Access Allowed`;
    specifications['Assigned Research Center'] = facilities[hash % facilities.length];
    specifications['Multi-factor Biometric ID'] = `ID-IRIS-${hash % 9999}`;
    specifications['Affiliated Project Hub'] = `Project Indus-Vanguard-${hash % 100}`;
    specifications['Corporate Verification Date'] = `202${(hash % 4) + 1}-08-20`;
  }

  // Create a realistic looking SHA-256 string deterministically
  let securityStub = '';
  for (let i = 0; i < 4; i++) {
    securityStub += Math.sin(hash + i).toString(16).substring(2, 10);
  }
  const securityHash = (securityStub + '00000000').substring(0, 64);

  return {
    id,
    name,
    category,
    type: typeSelected,
    status,
    date: `2026-0${(hash % 5) + 1}-10`,
    securityHash,
    specifications,
    transitRoute,
    isDynamic: true
  };
}
