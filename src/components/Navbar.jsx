import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-sky-500 to-indigo-600" />
          <span className="font-semibold tracking-tight text-slate-900">Permian</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-slate-900 transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-slate-900 text-white px-4 py-2 font-medium text-sm hover:bg-slate-800">Get in touch</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md ring-1 ring-slate-200 h-10 w-10 text-slate-700">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-white/70 p-4 shadow-sm">
            <div className="grid gap-3 text-sm">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="py-2 rounded-lg hover:bg-slate-50 px-2 text-slate-800" onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 rounded-full bg-slate-900 text-white px-4 py-2 font-medium text-sm text-center" onClick={() => setOpen(false)}>Get in touch</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
