type SectionProps = {
  title: string;
  children: React.ReactNode;
  id?: string;
};

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="w-full max-w-5xl mx-auto mt-16 px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-4 text-primary">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-violet to-cyan mx-auto rounded-full" />
      </div>
      <div className="backdrop-blur-sm border rounded-2xl p-8 md:p-12 shadow-card bg-theme border-theme">
        {children}
      </div>
    </section>
  );
}


