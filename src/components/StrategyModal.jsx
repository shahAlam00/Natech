import React from "react";
import { motion } from "framer-motion";
import { X, Sparkles, Calendar, CheckCircle2, ArrowRight, Building, Mail, User, Phone, MessageSquare } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Button from "./Button";
import confetti from "canvas-confetti";

export default function StrategyModal({ isOpen, onClose, initialType = "strategy" }) {
  const [sessionType, setSessionType] = React.useState(initialType);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "", email: "", company: "", phone: "", notes: "",
    timeline: "Immediate (Next 30 Days)",
  });
  const [emailError, setEmailError] = React.useState("");

  React.useEffect(() => {
    if (isOpen) {
      setSessionType(initialType);
      setEmailError("");
    }
  }, [isOpen, initialType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (value && !value.includes("@")) {
        setEmailError("Please enter a valid email address containing '@'.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && !formData.email.includes("@")) {
      setEmailError("Please enter a valid email address containing '@'.");
      return;
    }
    setEmailError("");
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#3b82f6","#60a5fa","#818cf8","#38bdf8"] });
    } catch {}
  };

  const handleReset = () => { setIsSubmitted(false); onClose(); };

  if (!isOpen) return null;

  const activeBtn = "bg-blue-600/20 text-blue-300 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]";
  const inactiveBtn = "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl shadow-[0_0_60px_rgba(37,99,235,0.25)] p-8 sm:p-10 z-10 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2.5">
                <Sparkles className="w-4 h-4" />
                <span>Executive Strategy &amp; Proposal Request</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Initiate Strategic Partnership
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-8 font-light leading-relaxed">
                Connect directly with the joint leadership team of A1 Auto King &amp; NA Tech Consulting LLC.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => setSessionType("strategy")}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer shadow-sm ${sessionType === "strategy" ? activeBtn : inactiveBtn}`}
                >
                  30-Min Strategy Call
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType("proposal")}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer shadow-sm ${sessionType === "proposal" ? activeBtn : inactiveBtn}`}
                >
                  Full Technical RFP / Proposal
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-2">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                        placeholder="e.g. Marcus Vance"
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 transition-colors shadow-inner" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-2">Work Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input required type="text" name="email" value={formData.email} onChange={handleChange}
                        placeholder="marcus@company.com"
                        className={`w-full pl-10 pr-4 py-3 bg-slate-900/90 border rounded-xl text-sm sm:text-base text-white focus:outline-none transition-colors shadow-inner ${emailError ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'}`} />
                    </div>
                    {emailError && (
                      <p className="mt-1.5 text-xs text-red-400 font-medium">{emailError}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-2">Company / Organization *</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input required type="text" name="company" value={formData.company} onChange={handleChange}
                        placeholder="A1 Auto King / Partner"
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 transition-colors shadow-inner" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 transition-colors shadow-inner" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-2">Target Deployment Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 transition-colors shadow-inner">
                    <option>Immediate (Next 30 Days)</option>
                    <option>Phase 1 Foundation (Q1 / Q2)</option>
                    <option>Exploratory Architecture Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-2">Specific Requirements</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <textarea rows={3} name="notes" value={formData.notes} onChange={handleChange}
                      placeholder="e.g., VIN catalog integration, dealer portal, warehouse synchronization..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 transition-colors resize-none shadow-inner" />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" className="w-full justify-center text-base sm:text-lg py-4 shadow-lg shadow-blue-600/30">
                    {sessionType === "strategy" ? "Confirm Strategy Call Booking" : "Submit RFP Proposal Request"}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 sm:py-12">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-6 shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Session Request Confirmed</h3>
              <p className="text-base sm:text-lg text-slate-300 max-w-md mx-auto leading-relaxed mb-8 font-light">
                Thank you, <span className="font-semibold text-blue-400">{formData.fullName || "Partner"}</span>. The joint executive team of A1 Auto King &amp; NA Tech Consulting has received your inquiry.
              </p>
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left text-sm space-y-3 mb-8 max-w-md mx-auto shadow-inner">
                <div className="flex justify-between text-slate-400">
                  <span>Organization:</span>
                  <span className="text-white font-medium">{formData.company || "Direct"}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Target Window:</span>
                  <span className="text-blue-300 font-medium">{formData.timeline}</span>
                </div>
              </div>
              <Button variant="secondary" onClick={handleReset} className="mx-auto py-3.5 px-6 text-base">
                Done &amp; Return to Overview
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}