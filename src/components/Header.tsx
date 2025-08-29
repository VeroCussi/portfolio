import Image from "next/image";

type HeaderProps = {
  title: string;
  description: string;
  cvHref: string;
  cvLabel: string;
};

export default function Header({ title, description, cvHref, cvLabel }: HeaderProps) {
  return (
    <header className="w-full max-w-5xl mx-auto mt-10 p-6 md:p-10 rounded-3xl border shadow-sm backdrop-blur bg-grid"
             style={{
               backgroundColor: 'var(--paper)',
               borderColor: 'var(--grid)'
             }}>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
        <div className="md:max-w-[60%]">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: 'rgba(147, 51, 234, 0.3)',
                  color: 'rgb(147, 51, 234)',
                  backgroundColor: 'rgba(147, 51, 234, 0.1)'
                }}>
            Full Stack Developer
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
            {title}
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink)', opacity: 0.7 }}>
            {description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition shadow-sm"
              style={{
                backgroundColor: 'var(--ink-2)',
                color: 'var(--paper)'
              }}
            >
              {cvLabel}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition"
              style={{
                borderColor: 'var(--grid)',
                color: 'var(--ink)'
              }}
            >
              View Projects
            </a>
          </div>
        </div>
        <Image src="/vero/Vero linkedin.jpeg" alt="Verónica Cussi" width={256} height={256} className="rounded-3xl shadow-lg ring-1 ring-grid" />
      </div>
    </header>
  );
}


