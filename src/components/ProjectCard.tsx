import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  techIcons: string[];
  buttons: { href: string; label: string }[];
};

export default function ProjectCard({ image, title, description, techIcons, buttons }: ProjectCardProps) {
  return (
    <div className="group w-full flex flex-col md:flex-row items-stretch gap-6 my-6 rounded-2xl border p-4 md:p-6 shadow-lg transition-all duration-300"
         style={{
           borderColor: 'var(--grid)',
           backgroundColor: 'var(--paper)'
         }}>
      <div className="relative md:w-[420px] aspect-[4/2.6] overflow-hidden rounded-2xl ring-1 ring-grid">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 420px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={false}
        />
      </div>
      <div className="flex-1 md:max-w-xl">
        <h3 className="text-2xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>{title}</h3>
        <p className="mt-2 leading-relaxed" style={{ color: 'var(--ink)', opacity: 0.8 }}>{description}</p>
        <div className="mt-4 flex items-center gap-2">
          {techIcons.map((src) => (
            <Image key={src} src={src} alt="tech" width={24} height={24} className="opacity-80 w-6 h-6" />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {buttons.map((btn) => (
            <a
              key={`${btn.href}-${btn.label}`}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--ink-2)',
                color: 'var(--paper)'
              }}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


