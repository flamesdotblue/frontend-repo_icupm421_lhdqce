import HeaderBar from "./components/HeaderBar";
import SummaryGrid from "./components/SummaryGrid";
import ActivityPanel from "./components/ActivityPanel";
import HydrationPanel from "./components/HydrationPanel";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(1200px_500px_at_50%_-100px,rgba(179,229,252,0.25),transparent),_radial-gradient(900px_400px_at_100%_0%,rgba(234,244,236,0.6),transparent)]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <HeaderBar />
        <SummaryGrid />
        <ActivityPanel />
        <HydrationPanel />
      </motion.div>

      <div className="h-24" />
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md rounded-3xl px-6 py-3 bg-white/60 backdrop-blur-2xl border border-white/70 shadow-[8px_8px_24px_rgba(0,0,0,0.08),-6px_-6px_18px_rgba(255,255,255,0.9)] flex items-center justify-between text-emerald-800">
        <button className="font-semibold">Playtub</button>
        <div className="text-xs text-emerald-700/70">Premium Health & Calorie Tracker</div>
      </nav>
    </div>
  );
}
