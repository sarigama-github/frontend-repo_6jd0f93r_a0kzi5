export default function HeroPermian() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-sky-50" />

      {/* soft orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-16 right-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              Energy • Infrastructure • Digital Twins
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Building the infrastructure for a cleaner energy future
            </h1>
            <p className="mt-5 text-lg leading-7 text-slate-600 max-w-xl">
              We design, simulate, and operate large-scale systems with precision—combining geospatial data, physics-based models, and cloud-native tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#solutions" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">Explore solutions</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-white transition-colors">Talk to us</a>
            </div>
          </div>

          {/* Right visual: globe-like gradient with animated arcs */}
          <div className="relative h-[420px] sm:h-[520px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-100 via-white to-indigo-100 ring-1 ring-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-72 w-72 rounded-full bg-gradient-to-br from-sky-300/50 via-white/40 to-indigo-300/50 backdrop-blur">
                  {/* latitude lines */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className="absolute inset-0 rounded-full border-t border-sky-300/30" style={{ transform: `rotateX(${i * 12}deg) rotate(${i * 8}deg)` }} />
                  ))}
                  {/* longitudes */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={`l-${i}`} className="absolute inset-0 rounded-full border-l border-sky-300/30" style={{ transform: `rotate(${i * 22.5}deg)` }} />
                  ))}
                  {/* glow core */}
                  <div className="absolute inset-8 rounded-full bg-sky-200/20 blur-2xl" />
                </div>
              </div>
              {/* animated arcs */}
              <AnimatedArcs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedArcs() {
  const arcs = [
    { top: '20%', left: '-10%', width: '60%', delay: '0s' },
    { top: '60%', left: '10%', width: '70%', delay: '0.4s' },
    { top: '35%', left: '30%', width: '50%', delay: '0.8s' },
  ];
  return (
    <div className="absolute inset-0 opacity-70">
      {arcs.map((a, i) => (
        <span
          key={i}
          className="absolute h-[2px] bg-gradient-to-r from-sky-200 via-sky-400 to-transparent"
          style={{
            top: a.top,
            left: a.left,
            width: a.width,
            filter: 'blur(0.5px)',
            animation: `pulseLine 3.2s ease-in-out ${a.delay} infinite`,
          }}
        />
      ))}
      <style>{`@keyframes pulseLine {0%{opacity:.15;transform:translateX(-6px)}50%{opacity:.6;transform:translateX(6px)}100%{opacity:.15;transform:translateX(-6px)}}`}</style>
    </div>
  );
}
