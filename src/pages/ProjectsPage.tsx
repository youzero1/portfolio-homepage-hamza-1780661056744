import { useState } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/projects/ProjectCard';

const ALL_TAG = 'All';

export default function ProjectsPage() {
  const allTags = [ALL_TAG, ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const [active, setActive] = useState(ALL_TAG);

  const filtered = active === ALL_TAG ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 section-fade">
          <p className="text-sm font-medium mb-2" style={{ color: '#6C63FF' }}>PORTFOLIO</p>
          <h1 className="text-4xl font-bold text-white mb-4">All Projects</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A collection of my work spanning web apps, mobile apps, and everything in between.
          </p>
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
              style={{
                backgroundColor: active === tag ? '#6C63FF' : 'rgba(108,99,255,0.1)',
                color: active === tag ? '#fff' : '#A89EFF',
                border: active === tag ? '1px solid #6C63FF' : '1px solid rgba(108,99,255,0.2)',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
