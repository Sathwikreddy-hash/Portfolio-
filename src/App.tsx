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
      <div className="flex gap-10 items-center">
        {["Work", "Thinking", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted hover:text-accent transition-all">
            {item}
          </a>
        ))}
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
            className="flex flex-col h-full"
          >
            <div className="flex-1 space-y-12">
              <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                Engineering <span className="text-accent italic">trust</span> for the EV ecosystem.
              </h1>
              <div className="space-y-6">
                <p className="text-muted leading-[1.7] text-lg font-light max-w-sm">
                  I focus on solving real-world EV charging confusion through product thinking and ground-level insights.
                </p>
                <p className="text-accent text-sm font-medium tracking-tight border-l border-accent/30 pl-4 py-1">
                  Built from real-world observations at EV charging stations in India.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-8">
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
                  Explore Work
                </motion.a>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-border flex flex-col gap-6">
              <div className="flex gap-6 text-muted">
                 <motion.a whileHover={{ scale: 1.1, color: "#00D1FF" }} href="#" title="LinkedIn"><Linkedin size={18} /></motion.a>
                 <motion.a whileHover={{ scale: 1.1, color: "#00D1FF" }} href="#" title="Twitter"><Twitter size={18} /></motion.a>
                 <motion.a whileHover={{ scale: 1.1, color: "#00D1FF" }} href="mailto:s83918624@gmail.com" title="Email"><Mail size={18} /></motion.a>
              </div>
              <div className="text-[11px] text-muted tracking-widest font-bold uppercase opacity-60">
                Bengaluru, India &bull; Product Logic
              </div>
            </div>
          </motion.div>
        </aside>

        {/* MAIN GRID CONTENT */}
        <section className="bg-bg p-8 lg:p-12 overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* PROBLEM CARD */}
            <DashboardCard title="Problem Identification" delay={0.1}>
              <div className="space-y-8 mt-2">
                {[
                  { title: "Availability data ≠ real-world reliability", desc: "Apps show chargers as available, but users find them broken or blocked.", icon: <ShieldCheck size={16} /> },
                  { title: "Decision Stress", desc: "Drivers depend on guesswork instead of clarity during low-battery anxiety.", icon: <Zap size={16} /> },
                  { title: "Pricing Friction", desc: "Complex pricing creates friction for pro drivers.", icon: <Activity size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-red-500/50">{item.icon}</div>
                    <div>
                      <strong className="block text-white text-[14px] font-semibold mb-1 uppercase tracking-tight">{item.title}</strong>
                      <p className="text-muted text-[13px] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* CORE EXPERTISE */}
            <DashboardCard title="Product Arsenal" delay={0.6}>
              <div className="flex flex-wrap gap-2.5 mt-2">
                {[
                  "Product Thinking", "Ground Research", "UI Simplification", 
                  "Iterative Dev", "Friction Audit", "Decision Mapping"
                ].map((skill) => (
                  <motion.span 
                    key={skill} 
                    whileHover={{ scale: 1.03, borderColor: "rgba(0,209,255,0.4)", color: "#F5F5F7" }}
                    className="px-4 py-2 bg-border border border-white/5 rounded-lg text-[13px] text-muted transition-all cursor-default font-medium flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-accent/40 rounded-full" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </DashboardCard>

            {/* FIELD RESEARCH SECTION */}
            <DashboardCard id="work" title="Field Notes — Real Charging Stations" className="md:col-span-2 overflow-hidden" delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                {[
                  { title: "10–15 users/day at a single station", detail: "Consistent usage with visible queue friction.", marker: "01" },
                  { title: "Major users: Swiggy / Rapido drivers", detail: "High dependency on speed and availability.", marker: "02" },
                  { title: "Users trust what they see", detail: "Visual confirmation matters more than app data.", marker: "03" }
                ].map((log, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.01 }}
                    className="p-6 bg-border/40 rounded-xl border-l-[3px] border-accent hover:bg-border/60 transition-all"
                  >
                    <div className="text-[10px] font-bold text-accent/50 mb-3 tracking-widest uppercase">INSIGHT #{log.marker}</div>
                    <div className="text-lg font-semibold mb-2 tracking-tight text-white">{log.title}</div>
                    <p className="text-[13px] text-muted leading-relaxed font-light">{log.detail}</p>
                  </motion.div>
                ))}
              </div>
            </DashboardCard>

            {/* ACTIVE PRODUCT - VOLTBAY */}
            <DashboardCard id="voltbay" title="Active Project" className="md:col-span-2 group/card" delay={0.4}>
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:col-span-7 flex flex-col space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-5xl font-bold tracking-tight text-white">VoltBay</h3>
                    <p className="text-muted text-lg max-w-2xl leading-[1.6] font-light">
                      A product focused on trust, availability, and clarity in EV charging. Reduces decision stress using last-verified charger status and smart backup suggestions.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <motion.a 
                      whileHover={{ y: -2, shadow: "0 0 20px rgba(0,209,255,0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      href="https://voltbay.lovable.app" 
                      target="_blank" 
                      className="inline-flex px-8 py-3 bg-accent text-black rounded-lg font-bold text-sm items-center gap-2 transition-all border border-accent/20"
                    >
                      Open VoltBay <ExternalLink size={16} />
                    </motion.a>
                  </div>

                  <div className="pt-10">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold mb-8">Product Preview</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { img: "input_file_0.png", cap: "Simple charger selection interface" },
                        { img: "input_file_1.png", cap: "Clear availability status display" },
                        { img: "input_file_2.png", cap: "Reduced confusion in booking flow" },
                        { img: "input_file_3.png", cap: "Smart planning and backup" }
                      ].map((shot, i) => (
                        <div key={i} className="space-y-3">
                          <div className="rounded-xl border border-white/10 bg-border overflow-hidden shadow-2xl">
                             <img src={shot.img} alt={shot.cap} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <p className="text-[11px] text-muted font-medium text-center">{shot.cap}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* PHILOSOPHY & THINKING */}
            <DashboardCard id="thinking" title="Operating System" delay={0.5}>
              <div className="space-y-8 mt-2">
                {[
                  "I observe real behavior before building anything",
                  "I remove friction instead of adding features",
                  "I focus on clarity during high-stress situations",
                  "I validate ideas through real-world interaction"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group/item">
                    <span className="text-accent font-black mt-0.5 group-hover/item:translate-x-1 transition-transform">→</span>
                    <p className="text-[15px] leading-tight text-white/90 font-medium">{item}</p>
                  </div>
                ))}
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
