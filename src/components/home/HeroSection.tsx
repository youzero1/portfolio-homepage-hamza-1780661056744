import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: '#6C63FF' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: '#FF6584' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div className="section-fade">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: 'rgba(108,99,255,0.15)', color: '#6C63FF', border: '1px solid rgba(108,99,255,0.3)' }}
          >
            <Sparkles className="w-4 h-4" />
            Available for work
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Alex</span>
            <br />
            Full-Stack
            <br />
            Developer
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I craft exceptional digital experiences with clean code and
            thoughtful design. Passionate about building products that make
            a real difference.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: '#6C63FF' }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-80"
              style={{ border: '1px solid #2A2A40', backgroundColor: 'transparent' }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '40+', label: 'Projects Done' },
              { value: '20+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="flex justify-center section-fade">
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40"
              style={{ backgroundColor: '#6C63FF', transform: 'scale(1.1)' }}
            />
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden"
              style={{ border: '3px solid rgba(108,99,255,0.5)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A40' }}
            >
              🚀 Open to work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
