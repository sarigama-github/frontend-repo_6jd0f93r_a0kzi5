import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Pastel backdrop */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-indigo-50 to-rose-50" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-10 h-52 w-52 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
        </div>
      </div>

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="relative z-10 border-t border-white/70 bg-white/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Cooler Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
