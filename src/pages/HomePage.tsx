import HeroSection from '@/components/home/HeroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsPreview from '@/components/home/SkillsPreview';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <SkillsPreview />
    </div>
  );
}
