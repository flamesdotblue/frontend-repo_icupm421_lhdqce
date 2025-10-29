import { motion } from "framer-motion";
import { Activity, Flame } from "lucide-react";

function ClayCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative rounded-4xl p-5 bg-gradient-to-b from-white to-[#F9F8F4] border border-white/60 shadow-[14px_14px_36px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-4xl bg-gradient-to-br from-white/60 to-transparent" />
      {children}
    </motion.div>
  );
}

export default function ActivityPanel() {
  return (
    <section className="px-5 mt-6 space-y-4">
      <h2 className="text-lg font-semibold text-emerald-900">Activity</h2>

      <ClayCard>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 flex items-center justify-center shadow-sm">
              <Activity className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-sm text-emerald-700/80">Steps</p>
              <p className="text-xl font-semibold text-emerald-900">5,000 steps • 852 kcal</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/60 text-emerald-800 font-medium shadow-[6px_6px_16px_rgba(0,0,0,0.06),-6px_-6px_16px_rgba(255,255,255,0.8)]"
          >
            Edit
          </motion.button>
        </div>
        <div className="mt-4">
          <div className="w-full h-3 rounded-full bg-emerald-100 overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400"
            />
          </div>
          <div className="mt-2 text-xs text-emerald-800/70">60% of 8,300 daily goal</div>
        </div>
      </ClayCard>

      <ClayCard>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 flex items-center justify-center shadow-sm">
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="text-sm text-emerald-700/80">Today's Meals</p>
            <p className="text-emerald-900 font-medium">Breakfast: Idli and curry - 150 kcal</p>
            <p className="text-emerald-900 font-medium">Lunch: Jeera rice with soya curry - 613 kcal</p>
            <p className="text-emerald-900 font-medium">Snacks: Tea and shake - 94 kcal</p>
            <p className="text-emerald-900 font-medium">Dinner: Dal and roti - 500 kcal</p>
          </div>
        </div>
      </ClayCard>
    </section>
  );
}
