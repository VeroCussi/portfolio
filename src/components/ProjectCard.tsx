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
    <div className="group w-full flex flex-col md:flex-row items-stretch gap-6 my-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative md:w-[420px] aspect-[4/2.6] overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 420px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex-1 md:max-w-xl">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300 leading-relaxed">{description}</p>
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
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


