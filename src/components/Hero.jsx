import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 → top, 1 → bottom

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, el.scrollHeight - window.innerHeight);
      const scrolled = Math.min(Math.max(window.scrollY - (el.offsetTop || 0), 0), total);
      setProgress(scrolled / total);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Derive a cooling temperature from progress (e.g., 27°C → 19°C)
  const temp = Math.round(27 - progress * 8);
  const airflowOpacity = 0.25 + progress * 0.55; // stronger airflow as you scroll
  const airflowTranslate = Math.round(progress * 60); // px vertical drift

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Soft pastel background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-indigo-50 to-white" />

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute top-40 -left-20 h-56 w-56 rounded-full bg-violet-200/50 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Content that scrolls */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-white/70 shadow-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 animate-pulse" />
              Whisper-quiet cooling • Energy smart • Pastel calm
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Breathe Better with Cooler Air
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              An airy, pastel-first experience showcasing an interactive 3D system on the right. Scroll to feel the
              breeze intensify as the temperature gently drops.
            </p>

            {/* Scrollable steps to create length */}
            <div className="mt-10 space-y-8">
              <Step
                index="01"
                title="Instant Chill"
                text="Drop from warm to comfortable in minutes with adaptive airflow and auto-balancing vents."
              />
              <Step
                index="02"
                title="Clean Air"
                text="Advanced filtration reduces dust and pollen while keeping the vibe light and fresh."
              />
              <Step
                index="03"
                title="Whisper Mode"
                text="Night-friendly performance with near-silent operation and soft ambient glow."
              />
              <Step
                index="04"
                title="Eco Smart"
                text="AI optimizes power use based on room size, sunlight, and preferred comfort range."
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">Get Started</a>
              <a href="#learn-more" className="inline-flex items-center rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-white/70 hover:bg-white transition-colors">Learn More</a>
            </div>
          </div>

          {/* Right: Sticky 3D animation with overlays */}
          <div className="relative lg:h-[90vh] h-[420px] sm:h-[520px]">
            <div className="lg:sticky lg:top-24 absolute inset-0 rounded-3xl ring-1 ring-white/60 shadow-2xl shadow-sky-200/40 overflow-hidden bg-white/50 backdrop-blur">
              {/* Spline scene – keep to the right, full cover */}
              <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />

              {/* Airflow visualizer */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ opacity: airflowOpacity }}
              >
                <Airflow translate={airflowTranslate} />
              </div>

              {/* Temperature badge */}
              <div className="absolute top-4 right-4">
                <div className="rounded-2xl bg-white/80 backdrop-blur px-3 py-2 ring-1 ring-white/70 shadow-sm text-slate-700 text-sm font-medium">
                  {temp}°C
                </div>
              </div>

              {/* Mode pill */}
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-600/10 text-sky-700 px-3 py-1 text-xs font-medium ring-1 ring-sky-600/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
                  Cool Mode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ index, title, text }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/60 ring-1 ring-white/70 p-5 shadow-sm hover:shadow-md transition-all">
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-sky-200/40 blur-2xl group-hover:bg-cyan-200/50 transition-colors" />
      <div className="text-xs font-semibold text-slate-500">{index}</div>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}

function Airflow({ translate = 0 }) {
  // Three gently wavering bands to suggest cool air
  const band = (delay, rotate, opacity) => (
    <div
      className="absolute left-2 right-2 h-24 rounded-[2rem] bg-gradient-to-r from-sky-200/0 via-sky-300/70 to-cyan-300/0 blur-xl"
      style={{
        top: `${20 + delay * 20 + translate * 0.6}px`,
        transform: `rotate(${rotate}deg)`,
        opacity,
      }}
    />
  );

  return (
    <div className="absolute inset-0">
      {band(0, -4, 0.7)}
      {band(1, 2, 0.55)}
      {band(2, -1, 0.5)}
      {/* drifting snowflake-like dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-sky-300"
            style={{
              left: `${(i * 11) % 100}%`,
              top: `${(i * 17 + translate) % 100}%`,
              filter: 'blur(0.5px)',
              opacity: 0.4 + ((i % 5) * 0.1),
            }}
          />
        ))}
      </div>
    </div>
  );
}
