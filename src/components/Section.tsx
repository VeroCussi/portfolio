type SectionProps = {
  title: string;
  children: React.ReactNode;
  id?: string;
};

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="w-full max-w-5xl mx-auto mt-10 rounded-3xl bg-white/60 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 p-6 md:p-8 shadow-sm backdrop-blur">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">{title}</h2>
      {children}
    </section>
  );
}


