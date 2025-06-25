export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Dashcore Media</h1>
        <p className="text-xl mb-8 text-gray-300">
          High-impact short-form reels for entrepreneurs, podcasts, and creators — without you lifting a finger.
        </p>
        <a
          href="https://forms.gle/YOUR_ONBOARDING_FORM"
          target="_blank"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-2xl hover:bg-gray-300 transition"
        >
          Get Started
        </a>
      </div>

      <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">🎥 100% Done-for-You</h3>
          <p className="text-gray-400">We clip your content, add captions, punch-ins, branding, and deliver high-performing reels.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">🤖 AI-Powered & Scalable</h3>
          <p className="text-gray-400">Our system blends human review with automation to maximize output without sacrificing quality.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">📈 Built to Convert</h3>
          <p className="text-gray-400">We make your content look elite and make you money — not just views.</p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <p className="text-gray-500">Questions? DM @dashcoremedia or email dashcoremedia@gmail.com</p>
      </div>
    </main>
  );
}
