import RetroButton from './_components/RetroButton';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-theme text-primary flex items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-violet">404</h1>
        <h2 className="text-2xl font-semibold">Página no encontrada</h2>
        <p className="text-secondary">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RetroButton
            href="/"
            variant="primary"
            className="px-6 py-3"
          >
            Ir al inicio
          </RetroButton>
          
          <RetroButton
            href="/contact"
            variant="secondary"
            className="px-6 py-3"
          >
            Contactar
          </RetroButton>
        </div>
      </div>
    </div>
  );
}
