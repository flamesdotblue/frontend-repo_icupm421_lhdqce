import { Bell, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const formatDate = () => {
  try {
    return new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(new Date());
  } catch {
    const d = new Date();
    return `${d.toDateString()}`;
  }
};

export default function HeaderBar() {
  return (
    <div className="px-5 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-emerald-700/80" />
            {formatDate()}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Good Afternoon, <span className="font-bold">Samyu Ram</span>
          </h1>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative p-3 rounded-3xl bg-gradient-to-b from-white to-[#F9F8F4] shadow-[8px_8px_24px_rgba(0,0,0,0.08),-6px_-6px_18px_rgba(255,255,255,0.9)] border border-white/60"
          aria-label="Notifications"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-xl" />
          <Bell className="relative w-5 h-5 text-emerald-700" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-600 shadow" />
        </motion.button>
      </div>
    </div>
  );
}
