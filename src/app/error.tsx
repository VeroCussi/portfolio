'use client';

import { useEffect } from 'react';
import RetroButton from './_components/RetroButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error en la aplicación:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-theme text-primary flex items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-red-500">¡Ups!</h1>
        <h2 className="text-2xl font-semibold">Algo salió mal</h2>
        <p className="text-secondary">
          Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RetroButton
            onClick={reset}
            variant="primary"
            className="px-6 py-3"
          >
            Intentar de nuevo
          </RetroButton>
          
          <RetroButton
            href="/"
            variant="secondary"
            className="px-6 py-3"
          >
            Ir al inicio
          </RetroButton>
        </div>
      </div>
    </div>
  );
}
