import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/projects/ProjectCard';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sm font-medium mb-2" style={{ color: '#6C63FF' }}>MY WORK</p>
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors hover:text-white text-gray-400"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
