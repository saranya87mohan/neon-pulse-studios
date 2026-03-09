/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Gamepad2, 
  Smartphone, 
  Zap, 
  Github, 
  Twitter, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Layers,
  Cpu,
  Globe
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Scanline Effect */}
      <div className="scanline" />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-neon-cyan animate-pulse" />
            <span className="text-xl font-bold tracking-tighter uppercase italic">
              Neon Pulse <span className="text-neon-cyan">Studios</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
            <a href="#games" className="hover:text-neon-cyan transition-colors">Games</a>
            <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
            <a href="#contact" className="hover:text-neon-cyan transition-colors">Contact</a>
          </div>
          <button className="px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neon-cyan transition-all hover:scale-105 active:scale-95">
            Join Discord
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8">
                Pulsing <br />
                <span className="text-neon-cyan text-glow">Digital</span> <br />
                Energy
              </h1>
              <p className="max-w-xl text-lg text-white/60 leading-relaxed mb-10">
                Independent game development studio pushing the boundaries of mobile gaming with high-fidelity visuals and addictive gameplay mechanics.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#games" 
                  className="px-8 py-4 bg-neon-cyan text-black font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all group"
                >
                  View Games <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#about" 
                  className="px-8 py-4 border border-white/20 hover:border-neon-cyan hover:text-neon-cyan transition-all font-bold uppercase tracking-widest"
                >
                  Our Story
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats / Features */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase italic tracking-tight">High Fidelity</h3>
              <p className="text-white/50">Pushing mobile hardware to its limits with optimized shaders and stunning visual effects.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase italic tracking-tight">Optimized Core</h3>
              <p className="text-white/50">Custom-built game engines and logic for smooth 60FPS performance on a wide range of devices.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center text-neon-pink">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase italic tracking-tight">Global Reach</h3>
              <p className="text-white/50">Games localized for over 15 languages, connecting players across the globe.</p>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section id="games" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-sm font-bold text-neon-cyan uppercase tracking-[0.3em] mb-4">Current Projects</h2>
                <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">The Arsenal</h3>
              </div>
              <div className="hidden md:block text-right">
                <span className="text-6xl font-black text-white/5 italic">01</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src="https://picsum.photos/seed/synapta/1200/800" 
                  alt="Synapta Game Preview" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-neon-cyan text-black text-[10px] font-bold uppercase tracking-widest rounded">Android</span>
                    <span className="px-2 py-1 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded">Live</span>
                  </div>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter">Synapta</h4>
                </div>
              </motion.div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-neon-cyan uppercase italic">Synapta</h4>
                  <p className="text-xl text-white/80 leading-relaxed">
                    A fast-paced, neural-network inspired arcade puzzler where you connect synapses under extreme pressure.
                  </p>
                  <p className="text-white/50">
                    Experience the thrill of high-speed cognitive processing. Synapta challenges your reflexes and pattern recognition in a vibrant, synth-wave aesthetic world.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-neon-cyan transition-all">
                    <Smartphone className="w-5 h-5" /> Get on Play Store
                  </button>
                  <button className="px-6 py-3 border border-white/20 hover:border-white transition-all font-bold uppercase tracking-widest flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" /> Official Site
                  </button>
                </div>

                <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Downloads</span>
                    <span className="text-2xl font-bold tracking-tight">500K+</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Rating</span>
                    <span className="text-2xl font-bold tracking-tight text-neon-cyan">4.8/5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-sm font-bold text-neon-pink uppercase tracking-[0.3em] mb-4">Our DNA</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">Crafting <br />Digital Pulse</h3>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Founded in 2024, Neon Pulse Studios was born from a desire to bring console-quality experiences to the palm of your hand. We believe that mobile games shouldn't be "lite" versions of gaming; they should be the frontier of innovation.
                </p>
                <p>
                  Our team consists of industry veterans and creative rebels who live at the intersection of art and technology. Every pixel we place and every line of code we write is dedicated to one thing: the player's pulse.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-black italic text-white">05+</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Team Members</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black italic text-white">01</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Released Title</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black italic text-white">02</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">In Development</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 border border-neon-pink/20 rounded-2xl -rotate-3" />
              <div className="absolute -inset-4 border border-neon-cyan/20 rounded-2xl rotate-3" />
              <img 
                src="https://picsum.photos/seed/studio/800/1000" 
                alt="Studio Culture" 
                className="relative rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold text-neon-cyan uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">Let's Build the Future</h3>
            <p className="text-white/50 text-xl mb-12">
              Interested in collaborating, joining the team, or just want to say hi? Our lines are always open.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="mailto:hello@neonpulse.io" className="p-8 border border-white/5 bg-white/[0.02] hover:border-neon-cyan transition-colors group">
                <Mail className="w-8 h-8 mx-auto mb-4 text-white/40 group-hover:text-neon-cyan transition-colors" />
                <span className="block font-bold uppercase tracking-widest text-xs">Email Us</span>
              </a>
              <a href="#" className="p-8 border border-white/5 bg-white/[0.02] hover:border-neon-cyan transition-colors group">
                <Twitter className="w-8 h-8 mx-auto mb-4 text-white/40 group-hover:text-neon-cyan transition-colors" />
                <span className="block font-bold uppercase tracking-widest text-xs">Twitter</span>
              </a>
              <a href="#" className="p-8 border border-white/5 bg-white/[0.02] hover:border-neon-cyan transition-colors group">
                <Github className="w-8 h-8 mx-auto mb-4 text-white/40 group-hover:text-neon-cyan transition-colors" />
                <span className="block font-bold uppercase tracking-widest text-xs">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-neon-cyan" />
            <span className="text-lg font-bold tracking-tighter uppercase italic">
              Neon Pulse <span className="text-neon-cyan">Studios</span>
            </span>
          </div>
          <p className="text-white/30 text-xs uppercase tracking-widest">
            © 2024 Neon Pulse Studios. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
