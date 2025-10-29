import { motion } from "framer-motion";

const radius = 48;
const circumference = 2 * Math.PI * radius;

function Ring({ size = 120, value = 0.72, colorFrom = "#007A31", colorTo = "#38EF7D", label, sublabel }) {
  const strokeDashoffset = circumference * (1 - value);
  const id = `grad-${label?.replace(/\s+/g, "-")}-${Math.random().toString(36).slice(2, 6)}`;
  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width={size} height={size} viewBox="0 0 120 120" className="drop-shadow-sm">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={radius} stroke="#EAF4EC" strokeWidth="14" fill="none" />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke={`url(#${id})`}
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ strokeDasharray: circumference, strokeDashoffset }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </svg>
      {label && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-semibold text-emerald-900">{label}</span>
          {sublabel && <span className="text-xs text-emerald-700/70 mt-1">{sublabel}</span>}
        </div>
      )}
    </div>
  );
}

function GlassCard({ children, title }) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-4 bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[6px_6px_20px_rgba(0,0,0,0.08),-6px_-6px_20px_rgba(255,255,255,0.9)]"
    >
      {title && <div className="text-sm font-medium text-emerald-900 mb-3">{title}</div>}
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent" />
    </motion.div>
  );
}

export default function SummaryGrid() {
  return (
    <section className="px-5 mt-6">
      <h2 className="text-lg font-semibold text-emerald-900 mb-3">Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 rounded-4xl p-4 bg-gradient-to-b from-white to-[#F9F8F4] border border-white/60 shadow-[12px_12px_30px_rgba(0,0,0,0.08),-10px_-10px_24px_rgba(255,255,255,0.9)]">
          <GlassCard>
            <div className="flex items-center gap-4">
              <Ring value={0.64} colorFrom="#007A31" colorTo="#38EF7D" label="1,240" sublabel="Remaining kcal • Eaten 942 • Burned 358" />
              <div className="flex-1 text-right">
                <p className="text-emerald-900 font-semibold">Daily Goal</p>
                <p className="text-3xl font-bold text-emerald-700">2,200</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <GlassCard title="Carbs">
          <Ring value={0.5} colorFrom="#4DB6E3" colorTo="#B3E5FC" />
        </GlassCard>

        <GlassCard title="Protein">
          <Ring value={0.35} colorFrom="#E57373" colorTo="#FF8A80" />
        </GlassCard>

        <GlassCard title="Fat">
          <Ring value={0.7} colorFrom="#FFB74D" colorTo="#FFE082" />
        </GlassCard>

        <GlassCard title="Fiber">
          <Ring value={0.42} colorFrom="#8BC34A" colorTo="#C5E1A5" />
        </GlassCard>
      </div>
    </section>
  );
}
