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

  React.useEffect(() => {
    if (isOpen) setSessionType(initialType);
  }, [isOpen, initialType]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl shadow-[0_0_60px_rgba(37,99,235,0.25)] p-6 sm:p-9 z-10 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Strategy &amp; Proposal Request</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Initiate Strategic Partnership
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
                Connect directly with the joint leadership team of A1 Auto King &amp; NA Tech Consulting LLC.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setSessionType("strategy")}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${sessionType === "strategy" ? activeBtn : inactiveBtn}`}
                >
                  30-Min Strategy Call
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType("proposal")}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${sessionType === "proposal" ? activeBtn : inactiveBtn}`}
                >
                  Full Technical RFP / Proposal
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                        placeholder="e.g. Marcus Vance"
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input required type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="marcus@company.com"
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Company / Organization *</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input required type="text" name="company" value={formData.company} onChange={handleChange}
                        placeholder="A1 Auto King / Partner"
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Target Deployment Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors">
                    <option>Immediate (Next 30 Days)</option>
                    <option>Phase 1 Foundation (Q1 / Q2)</option>
                    <option>Exploratory Architecture Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Specific Requirements</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <textarea rows={2} name="notes" value={formData.notes} onChange={handleChange}
                      placeholder="e.g., VIN catalog integration, dealer portal, warehouse synchronization..."
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                  </div>
                </div>

                <div className="pt-3">
                  <Button type="submit" variant="primary" className="w-full justify-center text-sm py-3.5">
                    {sessionType === "strategy" ? "Confirm Strategy Call Booking" : "Submit RFP Proposal Request"}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-5 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Session Request Confirmed</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6 font-light">
                Thank you, <span className="font-semibold text-blue-400">{formData.fullName || "Partner"}</span>. The joint executive team of A1 Auto King &amp; NA Tech Consulting has received your inquiry.
              </p>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
                <div className="flex justify-between text-slate-400">
                  <span>Organization:</span>
                  <span className="text-white font-medium">{formData.company || "Direct"}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Target Window:</span>
                  <span className="text-blue-300 font-medium">{formData.timeline}</span>
                </div>
              </div>
              <Button variant="secondary" onClick={handleReset} className="mx-auto">
                Done &amp; Return to Overview
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
