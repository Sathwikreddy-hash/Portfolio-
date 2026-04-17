/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ChevronRight, 
  MapPin, 
  Users, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Eye, 
  Lightbulb, 
  Target, 
  ExternalLink,
  Linkedin,
  Twitter,
  Mail,
  ClipboardCheck,
  Search,
  Activity
} from "lucide-react";

/**
 * HIGH DENSITY THEME COMPONENTS
 */

const Tag = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`px-2 py-0.5 bg-accent/5 border border-accent/20 text-accent text-[9px] font-bold uppercase tracking-[0.15em] rounded-sm ${className}`}>
    {children}
  </div>
);

const DashboardCard = ({ title, children, className = "", delay = 0, id }: { title: string; children: React.ReactNode; className?: string; delay?: number; id?: string }) => (
  <motion.div 
    id={id}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={`bg-card border border-border rounded-xl p-6 flex flex-col group hover:border-accent/30 transition-colors duration-500 ${className}`}
  >
    <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold mb-4 flex items-center gap-2">
      <span className="w-1 h-1 bg-accent rounded-full animate-pulse" />
      {title}
    </div>
    {children}
  </motion.div>
);

const Navbar = () => {
  return (
    <nav className="h-[60px] border-b border-border fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl px-10 flex items-center justify-between">
      <div className="text-base font-bold tracking-tighter hover:text-accent transition-colors cursor-pointer">SATHWIK REDDY</div>
      <div className="flex gap-8 items-center">
        {["VoltBay", "Thinking", "Insights", "Work"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest font-bold text-muted hover:text-accent transition-all">
            {item}
          </a>
        ))}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="ml-4 px-5 py-1.5 bg-accent text-black rounded-md text-[12px] font-bold shadow-[0_4px_10px_rgba(0,209,255,0.2)]"
        >
          Connect
        </motion.a>
      </div>
    </nav>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent/30 flex flex-col pt-[60px]">
      <motion.div className="fixed top-[60px] left-0 right-0 h-[1px] bg-accent z-50 origin-[0%]" style={{ scaleX }} />
      <Navbar />
      
      <main className="flex-1 lg:grid lg:grid-cols-[420px_1fr] bg-border gap-[1px]">
        {/* SIDEBAR - HERO AREA */}
        <aside className="bg-bg p-12 flex flex-col justify-between border-r border-border min-h-[600px] lg:min-h-0 relative">
          <div className="absolute top-0 right-0 w-32 h-64 bg-accent/5 blur-[80px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <Tag className="inline-block">Product Founder @ VoltBay</Tag>
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white mb-6">
              Engineering <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">trust</span> for the EV ecosystem.
            </h1>
            <p className="text-muted leading-relaxed text-lg font-light max-w-sm">
              I focus on solving real-world EV charging confusion through product thinking and ground-level insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a 
                whileHover={{ y: -2, shadow: "0 10px 20px rgba(0,209,255,0.15)" }}
                whileTap={{ scale: 0.98 }}
                href="https://voltbay.lovable.app" 
                target="_blank" 
                className="px-8 py-3.5 bg-accent text-black rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 transition-all"
              >
                View VoltBay <ArrowRight size={16} />
              </motion.a>
              <motion.a 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                href="#work" 
                className="px-8 py-3.5 border border-border text-white rounded-lg font-bold text-sm text-center flex items-center justify-center transition-all"
              >
                Explore More
              </motion.a>
            </div>
          </motion.div>

          <footer className="mt-16 pt-10 border-t border-border flex flex-col gap-6">
            <div className="flex gap-6">
               <motion.a whileHover={{ scale: 1.2, color: "#00D1FF" }} href="#" title="LinkedIn"><Linkedin size={18} /></motion.a>
               <motion.a whileHover={{ scale: 1.2, color: "#00D1FF" }} href="#" title="Twitter"><Twitter size={18} /></motion.a>
               <motion.a whileHover={{ scale: 1.2, color: "#00D1FF" }} href="mailto:s83918624@gmail.com" title="Email"><Mail size={18} /></motion.a>
            </div>
            <div className="text-[11px] text-muted tracking-widest font-bold uppercase">
              Based in India &bull; Building with clarity
            </div>
          </footer>
        </aside>

        {/* MAIN GRID CONTENT */}
        <section className="bg-bg p-8 lg:p-12 overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* PROBLEM CARD */}
            <DashboardCard title="Problem Discovery" delay={0.1}>
              <div className="space-y-8 mt-2">
                {[
                  { title: "Data != Trust", desc: "Apps show availability, but users still find chargers broken or blocked.", icon: <ShieldCheck size={16} /> },
                  { title: "Decision Stress", desc: "Drivers depend on guesswork instead of clarity during low-battery anxiety.", icon: <Zap size={16} /> },
                  { title: "Pricing Friction", desc: "Complex pricing models (per unit vs per min) confuse pro drivers.", icon: <Activity size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-red-500/60">{item.icon}</div>
                    <div>
                      <strong className="block text-white text-[15px] font-semibold mb-1 uppercase tracking-tight">{item.title}</strong>
                      <p className="text-muted text-[13px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* SKILLS CARD */}
            <DashboardCard title="Product Arsenal" delay={0.2}>
              <div className="flex flex-wrap gap-2.5 mt-2">
                {[
                  "Product Thinking", "Ground Research", "UI Simplification", 
                  "Iterative Dev", "Friction Audit", "Decision Mapping"
                ].map((skill) => (
                  <motion.span 
                    key={skill} 
                    whileHover={{ scale: 1.05, borderColor: "rgba(0,209,255,0.4)", color: "#F5F5F7" }}
                    className="px-4 py-2 bg-border border border-white/5 rounded-lg text-[13px] text-muted transition-all cursor-default font-medium flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-accent/40 rounded-full" />
                    {skill}
                  </motion.span>
                ))}
              </div>
              <div className="mt-10 p-5 rounded-xl bg-accent/[0.03] border border-accent/10">
                 <p className="text-[12px] text-muted font-light leading-relaxed italic">
                   "The best insights aren't found in databases, they're found at the charging station at 8 PM when things start breaking."
                 </p>
              </div>
            </DashboardCard>

            {/* FIELD RESEARCH SECTION - REDESIGNED */}
            <DashboardCard id="insights" title="Ground Discovery Log" className="md:col-span-2 overflow-hidden" delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-4 relative">
                <div className="lg:col-span-4 space-y-4">
                   <div className="flex items-center gap-3 text-accent mb-2">
                      <Search size={20} />
                      <span className="text-sm font-bold uppercase tracking-widest">Observational Log</span>
                   </div>
                   <p className="text-base text-gray-300 font-light leading-relaxed">
                     Real-world observation at metro charging hubs. We don't guess; we witness user frustration and solve for it.
                   </p>
                   <div className="p-4 rounded-lg bg-border border border-white/5 flex items-center gap-4 group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                        <ClipboardCheck size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] text-muted font-bold uppercase tracking-tighter">Research Status</div>
                        <div className="text-xs font-semibold">Continuous Validation</div>
                      </div>
                   </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
                  {/* Timeline logic track */}
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border hidden sm:block pointer-events-none" />
                  
                  {[
                    { label: "15+ Users/Day", detail: "Single station volume with high queue management friction.", marker: "01" },
                    { label: "Fleet Drivers", detail: "Heavy usage from Rapido/Swiggy riders needing speed above all else.", marker: "02" },
                    { label: "Physical Cues", detail: "Users trust visual hardware status over app dashboard accuracy.", marker: "03" }
                  ].map((log, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(0,209,255,0.05)" }}
                      className="bg-border p-5 rounded-xl border border-white/5 relative z-10 hover:border-accent/40 shadow-xl transition-all"
                    >
                      <div className="text-[9px] font-black text-accent mb-3 tracking-tighter opacity-50">LOG-ENTRY #{log.marker}</div>
                      <div className="text-base font-bold mb-2 tracking-tight">{log.label}</div>
                      <p className="text-[12px] text-muted leading-tight font-light">{log.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </DashboardCard>

            {/* ACTIVE PRODUCT - VOLTBAY */}
            <DashboardCard id="voltbay" title="Current Build" className="md:col-span-2 group/card" delay={0.4}>
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-4xl font-bold tracking-tighter">VoltBay</h3>
                    <Tag className="bg-green-500/10 text-green-500 border-green-500/20">Active v1.0</Tag>
                  </div>
                  <p className="text-muted text-lg max-w-2xl leading-relaxed font-light">
                    Transforming EV infrastructure from a "guesswork game" into a "trust network". We verified charger availability so you don't have to.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="flex items-center gap-3 text-sm text-gray-400">
                        <ChevronRight size={14} className="text-accent" />
                        Verified Status Reports
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-400">
                        <ChevronRight size={14} className="text-accent" />
                        Smart Backup Routing
                     </div>
                  </div>
                </div>
                <div className="lg:col-span-5 w-full">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://voltbay.lovable.app" 
                    target="_blank" 
                    className="aspect-video bg-border rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 group/btn hover:border-accent/50 transition-all overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <ExternalLink className="text-muted group-hover/btn:text-accent group-hover/btn:scale-125 transition-all" size={32} />
                    <span className="text-xs uppercase font-black tracking-widest text-muted group-hover/btn:text-accent transition-colors">Launch Deployment</span>
                  </motion.a>
                </div>
              </div>
            </DashboardCard>

            {/* PHILOSOPHY & THINKING */}
            <DashboardCard id="thinking" title="Operating System" delay={0.5}>
              <div className="space-y-6 mt-2">
                {[
                  "Observe behavior before writing code.",
                  "Clarity over complexity in high-stress UX.",
                  "Remove friction rather than adding features.",
                  "Real interaction is the only validation."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group/item">
                    <span className="text-accent font-black mt-0.5 group-hover/item:translate-x-1 transition-transform">→</span>
                    <p className="text-[14px] leading-tight text-text/80 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* RESEARCH SNAPSHOTS */}
            <DashboardCard title="Ground Evidence" delay={0.6}>
               <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="rounded-xl bg-white/5 border border-white/5 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                     <img src="https://picsum.photos/seed/volt1/400/400" alt="EV Station" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                     <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60 backdrop-blur-sm text-[8px] font-bold uppercase tracking-widest text-accent">Station Observation #402</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/5 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                     <img src="https://picsum.photos/seed/volt2/400/400" alt="EV User" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                     <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60 backdrop-blur-sm text-[8px] font-bold uppercase tracking-widest text-accent">User Interaction #118</div>
                  </div>
               </div>
            </DashboardCard>

          </div>

          <footer id="contact" className="mt-32 pt-16 border-t border-border flex flex-col items-center">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-center mb-12"
             >
                <h3 className="text-3xl font-light mb-4">Let's build with intent.</h3>
                <p className="text-muted max-w-sm mx-auto text-sm font-light">
                  Founder focused on EV infrastructure and product-market clarity. Connecting dots on the ground.
                </p>
             </motion.div>
             <div className="text-[10px] uppercase font-black tracking-[0.5em] text-muted/40">
               Sathwik Reddy &bull; {new Date().getFullYear()} &bull; BENGALURU
             </div>
          </footer>
        </section>
      </main>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          scrollbar-width: thin;
          scrollbar-color: #2C2C2E #0B0B0B;
        }
        ::selection {
          background-color: var(--color-accent);
          color: black;
        }
      `}</style>
    </div>
  );
}
