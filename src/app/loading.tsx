export default function Loading() {
  return (
    <div className="min-h-screen bg-theme text-primary flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-violet mx-auto"></div>
        <p className="text-secondary">Cargando...</p>
      </div>
    </div>
  );
}
