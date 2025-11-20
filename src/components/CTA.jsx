export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/40 to-white" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl bg-white/70 ring-1 ring-white/80 shadow-xl p-10">
          <h3 className="text-2xl font-bold text-slate-900">Ready to feel cooler?</h3>
          <p className="mt-3 text-slate-600">Bring your brand to life with a pastel, futuristic landing that feels calm and premium.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">Start Free</a>
            <a href="#" className="inline-flex items-center rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-white/70 hover:bg-white transition-colors">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
