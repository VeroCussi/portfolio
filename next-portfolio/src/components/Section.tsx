type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="w-full max-w-5xl mx-auto mt-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-black/10 dark:border-white/15 p-6">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">{title}</h2>
      {children}
    </section>
  );
}


