import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Scale, 
  Utensils, 
  Wine, 
  Sparkles, 
  AlertTriangle, 
  TrendingUp, 
  Printer, 
  Download, 
  BadgeCheck, 
  Lock, 
  FileText, 
  Users, 
  Check, 
  ChevronRight, 
  ShieldAlert, 
  Info, 
  Layers, 
  Zap,
  Award
} from 'lucide-react';
import { VerifiedItem } from '../types';
import IndiaGovEmblem from './IndiaGovEmblem';

interface OpeningScheduleViewProps {
  selectedItem: VerifiedItem;
  onBack: () => void;
  onContactAdmin?: () => void;
}

export default function OpeningScheduleView({ selectedItem, onBack, onContactAdmin }: OpeningScheduleViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeframe' | 'statutory' | 'management'>('overview');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  const partnerName = selectedItem.specifications['Partner Name'] || selectedItem.name;
  const companyName = selectedItem.specifications['Company Name'] || 'Indus Limited';
  const partnerId = selectedItem.id;
  const companyInvestment = selectedItem.specifications['Company Investment'] || '₹7,00,00,000';
  const partnerInvestment = selectedItem.specifications['Partner Investment'] || '₹1,40,000';

  // Overall Construction Progress (set to 80%)
  const overallProgress = 80;

  const constructionPhases = [
    {
      name: 'Civil & Heavy Structural Foundation',
      category: 'Structure',
      progress: 100,
      status: 'Completed',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      description: 'RCC earthquake-resistant framework, high-density load-bearing floor slabs, exterior architectural façade, reinforced structural columns.'
    },
    {
      name: 'Central MEP, HVAC & Air Decontamination',
      category: 'Engineering',
      progress: 85,
      status: 'Commissioning',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      description: 'Chilled-water central air conditioning, dual electrostatic kitchen exhaust precipitator, high-CFM air scrubbers and carbon odor neutralizers.'
    },
    {
      name: 'Acoustic Decoupling & Soundproofing Isolation',
      category: 'Acoustics',
      progress: 80,
      status: '80% Calibrated',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      description: 'Multi-layer floating floor screed, double rockwool cavity drywall, zero decibel structural vibration leakage, reverberation dampening.'
    },
    {
      name: 'Commercial Culinary Kitchen & Mixology Bar Infrastructure',
      category: 'Hospitality',
      progress: 75,
      status: 'Active Fitment',
      statusColor: 'text-amber-700 bg-amber-50 border-amber-200',
      description: 'Imported SS-304 food-grade counter fabrication, underbar refrigeration, draft beer glycol lines, blast chillers, commercial grease traps.'
    },
    {
      name: 'Luxury Interior Architecture & Bespoke VIP Lounges',
      category: 'Interiors',
      progress: 72,
      status: 'Finishing Phase',
      statusColor: 'text-amber-700 bg-amber-50 border-amber-200',
      description: 'Italian Statuario marble flooring, handcrafted acoustic wood wall fluting, custom leather banquette seating, smart DMX mood lighting.'
    },
    {
      name: 'Life Safety, Fire Sprinklers & Emergency Evacuation',
      category: 'Safety',
      progress: 88,
      status: 'Testing Phase',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      description: 'Wet-riser dual pumps, automatic overhead sprinkler network, pressurized fire stairs, flame-retardant upholstery certifications.'
    },
    {
      name: 'Hospitality ERP, POS & 4K Surveillance Mesh Network',
      category: 'Technology',
      progress: 60,
      status: 'Deployment',
      statusColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      description: 'Redundant fiber optic backbone, cloud POS terminals, 30-day 4K DVR surveillance grid, biometric staff access doors.'
    }
  ];

  const statutoryNorms = [
    {
      title: 'West Bengal State Excise FL-3 / FL-4 Bar & Restaurant License',
      authority: 'Directorate of Excise, Govt. of West Bengal',
      law: 'Bengal Excise Act, 1909 & West Bengal Excise Rules',
      rules: [
        'Mandatory statutory setback distance from educational institutions and recognized places of worship verified and endorsed.',
        'High-security bonded liquor vault with dual-custody digital biometric access and 24/7 CCTV angle coverage.',
        'Real-time automated excise stock ledger integration for daily bottle barcode scanning and batch verification.'
      ],
      compliance: 'Compliance Audit Passed (Pre-License Endorsement Stage)'
    },
    {
      title: 'West Bengal Fire & Emergency Services Safety Clearance (NOC)',
      authority: 'West Bengal Fire & Emergency Services Directorate',
      law: 'West Bengal Fire Services Act & National Building Code (NBC Part IV)',
      rules: [
        'Dedicated 50,000-litre underground fire water reserve tank with dual electric and diesel standby booster pump sets.',
        'Twin pressurized emergency fire egress stairwells with 120-minute fire-rated self-closing doors and illuminated panic bars.',
        'Mandatory non-combustible interior wall insulation and flame-retardant certification for carpets and VIP soft furnishings.'
      ],
      compliance: 'Structural Hydrant Testing 96% Complete'
    },
    {
      title: 'West Bengal Pollution Control Board (WBPCB) Environmental Norms',
      authority: 'West Bengal Pollution Control Board (Dept. of Environment)',
      law: 'Noise Pollution (Regulation and Control) Rules & Water/Air Acts',
      rules: [
        'Strict boundary ambient sound level limits with automated calibrated decibel limiters locked into the master audio amplifier rack.',
        'Dual-stage Electrostatic Precipitator (ESP) with high-altitude roof exhaust chimney for complete smoke and kitchen grease filtration.',
        'Zero-discharge multi-chamber grease traps and dedicated commercial effluent treatment plant (ETP) before municipal connection.'
      ],
      compliance: 'Acoustic & Effluent System Calibrated'
    },
    {
      title: 'FSSAI Central / State Commercial Food Hygiene License',
      authority: 'Food Safety and Standards Authority of India (FSSAI)',
      law: 'Food Safety and Standards Act, 2006 (Schedule 4 Hygiene Mandate)',
      rules: [
        'HACCP-compliant food preparation zoning: segregation of raw meats, seafood, dairy, and cold tapas preparation stations.',
        'Mandatory bi-annual medical fitness checkups and enteric pathogen vaccination certificates for all culinary staff.',
        'Continuous cold chain telemetry logging with automated temperature alert monitors for walk-in coolers and deep chillers.'
      ],
      compliance: 'License MD2026-7843-FASS-8890031 Active & Linked'
    },
    {
      title: 'Police Commission & Entertainment Security Regulations',
      authority: 'Office of the Commissioner of Police / Entertainment Section',
      law: 'Public Amusement Licensing Regulations & PSARA Security Norms',
      rules: [
        'Uninterrupted 30-day 4K surveillance footage storage covering entry/exit vestibules, parking, reception, and bar floor perimeters.',
        'Licensed security staff registered under Private Security Agencies (Regulation) Act with trained female security stewards on duty.',
        'Strict curfew automation, digital ID scanner at front doors, and zero-tolerance statutory anti-narcotics enforcement protocol.'
      ],
      compliance: 'Surveillance Archival System Installed'
    },
    {
      title: 'Chief Electrical Inspectorate & Structural Stability Endorsement',
      authority: 'Chief Electrical Inspector to Govt. of West Bengal (CEIG)',
      law: 'Indian Electricity Rules & Municipal Structural Stability Regulations',
      rules: [
        'Chartered Structural Engineer dynamic load-bearing certification validating dance floor and mezzanine live load capacity.',
        'CEIG formal sanction for dedicated 315 kVA step-down transformer substation and acoustic-enclosed silent diesel generator.',
        'Dual-earthing protection grid with lightning arresters and automatic residual current circuit breakers (RCCB).'
      ],
      compliance: 'CEIG Substation Clearance Sanctioned'
    }
  ];

  const timelinePhases = [
    {
      phase: 'Phase 1 • Months 01 – 06',
      title: 'Structural Architecture, Foundation & Statutory Clearances',
      status: '100% Completed',
      statusBg: 'bg-emerald-500 text-white',
      points: [
        'Land demarcation, structural engineering load blueprints, and seismic stability calculations.',
        'Government municipal approvals, architectural zoning sanctions, and commercial utility clearances.',
        'Heavy civil reinforcement, floor slab casting, and external building weatherproofing.'
      ]
    },
    {
      phase: 'Phase 2 • Months 07 – 13',
      title: 'Heavy MEP Utilities, Acoustic Soundproofing & Substation',
      status: '100% Completed',
      statusBg: 'bg-emerald-500 text-white',
      points: [
        'High-capacity 315 kVA substation, silent DG set, and dedicated commercial three-phase electrical distribution.',
        'Central HVAC installation with commercial fresh air intake, kitchen exhaust scrubbers, and duct routing.',
        'Multi-layer acoustic decoupled isolation, floating floor screed, and sound baffle engineering to guarantee zero residential decibel leakage.'
      ]
    },
    {
      phase: 'Phase 3 • Months 14 – 19',
      title: 'Luxury Interior Mastercrafting, Bar Counters & Culinary Lines',
      status: '92% Completed',
      statusBg: 'bg-emerald-500 text-white',
      points: [
        'Installation of imported Italian marble, custom acoustic wood panelling, and bespoke plush VIP banquette seating.',
        'Commercial kitchen equipment layout with SS-304 food-grade surfaces, combi-ovens, and blast chillers.',
        'Custom master cocktail bar construction with underbar refrigeration, beer draft glycol lines, and glassware chilling vaults.'
      ]
    },
    {
      phase: 'Phase 4 • Months 20 – 23',
      title: 'Statutory Endorsements, Elite Staff Hiring & Management Integration',
      status: 'Active Current Stage (80% Complete)',
      statusBg: 'bg-emerald-600 text-white',
      points: [
        'Formal joint inspection by State Excise, Fire Safety Directorate, and West Bengal Pollution Control Board.',
        'Recruitment and onboarding of certified Master Mixologists, Sommeliers, Executive Head Chefs, and Hospitality Floor Captains.',
        'Comprehensive standard operating procedure (SOP) training, dry-run service simulations, and hygiene protocols.'
      ]
    },
    {
      phase: 'Phase 5 • Months 24 – 26+ (Flexible Extension)',
      title: 'VIP Patron Cultivation, Private Soft Launch & Grand Opening',
      status: 'Upcoming Milestone',
      statusBg: 'bg-slate-700 text-white',
      points: [
        'Invitation-only private tastings for high-net-worth corporate partners, gastronomy critics, and hospitality connoisseurs.',
        'Gradual building of a recurring VIP guest book and premium patronage through curated tasting evenings.',
        'Official gazette notification, final administrative sign-off, and grand public ribbon-cutting ceremony (time limit may increase as needed).'
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-6 pb-16 animate-in fade-in duration-500 w-full min-w-0">
      {/* Top Navigation & Breadcrumbs Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm print:hidden">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onBack}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#007a3e] text-white text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-sm shrink-0"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Overview</span>
          </button>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-medium truncate">
            <span>Portal</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className="text-slate-600 font-mono truncate">{partnerId}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className="text-[#007a3e] font-bold truncate">Estimated Opening Roadmap</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
            URL: /estimated-opening
          </span>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print Dossier</span>
            <span className="sm:hidden">Print</span>
          </button>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-5 sm:p-8 border border-slate-800 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={onBack}
                className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-bold transition-all cursor-pointer active:scale-95 shrink-0 flex items-center gap-1.5 shadow-sm"
                title="Back to Overview"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="p-2 sm:p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shrink-0">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-emerald-400 block truncate">
                  Infrastructure & Construction Blueprint
                </span>
                <h1 className="text-xl sm:text-3xl font-display font-extrabold tracking-tight text-white mt-0.5">
                  Estimated Opening Date & Construction Status
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold shadow-inner">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Estimated Opening Date: <strong>Not announced yet (Given at 95% work completion)</strong></span>
              </div>
            </div>
          </div>

          {/* Project & Partner Meta Card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider truncate">Designated Venue</span>
              <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                <Wine className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">Luxury Bar & Club</span>
              </span>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider truncate">Corporate Entity</span>
              <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{companyName}</span>
              </span>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider truncate">Agreement Partner</span>
              <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{partnerName}</span>
              </span>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider truncate">License Protocol</span>
              <span className="text-xs sm:text-sm font-bold text-amber-300 font-mono truncate">
                {partnerId}
              </span>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider truncate">Opening Date</span>
                <span className="text-[9px] font-bold text-amber-300 bg-amber-400/15 px-1 py-0.5 rounded border border-amber-400/30 shrink-0 leading-none">At 95%</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-1.5 truncate" title="The opening date has not been announced yet. It will be given when 95% of the work is completed.">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">Not announced yet</span>
              </span>
            </div>
          </div>

          {/* Executive Disclosure Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-800/40 to-emerald-500/15 border border-amber-400/30 flex items-start gap-3.5 shadow-sm">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 font-bold text-white text-sm sm:text-base flex-wrap">
                <span>Official Statutory Notice • Opening Date Announcement Policy</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wider">
                  Mandatory Governance
                </span>
              </div>
              <p className="leading-relaxed text-slate-300 text-xs sm:text-sm">
                Under state commercial hospitality licensing norms and corporate regulatory governance, <strong>the opening date has not been announced yet. The date will be given when 95% of the work is completed.</strong> Currently, physical construction and fitments have achieved the <strong>80% milestone</strong>. Final dates will be gazetted after the 95% threshold is certified.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Process Bar (Between 80% and 100%) */}
      <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl flex flex-col gap-6 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                <Check className="w-3 h-3" /> Live Telemetry
              </span>
              <span className="text-xs font-semibold text-slate-500">Milestone Stage 4 of 5</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
              Complete Venue Construction Progress
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Composite structural, acoustic, culinary, life-safety, and interior fitment index
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 shrink-0">
            <div className="flex flex-col items-end">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Progress</span>
              <span className="text-2xl sm:text-4xl font-display font-black text-[#007a3e] tracking-tight">
                80%
              </span>
            </div>
            <div className="w-px h-9 bg-slate-200"></div>
            <div className="flex flex-col text-xs font-semibold text-slate-600 leading-tight">
              <span className="text-emerald-700 font-bold">80% Milestone</span>
              <span className="text-slate-400 font-normal text-[11px]">Phase 4 Active</span>
            </div>
          </div>
        </div>

        {/* Master Visual Progress Bar */}
        <div className="flex flex-col gap-2.5 min-w-0">
          <div className="relative w-full h-8 sm:h-10 bg-slate-100 rounded-2xl p-1.5 overflow-hidden border border-slate-200 shadow-inner">
            {/* Background grid indicators */}
            <div className="absolute inset-0 flex justify-between px-4 pointer-events-none opacity-20">
              {[0, 25, 50, 75, 100].map((mark) => (
                <div key={mark} className="h-full w-px bg-slate-400 flex flex-col justify-end">
                  <span className="text-[9px] font-mono text-slate-600 mb-0.5">{mark}%</span>
                </div>
              ))}
            </div>

            {/* Glowing animated bar */}
            <div
              className="relative h-full rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 shadow-md transition-all duration-1000 flex items-center justify-end pr-3"
              style={{ width: `${overallProgress}%` }}
            >
              {/* Shimmer animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_2s_infinite]"></div>
              <span className="relative z-10 text-white font-extrabold text-xs tracking-wider drop-shadow-sm flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {overallProgress}%
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-2 text-[11px] font-bold text-slate-500 px-1">
            <span className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Current Work: 80% Complete
            </span>
            <span className="font-mono text-amber-800 font-extrabold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-300/80 flex items-center gap-1.5 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              Opening Date Given At: 95% Work
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 shrink-0" /> Full Launch (100%)
            </span>
          </div>
        </div>

        {/* Granular Component Completion Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          {constructionPhases.map((phase, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-emerald-300 transition-all flex flex-col gap-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{phase.category}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{phase.name}</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold border shrink-0 ${phase.statusColor}`}>
                  {phase.progress}%
                </span>
              </div>

              {/* Mini progress bar */}
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    phase.progress === 100 
                      ? 'bg-emerald-500' 
                      : phase.progress >= 90 
                        ? 'bg-teal-500' 
                        : 'bg-amber-500'
                  }`}
                  style={{ width: `${phase.progress}%` }}
                ></div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs for In-Depth Explanations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 print:hidden">
        {[
          { 
            id: 'overview', 
            label: '18–26 Mo. Timeline', 
            fullLabel: 'Why 18–26 Months Timeline? (Time limit may increase)',
            icon: Clock 
          },
          { 
            id: 'timeframe', 
            label: 'Milestone Progression', 
            fullLabel: '18–26 Month Milestone Progression',
            icon: Calendar 
          },
          { 
            id: 'management', 
            label: 'Staff & Customers', 
            fullLabel: 'Hospitality Staff & Customer Building',
            icon: Users 
          },
          { 
            id: 'statutory', 
            label: 'Government Rules', 
            fullLabel: 'Government Rules & Statutory Norms',
            icon: Scale 
          }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              title={tab.fullLabel}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center select-none ${
                isActive 
                  ? 'bg-white text-[#007a3e] shadow-sm border border-slate-200/80' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#007a3e]' : 'text-slate-400'}`} />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT 1: WHY 18 TO 26 MONTHS FOR WORLD-CLASS BARS */}
      {activeTab === 'overview' && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-300">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full w-fit uppercase tracking-wider">
                  Industry Excellence Benchmark
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  Takes 18 to 26 Months • Time Limit May Increase
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                Why Creating a Premium Luxury Bar or Club Requires 18 to 26 Months
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Unlike simple fast-food kiosks or basic diners that can be fitted in weeks, establishing a high-end luxury bar and club that dominates severe commercial competition requires <strong>18 to 26 months of deliberate, uncompromised craftsmanship</strong>. <em>Sometimes this time limit may increase</em> depending on statutory clearances, specialized acoustic engineering, imported equipment procurement, or comprehensive customer and brand cultivation. At this caliber, success depends entirely on sensory environment, culinary mastery, bespoke ambiance, service perfection, and product variety.
              </p>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/90 border border-amber-200 flex items-start gap-3 mt-1">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-700 shrink-0 mt-0.5">
                  <Info className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-0.5 text-xs sm:text-sm text-amber-950">
                  <span className="font-bold text-amber-900">Official Duration Notice:</span>
                  <span className="leading-relaxed">
                    It takes <strong>18 to 26 months</strong> to establish this venue. Sometimes this time limit may increase based on state excise clearances, bespoke soundproofing certifications, and customer acquisition dry runs.
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* 1. Acoustic & Environmental Perfection */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-md transition-all flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Acoustic Environment & Sensory Ambiance</h4>
                    <span className="text-[11px] text-purple-700 font-semibold">Decibel Tuning & Odorless Climate</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In top-tier competition, poor acoustics destroys repeat business. High-end clientele demands energetic, punchy music at the bar and dance zones while retaining the ability to hold effortless conversations in VIP booths without ear fatigue. Achieving this requires multi-layer floating concrete floors, rockwool acoustic decoupling, architectural baffle ceilings, and specialized scent/air scrubbers that remove kitchen smoke within seconds.
                </p>
              </div>

              {/* 2. Food & Culinary Variety */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-md transition-all flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">2. Artisan Food, Menu Variety & Culinary Precision</h4>
                    <span className="text-[11px] text-emerald-700 font-semibold">Gourmet Small-Plates & Live Fire</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discerning patrons judge a luxury club by its kitchen just as much as its cocktails. Creating an unforgettable culinary identity requires 6 to 9 months of recipe R&D, testing custom spice infusions, importing specialized combi-steamer equipment, standardizing HACCP food safety, and locking in seasonal supply chains for artisanal ingredients, fresh seafood, and premium meats.
                </p>
              </div>

              {/* 3. Bar Variety & Mixology */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-md transition-all flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                    <Wine className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">3. Mixology Excellence & Rare Spirit Variety</h4>
                    <span className="text-[11px] text-amber-700 font-semibold">100+ Single Malts, Aged Rums & Signature Cocktails</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Winning high-value club competition demands an extraordinary beverage inventory. Our bar blueprint incorporates dual-zone wine preservation cellars, draft craft beer glycol chilling conduits, crystal clear ice manufacturing blocks, and rare single malt allocations requiring specialized state excise bonded approvals.
                </p>
              </div>

              {/* 4. Hospitality Service & Management */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-md transition-all flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">4. Five-Star Service & Seasoned Leadership</h4>
                    <span className="text-[11px] text-blue-700 font-semibold">Rigorous Vetting & Service Etiquette</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A multi-crore venue fails instantly if staff is rude or clumsy. Assembling, police-clearing, and training a 45-person team of sommeliers, flair bartenders, floor hosts, and security stewards requires months of daily service dry-runs. Our senior managers have spent decades steering premier 5-star establishments across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: 18–26 MONTH MILESTONE TIMELINE */}
      {activeTab === 'timeframe' && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-300">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit uppercase tracking-wider">
                Full Lifecycle Execution Plan
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                The 18–26 Month Construction to Grand Opening Roadmap
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                A verified breakdown of each phase, from structural groundbreaking to final customer cultivation (sometimes this time limit may increase as needed).
              </p>
            </div>

            <div className="flex flex-col gap-6 relative before:absolute before:top-4 before:bottom-4 before:left-5 sm:before:left-7 before:w-0.5 before:bg-slate-200 pt-2">
              {timelinePhases.map((phase, idx) => (
                <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-slate-300 group-hover:border-[#007a3e] shadow-sm flex items-center justify-center shrink-0 z-10 transition-colors">
                    <span className="font-display font-black text-xs sm:text-sm text-slate-700 group-hover:text-[#007a3e]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex-1 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 transition-all flex flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                        {phase.phase}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${phase.statusBg}`}>
                        {phase.status}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {phase.title}
                    </h4>

                    <ul className="flex flex-col gap-1.5 mt-2">
                      {phase.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: MANAGEMENT & CUSTOMER BASE BUILDING */}
      {activeTab === 'management' && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-300">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit uppercase tracking-wider">
                Human Capital & Community Acquisition
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                Building Customers & World-Class Hospitality Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Why cultivating repeat clientele and training five-star leadership requires months of dedicated focus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Management Hiring & Training */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-800">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Elite Team Recruitment & Onboarding</h4>
                    <span className="text-xs text-blue-700 font-semibold">45+ Hospitality Specialists</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In a luxury venue, the customer interaction determines the profit margin. Hiring cannot be hurried:
                </p>
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Executive Head Chef & Sous Chefs:</strong> Sourced with 10+ years in international luxury hotels, specialized in high-volume tapas and modern fusion dining.
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Award-Winning Mixologists & Sommeliers:</strong> Certified beverage curators trained in speed, molecular drink craft, and rare vintage cellar care.
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">General Manager & Floor Captains:</strong> Hospitality professionals overseeing table turn rates, VIP concierge requests, and dispute de-escalation.
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Police-Verified PSARA Security Detail:</strong> Strict background verification, conflict management certifications, and female guest protection protocols.
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Building & Organic Reputation */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-800">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Cultivating a Loyal VIP Customer Base</h4>
                    <span className="text-xs text-amber-800 font-semibold">Staged Pre-Launch Strategy</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A high-end club cannot open cold to the public. Building a premier guest ledger requires 3 to 6 months of curated exposure:
                </p>
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Private Tasting Evenings:</strong> Intimate invitation-only evenings for corporate leaders, key opinion leaders, and gastronomes to fine-tune food taste and drink chemistry.
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Corporate Member Pre-Registrations:</strong> Establishing formal tie-ups with regional business chambers, luxury automobile clubs, and elite sports associations.
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Soft Launch Stress Runs:</strong> Gradual operational ramping (from 25% capacity to 100%) to ensure POS servers, kitchen ticket times, and valets operate without friction.
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Organic Word-of-Mouth Momentum:</strong> Ensuring that on day one of public opening, the venue already possesses a 4-week advance booking backlog.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: GOVERNMENT RULES & STATUTORY NORMS */}
      {activeTab === 'statutory' && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-300">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Statutory Mandate & Legal Adherence
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                Government Regulatory Framework & Operator Covenants
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                All development, licensing, and operations are strictly executed in compliance with West Bengal State and Central Government enactments
              </p>
            </div>

            {/* Statutory Compliance Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {statutoryNorms.map((norm, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200 hover:border-emerald-300 transition-all flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">
                        {norm.authority}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                        {norm.title}
                      </h4>
                    </div>
                    <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                      <Scale className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 w-fit">
                    Enactment: {norm.law}
                  </span>

                  <ul className="flex flex-col gap-2 mt-1">
                    {norm.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-200/80 mt-auto flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">Clearance Status:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-200">
                      {norm.compliance}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Company & Agreement Holder Mutual Obligations Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <IndiaGovEmblem className="w-8 h-8 text-amber-400" />
                  <div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white">
                      Mutual Statutory Covenants • Indus Limited & Agreement Holder
                    </h4>
                    <span className="text-xs text-slate-400">
                      Executed under the Indian Contract Act & State Licensing Regulations
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Legally Binding
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Indus Limited (Operating Entity)
                  </span>
                  <p className="leading-relaxed text-slate-300">
                    Responsible for financing the ₹7,00,00,000 capital expenditure, delivering heavy engineering works, deploying certified commercial kitchen infrastructure, procuring acoustic insulation systems, and executing structural stability certifications.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-400" />
                    {partnerName} (Agreement Holder • ID: {partnerId})
                  </span>
                  <p className="leading-relaxed text-slate-300">
                    Covenants to uphold all state government mandates, maintain verified identity credentials (Aadhaar, PAN, Voter ID), attend official excise verification interviews, coordinate with local municipal bodies, and co-sign statutory revenue filings.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs text-amber-200 flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>Strict Compliance Rule:</strong> Neither entity may deviate from government licensing guidelines. Any non-compliance halts project commissioning immediately until state rectification notices are formally satisfied.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Official Bottom Dossier Card & Action Panel */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 print:hidden">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#007a3e] shrink-0">
            <Building2 className="w-7 h-7" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Ledger Record</span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              Project Infrastructure Dossier WB27-0428-EST-OPEN
            </span>
            <span className="text-xs text-slate-500">
              Verified for Partner: {partnerName} • Category: Luxury Bar & Lounge
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer active:scale-95 text-center"
          >
            Return to Dashboard
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#007a3e] hover:bg-emerald-700 text-white text-xs font-extrabold shadow-md shadow-emerald-700/20 transition-all cursor-pointer active:scale-95 text-center"
          >
            <Printer className="w-4 h-4" />
            <span>Print Official Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
}
