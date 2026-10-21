import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  CheckCircle2, 
  ShieldAlert, 
  ExternalLink, 
  Search, 
  Briefcase, 
  Clock, 
  CreditCard, 
  BadgeCheck, 
  AlertTriangle, 
  FileText, 
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface StandbyCompany {
  id: string;
  name: string;
  legalEntity: string;
  category: string;
  sectorBadge: string;
  appId: string;
  status: 'Ready for Immediate Handover' | 'Board Approved & Escrow Funded' | 'Priority Standby #1' | 'LOI Executed & Solvency Cleared';
  paymentReadiness: string;
  proposedConcept: string;
  overview: string;
  turnaroundTime: string;
  capitalCommitment: string;
  tags: string[];
}

export const STANDBY_COMPANIES: StandbyCompany[] = [
  {
    id: 'wow-momo',
    name: 'Wow! Momo',
    legalEntity: 'Wow! Momo Foods Pvt. Ltd.',
    category: 'National QSR & Hospitality Retail Giant',
    sectorBadge: 'F&B Enterprise',
    appId: 'APP-2026-WM-01',
    status: 'Ready for Immediate Handover',
    paymentReadiness: '100% advance lease deposit & infrastructure takeover funds verified in escrow. Willing to remit immediately via RTGS.',
    proposedConcept: 'Luxury Fusion Bar & High-Energy Lounge Concept with signature gourmet dining.',
    overview: 'Nationally acclaimed hospitality powerhouse operating 600+ outlets across India with ₹2,000+ Cr brand valuation. Formally applied to take over the licensed premises, bar counter, kitchen setup, and sound infrastructure with zero operational lag.',
    turnaroundTime: 'Immediate (Within 48 hours of cancellation)',
    capitalCommitment: 'Full 5-Year Lease Consideration + Advance Security',
    tags: ['Pan-India Brand', 'Turnkey Ready', 'High Footfall']
  },
  {
    id: 'bisk-farm',
    name: 'Bisk Farm',
    legalEntity: 'SAJ Food Products Pvt. Ltd.',
    category: 'Premier FMCG & Hospitality Conglomerate',
    sectorBadge: 'Corporate Conglomerate',
    appId: 'APP-2026-BF-02',
    status: 'Board Approved & Escrow Funded',
    paymentReadiness: 'Institutional treasury allocation approved by corporate board; ready for instant wire transfer upon agreement termination.',
    proposedConcept: 'Flagship Gastronomic Restro-Bar & Premium Artisanal Club Lounge.',
    overview: 'Kolkata-headquartered multi-hundred-crore manufacturing and retail titan expanding into premier experiential dining. Complete solvency verified with verified legal clearance to assume commercial leasehold rights.',
    turnaroundTime: 'Within 3 business days',
    capitalCommitment: 'Direct Bank Wire of All Required Statutory Reserves',
    tags: ['Blue-Chip Corporate', 'High Liquidity', 'Artisanal Lounge']
  },
  {
    id: 'biscok',
    name: 'Biscok',
    legalEntity: 'Biscok Commercial Enterprises',
    category: 'Commercial Retail & Gourmet Dining Enterprise',
    sectorBadge: 'Hospitality Chain',
    appId: 'APP-2026-BC-03',
    status: 'Ready for Immediate Handover',
    paymentReadiness: 'Solvency certificate on file; advance lease payment and equipment takeover guarantee issued.',
    proposedConcept: 'Contemporary European Restro-Pub & Craft Beverage Lounge.',
    overview: 'Fast-expanding commercial enterprise seeking turnkey bar and club infrastructure. Has completed preliminary site inspection and confirmed willingness to honor all established lease terms and municipal norms.',
    turnaroundTime: 'Immediate upon notice',
    capitalCommitment: 'Comprehensive Security Deposit & Advance Rental',
    tags: ['Turnkey Acquisition', 'European Restro-Pub', 'Rapid Scaling']
  },
  {
    id: 'the-myx',
    name: 'The Myx',
    legalEntity: 'The Myx Nightlife & Hospitality LLP',
    category: 'Iconic Kolkata Nightlife, Music & Club Institution',
    sectorBadge: 'Nightclub & Clubbing',
    appId: 'APP-2026-MX-04',
    status: 'Priority Standby #1',
    paymentReadiness: 'Full commercial leasehold consideration secured in liquid escrow. Willing to match premium commercial valuation.',
    proposedConcept: 'Ultra-Luxury High-Energy Nightclub, VIP Mezzanine & Celebrity Lounge.',
    overview: 'Legendary pioneer of Eastern India luxury clubbing and electronic music. Seeking strategic expansion to deploy resident celebrity DJs, master mixologists, and high-margin VIP bottle service immediately.',
    turnaroundTime: 'Instant (24–48 Hours)',
    capitalCommitment: 'Highest Tier Commercial Leasehold Consideration',
    tags: ['Nightlife Leader', 'VIP Hospitality', 'Celebrity Venue']
  },
  {
    id: 'tall-tales',
    name: 'Tall Tales',
    legalEntity: 'Tall Tales Craft Breweries & Pubs Pvt. Ltd.',
    category: 'Acclaimed Craft Brewery, Gastro-Pub & Lounge Chain',
    sectorBadge: 'Craft Brewpub',
    appId: 'APP-2026-TT-05',
    status: 'LOI Executed & Solvency Cleared',
    paymentReadiness: 'Approved capital allocation with immediate advance security remittance ready for disbursement.',
    proposedConcept: 'Artisanal Craft Microbrewery, Live Performance Stage & Gastro-Lounge.',
    overview: 'Acclaimed craft brewery and gastro-pub group known for artisanal beers and curated kitchen menus. Technical and architectural diligence completed; ready to commission brewing tanks and bar operations promptly.',
    turnaroundTime: 'Within 72 hours',
    capitalCommitment: 'Full Upfront Lease Remittance & Infrastructure Absorption',
    tags: ['Craft Microbrewery', 'Live Entertainment', 'Gastro-Pub']
  },
  {
    id: 'club-fenicia',
    name: 'Club Fenicia',
    legalEntity: 'Fenicia Luxury Hospitality Group',
    category: "Asia's Largest Luxury Lounge & Rooftop Hospitality Brand",
    sectorBadge: 'Ultra-Luxury Lounge',
    appId: 'APP-2026-CF-06',
    status: 'Priority Standby #1',
    paymentReadiness: 'Full leasehold advance, licensing indemnity, and security escrow ready for immediate execution.',
    proposedConcept: 'Super-Premium Luxury Cabana Lounge, Fine Dining & VIP Club Sanctuary.',
    overview: 'Renowned benchmark in Kolkata luxury hospitality, commanding prime footfalls and high-net-worth patronage. Prepared to assume 100% of the lease, absorb all vendor contracts, and launch high-end club programming.',
    turnaroundTime: 'Immediate upon notice of cancellation',
    capitalCommitment: 'Full Upfront Multi-Year Deposit Guarantee',
    tags: ['Ultra-Luxury', 'Cabana Club', 'HNW Footfall']
  },
  {
    id: 'double-down',
    name: 'Double Down Brewpub & Cafe',
    legalEntity: 'Double Down Hospitality Ventures',
    category: 'High-Volume Craft Brewpub & Modern Urban Dining',
    sectorBadge: 'Urban Brewpub',
    appId: 'APP-2026-DD-07',
    status: 'LOI Executed & Solvency Cleared',
    paymentReadiness: 'Verified bank guarantee and full advance deposit on standby with Indus Commercial Directorate.',
    proposedConcept: 'Youth Urban Brewpub, Craft Beers on Tap & Live Sports Screenings.',
    overview: 'High-energy urban hospitality concept with proven table turnovers and craft cocktail popularity. Formal LOI executed, confirming readiness to match or exceed all existing agreement parameters.',
    turnaroundTime: 'Within 4 business days',
    capitalCommitment: '100% Capital & Solvency Guarantee',
    tags: ['Sports Bar', 'Urban Taproom', 'High Turnover']
  },
  {
    id: 'synthe',
    name: 'Synthe',
    legalEntity: 'Synthe Experiential Arts & Hospitality Pvt. Ltd.',
    category: 'Cutting-Edge Experiential Hospitality & Event Startup',
    sectorBadge: 'Experiential Startup',
    appId: 'APP-2026-SY-08',
    status: 'Ready for Immediate Handover',
    paymentReadiness: 'Backed by venture growth capital syndicate; dedicated venue acquisition funds cleared.',
    proposedConcept: 'Immersive Audio-Visual Cocktail Lounge & Creative Social Members Club.',
    overview: 'High-growth modern lifestyle startup blending electronic arts, world-class mixology, and high-margin private memberships. Has submitted an aggressive acquisition bid to secure turnkey hospitality space.',
    turnaroundTime: 'Within 48 hours',
    capitalCommitment: 'Venture Capital Pre-Funded Escrow',
    tags: ['Tech & Arts Lounge', 'Venture-Backed', 'Bespoke Mixology']
  },
  {
    id: 'imerit',
    name: 'iMerit',
    legalEntity: 'iMerit Technology Services Pvt. Ltd.',
    category: 'Global Enterprise Technology & Corporate Leisure Group',
    sectorBadge: 'Enterprise / Tech',
    appId: 'APP-2026-IM-09',
    status: 'Board Approved & Escrow Funded',
    paymentReadiness: 'Direct multinational corporate treasury allocation backed by commercial bank guarantee.',
    proposedConcept: "Exclusive Executive Members' Club, Tech-Executive Lounge & Private Bar.",
    overview: 'Tier-1 multinational artificial intelligence & enterprise technology powerhouse seeking a dedicated high-security, premium hospitality venue for corporate leadership, client entertainment, and private executive dining.',
    turnaroundTime: 'Within 5 business days',
    capitalCommitment: 'Direct Corporate Institutional Treasury Wire',
    tags: ['Global Multinational', 'Executive Lounge', 'Institutional Backing']
  },
  {
    id: 'rebel-foods',
    name: 'Rebel Foods',
    legalEntity: 'Rebel Foods Pvt. Ltd.',
    category: "World's Largest Multi-Brand Cloud & Experiential Food Network",
    sectorBadge: 'Food-Tech Unicorn',
    appId: 'APP-2026-RF-10',
    status: 'Ready for Immediate Handover',
    paymentReadiness: 'Institutional treasury pre-approved; prepared to disburse multi-year lease consideration instantly.',
    proposedConcept: 'Flagship Multi-Brand Experiential Dine-in Bar, Gourmet Food Hall & Cocktails.',
    overview: 'Multi-billion dollar unicorn parent of Behrouz Biryani, Faasos, Ovenstory, and Wendy\'s India. Expanding into premier experiential dine-in bars and culinary halls, backed by massive capital reserves.',
    turnaroundTime: 'Immediate (Within 48 hours)',
    capitalCommitment: 'Full Term Advance Lease Capital Cleared',
    tags: ['Food-Tech Unicorn', 'Multi-Brand Flagship', 'Multi-Billion Scale']
  }
];

interface StandbyCompaniesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandbyCompaniesModal: React.FC<StandbyCompaniesModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCompany, setActiveCompany] = useState<StandbyCompany | null>(null);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Companies (10)' },
    { id: 'nightlife', label: 'Clubs & Lounges' },
    { id: 'brewpub', label: 'Craft Brewpubs' },
    { id: 'enterprise', label: 'Corporate & F&B Giants' },
  ];

  const filteredCompanies = STANDBY_COMPANIES.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.legalEntity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.proposedConcept.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'nightlife') {
      return c.sectorBadge.includes('Nightclub') || c.sectorBadge.includes('Lounge') || c.sectorBadge.includes('Experiential');
    }
    if (selectedCategory === 'brewpub') {
      return c.sectorBadge.includes('Brewpub');
    }
    if (selectedCategory === 'enterprise') {
      return c.sectorBadge.includes('Enterprise') || c.sectorBadge.includes('Conglomerate') || c.sectorBadge.includes('Unicorn');
    }
    return true;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 z-50 overflow-y-auto animate-in fade-in duration-200">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl relative border border-slate-200 my-auto max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Modal Header */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative border-b border-white/10 shrink-0">
            <button
              onClick={onClose}
              type="button"
              className="absolute right-4 top-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-2 max-w-3xl pr-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-rose-500/20 text-rose-300 border border-rose-400/40 flex items-center gap-1.5">
                  <ShieldAlert className="w-3 h-3 text-rose-400 shrink-0" />
                  Irrevocable Standby Queue • 10 Active Applicants
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Full Capital & Solvency Verified
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight text-white">
                Standby Corporate Applicants & Handover Roster
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The following <strong>10 commercial corporations & leading hospitality startups</strong> have already submitted formal leasehold applications for this Luxury Bar & Club. All entities are willing and verified ready to make the appropriate advance deposits, infrastructure considerations, and statutory payments immediately upon agreement cancellation.
              </p>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search companies, concepts, or entities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#007a3e] focus:border-transparent"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Company Cards List */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-4 max-h-[58vh]">
            {filteredCompanies.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-sm font-bold text-slate-700">No applicants matching "{searchQuery}"</p>
                <p className="text-xs text-slate-500 mt-1">Try resetting the filter or clear your search term.</p>
              </div>
            ) : (
              filteredCompanies.map((company, index) => (
                <div 
                  key={company.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col gap-3 group"
                >
                  {/* Top Row: Name, Index Badge, Status */}
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm group-hover:bg-[#007a3e] transition-colors">
                        {index + 1}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base sm:text-lg font-display font-black text-slate-900">
                            {company.name}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                            {company.appId}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                            {company.sectorBadge}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">
                          {company.legalEntity} • {company.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                        <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                        {company.status}
                      </span>
                    </div>
                  </div>

                  {/* Overview Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {company.overview}
                  </p>

                  {/* Proposed Format & Financial Readiness Matrix */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-600" /> Proposed Venue Format
                      </span>
                      <span className="font-semibold text-slate-900 leading-snug">
                        {company.proposedConcept}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/70 flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-emerald-800 flex items-center gap-1.5">
                        <CreditCard className="w-3 h-3 text-emerald-700" /> Payment Readiness & Capital Escrow
                      </span>
                      <span className="font-semibold text-emerald-950 leading-snug">
                        {company.paymentReadiness}
                      </span>
                    </div>
                  </div>

                  {/* Footer Stats: Turnaround & Tags */}
                  <div className="flex items-center justify-between gap-2 pt-2 text-[11px] flex-wrap">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Takeover Deployment: <strong className="text-slate-800 font-bold">{company.turnaroundTime}</strong></span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {company.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs text-rose-700 font-medium">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                <strong>Statutory Notice:</strong> If the current contract is revoked, the standby protocol triggers immediate priority allocation to Applicant #1 in the queue within 24 hours.
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer shrink-0 text-center"
            >
              Close Roster
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
