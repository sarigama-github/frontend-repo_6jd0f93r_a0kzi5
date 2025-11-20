import { Sparkles, GaugeCircle, ShieldCheck, Globe } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Pastel-perfect UI',
    desc: 'A gentle color palette that keeps things calm, clear and delightful.'
  },
  {
    icon: GaugeCircle,
    title: 'Smooth performance',
    desc: 'Optimized interactions and subtle motion for a premium feel.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-ready',
    desc: 'Built with modern, robust foundations for growing teams.'
  },
  {
    icon: Globe,
    title: 'Future-facing',
    desc: 'A look that blends tech and art for forward-thinking brands.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-white" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Soft power features</h2>
          <p className="mt-3 text-slate-600">Subtle, useful, and delightful — just the way it should be.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/70 p-6 ring-1 ring-white/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-sky-200 to-violet-200 text-slate-800 ring-1 ring-white/70">
                <Icon size={20} />
              </div>
              <h3 className="text-slate-900 font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
