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
    <div className="w-full flex flex-wrap items-center gap-6 my-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-black/10 dark:border-white/15 p-6">
      <div className="shrink-0">
        <Image src={image} alt={title} width={400} height={260} className="rounded-xl shadow" />
      </div>
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">{description}</p>
        <div className="mt-3 flex items-center gap-2">
          {techIcons.map((src) => (
            <Image key={src} src={src} alt="tech" width={30} height={30} />
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {buttons.map((btn) => (
            <a key={`${btn.href}-${btn.label}`} href={btn.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-500 transition">
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


