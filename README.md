Portfolio de Verónica Cussi - Next.js + TailwindCSS

Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4 (con `@custom-variant` para dark mode por clase)
- GSAP + ScrollTrigger (animaciones)
- API Route (`/api/contact`) básica

Estructura relevante
- `src/app/page.tsx`: página principal (EN)
- `src/app/fr/page.tsx`: página en francés
- `src/components/*`: `Navbar`, `Header`, `Section`, `ProjectCard`, `GsapEffects`
- `src/data/projects-en.ts`, `src/data/projects-fr.ts`: datos de proyectos
- `public/`: assets (`/iconos`, `/proyectos`, `/vero`)

Desarrollo
```bash
npm run dev
# http://localhost:3000 (EN)
# http://localhost:3000/fr (FR)
```

Build
```bash
npm run build && npm run start
```

Dark mode
- Persistencia en `localStorage` (clave `theme`).
- Si no hay preferencia guardada, respeta `prefers-color-scheme: dark`.
- Toggle en la `Navbar`.

Personalización
- Editar textos: `src/app/page.tsx` y `src/app/fr/page.tsx`.
- Proyectos: `src/data/*`.
- Estilos globales y tema: `src/app/globals.css`.
