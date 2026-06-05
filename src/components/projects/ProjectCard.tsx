import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden card-hover"
      style={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A40' }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.8), transparent)' }} />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md text-xs font-medium"
              style={{ backgroundColor: 'rgba(108,99,255,0.15)', color: '#A89EFF' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white text-gray-400"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white text-gray-400"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
