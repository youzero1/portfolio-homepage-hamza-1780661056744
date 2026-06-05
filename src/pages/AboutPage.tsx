import { skills } from '@/lib/data';
import { MapPin, Calendar, Coffee } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 section-fade">
          <p className="text-sm font-medium mb-2" style={{ color: '#6C63FF' }}>ABOUT ME</p>
          <h1 className="text-4xl font-bold text-white mb-4">Who I Am</h1>
        </div>

        {/* Bio section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                style={{ backgroundColor: '#6C63FF' }}
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                alt="About"
                className="relative w-64 h-80 object-cover rounded-2xl"
                style={{ border: '2px solid rgba(108,99,255,0.4)' }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">Alex Johnson</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a full-stack developer with 5+ years of experience building modern web applications.
              I specialize in React, TypeScript, and Node.js — and I love turning complex problems
              into elegant solutions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              When I'm not coding, you'll find me hiking, playing chess, or exploring the latest
              developments in AI and machine learning.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: 'San Francisco, CA' },
                { icon: Calendar, text: 'Available from January 2025' },
                { icon: Coffee, text: 'Coffee-driven developer' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-300">
                  <Icon className="w-4 h-4" style={{ color: '#6C63FF' }} />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ backgroundColor: '#2A2A40' }}>
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${skill.level}%`, background: 'linear-gradient(90deg, #6C63FF, #FF6584)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
