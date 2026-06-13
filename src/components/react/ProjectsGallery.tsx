import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { accentGradient, categoryAccent, type AccentKey } from '@/lib/project-accents';

export type ProjectCardData = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  techStack: string[];
};

interface Props {
  projects: ProjectCardData[];
  categories: string[];
}

const ALL = 'All';

export default function ProjectsGallery({ projects, categories }: Props) {
  const [active, setActive] = useState<string>(ALL);

  const filters = useMemo(() => {
    // Only show categories that actually have projects.
    const present = categories.filter((c) => projects.some((p) => p.category === c));
    return [ALL, ...present];
  }, [categories, projects]);

  const visible = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  const handleSpotlight = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by category">
        {filters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={[
                'relative rounded-full px-4 py-2 text-sm transition-colors',
                isActive ? 'text-accent-contrast' : 'text-muted hover:text-text',
              ].join(' ')}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          );
        })}
        <span className="ml-auto font-mono text-xs text-faint">
          {visible.length} project{visible.length === 1 ? '' : 's'}
        </span>
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => {
            const accent: AccentKey = categoryAccent[project.category] ?? 'blue';
            return (
              <motion.a
                key={project.id}
                href={`/projects/${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onPointerMove={handleSpotlight}
                className="group/glow relative block overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface-2/50 p-6 transition-colors duration-500 hover:border-border-strong"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100"
                  style={{
                    background:
                      'radial-gradient(380px circle at var(--mx) var(--my), color-mix(in srgb, var(--accent) 14%, transparent), transparent 60%)',
                  }}
                  aria-hidden
                />
                <div className="relative z-10">
                  {/* Schematic preview */}
                  <div className="relative -mx-6 -mt-6 mb-6 h-40 overflow-hidden border-b border-border">
                    <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient[accent]}`} />
                    <div className="bg-grid absolute inset-0 opacity-40" />
                    <svg className="absolute inset-0 h-full w-full text-accent/70" viewBox="0 0 400 160" fill="none" stroke="currentColor">
                      <path d="M40 80h70M150 80h70M290 80h70" strokeWidth="1.5" strokeDasharray="4 6" />
                      <rect x="110" y="60" width="40" height="40" rx="8" strokeWidth="1.5" />
                      <rect x="220" y="60" width="40" height="40" rx="8" strokeWidth="1.5" />
                      <circle cx="40" cy="80" r="6" fill="currentColor" />
                      <circle cx="360" cy="80" r="6" fill="currentColor" />
                    </svg>
                  </div>

                  <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold transition-colors group-hover/glow:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((t) => (
                      <li key={t} className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-faint">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
