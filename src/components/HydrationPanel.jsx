import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import Spline from "@splinetool/react-spline";

function GlassCard({ children, title, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-3xl p-4 bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[6px_6px_20px_rgba(0,0,0,0.08),-6px_-6px_20px_rgba(255,255,255,0.9)] ${className}`}
    >
      {title && <div className="text-sm font-medium text-emerald-900 mb-3">{title}</div>}
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent" />
    </motion.div>
  );
}

function MiniRing({ value, from = "#4DB6E3", to = "#B3E5FC" }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value);
  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      <defs>
        <linearGradient id="hydro" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="36" cy="36" r={r} stroke="#EAF4EC" strokeWidth="10" fill="none" />
      <motion.circle
        cx="36"
        cy="36"
        r={r}
        stroke="url(#hydro)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        initial={{ strokeDasharray: c, strokeDashoffset: c }}
        whileInView={{ strokeDasharray: c, strokeDashoffset: off }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </svg>
  );
}

function BarChart() {
  const bars = [40, 60, 30, 80, 55, 70, 45];
  return (
    <div className="flex items-end gap-2 h-24 w-full">
      {bars.map((b, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${b}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
          className="flex-1 rounded-xl bg-gradient-to-t from-sky-400 to-mint-200 shadow-inner"
          style={{ backgroundImage: "linear-gradient(to top, #4DB6E3, #EAF4EC)" }}
        />
      ))}
    </div>
  );
}

export default function HydrationPanel() {
  return (
    <section className="px-5 mt-6 space-y-4">
      <h2 className="text-lg font-semibold text-emerald-900">Water Tracker</h2>
      <div className="grid grid-cols-2 gap-4">
        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-emerald-700/80">Goal</p>
              <p className="text-xl font-semibold text-emerald-900">2,250 ml</p>
            </div>
            <div>
              <p className="text-sm text-emerald-700/80">Completed</p>
              <p className="text-xl font-semibold text-emerald-900">33%</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <MiniRing value={0.33} />
            <div className="flex items-center gap-2 text-emerald-800">
              <Droplet className="w-5 h-5 text-sky-500" />
              <span className="text-sm">750 ml consumed</span>
            </div>
          </div>
        </GlassCard>
        <div className="relative h-40 rounded-3xl overflow-hidden bg-gradient-to-b from-white to-[#F9F8F4] border border-white/60 shadow-[12px_12px_30px_rgba(0,0,0,0.08),-10px_-10px_24px_rgba(255,255,255,0.9)]">
          <Spline scene="https://prod.spline.design/5bG0nF3YwzvWz6Nt/scene.splinecode" style={{ width: "100%", height: "100%" }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-50/40 to-transparent" />
        </div>
      </div>

      <div className="rounded-4xl p-4 bg-gradient-to-b from-white to-[#F9F8F4] border border-white/60 shadow-[12px_12px_30px_rgba(0,0,0,0.08),-10px_-10px_24px_rgba(255,255,255,0.9)]">
        <div className="text-sm font-medium text-emerald-900 mb-3">Recent Intake</div>
        <div className="space-y-3">
          {[
            { t: "1:15 PM", v: "250 ml" },
            { t: "1:45 PM", v: "250 ml" },
            { t: "2:15 PM", v: "250 ml" },
          ].map((it, i) => (
            <div key={i} className="flex items-center justify-between bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl px-3 py-2">
              <div className="flex items-center gap-2 text-emerald-900">
                <span className="text-lg">💧</span>
                <span className="font-medium">{it.v}</span>
              </div>
              <span className="text-sm text-emerald-700/70">{it.t}</span>
            </div>
          ))}
        </div>
      </div>

      <GlassCard title="Weekly Insights">
        <BarChart />
      </GlassCard>
    </section>
  );
}
