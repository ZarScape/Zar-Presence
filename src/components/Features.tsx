import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, Zap, Layout, Terminal } from 'lucide-react';

const features = [
  {
    title: "Privacy Mode",
    description: "Keep your viewing habits private. Optionally hide video titles and thumbnails on Discord—toggle on or off anytime.",
    icon: EyeOff,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Auto-Sync",
    description: "Real-time presence updates via high-performance WebSockets. No lag, just magic.",
    icon: Zap,
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Modern Dashboard",
    description: "Manage platforms, settings, and activity through a sleek, unified user interface.",
    icon: Layout,
    color: "from-cyan-500 to-teal-400"
  },
  {
    title: "Start on Boot",
    description: "Seamless integration. Option to start with Windows so you're always connected.",
    icon: Terminal,
    color: "from-indigo-500 to-blue-400"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Redefining the <span className="text-gradient">Experience</span></h2>
          <p className="text-white/40 max-w-xl mx-auto">Powerful features wrapped in a simple, intuitive design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group hover:border-brand-primary/30 transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3.5 mb-6 text-black`}>
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
