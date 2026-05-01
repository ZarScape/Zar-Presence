import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-primary/30">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Header />
      <main>
        <Hero />
        <Features />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
