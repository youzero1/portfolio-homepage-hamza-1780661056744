import { skills } from '@/lib/data';

export default function SkillsPreview() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium mb-2" style={{ color: '#6C63FF' }}>WHAT I KNOW</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat}
              className="p-6 rounded-2xl card-hover"
              style={{ backgroundColor: '#0F0F1A', border: '1px solid #2A2A40' }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">{cat}</h3>
              <div className="flex flex-col gap-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ backgroundColor: '#2A2A40' }}>
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: `${skill.level}%`, backgroundColor: '#6C63FF' }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
