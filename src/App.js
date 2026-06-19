import React, { useState, useEffect } from "react";
import {
  Inbox,
  FileText,
  CheckCircle2,
  Clock,
  RefreshCw,
  LayoutDashboard,
  Settings,
  Bot,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Truck,
  Package,
  Network,
  Zap,
  TerminalSquare,
  ChevronRight,
  Play,
  Sparkles,
  Mail,
  TrendingUp,
  DollarSign,
  BarChart3,
  Users,
  Globe,
  Star,
  Award,
  Quote,
  ArrowUpRight,
  Gauge,
  Route,
  HardHat,
  Weight,
  Fuel,
  MapPin,
  Calendar,
  Activity,
  Target,
  Layers,
} from "lucide-react";

// --- MOCK DATA (UNCHANGED) ---
const initialDocuments = [
  {
    id: "RC-88392",
    sender: "dispatch@expressfreight.com",
    subject: "Rate Confirmation - Load #88392",
    time: "10:23 AM",
    status: "PENDING",
    rawText:
      "Hello Team,\n\nPlease find the attached rate confirmation for the upcoming outbound load.\n\nLoad Number: 88392\nPickup Date: June 21, 2026\nCarrier: Express Freight Lines\nAgreed Rate: $1,450.00\nNotes: Must have 2 straps. Call 1 hour prior to arrival.\n\nThanks,\nSarah",
    extractedData: null,
  },
  {
    id: "INV-4021",
    sender: "accounting@steelworks.net",
    subject: "Invoice for May Delivery (TX to OH)",
    time: "09:45 AM",
    status: "PENDING",
    rawText:
      "Attached is invoice #4021 for the flatbed delivery from Dallas to Cleveland.\n\nTotal Due: $2,100.00\nDate of service: 05/28/2026\nRef/Load #: TX-OH-992\n\nPlease remit payment within 30 days.",
    extractedData: null,
  },
];

// --- ANIMATED COUNTER HOOK ---
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  return count;
};

// --- LANDING PAGE COMPONENT ---
const LandingPage = ({ onEnterApp }) => {
  const processedLoads = useCountUp(15782);
  const revenueSaved = useCountUp(2847630);
  const activeCarriers = useCountUp(847);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white overflow-hidden">
      {/* Animated Background with Trucks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-5 animate-float-slow">
          <Truck className="w-64 h-64" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-5 animate-float-slower">
          <Package className="w-48 h-48" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5 animate-float">
          <Globe className="w-56 h-56" />
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiPjxwYXRoIGQ9Ik0zNiAxMnYzNk0yNCAxMnYzNk0xMiAyNGgzNk0xMiAzNmgzNiIvPjwvZz48L2c+PC9zdmc+')] opacity-[0.03]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="bg-amber-500 p-2.5 rounded-xl shadow-lg shadow-amber-500/20">
            <Truck className="w-6 h-6 text-stone-900" />
          </div>
          <span className="text-2xl font-black tracking-tight">
            AutoClerk<span className="text-amber-500">.</span>
          </span>
        </div>
        <div className="flex items-center space-x-6 text-stone-400 font-medium text-sm">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#stats" className="hover:text-white transition-colors">
            Impact
          </a>
          <a
            href="#testimonials"
            className="hover:text-white transition-colors"
          >
            Testimonials
          </a>
          <button
            onClick={onEnterApp}
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-amber-500/20 active:scale-95"
          >
            Launch Platform
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Activity className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 font-semibold text-sm">
              Processing 15,000+ loads monthly
            </span>
          </div>

          <h1 className="text-7xl font-black leading-tight mb-6 tracking-tight">
            Your Fleet's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Automated Dispatcher
            </span>
          </h1>

          <p className="text-xl text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop manually processing rate confirmations. Let AI extract load
            details, sync with your TMS, and keep your trucks moving —
            automatically.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={onEnterApp}
              className="group bg-amber-500 hover:bg-amber-400 text-stone-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-amber-500/20 active:scale-95 flex items-center space-x-3"
            >
              <Play className="w-5 h-5" />
              <span>Start Processing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-white/10 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Live Stats Banner */}
        <div
          id="stats"
          className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all group">
            <Package className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <div className="text-4xl font-black mb-2">
              {processedLoads.toLocaleString()}+
            </div>
            <div className="text-stone-400 font-medium text-sm">
              Loads Processed
            </div>
            <div className="flex items-center justify-center mt-3 text-emerald-400 text-xs font-semibold">
              <ArrowUpRight className="w-3 h-3 mr-1" /> +23% this month
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all group">
            <DollarSign className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <div className="text-4xl font-black mb-2">
              ${(revenueSaved / 1000000).toFixed(1)}M+
            </div>
            <div className="text-stone-400 font-medium text-sm">
              Revenue Saved
            </div>
            <div className="flex items-center justify-center mt-3 text-emerald-400 text-xs font-semibold">
              <ArrowUpRight className="w-3 h-3 mr-1" /> 98% accuracy
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all group">
            <Truck className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <div className="text-4xl font-black mb-2">{activeCarriers}+</div>
            <div className="text-stone-400 font-medium text-sm">
              Active Carriers
            </div>
            <div className="flex items-center justify-center mt-3 text-emerald-400 text-xs font-semibold">
              <ArrowUpRight className="w-3 h-3 mr-1" /> 99.9% uptime
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Built for <span className="text-amber-500">Freight</span>
          </h2>
          <p className="text-stone-400 text-lg">
            Every feature designed with logistics professionals in mind
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Instant Extraction",
              desc: "AI reads rate cons in seconds. Load numbers, dates, rates — captured automatically.",
            },
            {
              icon: Route,
              title: "TMS Integration",
              desc: "Direct sync with McLeod, TMW, and more. No manual data entry required.",
            },
            {
              icon: ShieldCheck,
              title: "Error Prevention",
              desc: "99.8% accuracy rate. Catches discrepancies before they become costly mistakes.",
            },
            {
              icon: Gauge,
              title: "Real-Time Dashboard",
              desc: "Monitor every load, every lane, every dollar. Complete operational visibility.",
            },
            {
              icon: HardHat,
              title: "Carrier Compliance",
              desc: "Auto-verify insurance, authority, and safety ratings. Stay DOT compliant.",
            },
            {
              icon: TrendingUp,
              title: "Profit Analytics",
              desc: "Track margins per lane. Identify your most profitable routes automatically.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-amber-500/30 transition-all group"
            >
              <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-amber-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div
        id="testimonials"
        className="relative z-10 max-w-7xl mx-auto px-8 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Trusted by <span className="text-amber-500">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[
            {
              quote:
                "AutoClerk saved us 40 hours/week in manual data entry. Our dispatchers can now focus on what matters — moving freight.",
              author: "Mike Rodriguez",
              role: "CEO, Express Freight Lines",
              profit: "$340K saved annually",
            },
            {
              quote:
                "The accuracy is incredible. We haven't had a single billing dispute since implementing AutoClerk six months ago.",
              author: "Sarah Chen",
              role: "CFO, Midwest Logistics Group",
              profit: "99.8% accuracy rate",
            },
            {
              quote:
                "Integration with our TMS was seamless. We were processing loads automatically within the first hour.",
              author: "James Turner",
              role: "Operations Director, Peak Carriers",
              profit: "2,300+ hours saved",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-amber-500/30 absolute top-6 right-6" />
              <p className="text-stone-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-stone-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-500 font-bold text-sm">
                      {testimonial.profit}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-24 text-center">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-16 shadow-2xl shadow-amber-500/20">
          <h2 className="text-4xl font-black text-stone-900 mb-4">
            Ready to Automate Your Dispatch?
          </h2>
          <p className="text-stone-800 text-lg mb-8">
            Join 800+ carriers already saving time and money.
          </p>
          <button
            onClick={onEnterApp}
            className="bg-stone-900 hover:bg-stone-800 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95 inline-flex items-center space-x-3"
          >
            <Truck className="w-5 h-5" />
            <span>Launch AutoClerk</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-8 py-8 text-center text-stone-500 text-sm">
        <p>
          © 2026 AutoClerk Logistics. Processing freight documents automatically
          across North America.
        </p>
      </footer>
    </div>
  );
};

// --- MAIN APP COMPONENT (YOUR EXISTING LOGIC - UNCHANGED) ---
export default function App() {
  const [activeTab, setActiveTab] = useState("queue");
  const [documents, setDocuments] = useState(initialDocuments);
  const [selectedDocId, setSelectedDocId] = useState(initialDocuments[0].id);
  const [stats, setStats] = useState({
    processed: 142,
    hoursSaved: 47,
    errorRate: 0.0,
  });
  const [showApp, setShowApp] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [showSimulationBanner, setShowSimulationBanner] = useState(false);

  const selectedDoc = documents.find((d) => d.id === selectedDocId);

  // --- SIMULATED PIPELINE ACTIONS (UNCHANGED LOGIC) ---
  const handleExtract = (id) => {
    setDocuments((docs) =>
      docs.map((d) => (d.id === id ? { ...d, status: "PROCESSING" } : d))
    );
    setTimeout(() => {
      setDocuments((docs) =>
        docs.map((d) => {
          if (d.id !== id) return d;
          const text = d.rawText;
          const loadMatch = text.match(
            /(?:Load|Ref)(?: ID| Number| \/Load #| #)?:?\s*([A-Z0-9-]+)/i
          );
          const amountMatch = text.match(/\$([0-9,]+\.[0-9]{2})/);

          const extractedJSON = {
            loadNumber: loadMatch ? loadMatch[1] : "UNKNOWN",
            date: text.includes("05/28/2026")
              ? "2026-05-28"
              : new Date().toISOString().split("T")[0],
            amount: amountMatch
              ? parseFloat(amountMatch[1].replace(/,/g, ""))
              : 0.0,
            vendor: text.includes("Steelworks")
              ? "Steelworks"
              : text.includes("Express Freight")
              ? "Express Freight"
              : "New Partner Logistics",
            confidence: "99." + Math.floor(Math.random() * 9) + "%",
          };
          return { ...d, status: "EXTRACTED", extractedData: extractedJSON };
        })
      );
    }, 1500);
  };

  const handleSync = (id) => {
    setDocuments((docs) =>
      docs.map((d) => (d.id === id ? { ...d, status: "SYNCING" } : d))
    );
    setTimeout(() => {
      setDocuments((docs) =>
        docs.map((d) => (d.id === id ? { ...d, status: "SYNCED" } : d))
      );
      setStats((s) => ({
        ...s,
        processed: s.processed + 1,
        hoursSaved: s.hoursSaved + 0.33,
      }));
      setShowSimulationBanner(true);
      setTimeout(() => setShowSimulationBanner(false), 3000);
    }, 1000);
  };

  const receiveNewEmail = () => {
    const newDoc = {
      id: `RC-${Math.floor(Math.random() * 90000) + 10000}`,
      sender: "logistics@newpartner.com",
      subject: `New Load Assignment - Urgent`,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "PENDING",
      rawText: `Hey dispatch,\n\nGot a hot load for you. Details below.\n\nLoad ID: ${
        Math.floor(Math.random() * 90000) + 10000
      }\nPickup: Tomorrow\nCarrier: New Partner Logistics\nRate: $3,${
        Math.floor(Math.random() * 900) + 100
      }.00\n\nPlease confirm receipt.`,
      extractedData: null,
    };
    setDocuments([newDoc, ...documents]);
    setSelectedDocId(newDoc.id);
  };

  // --- UI HELPERS ---
  const StatusBadge = ({ status }) => {
    const styles = {
      PENDING: "bg-stone-100 text-stone-600 border-stone-200",
      PROCESSING: "bg-violet-50 text-violet-700 border-violet-200",
      EXTRACTED: "bg-amber-50 text-amber-700 border-amber-200",
      SYNCING: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
      SYNCED: "bg-emerald-50 text-emerald-700 border-emerald-200",
    };

    const displayStatus = status.charAt(0) + status.slice(1).toLowerCase();

    return (
      <span
        className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold border ${styles[status]} transition-all duration-300 backdrop-blur-sm`}
      >
        {status === "PROCESSING" || status === "SYNCING" ? (
          <span className="flex items-center space-x-1.5">
            <RefreshCw className="w-3 h-3 animate-spin" />
            <span>{displayStatus}</span>
          </span>
        ) : (
          <span className="flex items-center space-x-1.5">
            {status === "SYNCED" && <CheckCircle2 className="w-3 h-3" />}
            <span>{displayStatus}</span>
          </span>
        )}
      </span>
    );
  };

  const PipelineStep = ({
    icon: Icon,
    label,
    isCompleted,
    isActive,
    isPending,
  }) => {
    let stepClass = "bg-white border-2 border-stone-200 text-stone-300";
    let iconClass = "text-stone-300";

    if (isActive) {
      stepClass =
        "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/20 animate-pulse ring-4 ring-amber-50";
      iconClass = "text-white";
    } else if (isCompleted) {
      stepClass =
        "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/10";
      iconClass = "text-white";
    }

    return (
      <div className="flex flex-col items-center group cursor-default">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 ease-out ${stepClass}`}
        >
          <Icon
            className={`w-6 h-6 ${iconClass} transition-transform duration-300 group-hover:scale-110`}
          />
        </div>
        <span
          className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
            isPending ? "text-stone-400" : "text-stone-800"
          }`}
        >
          {label}
        </span>
      </div>
    );
  };

  const ConnectorLine = ({ completed }) => (
    <div
      className={`flex-1 h-0.5 mx-2 rounded-full transition-all duration-700 ease-out ${
        completed ? "bg-amber-500" : "bg-stone-200"
      }`}
    />
  );

  // Show Landing Page if app not launched
  if (!showApp) {
    return <LandingPage onEnterApp={() => setShowApp(true)} />;
  }

  // Main Application (Your existing structure with freight-themed styling)
  return (
    <div className="min-h-screen bg-stone-50 flex font-sans text-stone-900 selection:bg-amber-100">
      {/* SIMULATION SUCCESS BANNER */}
      {showSimulationBanner && (
        <div className="fixed top-6 right-6 z-50 bg-white border border-stone-200 shadow-2xl rounded-2xl p-5 flex items-center space-x-4 animate-slide-in backdrop-blur-md bg-white/80">
          <div className="bg-emerald-100 p-2.5 rounded-xl">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="font-bold text-stone-900">Load Synced to TMS</p>
            <p className="text-sm text-stone-500">
              Carrier notified automatically.
            </p>
          </div>
        </div>
      )}

      {/* SIDEBAR - FREIGHT THEMED */}
      <div className="w-72 bg-white text-stone-700 flex flex-col border-r border-stone-100 shadow-sm z-20">
        <div className="p-8 flex items-center space-x-3">
          <div className="bg-amber-500 p-2.5 rounded-2xl shadow-lg shadow-amber-500/20">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-stone-900 block leading-none">
              AutoClerk
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium">
              Freight Edition
            </span>
          </div>
        </div>

        <nav className="flex-1 px-5 py-6 space-y-1">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
              activeTab === "dashboard"
                ? "bg-amber-500 text-white font-semibold shadow-md"
                : "hover:bg-stone-100 text-stone-500 hover:text-stone-900 font-medium"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Fleet Dashboard</span>
            {activeTab === "dashboard" && (
              <ChevronRight className="w-4 h-4 ml-auto" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("queue")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
              activeTab === "queue"
                ? "bg-amber-500 text-white font-semibold shadow-md"
                : "hover:bg-stone-100 text-stone-500 hover:text-stone-900 font-medium"
            }`}
          >
            <Inbox className="w-5 h-5" />
            <span>Document Queue</span>
            {documents.filter((d) => d.status === "PENDING").length > 0 && (
              <span className="ml-auto bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {documents.filter((d) => d.status === "PENDING").length}
              </span>
            )}
            {activeTab === "queue" && (
              <ChevronRight className="w-4 h-4 ml-auto" />
            )}
          </button>
          <div className="pt-8 pb-3 px-4">
            <p className="text-xs font-semibold text-stone-300 uppercase tracking-[0.2em]">
              Fleet Integrations
            </p>
          </div>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl hover:bg-stone-50 transition-colors text-stone-400 cursor-not-allowed opacity-60">
            <Route className="w-5 h-5" />
            <span className="font-medium">TMS Connection</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl hover:bg-stone-50 transition-colors text-stone-400 cursor-not-allowed opacity-60">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </nav>

        <div className="p-5 mx-4 mb-6">
          <div className="bg-stone-50 rounded-3xl p-5 border border-stone-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full relative"></div>
              </div>
              <p className="text-sm font-semibold text-stone-900">
                Dispatch Active
              </p>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs">
                <span className="text-stone-400">AI Engine</span>
                <span className="text-emerald-600 font-medium">Processing</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-stone-400">Active Loads</span>
                <span className="text-stone-900 font-bold">
                  {documents.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-stone-50/50">
        {/* HEADER */}
        <header className="bg-white/60 backdrop-blur-xl border-b border-stone-200/50 px-10 py-6 flex justify-between items-center z-10 sticky top-0">
          <div>
            <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
              {activeTab === "dashboard"
                ? "Fleet Operations Center"
                : "Document Extraction Engine"}
            </h1>
            <p className="text-sm text-stone-500 mt-1 font-medium">
              {activeTab === "dashboard"
                ? "Monitor loads, profits, and carrier performance."
                : "Process incoming rate confirmations and invoices."}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowApp(false)}
              className="text-sm text-stone-400 hover:text-stone-600 font-medium transition-colors"
            >
              ← Back to Home
            </button>
            <button
              onClick={receiveNewEmail}
              className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-white px-5 py-2.5 rounded-2xl font-semibold transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>New Rate Confirmation</span>
            </button>
          </div>
        </header>

        {/* DASHBOARD VIEW */}
        {activeTab === "dashboard" && (
          <div className="p-10 overflow-y-auto">
            {/* Profit Cards */}
            <div className="grid grid-cols-4 gap-6 mb-10">
              <div
                className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 cursor-default"
                onMouseEnter={() => setHoveredStat("processed")}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Package className="w-5 h-5 text-amber-500" />
                  <span className="text-stone-400 font-semibold text-xs uppercase tracking-wider">
                    Today's Loads
                  </span>
                </div>
                <div className="text-4xl font-black text-stone-900 tracking-tighter">
                  {stats.processed}
                </div>
                <div className="text-xs text-emerald-600 font-semibold mt-2">
                  ↑ 12% from yesterday
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 cursor-default"
                onMouseEnter={() => setHoveredStat("revenue")}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="w-5 h-5 text-amber-500" />
                  <span className="text-stone-400 font-semibold text-xs uppercase tracking-wider">
                    Today's Revenue
                  </span>
                </div>
                <div className="text-4xl font-black text-stone-900 tracking-tighter">
                  $24.8K
                </div>
                <div className="text-xs text-emerald-600 font-semibold mt-2">
                  ↑ 8% from last week
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 cursor-default"
                onMouseEnter={() => setHoveredStat("hours")}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span className="text-stone-400 font-semibold text-xs uppercase tracking-wider">
                    Hours Saved
                  </span>
                </div>
                <div className="text-4xl font-black text-stone-900 tracking-tighter">
                  {stats.hoursSaved.toFixed(1)}
                </div>
                <div className="text-xs text-stone-500 font-semibold mt-2">
                  ≈ $1,175 in labor
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 cursor-default"
                onMouseEnter={() => setHoveredStat("accuracy")}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                  <span className="text-stone-400 font-semibold text-xs uppercase tracking-wider">
                    Accuracy
                  </span>
                </div>
                <div className="text-4xl font-black text-stone-900 tracking-tighter">
                  99.8%
                </div>
                <div className="text-xs text-stone-500 font-semibold mt-2">
                  0 disputes this week
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-10 rounded-3xl shadow-xl mb-10 relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10">
                <Truck className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-white mb-3">
                  Ready for your next load?
                </h2>
                <p className="text-amber-100 mb-6 max-w-lg">
                  New rate confirmations are waiting to be processed. Let AI
                  handle the extraction.
                </p>
                <button
                  onClick={() => setActiveTab("queue")}
                  className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg active:scale-95 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Process Documents</span>
                </button>
              </div>
            </div>

            {/* Active Loads Preview */}
            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Active Loads</h3>
                <button className="text-amber-500 hover:text-amber-600 font-semibold text-sm">
                  View All →
                </button>
              </div>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <Truck className="w-5 h-5 text-stone-400" />
                      <div>
                        <div className="font-bold text-sm">{doc.subject}</div>
                        <div className="text-xs text-stone-400">
                          {doc.sender}
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={doc.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* QUEUE VIEW - DOCUMENT PROCESSING */}
        {activeTab === "queue" && (
          <div className="flex-1 flex overflow-hidden p-8 gap-8">
            {/* Document List */}
            <div className="w-[360px] bg-white border border-stone-100 rounded-3xl shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-5 border-b border-stone-50 bg-white flex justify-between items-center">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-[0.2em] flex items-center">
                  <Inbox className="w-4 h-4 mr-2 text-amber-500" />
                  Incoming Docs
                </h3>
                <span className="text-xs text-stone-400 font-medium">
                  {documents.length} pending
                </span>
              </div>
              <div className="overflow-y-auto flex-1 p-3 space-y-2 scrollbar-thin">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border group relative overflow-hidden ${
                      selectedDocId === doc.id
                        ? "bg-amber-500 border-amber-500 shadow-lg scale-[1.02]"
                        : "bg-white border-transparent hover:bg-stone-50 hover:border-stone-100"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className={`text-sm font-bold truncate pr-2 transition-colors ${
                          selectedDocId === doc.id
                            ? "text-white"
                            : "text-stone-900"
                        }`}
                      >
                        {doc.subject}
                      </span>
                    </div>
                    <div
                      className={`text-xs truncate mb-4 font-medium ${
                        selectedDocId === doc.id
                          ? "text-amber-100"
                          : "text-stone-400"
                      }`}
                    >
                      {doc.sender}
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-[10px] font-mono tracking-wider ${
                          selectedDocId === doc.id
                            ? "text-amber-100"
                            : "text-stone-300"
                        }`}
                      >
                        {doc.time}
                      </span>
                      <StatusBadge status={doc.status} />
                    </div>
                    {selectedDocId === doc.id && (
                      <div className="absolute top-0 right-0 w-1 h-full bg-white/20 rounded-r-xl"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Document Detail View */}
            <div className="flex-1 bg-white border border-stone-100 rounded-3xl shadow-sm overflow-y-auto flex flex-col">
              {selectedDoc ? (
                <div className="flex-1 flex flex-col p-10 max-w-5xl mx-auto w-full">
                  {/* Pipeline */}
                  <div className="mb-12">
                    <div className="flex items-center justify-between relative px-4">
                      <div className="absolute left-16 right-16 top-7 h-0.5 bg-stone-100"></div>

                      <PipelineStep
                        icon={Mail}
                        label="Received"
                        isCompleted={selectedDoc.status !== "PENDING"}
                        isActive={false}
                        isPending={false}
                      />

                      <ConnectorLine
                        completed={["EXTRACTED", "SYNCING", "SYNCED"].includes(
                          selectedDoc.status
                        )}
                      />

                      <PipelineStep
                        icon={Bot}
                        label="Extract"
                        isCompleted={[
                          "EXTRACTED",
                          "SYNCING",
                          "SYNCED",
                        ].includes(selectedDoc.status)}
                        isActive={selectedDoc.status === "PROCESSING"}
                        isPending={selectedDoc.status === "PENDING"}
                      />

                      <ConnectorLine
                        completed={selectedDoc.status === "SYNCED"}
                      />

                      <PipelineStep
                        icon={Route}
                        label="TMS Sync"
                        isCompleted={selectedDoc.status === "SYNCED"}
                        isActive={selectedDoc.status === "SYNCING"}
                        isPending={selectedDoc.status !== "SYNCED"}
                      />
                    </div>
                  </div>

                  {/* Data Panels */}
                  <div className="grid grid-cols-2 gap-8 flex-1 min-h-[450px]">
                    {/* Raw Document */}
                    <div className="flex flex-col bg-stone-50 rounded-3xl border border-stone-100 overflow-hidden shadow-inner">
                      <div className="px-7 py-5 bg-white border-b border-stone-100 flex items-center">
                        <FileText className="w-5 h-5 mr-3 text-stone-400" />
                        <h3 className="font-bold text-stone-900 tracking-tight text-sm uppercase tracking-wider">
                          Rate Confirmation
                        </h3>
                        <span className="ml-auto text-xs text-stone-400 font-mono">
                          {selectedDoc.id}
                        </span>
                      </div>
                      <div className="p-7 flex-1 overflow-y-auto font-mono text-sm text-stone-600 whitespace-pre-wrap leading-relaxed">
                        {selectedDoc.rawText}
                      </div>
                      <div className="p-7 bg-white border-t border-stone-100">
                        <button
                          onClick={() => handleExtract(selectedDoc.id)}
                          disabled={selectedDoc.status !== "PENDING"}
                          className={`w-full py-4 rounded-2xl font-bold text-base transition-all flex justify-center items-center group ${
                            selectedDoc.status === "PENDING"
                              ? "bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-500/20 active:scale-[0.98]"
                              : "bg-stone-100 text-stone-400 cursor-not-allowed"
                          }`}
                        >
                          {selectedDoc.status === "PROCESSING" ? (
                            <>
                              <RefreshCw className="w-5 h-5 mr-3 animate-spin" />{" "}
                              Analyzing Document...
                            </>
                          ) : selectedDoc.status === "PENDING" ? (
                            <>
                              <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />{" "}
                              Extract Load Details
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-5 h-5 mr-3" />{" "}
                              Extraction Complete
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Structured Output */}
                    <div className="flex flex-col bg-stone-900 rounded-3xl border border-stone-800 overflow-hidden shadow-2xl">
                      <div className="px-7 py-5 bg-stone-800 border-b border-stone-700 flex justify-between items-center">
                        <div className="flex items-center">
                          <TerminalSquare className="w-5 h-5 mr-3 text-amber-500" />
                          <h3 className="font-bold text-white tracking-tight text-sm uppercase tracking-wider">
                            Extracted Data
                          </h3>
                        </div>
                        {selectedDoc.extractedData && (
                          <div className="flex items-center space-x-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-bold text-emerald-400">
                              {selectedDoc.extractedData.confidence}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-7 flex-1 overflow-y-auto font-mono text-sm relative">
                        {selectedDoc.status === "PENDING" ||
                        selectedDoc.status === "PROCESSING" ? (
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 bg-stone-900">
                            {selectedDoc.status === "PROCESSING" ? (
                              <>
                                <div className="relative mb-6">
                                  <Truck className="w-16 h-16 text-amber-500/20 absolute inset-0 m-auto" />
                                  <div className="w-16 h-16 border-4 border-stone-700 border-t-amber-500 rounded-full animate-spin"></div>
                                </div>
                                <p className="text-amber-400/70 font-medium animate-pulse">
                                  Extracting load details...
                                </p>
                              </>
                            ) : (
                              <div className="text-center">
                                <Package className="w-10 h-10 text-stone-600 mx-auto mb-4" />
                                <p className="text-stone-500">
                                  Awaiting extraction
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-stone-300 space-y-2">
                            <div className="flex items-start">
                              <span className="text-stone-500">{"{"}</span>
                            </div>
                            <div className="flex items-start ml-4">
                              <span className="text-sky-400">
                                "load_number"
                              </span>
                              <span className="text-stone-500 mx-2">:</span>
                              <span className="text-amber-400">
                                "{selectedDoc.extractedData.loadNumber}"
                              </span>
                              <span className="text-stone-600">,</span>
                            </div>
                            <div className="flex items-start ml-4">
                              <span className="text-sky-400">"date"</span>
                              <span className="text-stone-500 mx-2">:</span>
                              <span className="text-amber-400">
                                "{selectedDoc.extractedData.date}"
                              </span>
                              <span className="text-stone-600">,</span>
                            </div>
                            <div className="flex items-start ml-4">
                              <span className="text-sky-400">"amount"</span>
                              <span className="text-stone-500 mx-2">:</span>
                              <span className="text-emerald-400">
                                {selectedDoc.extractedData.amount}
                              </span>
                              <span className="text-stone-600">,</span>
                            </div>
                            <div className="flex items-start ml-4">
                              <span className="text-sky-400">"vendor"</span>
                              <span className="text-stone-500 mx-2">:</span>
                              <span className="text-amber-400">
                                "{selectedDoc.extractedData.vendor}"
                              </span>
                            </div>
                            <div className="flex items-start">
                              <span className="text-stone-500">{"}"}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-7 bg-stone-800 border-t border-stone-700">
                        <button
                          onClick={() => handleSync(selectedDoc.id)}
                          disabled={selectedDoc.status !== "EXTRACTED"}
                          className={`w-full py-4 rounded-2xl font-bold text-base transition-all flex justify-center items-center group ${
                            selectedDoc.status === "EXTRACTED"
                              ? "bg-white text-stone-900 hover:bg-stone-100 shadow-lg hover:shadow-xl active:scale-[0.98]"
                              : "bg-stone-700/50 text-stone-500 cursor-not-allowed"
                          }`}
                        >
                          {selectedDoc.status === "SYNCING" ? (
                            <>
                              <RefreshCw className="w-5 h-5 mr-3 animate-spin" />{" "}
                              Syncing to TMS...
                            </>
                          ) : selectedDoc.status === "SYNCED" ? (
                            <>
                              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500" />{" "}
                              Synced Successfully
                            </>
                          ) : (
                            <>
                              <Route className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />{" "}
                              Push to TMS
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-stone-300">
                  <Inbox className="w-12 h-12 mb-4 text-stone-200" />
                  <p className="font-medium">
                    Select a document to begin processing.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #e7e5e4; border-radius: 20px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #d6d3d1; }
        @keyframes slide-in {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        .animate-slide-in { animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
