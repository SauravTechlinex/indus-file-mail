import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ShieldCheck, 
  FileCheck, 
  Truck, 
  UserCheck, 
  QrCode, 
  Printer, 
  AlertTriangle, 
  Globe, 
  Cpu, 
  Layers, 
  Lock, 
  Hash, 
  Calendar, 
  Clock, 
  X, 
  Check, 
  RefreshCw,
  ShieldAlert,
  ArrowRight,
  LogIn,
  LogOut,
  CreditCard,
  Users,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getDeterministicItem, VerifiedItem, RouteNode } from './types';
import IndusLogo from './components/IndusLogo';
import IndiaGovEmblem from './components/IndiaGovEmblem';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const verificationProcessSteps = [
  { name: 'Company agreement', status: 'completed' },
  { name: 'GST', status: 'completed' },
  { name: 'License approval', status: 'completed' },
  { name: 'FSSAI', status: 'completed' },
  { name: 'Police verification', status: 'completed' },
  { name: 'State verification', status: 'completed' },
  { name: 'Company verification', status: 'completed' },
  { name: 'Court verification', status: 'completed' },
  { name: 'Bid won', status: 'completed' },
  { name: 'Government agreement', status: 'remaining' },
  { name: 'Team ER', status: 'remaining' },
  { name: 'Meeting', status: 'remaining' },
  { name: 'Finish', status: 'remaining' }
];

export default function App() {
  // User Authentication States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [activeSidebarTab, setActiveSidebarTab] = useState<'info' | 'cryptography' | 'routing' | 'document' | 'payments' | 'team'>('info');
  const [paymentOption, setPaymentOption] = useState<'self' | 'outsource'>('self');
  const [paymentSuccessId, setPaymentSuccessId] = useState<string | null>('pay_H8fG6bZ3Nq2V9x');
  const [selectedItem, setSelectedItem] = useState<VerifiedItem | null>(null);
  
  // Modals / Overlays
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [reportMessage, setReportMessage] = useState('');
  const [showCertificateView, setShowCertificateView] = useState(false);
  const [showPaymentBlockModal, setShowPaymentBlockModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Live Feed Simulation of ledger validation records
  const [recentChecks, setRecentChecks] = useState([
    { id: 'IL-PRD-4952', name: 'Graphene Thermal Nodule', type: 'Product' as const, outcome: 'VERIFIED', time: 'Just now' },
    { id: 'IL-CERT-9031', name: 'Maritime Emission Warrant', type: 'Certificate' as const, outcome: 'COMPLIANT', time: '2 mins ago' },
    { id: 'IL-TRK-10824', name: 'Cryogenic Container Pod', type: 'Shipment' as const, outcome: 'IN TRANSIT', time: '5 mins ago' }
  ]);

  // Live simulation log update loop
  useEffect(() => {
    const timer = setInterval(() => {
      const generatedCode = `IL-REG-${Math.floor(1000 + Math.random() * 9000)}`;
      const randomNames = [
        'Titan-Alloy Truss B-4', 'ISO 27001 Cyber Seal', 'Helium Transport E-12', 'Vanguard Micro-Grid', 'Project Atlas Cert-9'
      ];
      const randomTypes = ['Product', 'Certificate', 'Shipment', 'Product'] as const;
      const typeSelected = randomTypes[Math.floor(Math.random() * randomTypes.length)];
      
      setRecentChecks(prev => [
        {
          id: generatedCode,
          name: randomNames[Math.floor(Math.random() * randomNames.length)],
          type: typeSelected,
          outcome: typeSelected === 'Certificate' ? 'COMPLIANT' : typeSelected === 'Shipment' ? 'IN TRANSIT' : 'VERIFIED',
          time: 'Just now'
        },
        ...prev.map(c => {
          if (c.time === 'Just now') return { ...c, time: '1 min ago' };
          if (c.time.includes('min ago')) {
            const mins = parseInt(c.time);
            return { ...c, time: `${mins + 1} mins ago` };
          }
          return c;
        }).slice(0, 3)
      ]);
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = usernameInput.trim();
    const cleanPass = passwordInput.trim();
    
    const isSpecialAdmin = cleanUser === 'abcd';
    const isNormalUser = (cleanUser === 'Indus@Milan@2026' || cleanUser === 'Indus@Milon@2026' || cleanUser.toLowerCase() === 'indus@milan@2026') && cleanPass === '9339492781';
    
    if (isSpecialAdmin || isNormalUser) {
      setLoginError('');
      setIsLoggingIn(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        setSelectedItem(getDeterministicItem('WB27/0428/7983/2026'));
        setIsLoggingIn(false);
      }, 3000);
    } else {
      setLoginError('Authentication mismatch: Invalid username or password sequence detected.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsernameInput('');
    setPasswordInput('');
    setSelectedItem(null);
  };

  const handlePayment = () => {
    setShowPaymentBlockModal(true);
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportMessage.trim()) return;
    setReportSuccess(true);
    setTimeout(() => {
      setShowReportModal(false);
      setReportSuccess(false);
      setReportMessage('');
    }, 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Modern corporate color badges based on category/type
  const getTypeBadgeStyles = (type: string) => {
    switch (type) {
      case 'Product': 
        return { 
          bg: 'bg-amber-50 text-amber-700 border-amber-200/80', 
          accent: 'text-amber-600', 
          icon: Cpu 
        };
      case 'Certificate': 
        return { 
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200/80', 
          accent: 'text-[#007a3e]', 
          icon: FileCheck 
        };
      case 'Shipment': 
        return { 
          bg: 'bg-cyan-50 text-cyan-800 border-cyan-200/80', 
          accent: 'text-cyan-600', 
          icon: Truck 
        };
      case 'Employee': 
        return { 
          bg: 'bg-indigo-50 text-indigo-800 border-indigo-200/80', 
          accent: 'text-indigo-600', 
          icon: UserCheck 
        };
      default: 
        return { 
          bg: 'bg-slate-100 text-slate-700 border-slate-200', 
          accent: 'text-slate-600', 
          icon: ShieldCheck 
        };
    }
  };

  const typeConfig = selectedItem ? getTypeBadgeStyles(selectedItem.type) : null;
  const TypeIcon = typeConfig ? typeConfig.icon : ShieldCheck;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col selection:bg-[#007a3e]/10 selection:text-[#007a3e]">
      
      {/* Decorative Brand Background Glow Overlay Pattern */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-[#007a3e]/5 via-transparent to-transparent pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-25%] left-[50%] -translate-x-[50%] w-[1200px] h-[600px] rounded-full bg-[#007a3e]/3 filter blur-[120px] opacity-70" />
        <div className="absolute top-[-10%] left-[10%] w-[350px] h-[350px] rounded-full bg-emerald-500/2 filter blur-[90px] opacity-40 pointer-events-none" />
      </div>

      {/* Corporate Header Section */}
      <header className="relative w-full z-15 border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4" id="portal-header">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* The brand logo with unicorn symbol & indus typography */}
            <IndusLogo size="md" />
            <div className="hidden min-[480px]:block h-8 w-[1px] bg-slate-200" />
            {/* Government State Emblem Logo */}
            <IndiaGovEmblem size="md" />
          </div>
          
          <nav className="flex items-center gap-2 sm:gap-6 text-xs font-mono uppercase tracking-wider text-slate-500" id="portal-navigation">
            <span className="hidden sm:inline-block font-bold text-slate-800 bg-slate-100/90 px-3 py-1.5 rounded-lg border border-slate-200/90 text-xs">
              Access Portal
            </span>
            <span className="hidden sm:inline-block text-slate-200">|</span>
            {isLoggedIn ? (
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-[#007a3e] px-2 sm:px-3 py-1.5 rounded-full border border-emerald-250 bg-emerald-50/50 max-w-[120px] sm:max-w-none overflow-hidden">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007a3e] animate-pulse shrink-0" />
                  <span className="font-bold truncate" title={usernameInput || 'Indus@Milan@2026'}>OP: {usernameInput || 'Indus@Milan@2026'}</span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-emerald-800 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-900 px-2.5 py-1.5 rounded-lg border border-emerald-200 transition-all cursor-pointer font-bold"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">LOGOUT</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="md:hidden p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-[10px] text-amber-700 px-3 py-1.5 rounded-full border border-amber-250 bg-amber-50 font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>SIGN-IN MANDATORY</span>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6 md:py-12 z-10 flex flex-col gap-6 md:gap-10">
        
        {!isLoggedIn ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-md w-full mx-auto flex flex-col gap-6 my-8"
            id="login-panel"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] flex flex-col gap-8 relative overflow-hidden">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400" />
              
              <div className="text-center flex flex-col gap-3">
                <div className="mx-auto bg-gradient-to-br from-emerald-50 to-teal-50/50 text-emerald-600 p-4 rounded-2xl shadow-sm border border-emerald-100/50 mb-2">
                  <Lock className="w-8 h-8 mx-auto" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-semibold text-slate-800 tracking-tight">
                  Secure Access
                </h2>
                <span className="text-sm text-slate-500 font-medium">
                  Indus Limited Enterprise Portal
                </span>
              </div>

              {/* URL Change Notification */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-start gap-3 shadow-sm animate-in fade-in zoom-in duration-500">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-800 leading-relaxed">
                  <span className="font-bold text-amber-900 block mb-0.5">Important Notice: System Relocation</span>
                  Please be advised that this portal's web address (URL) will be changing soon. Keep an eye out for further communications regarding the new secure URL.
                </div>
              </div>

              {/* Mandatory Policy Declaration Warning Notice */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800 block mb-0.5">Authentication Required</span>
                  Document verification and system access is restricted to authorized personnel only.
                </div>
              </div>

              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-600 ml-1">Operator ID</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Operator ID"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 text-slate-800 transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-600 ml-1">Security Key</label>
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 text-slate-800 transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>

                {loginError && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    {loginError}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-emerald-400 disabled:to-teal-400 disabled:cursor-not-allowed text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(5,150,105,0.3)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.4)] cursor-pointer group"
                >
                  {isLoggingIn ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Authenticate Session</span>
                      <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>


          </motion.div>
        ) : (
          <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
            {/* Premium Sidebar */}
            <aside className="hidden md:flex w-64 flex-col gap-6 shrink-0 py-8 border-r border-slate-200 pr-8">
              {/* User Profile Card */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-emerald-500/20 shrink-0">
                    M
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-bold text-sm">Milan Biswas</span>
                    <span className="text-slate-500 text-xs font-medium">Indus@Milan@2026</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-1 px-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">DOB</span>
                    <span className="font-semibold text-slate-700">02/01/1984</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">ID Document</span>
                    <span className="font-semibold text-slate-700">**** 1162</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">CKYC No.</span>
                    <span className="font-semibold text-slate-700">7998643-233976</span>
                  </div>
                </div>

                <div className="border-t border-slate-200/50 pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Operator Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                    <span className="text-xs font-bold text-emerald-700">Active Node</span>
                  </div>
                </div>
              </div>

              {/* Navigation Menu (Hidden on Mobile) */}
              <nav className="hidden md:flex flex-col gap-0.5 w-full pt-2">
                <span className="text-[11px] font-bold text-slate-400/80 px-3 mb-2 block uppercase tracking-wider">Menu</span>
                <button
                  type="button"
                  onClick={() => setActiveSidebarTab('info')}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm w-full text-left ${activeSidebarTab === 'info' ? 'bg-emerald-50 text-[#007a3e] font-bold' : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Info</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSidebarTab('document')}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm w-full text-left ${activeSidebarTab === 'document' ? 'bg-emerald-50 text-[#007a3e] font-bold' : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Document</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSidebarTab('team')}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm w-full text-left ${activeSidebarTab === 'team' ? 'bg-emerald-50 text-[#007a3e] font-bold' : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <Users className="w-4 h-4" />
                  <span>Team</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSidebarTab('payments')}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm w-full text-left ${activeSidebarTab === 'payments' ? 'bg-emerald-50 text-[#007a3e] font-bold' : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Payments</span>
                  {!paymentSuccessId && (
                    <span className="ml-auto flex items-center justify-center px-2 py-0.5 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-bold tracking-wide shadow-sm animate-pulse">
                      DUE
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSidebarTab('cryptography')}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm w-full text-left ${activeSidebarTab === 'cryptography' ? 'bg-emerald-50 text-[#007a3e] font-bold' : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  <Lock className="w-4 h-4" />
                  <span>Security Log</span>
                </button>
                {selectedItem?.transitRoute && (
                  <button
                    type="button"
                    onClick={() => setActiveSidebarTab('routing')}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm w-full text-left ${activeSidebarTab === 'routing' ? 'bg-emerald-50 text-[#007a3e] font-bold' : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                  >
                    <Globe className="w-4 h-4" />
                    <span>Transit Track</span>
                  </button>
                )}
              </nav>

              {/* Informative Grid Blocks (Moved to Sidebar) */}
              <div className="bg-slate-50 rounded-xl p-4 flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-2 text-emerald-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-xs">Indus Secure Network</span>
                </div>
                <p className="text-xs text-emerald-900/70 leading-relaxed font-medium">
                  Your connection is authenticated. Cryptographic keys and clearances are active.
                </p>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col gap-6 py-6 md:py-8 md:pl-8">
              {selectedItem && (
                <>
                  {/* Outstanding Payment Alert Tracker */}
                  {!paymentSuccessId && (
                    <div className="bg-red-50/90 backdrop-blur border border-red-200/60 p-4 rounded-2xl flex items-start gap-3 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
                      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1 text-sm text-red-800">
                        <span className="font-bold">Outstanding Government Court Agreement Payment</span>
                        <p className="leading-relaxed text-red-700">
                          Alert – You did not make the payment on the 23rd. Today is the deadline; please make the payment today or earlier to avoid significant issues with the work. Please contact the administrator before making the payment.
                        </p>
                      </div>
                    </div>
                  )}


                  {/* Tabbed Content Panel */}
                  <div className="flex flex-col gap-6">
                    {activeSidebarTab === 'info' && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Premium Header Profile Overview */}
                        <div className="border-b border-slate-200 pb-8 mb-4 flex flex-col gap-6">
                          
                          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div className="flex flex-col gap-2">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/80 text-emerald-700 text-[11px] font-bold tracking-wide border border-emerald-100 w-fit shadow-sm">
                                <Check className="w-3.5 h-3.5" /> REGISTERED PROFILE
                              </span>
                              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mt-2">
                                {selectedItem.name}
                              </h2>
                              <span className="text-slate-500 font-mono text-sm">
                                ID: <span className="font-bold text-slate-700">{selectedItem.id}</span>
                              </span>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-1 text-sm font-semibold">
                              <span className="text-slate-400 text-xs font-medium">Status</span>
                              <span className="text-emerald-600 font-bold">{selectedItem.status}</span>
                            </div>
                          </div>

                          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-5 gap-4 mt-4 pt-6 border-t border-slate-200/50">
                            {Object.entries(selectedItem.specifications).slice(0, 4).map(([key, value], idx) => (
                              <div key={idx} className="flex flex-col gap-1">
                                <span className="text-xs font-medium text-slate-500">{key}</span>
                                <span className="text-sm font-bold text-slate-800 truncate">{value}</span>
                              </div>
                            ))}
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-medium text-slate-500">Estimated Opening Date</span>
                              <span className="text-sm font-bold text-slate-800 truncate">Not yet disclosed.</span>
                            </div>
                          </div>
                        </div>
                        {/* Compact Process Tracker Section */}
                        <div className="w-full border-b border-slate-200 pb-6 mb-2 flex flex-col gap-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/50 pb-3">
                            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                              <Layers className="w-4 h-4 text-emerald-600" />
                              Registration Process
                            </h4>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 sm:w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full w-[69%]" />
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                                9 / 13 Completed
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {verificationProcessSteps.map((step, idx) => {
                              const isCompleted = step.status === 'completed';
                              return (
                                <div 
                                  key={idx} 
                                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border shadow-sm transition-all ${
                                    isCompleted 
                                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60 shadow-emerald-500/5' 
                                      : 'bg-white text-slate-400 border-slate-200 border-dashed'
                                  }`}
                                >
                                  {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : <Clock className="w-3 h-3" />}
                                  {step.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex items-center justify-between border-b border-slate-200/50 pb-4 mt-2">
                          <h3 className="text-lg font-display font-bold text-slate-900">Owner Details</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            ['Name', 'Milan Biswas'],
                            ['Address', 'Bagangram North 24 Parganes'],
                            ['Pin code', '743251'],
                            ['Nominee', 'Usha Rani Biswas'],
                            ['Relationship Of nominee', 'Mother'],
                            ['Company agreement', 'Verified'],
                            ['Government Court Agreement', 'Not yet started']
                          ].map(([key, value], idx) => (
                            <div key={idx} className="flex flex-col gap-1 py-4 border-b border-slate-100">
                              <span className="text-xs font-medium text-slate-500">{key}</span>
                              <span className="text-sm font-bold text-slate-800">{value}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between border-b border-slate-200/50 pb-4 mt-6">
                          <h3 className="text-lg font-display font-bold text-slate-900">Complete Specifications</h3>
                          <button
                            type="button"
                            onClick={() => setShowCertificateView(true)}
                            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors cursor-pointer bg-emerald-50/50 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm"
                          >
                            <Printer className="w-4 h-4" />
                            Print Warrant
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(selectedItem.specifications).map(([key, value], idx) => (
                            <div key={idx} className="flex flex-col gap-1 py-4 border-b border-slate-100">
                              <span className="text-xs font-medium text-slate-500">{key}</span>
                              <span className="text-sm font-bold text-slate-800">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSidebarTab === 'document' && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between border-b border-slate-200/50 pb-4">
                          <h3 className="text-lg font-display font-bold text-slate-900">Document Verification</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center py-10 px-4 border-b border-slate-100 pb-16">
                          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 ring-8 ring-emerald-50/50">
                            <FileCheck className="w-10 h-10 text-emerald-600" />
                          </div>
                          <h2 className="text-2xl font-bold text-slate-800 mb-3">All Documents Verified</h2>
                          <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                            Your submitted documents have been successfully reviewed and verified by the administration. Any necessary information or future updates regarding your paperwork will be visible here.
                          </p>
                          
                          <div className="mt-8 bg-blue-50/70 border border-blue-100 rounded-2xl p-5 text-left max-w-lg mx-auto flex items-start gap-4 w-full shadow-sm animate-in fade-in slide-in-from-bottom-2">
                            <div className="w-10 h-10 rounded-full bg-blue-100/80 flex items-center justify-center shrink-0 border border-blue-200">
                              <Clock className="w-5 h-5 text-blue-700" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <h4 className="text-sm font-bold text-slate-800">Pending Action: Signature</h4>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                The only remaining step is the signature of Milan Biswas, which will be obtained at the Barasat Court once the date is announced. The user will not be required to visit the court.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSidebarTab === 'team' && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between border-b border-slate-200/50 pb-4">
                          <h3 className="text-lg font-display font-bold text-slate-900">Project Team</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {['Wasim Kha', 'Bir Sanyal', 'Koel Pande', 'Debashis Sarkar', 'Subrata Prajapati', 'Prasit Sanyal'].map((member, idx) => (
                            <div key={idx} className="flex items-center gap-3 py-3 border-b border-slate-100">
                              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                                {member.charAt(0)}
                              </div>
                              <span className="text-sm font-bold text-slate-800">{member}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 py-4 flex items-start gap-3">
                          <Users className="w-5 h-5 text-slate-400 mt-0.5" />
                          <p className="text-sm text-slate-600 font-medium leading-relaxed">
                            <strong>Note:</strong> Additional team members will be allocated and added to this roster at a later stage as the project progresses.
                          </p>
                        </div>
                      </div>
                    )}

                    {activeSidebarTab === 'payments' && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between border-b border-slate-200/50 pb-4">
                          <h3 className="text-lg font-display font-bold text-slate-900">Payment Details</h3>
                          {!paymentSuccessId && (
                            <div className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm border border-amber-100/50">
                              <AlertTriangle className="w-3.5 h-3.5" />
                              Action Required
                            </div>
                          )}
                        </div>

                        {paymentSuccessId && (
                          <div className="flex flex-col gap-5 mb-2">
                            <div className="flex items-center gap-3 bg-emerald-50/80 text-emerald-800 p-4 rounded-2xl border border-emerald-100/60 font-semibold shadow-sm animate-in fade-in slide-in-from-top-2">
                              <Check className="w-5 h-5 text-emerald-600 shrink-0 stroke-[3]" />
                              You have no outstanding payments.
                            </div>
                            
                            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-emerald-100/80 flex flex-col gap-4 w-full shadow-[0_8px_30px_rgb(16,185,129,0.12)] animate-in fade-in slide-in-from-top-4">
                              <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-end">
                                  <div className="flex flex-col text-left gap-1">
                                    <span className="text-sm font-bold text-slate-900 tracking-tight">Court Agreement Progress</span>
                                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Active Processing</span>
                                  </div>
                                  <span className="text-2xl font-black text-emerald-600 tracking-tighter">98%</span>
                                </div>
                                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner ring-1 ring-inset ring-slate-200/50">
                                  <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full relative overflow-hidden" style={{ width: '98%' }}>
                                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                                  <p className="text-xs font-semibold text-emerald-700">Processing legal documentation and verifying signatures...</p>
                                </div>
                                <div className="mt-2 p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                                  <p className="text-[11px] font-medium text-blue-800 leading-relaxed">
                                    <strong className="font-bold">Status Update:</strong> The owner whose signature is still pending is currently at the Barasat Court.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Status Card */}
                        <div className="border-b border-slate-200 pb-6 mb-2 flex flex-col gap-4">
                          <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg">
                            <Check className="w-5 h-5 text-emerald-600" />
                            Bid Successfully Won
                          </div>
                          <div className="text-sm text-emerald-800 leading-relaxed font-medium">
                            Congratulations, <span className="font-bold text-emerald-900">Milan Biswas</span>! You have successfully won the bid. 
                            <ul className="mt-3 space-y-2 list-disc list-inside">
                              <li>The agreed total amount is <span className="font-bold text-emerald-900">₹1,40,000 INR</span> (which is fully refundable after the business commences).</li>
                              <li>A preliminary payment of <span className="font-bold text-emerald-900">₹13,000 INR</span> has already been received and verified.</li>
                              <li>Profit Sharing: The company will take <span className="font-bold text-emerald-900">30%</span>, and the owner will receive <span className="font-bold text-emerald-900">70%</span>.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Refund Status Card */}
                        <div className="border-b border-slate-200 pb-6 mb-2 flex flex-col gap-3">
                          <h4 className="text-xs font-bold text-slate-600 border-b border-slate-200/60 pb-2">Refund Status Tracker</h4>
                          <div className="flex flex-col gap-3 mt-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <span className="text-sm font-semibold text-slate-700">Agreement Amount (₹1,40,000)</span>
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-sm w-max">
                                <Clock className="w-3.5 h-3.5" />
                                Not started
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <span className="text-sm font-semibold text-slate-700">Bidding Amount (₹13,000)</span>
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-sm w-max">
                                <Clock className="w-3.5 h-3.5" />
                                Not started
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Government Court Agreement Processing */}
                        {!paymentSuccessId && (
                          <div className="pb-6 mb-2 flex flex-col gap-5">
                          <div className="flex flex-col gap-1">
                            <h4 className="text-base font-bold text-slate-800">Government Court Agreement Processing</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                              To proceed, you must complete the government court procedures. Please select how you wish to process the agreement. The selected option will become active upon payment.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 mt-2">
                              <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div className="flex flex-col gap-1">
                                <p className="text-sm text-blue-800 font-medium leading-relaxed">
                                  It will be stated here that the court proceedings begin on the 24th; therefore, making the payment on the 23rd would be best, as the payment process takes one or two days.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {/* Option 1: Self */}
                            <label className={`relative flex flex-col p-5 cursor-pointer rounded-lg border transition-all duration-200 ${paymentOption === 'self' ? 'border-[#007a3e] bg-emerald-50/30 ring-1 ring-[#007a3e]' : 'border-slate-300 hover:border-slate-400 bg-white'}`}>
                              <input 
                                type="radio" 
                                name="paymentOption" 
                                className="sr-only" 
                                checked={paymentOption === 'self'}
                                onChange={() => setPaymentOption('self')}
                              />
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                                <span className={`font-bold text-base md:text-lg ${paymentOption === 'self' ? 'text-[#007a3e]' : 'text-slate-700'}`}>Self-processing</span>
                                <div className="flex items-center gap-2 self-start sm:self-auto">
                                  <span className={`font-bold text-lg md:text-xl ${paymentOption === 'self' ? 'text-[#007a3e]' : 'text-slate-900'}`}>₹9,000</span>
                                  {paymentOption === 'self' && (
                                    <div className="bg-[#007a3e] text-white rounded-full p-0.5 shadow-sm">
                                      <Check className="w-4 h-4" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                                You will handle the court process yourself, navigating the legal procedures and required paperwork directly.
                              </p>
                              <div className="mt-3 pt-3 border-t border-slate-200/50 flex flex-col gap-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Cost Breakdown</span>
                                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                                  Trademark (₹7,000), customs duty, stamp duty, magistrate processing (₹2,000), application fee (waived by the company).
                                </p>
                              </div>
                            </label>

                            {/* Option 2: Outsource */}
                            <label className={`relative flex flex-col p-5 cursor-pointer rounded-lg border transition-all duration-200 ${paymentOption === 'outsource' ? 'border-[#007a3e] bg-emerald-50/30 ring-1 ring-[#007a3e]' : 'border-slate-300 hover:border-slate-400 bg-white'}`}>
                              <input 
                                type="radio" 
                                name="paymentOption" 
                                className="sr-only" 
                                checked={paymentOption === 'outsource'}
                                onChange={() => setPaymentOption('outsource')}
                              />
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                                <span className={`font-bold text-base md:text-lg ${paymentOption === 'outsource' ? 'text-[#007a3e]' : 'text-slate-700'}`}>Outsourcing</span>
                                <div className="flex items-center gap-2 self-start sm:self-auto">
                                  <span className={`font-bold text-lg md:text-xl ${paymentOption === 'outsource' ? 'text-[#007a3e]' : 'text-slate-900'}`}>₹11,500</span>
                                  {paymentOption === 'outsource' && (
                                    <div className="bg-[#007a3e] text-white rounded-full p-0.5 shadow-sm">
                                      <Check className="w-4 h-4" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                                Have the process handled directly and seamlessly by government personnel on your behalf, saving you time and effort.
                              </p>
                              <div className="mt-3 pt-3 border-t border-slate-200/50 flex flex-col gap-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Cost Breakdown</span>
                                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                                  Trademark (₹7,000), customs duty, stamp duty, magistrate processing (₹2,000), application fee (waived by the company), government processing fee (₹2,500).
                                </p>
                              </div>
                            </label>
                          </div>

                          <div className="mt-4 pt-5 border-t border-slate-200/50 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                                Total amount to pay: <span className="font-bold text-2xl text-slate-900">₹{paymentOption === 'self' ? '9,000' : '11,500'}</span>
                              </div>
                              <span className="text-[10px] font-medium text-slate-400 mt-1">
                                * It will take 1 to 2 days for the amount to be processed.
                              </span>
                            </div>
                            <div className="flex flex-col gap-3 w-full sm:w-auto">
                              <button 
                                onClick={handlePayment}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 hover:-translate-y-0.5 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 active:scale-95 cursor-pointer"
                              >
                                <CreditCard className="w-5 h-5" />
                                Pay Now
                              </button>
                              <div className="flex items-center justify-center sm:justify-end gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <Lock className="w-3 h-3" />
                                Secured by <span className="text-blue-600 font-black">Razorpay</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        )}
                      </div>
                    )}


                    {activeSidebarTab === 'cryptography' && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between border-b border-slate-200/50 pb-4">
                          <h3 className="text-lg font-display font-bold text-slate-900">Decentralized Signature Log</h3>
                          <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-[10px] font-bold text-emerald-700 border border-emerald-100 uppercase tracking-widest shadow-sm">
                            Ledger Locked
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Protocol</span>
                            <span className="text-sm font-semibold text-slate-800">AES-256-GCM</span>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clearance</span>
                            <span className="text-sm font-semibold text-slate-800">Level 4 (Gov)</span>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Verification</span>
                            <span className="text-sm font-semibold text-emerald-600">Blockchain</span>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Node Status</span>
                            <span className="text-sm font-semibold text-emerald-600 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
                            </span>
                          </div>
                        </div>

                        <div className="py-2 flex flex-col gap-4">
                          <div className="bg-slate-900 rounded-3xl p-6 shadow-inner relative overflow-hidden group border border-slate-800">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                            
                            <div className="relative z-10 flex justify-between items-center text-xs font-mono mb-4 border-b border-slate-800 pb-4">
                              <span className="text-emerald-400/80 uppercase tracking-widest flex items-center gap-2 font-bold">
                                <Hash className="w-4 h-4 text-emerald-500" />
                                <span>SHA-256 Signature Hash</span>
                              </span>
                              <span className="text-slate-500 text-[10px] font-bold tracking-widest bg-slate-800/50 px-2 py-1 rounded shadow-sm border border-slate-700/50">IMMUTABLE</span>
                            </div>
                            <div className="relative z-10 font-mono text-sm text-emerald-400 overflow-x-auto whitespace-pre-wrap select-all leading-relaxed break-all group-hover:text-emerald-300 transition-colors">
                              {selectedItem.securityHash}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-1 flex flex-col gap-3 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
                          <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">Cryptographic Audit Trail</h4>
                          
                          <div className="flex items-start gap-4 text-sm relative">
                            <div className="flex flex-col items-center mt-1 z-10 relative">
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                              <div className="w-0.5 h-10 bg-emerald-200 mt-1"></div>
                            </div>
                            <div className="flex flex-col gap-0.5 pb-4">
                              <span className="font-bold text-slate-800">Identity Verified</span>
                              <span className="text-xs font-medium text-slate-500">Cross-referenced with federal databases.</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4 text-sm -mt-2 relative">
                            <div className="flex flex-col items-center mt-1 z-10 relative">
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                              <div className="w-0.5 h-10 bg-emerald-200 mt-1"></div>
                            </div>
                            <div className="flex flex-col gap-0.5 pb-4">
                              <span className="font-bold text-slate-800">Data Encrypted</span>
                              <span className="text-xs font-medium text-slate-500">Payload secured with AES-256-GCM cipher.</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4 text-sm -mt-2 relative">
                            <div className="flex flex-col items-center mt-1 z-10 relative">
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50 animate-pulse"></div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-emerald-700">Checksum Generated</span>
                              <span className="text-xs font-medium text-slate-500">Ledger successfully locked and broadcasted.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSidebarTab === 'routing' && selectedItem.transitRoute && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between border-b border-slate-200/50 pb-4">
                          <h3 className="text-lg font-display font-bold text-slate-900">Live Logistics Transit Tracking</h3>
                        </div>
                        <div className="relative flex flex-col gap-8 pl-8 py-4">
                          <div className="absolute left-[13px] top-5 bottom-5 w-0.5 bg-slate-200" />
                          <div className="absolute left-[13px] top-5 bottom-1/2 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500 pointer-events-none" />

                          {selectedItem.transitRoute.map((node, idx) => (
                            <div key={idx} className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="absolute left-[-25px] top-1">
                                {node.status === 'Completed' ? (
                                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-[3px] border-white ring-1 ring-emerald-200 shadow-sm" />
                                ) : node.status === 'Active' ? (
                                  <div className="w-3.5 h-3.5 rounded-full bg-cyan-500 border-[3px] border-white ring-1 ring-cyan-200 animate-pulse shadow-sm" />
                                ) : (
                                  <div className="w-3.5 h-3.5 rounded-full bg-slate-300 border-[3px] border-white ring-1 ring-slate-200" />
                                )}
                              </div>
                              <div className="flex flex-col">
                                <span className={`text-sm font-bold ${node.status === 'Active' ? 'text-cyan-600' : node.status === 'Completed' ? 'text-slate-800' : 'text-slate-400'}`}>
                                  {node.location}
                                </span>
                                <span className={`text-[10px] font-bold uppercase tracking-wider ${node.status === 'Active' ? 'text-cyan-600' : node.status === 'Completed' ? 'text-emerald-600' : 'text-slate-400'}`}>
                                  STATUS: {node.status}
                                </span>
                              </div>
                              <div className="p-1.5 px-3 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-500 text-[10px] font-bold shadow-sm self-start sm:self-center">
                                {node.date}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
      )}

        {/* Corporate specifications bottom footer layout */}
        <section className="border-t border-slate-200 pt-10 pb-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6" id="about">
          <div className="flex flex-col gap-2 max-w-xl">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#007a3e]">Indus Limited Compliance Core</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              This verification desk acts as the official global audit checkpoint of Indus Limited. Registered certificates verify part compliance models, eco-emissions balances, real-time cryogenic routing GPS configurations, and active biometric clearances for registered project teams. All metadata holds complete cryptographic authority.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-[11px] font-mono text-slate-400 lg:text-right font-medium">
            <span>© 2026 Indus Limited Group. All Rights Reserved.</span>
            <span>Unicorn cryptographic signatures certified under standard GCC-S2.</span>
            <span>Local Node: {new Date().toISOString().substring(0, 16).replace('T', ' ')} UTC</span>
          </div>
        </section>
      </main>

      {/* FOOTER CODA */}
      <footer className="mt-auto px-6 py-4 bg-slate-900 text-slate-400 text-center text-[10px] font-mono border-t border-slate-950 font-semibold select-none leading-none">
        SECURITY HANDSHAKE SECURED: CLIENT-DATA ENVELOPE ENCRYPTED VIA ISO-GATEWAY COMPLIANCE DESK
      </footer>

      {/* DISCREPANCY OVERLAY MODAL */}
      <AnimatePresence>
        {showReportModal && selectedItem && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto" id="report-modal-overlay">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 max-w-lg w-full flex flex-col gap-6 shadow-2xl"
            >
              <div className="flex justify-between items-center pb-3 border-b border-slate-205">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-display font-extrabold text-sm text-slate-900 uppercase tracking-wider">Report Discrepancy Protocol</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setShowReportModal(false)}
                  className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!reportSuccess ? (
                <form onSubmit={handleReportSubmit} className="flex flex-col gap-4 text-xs font-mono">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">
                    You are flag reporting Ledger Entry Key <code className="text-[#007a3e] font-extrabold">{selectedItem.id}</code> ({selectedItem.type}). Indus Inspectors will investigate compliance mismatch within 2 hours.
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Contact Audit Email</label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. inspector@indus-limited.com"
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007a3e] transition-colors text-xs font-semibold"
                      defaultValue="auditor@indus-limited.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Details of audit alert</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Specify material composition mismatch, invalid inspector ID, logistics telemetry discrepancy, or missing clearance stamp..."
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors text-xs resize-none font-semibold leading-relaxed"
                      value={reportMessage}
                      onChange={(e) => setReportMessage(e.target.value)}
                    />
                  </div>

                  <div className="flex gap-2 justify-end pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowReportModal(false)}
                      className="px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer text-[10px] font-bold"
                    >
                      ABORT
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold transition-colors cursor-pointer text-[10px] shadow shadow-red-500/10"
                    >
                      FILE COMPLIANCE ALERT
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#007a3e] flex items-center justify-center border border-emerald-250/60 shadow-sm">
                    <Check className="w-6 h-6 animate-bounce" />
                  </div>
                  <div className="flex flex-col gap-1.5 font-mono">
                    <span className="text-xs uppercase text-[#007a3e] font-extrabold tracking-wider">COMPLIANCE ALERT FILED</span>
                    <p className="text-slate-650 text-xs">Indus Group System has logged discrepancy code #{Math.floor(1000 + Math.random() * 9000)}-ALERT.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* OFFICIAL PAPER/DIGITAL CERTIFICATE COVENANT VIEW */}
      <AnimatePresence>
        {showCertificateView && selectedItem && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto" id="certificate-viewer-overlay">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="bg-white rounded-2xl border-2 border-emerald-500/20 max-w-3xl w-full p-6 md:p-10 flex flex-col gap-6 shadow-2xl relative"
            >
              <button 
                type="button"
                onClick={() => setShowCertificateView(false)}
                className="absolute right-4 top-4 p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-850 transition-all cursor-pointer border border-slate-200 print:hidden"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Certificate printable card */}
              <div 
                className="p-8 md:p-10 bg-white rounded-xl border-4 border-double border-[#007a3e] flex flex-col gap-6 relative overflow-hidden" 
                id="printable-certificate-bond"
              >
                {/* Vintage certificate border rules */}
                <div className="absolute inset-1.5 border border-[#007a3e]/10 pointer-events-none" />
                <div className="absolute inset-3 border border-slate-100/50 pointer-events-none" />

                {/* Giant Unicorn vector watermark backdrop */}
                <div className="absolute left-[34%] top-[30%] -translate-x-[50%] -translate-y-[50%] opacity-[0.035] pointer-events-none">
                  <div className="w-[350px] h-[350px] rounded-full border-12 border-[#007a3e] flex items-center justify-center">
                    <span className="font-display font-black text-[#007a3e] text-[200px] select-none">IL</span>
                  </div>
                </div>

                {/* Certificate Header Section with Official Brand Layout */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 border-b-2 border-slate-200 pb-5">
                  <div className="text-center sm:text-left flex flex-col gap-1">
                    {/* Embedded modular Indus Towers brand logo in green-white */}
                    <IndusLogo size="md" className="mx-auto sm:mx-0" />
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 font-extrabold mt-1">Global Integrated Compliance desk</span>
                    <span className="text-[9px] font-mono text-slate-400 block font-bold leading-none">Authority Number: ISO-9001-REGISTRAR</span>
                  </div>
                  
                  <div className="flex flex-col items-center sm:items-end gap-1 font-mono text-[10px] text-right">
                    <span className="text-[#007a3e] font-extrabold bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 tracking-wider">OFFICIALLY SECURED</span>
                    <span className="text-slate-500 mt-1 block font-bold">ID: {selectedItem.id}</span>
                    <span className="text-slate-400 block">DATED: {selectedItem.date}</span>
                  </div>
                </div>

                {/* Main covenant certification statement */}
                <div className="flex flex-col gap-5 text-center py-2 relative z-5">
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#007a3e]">OFFICIAL WARRANT COVENANT</span>
                  <p className="text-sm md:text-base font-display text-slate-800 max-w-2xl mx-auto leading-relaxed font-semibold">
                    This document solemnly certifies that the entity cataloged under registry index <code className="px-2 py-0.5 rounded bg-slate-105 text-[#007a3e] font-mono font-extrabold border border-emerald-200/50 text-xs">{selectedItem.id}</code> has been fully audited under the quality metrics code of Indus Limited. Structural materials composition, telemetry bounds, and audit checks align with premium standards.
                  </p>
                  
                  <div className="text-center mt-2 flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">WARRANT SUBJECT REGISTERED</span>
                    <span className="text-lg md:text-xl font-display font-black text-[#007a3e] leading-tight block">{selectedItem.name}</span>
                    <span className="text-xs font-mono text-slate-500 block font-bold mt-0.5">{selectedItem.category}</span>
                  </div>
                </div>

                {/* Specs inline table details in cert */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-lg border border-slate-205 font-mono text-[10px] text-slate-700">
                  {Object.entries(selectedItem.specifications).slice(0, 6).map(([key, value], idx) => (
                    <div key={idx} className="flex flex-col gap-0.5 border-r border-slate-200 pr-2 last:border-none">
                      <span className="text-slate-400 uppercase text-[8px] font-bold truncate leading-none mb-0.5">{key}</span>
                      <span className="text-slate-800 font-bold truncate leading-relaxed">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Proof ledger validation scan details */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-5 border-t border-slate-200">
                  <div className="flex items-center gap-3 font-mono text-[9px] text-slate-400 max-w-md">
                    {/* Generates placeholder QR symbol */}
                    <QrCode className="w-12 h-12 text-[#007a3e] shrink-0 p-0.5 bg-slate-50 rounded border border-slate-200" />
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-600 block leading-tight">Ledger Blockchain Reference signature</span>
                      <span className="break-all font-mono opacity-80 mt-0.5 text-slate-550">{selectedItem.securityHash.substring(0, 48)}...</span>
                    </div>
                  </div>

                  {/* Stamp Register Signature */}
                  <div className="flex flex-col items-center sm:items-end text-center sm:text-right font-mono text-[10px]">
                    <div className="h-10 w-28 border-b border-dashed border-slate-350 relative flex items-end justify-center">
                      <span className="font-display text-[#007a3e]/40 text-xs tracking-tighter italic absolute bottom-2 select-none">H. S. Indus</span>
                      <span className="text-[10px] text-slate-500 absolute font-sans font-bold mb-0 block select-none">Sarah H. Lin, PhD</span>
                    </div>
                    <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider mt-1">Registrar General, Indus Limited</span>
                  </div>
                </div>
              </div>

              {/* Printing controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-150 pt-4 print:hidden">
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 leading-none font-bold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Validation envelope closed. ANSI output layout enabled.</span>
                </span>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowCertificateView(false)}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-xs font-mono transition-all cursor-pointer font-bold"
                  >
                    CLOSE WIDGET
                  </button>
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-[#007a3e] hover:bg-[#006030] text-white text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow"
                  >
                    <Printer className="w-3.5 h-3.5 text-white" />
                    <span>PRINT WARRANT</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Payment Block Modal */}
      <AnimatePresence>
        {showPaymentBlockModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            >
              <button 
                onClick={() => setShowPaymentBlockModal(false)}
                className="absolute right-4 top-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center gap-4 mt-2">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Action Required</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Please contact the administrator before making this payment to verify your account status.
                </p>
                <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 mt-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">Scheduled Date</span>
                  <span className="text-sm font-bold text-slate-800">Sep 23rd - 24th</span>
                </div>
                <button
                  onClick={() => setShowPaymentBlockModal(false)}
                  className="w-full py-3 mt-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="relative w-[280px] max-w-[80vw] bg-white h-full shadow-2xl flex flex-col border-r border-slate-200"
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <span className="font-bold text-slate-800 tracking-tight">Navigation</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Profile Card */}
              <div className="flex flex-col gap-4 p-4 border-b border-slate-100 bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-emerald-500/20 shrink-0">
                    M
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-bold text-sm">Milan Biswas</span>
                    <span className="text-slate-500 text-xs font-medium">Indus@Milan@2026</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">DOB</span>
                    <span className="font-semibold text-slate-700">02/01/1984</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">ID Document</span>
                    <span className="font-semibold text-slate-700">**** 1162</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">CKYC No.</span>
                    <span className="font-semibold text-slate-700">7998643-233976</span>
                  </div>
                </div>
                <div className="border-t border-slate-200/50 pt-3 mt-1 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Operator Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                    <span className="text-xs font-bold text-emerald-700">Active Node</span>
                  </div>
                </div>
              </div>
              
              <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => { setActiveSidebarTab('info'); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-semibold text-sm ${activeSidebarTab === 'info' ? 'bg-emerald-50 text-[#007a3e]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <UserCheck className="w-5 h-5" />
                  <span>Info</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveSidebarTab('document'); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-semibold text-sm ${activeSidebarTab === 'document' ? 'bg-emerald-50 text-[#007a3e]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <FileCheck className="w-5 h-5" />
                  <span>Document</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveSidebarTab('team'); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-semibold text-sm ${activeSidebarTab === 'team' ? 'bg-emerald-50 text-[#007a3e]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <Users className="w-5 h-5" />
                  <span>Team</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveSidebarTab('payments'); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-semibold text-sm ${activeSidebarTab === 'payments' ? 'bg-emerald-50 text-[#007a3e]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Payments</span>
                  {!paymentSuccessId && (
                    <span className="ml-auto flex items-center justify-center px-2 py-0.5 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-bold tracking-wide shadow-sm animate-pulse">
                      DUE
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveSidebarTab('cryptography'); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-semibold text-sm ${activeSidebarTab === 'cryptography' ? 'bg-emerald-50 text-[#007a3e]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <Lock className="w-5 h-5" />
                  <span>Security Log</span>
                </button>
                {selectedItem?.transitRoute && (
                  <button
                    type="button"
                    onClick={() => { setActiveSidebarTab('routing'); setIsMobileMenuOpen(false); }}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all font-semibold text-sm ${activeSidebarTab === 'routing' ? 'bg-emerald-50 text-[#007a3e]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    <Globe className="w-5 h-5" />
                    <span>Transit Track</span>
                  </button>
                )}
              </nav>

              {/* Mobile Secure Network Alert */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 mt-auto">
                <div className="flex items-center gap-2 text-emerald-800 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-xs">Indus Secure Network</span>
                </div>
                <p className="text-xs text-emerald-900/70 leading-relaxed font-medium">
                  Your connection is authenticated. Cryptographic keys and clearances are active.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
