import Image from "next/image";

type HeaderProps = {
  title: string;
  description: string;
  cvHref: string;
  cvLabel: string;
};

export default function Header({ title, description, cvHref, cvLabel }: HeaderProps) {
  return (
    <header className="w-full max-w-5xl mx-auto mt-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-black/10 dark:border-white/15 p-6">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6">
        <div className="md:max-w-[60%]">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">{description}</p>
          <a href={cvHref} target="_blank" className="inline-block mt-4 px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-500 transition" rel="noopener noreferrer">
            {cvLabel}
          </a>
        </div>
        <Image src="/vero/Vero linkedin.jpeg" alt="Verónica Cussi" width={250} height={250} className="rounded-3xl shadow-md" />
      </div>
    </header>
  );
}


