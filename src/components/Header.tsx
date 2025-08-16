import Image from "next/image";

type HeaderProps = {
  title: string;
  description: string;
  cvHref: string;
  cvLabel: string;
};

export default function Header({ title, description, cvHref, cvLabel }: HeaderProps) {
  return (
    <header className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl bg-white/60 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur bg-grid">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
        <div className="md:max-w-[60%]">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 text-orange-700 dark:text-orange-300 bg-orange-50/60 dark:bg-orange-500/10 px-3 py-1 text-xs font-medium">
            Full Stack Developer
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shadow-sm"
            >
              {cvLabel}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              View Projects
            </a>
          </div>
        </div>
        <Image src="/vero/Vero linkedin.jpeg" alt="Verónica Cussi" width={256} height={256} className="rounded-3xl shadow-lg ring-1 ring-black/5 dark:ring-white/10" />
      </div>
    </header>
  );
}


