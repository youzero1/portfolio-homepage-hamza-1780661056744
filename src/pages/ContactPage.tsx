import { useState } from 'react';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import type { ContactForm } from '@/types';

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 section-fade">
          <p className="text-sm font-medium mb-2" style={{ color: '#6C63FF' }}>GET IN TOUCH</p>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
          <p className="text-gray-400">Have a project in mind? Let's talk.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Let's connect</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: 'Email', value: 'alex@devportfolio.com', href: 'mailto:alex@devportfolio.com' },
                { icon: Github, label: 'GitHub', value: 'github.com/alexdev', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/alexdev', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:border-opacity-80"
                  style={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A40' }}
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(108,99,255,0.15)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#6C63FF' }} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="text-sm text-gray-300">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A40' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl"
                  style={{ backgroundColor: 'rgba(108,99,255,0.15)' }}
                >
                  🎉
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none focus:ring-2 text-sm"
                    style={{ backgroundColor: '#0F0F1A', border: '1px solid #2A2A40', focusRingColor: '#6C63FF' } as any}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none focus:ring-2 text-sm"
                    style={{ backgroundColor: '#0F0F1A', border: '1px solid #2A2A40' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none focus:ring-2 text-sm resize-none"
                    style={{ backgroundColor: '#0F0F1A', border: '1px solid #2A2A40' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#6C63FF' }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
