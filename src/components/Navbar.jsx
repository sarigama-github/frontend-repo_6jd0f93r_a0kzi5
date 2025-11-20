import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-300 to-violet-300 shadow-inner shadow-white/40 ring-1 ring-white/40"></div>
          <span className="text-xl font-semibold tracking-tight text-slate-800/90">Cooler</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          <a href="#get-started" className="ml-2 inline-flex items-center rounded-full bg-sky-200/70 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-white/70 hover:bg-sky-200 transition-colors">Get Started</a>
        </div>
        <button className="md:hidden p-2 rounded-lg bg-white/60 ring-1 ring-white/70 text-slate-700">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}
