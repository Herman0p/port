import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-start justify-center min-h-[90vh] px-6 md:px-16 lg:px-24 pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl leading-[1.1] mb-6">
          BUILDING BOLD BRANDS.<br />
          <span className="text-zinc-500">Build Bold. Build Fast. Build Once.</span>
        </h1>
        <p className="text-xl md:text-3xl font-light text-zinc-400 mb-12 max-w-2xl">
          A digital design agency.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
          View all work
        </button>
      </section>

      {/* 2. Section (01) - The Reframe / Why Us */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase shrink-0 md:w-1/4">
            (01) THE REFRAME
          </div>
          <div className="md:w-3/4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Smart design for smart brands.
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium text-zinc-500">
              Your brand's built-in brain.
            </h3>
          </div>
        </div>
      </section>

      {/* 3. Section (02) - What We Do */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-16 md:mb-24">
          <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase shrink-0 md:w-1/4">
            (02) WHAT WE DO
          </div>
          <div className="md:w-3/4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              We build your brand's entire ecosystem.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20">
          {/* Service 1 */}
          <div className="group cursor-default">
            <div className="text-zinc-600 font-mono mb-6 text-sm">(001)</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-zinc-300 transition-colors duration-300">Be Memorable by design</h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              We create striking visual identities that leave a lasting impression. Every detail is crafted to ensure your brand stands out in a crowded market.
            </p>
          </div>
          {/* Service 2 */}
          <div className="group cursor-default">
            <div className="text-zinc-600 font-mono mb-6 text-sm">(002)</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-zinc-300 transition-colors duration-300">Create Sticky Experiences</h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Our digital experiences are designed to engage and retain users. We blend aesthetics with intuitive functionality to keep your audience coming back.
            </p>
          </div>
          {/* Service 3 */}
          <div className="group cursor-default">
            <div className="text-zinc-600 font-mono mb-6 text-sm">(003)</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-zinc-300 transition-colors duration-300">Fuel commerce growth</h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              We build high-converting e-commerce platforms that drive revenue. From architecture to checkout, we optimize every step of the buyer's journey.
            </p>
          </div>
          {/* Service 4 */}
          <div className="group cursor-default">
            <div className="text-zinc-600 font-mono mb-6 text-sm">(004)</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-zinc-300 transition-colors duration-300">Unlock your future with AI</h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Integrate intelligent workflows and AI-driven features to stay ahead of the curve. We make future-proof technology accessible and impactful.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Section (03) - Our Work */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-16 md:mb-24">
          <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase shrink-0 md:w-1/4">
            (03) OUR WORK
          </div>
          <div className="md:w-3/4 flex flex-col items-start gap-8 md:gap-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              We love what we do.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Work 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 mb-6 mt-0">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                alt="West Operators"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">West Operators</h3>
            <p className="text-zinc-400">Brand Identity, Web Design</p>
          </div>
          {/* Work 2 */}
          <div className="group cursor-pointer md:mt-24">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop"
                alt="Invisible"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Invisible</h3>
            <p className="text-zinc-400">Digital Experience, Product Design</p>
          </div>
          {/* Work 3 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop"
                alt="Vosk"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Vosk</h3>
            <p className="text-zinc-400">E-commerce, Art Direction</p>
          </div>
          {/* Work 4 */}
          <div className="group cursor-pointer md:mt-24">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop"
                alt="Havencraft"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Havencraft</h3>
            <p className="text-zinc-400">Brand System, Web Development</p>
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-0">
          <button className="px-8 py-4 rounded-full border border-zinc-600 text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300">
            View all work
          </button>
        </div>
      </section>

      {/* 5. Section (04) - Insights / Noteworthy */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase shrink-0 md:w-1/4">
            (04) NOTEWORTHY
          </div>
          <div className="md:w-3/4">
            <div className="flex flex-col border-t border-zinc-800">
              {/* Article 1 */}
              <a href="#" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors duration-300 px-4 -mx-4">
                <h3 className="text-2xl md:text-3xl font-medium mb-4 md:mb-0 group-hover:translate-x-2 transition-transform duration-300">
                  AI Made Everything Faster
                </h3>
                <span className="text-zinc-500 font-mono text-sm">Feb 24, 2026</span>
              </a>
              {/* Article 2 */}
              <a href="#" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors duration-300 px-4 -mx-4">
                <h3 className="text-2xl md:text-3xl font-medium mb-4 md:mb-0 group-hover:translate-x-2 transition-transform duration-300">
                  The Return of Maximalism
                </h3>
                <span className="text-zinc-500 font-mono text-sm">Jan 12, 2026</span>
              </a>
              {/* Article 3 */}
              <a href="#" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors duration-300 px-4 -mx-4">
                <h3 className="text-2xl md:text-3xl font-medium mb-4 md:mb-0 group-hover:translate-x-2 transition-transform duration-300">
                  Why Branding is a Business Strategy
                </h3>
                <span className="text-zinc-500 font-mono text-sm">Dec 05, 2025</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section (05) - Final CTA & Footer */}
      <Footer />
    </div>
  );
}
