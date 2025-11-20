import { CheckCircle2, Map, Database, Layers, LineChart, Boxes, Cpu, Shield } from 'lucide-react';

export default function SectionsPermian() {
  const solutions = [
    { icon: Map, title: 'Geospatial Twins', text: 'High-fidelity mapping with live sensor overlays for field-scale situational awareness.' },
    { icon: Layers, title: 'Subsurface Models', text: 'Physics-based simulations for reservoirs, aquifers, and carbon storage.' },
    { icon: Database, title: 'Data Fabric', text: 'Unified, versioned data lake with governance, lineage, and quality checks.' },
    { icon: Cpu, title: 'AI Tooling', text: 'ML pipelines for forecasting, anomaly detection, and optimization.' },
  ];

  const industries = [
    { title: 'Energy Producers', items: ['Field development', 'CO₂ storage', 'Water management'] },
    { title: 'Midstream', items: ['Network optimization', 'Integrity & risk', 'Monitoring'] },
    { title: 'Utilities', items: ['Grid modeling', 'Demand forecasting', 'DER orchestration'] },
  ];

  const highlights = [
    { icon: LineChart, title: 'Operational Digital Twins', text: 'Connect planning to operations with traceability from model to metric.' },
    { icon: Boxes, title: 'Composable Platforms', text: 'Modular services, API-first, built for collaboration across teams.' },
    { icon: Shield, title: 'Security & Compliance', text: 'Enterprise-grade identity, secrets, audit, and governance by default.' },
  ];

  return (
    <div className="relative">
      {/* Solutions */}
      <section id="solutions" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Solutions</h2>
              <p className="mt-3 text-slate-600 max-w-prose">
                From subsurface models to operational twins, we help teams plan, simulate, and operate complex systems with confidence.
              </p>
              <ul className="mt-6 space-y-4">
                {solutions.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-3">
                    <Icon className="h-5 w-5 text-sky-600 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">{title}</div>
                      <p className="text-slate-600 text-sm">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white/70 ring-1 ring-white/70 shadow-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 ring-1 ring-white" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="relative bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900">Industries</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {industries.map((col) => (
              <div key={col.title} className="rounded-2xl bg-white/70 ring-1 ring-white/70 p-6 shadow-sm">
                <div className="font-semibold text-slate-900">{col.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-sky-600" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Showcase</h2>
            <a href="#" className="text-sm text-sky-700 hover:text-sky-800">See all</a>
          </div>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/70 bg-white/70 shadow-sm">
                <div className="aspect-[16/10] bg-gradient-to-br from-sky-100 to-indigo-100" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">Project {i + 1}</h3>
                  <p className="text-sm text-slate-600 mt-1">Brief description of outcomes and impact.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="relative bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Insights</h2>
            <a href="#" className="text-sm text-sky-700 hover:text-sky-800">Read more</a>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <article key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/70 bg-white/70 shadow-sm p-5">
                <div className="text-xs font-semibold text-slate-500">Research</div>
                <h3 className="mt-1 font-semibold text-slate-900">Thought piece {i + 1}</h3>
                <p className="text-sm text-slate-600 mt-2">A quick perspective on technology, regulation, and the path to net-zero.</p>
                <a href="#" className="mt-3 inline-flex text-sm text-sky-700 hover:text-sky-800">Read article →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl bg-gradient-to-br from-sky-100 via-white to-indigo-100 ring-1 ring-white p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Speak with our team</h2>
                <p className="mt-2 text-slate-600">Tell us about your challenge and we’ll co-design the right solution.</p>
              </div>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="rounded-xl ring-1 ring-slate-200 bg-white/80 px-3 py-2 text-sm" placeholder="Name" />
                <input className="rounded-xl ring-1 ring-slate-200 bg-white/80 px-3 py-2 text-sm" placeholder="Company" />
                <input className="rounded-xl ring-1 ring-slate-200 bg-white/80 px-3 py-2 text-sm sm:col-span-2" placeholder="Email" />
                <textarea rows={3} className="rounded-xl ring-1 ring-slate-200 bg-white/80 px-3 py-2 text-sm sm:col-span-2" placeholder="What are you building?" />
                <button type="button" className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
