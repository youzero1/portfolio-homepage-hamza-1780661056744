import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: '#2A2A40', backgroundColor: '#0F0F1A' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">© 2024 DevPortfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
            { icon: Twitter, href: '#' },
            { icon: Mail, href: '#' },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="text-gray-400 hover:text-white transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
