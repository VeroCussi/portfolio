# 🚀 Refactorización de la Sección de Proyectos - Portfolio

## 📋 Resumen de Cambios

Se ha refactorizado completamente la sección de proyectos del portfolio con un diseño moderno y premium, incluyendo:

- ✨ **Micro-interacciones tipo Nubien/Framer**: Tilt 3D, parallax, reveals al scroll
- 🎯 **Botones magnéticos**: Efecto de atracción del cursor
- 🔍 **Sistema de filtros avanzado**: Por tipo de proyecto y tecnología
- 📱 **Diseño responsive**: Grid adaptativo (1/2/3 columnas)
- ♿ **Accesibilidad completa**: Soporte para prefers-reduced-motion
- ⚡ **Rendimiento optimizado**: Server components + client components interactivos

## 🏗️ Arquitectura de Componentes

```
src/
├── components/
│   ├── sections/
│   │   ├── ProjectsSection.tsx     # Server component principal
│   │   └── ProjectsGrid.tsx        # Client component con filtros
│   ├── cards/
│   │   └── ProjectCard.tsx         # Card individual con animaciones
│   └── ui/
│       └── MagneticButton.tsx      # Botón con efecto magnético
├── lib/
│   ├── projects.data.ts            # Datos de proyectos (TypeScript)
│   └── motionConfig.ts             # Configuración Framer Motion
└── app/
    └── globals.css                 # Utilidades CSS añadidas
```

## 🎨 Características Implementadas

### 1. **Tilt 3D en Hover**
- Rotación suave en X e Y basada en posición del mouse
- Limitado a 8-10° para mantener naturalidad
- Respeta `prefers-reduced-motion`

### 2. **Parallax del Media**
- Desplazamiento vertical suave del screenshot
- Auto-scroll en hover para preview
- Máscaras de fade en top/bottom

### 3. **Reveal al Scroll**
- Animaciones escalonadas (stagger) por fila/columna
- Fade + scale + translateY
- Viewport optimizado para performance

### 4. **Botones Magnéticos**
- Atraen ligeramente el cursor (máx 12px)
- Ripple effect en click
- Variantes: primary, secondary, ghost

### 5. **Sistema de Filtros**
- Por tipo: Web, WordPress, eCommerce, Social
- Por tecnología: React, Node, MongoDB, etc.
- Búsqueda fuzzy por título/tech
- Contadores dinámicos

## 📊 Modelo de Datos

```typescript
export interface ProjectCard {
  id: string;
  title: string;
  subtitle?: string;
  type: ProjectType;                    // "web" | "ia" | "wordpress" | "ecommerce" | "social"
  tech: string[];                       // ["Next.js", "Tailwind", "Node", "Mongo"]
  image: string;                        // Screenshot vertical
  video?: string;                       // Preview opcional
  links: { kind: LinkKind; url: string; label?: string }[];
  badges?: string[];                    // ["WP", "EX", "React", "Node"]
  highlight?: boolean;                  // Para proyectos destacados
}
```

## 🔧 Instalación y Uso

### 1. **Importar en tu página principal**

```tsx
// src/app/page.tsx
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function HomePage() {
  return (
    <div>
      {/* ... otros componentes ... */}
      
      <ProjectsSection 
        title="Mis Proyectos"
        subtitle="Una selección de mi trabajo más reciente"
      />
      
      {/* ... otros componentes ... */}
    </div>
  );
}
```

### 2. **Personalizar proyectos**

Edita `src/lib/projects.data.ts` para añadir/modificar proyectos:

```typescript
export const projects: ProjectCard[] = [
  {
    id: "mi-proyecto",
    title: "Mi Proyecto",
    subtitle: "Descripción corta",
    type: "web",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/proyectos/mi-proyecto.jpg",
    links: [
      { kind: "live", url: "https://miproyecto.com", label: "Live" },
      { kind: "code", url: "https://github.com/user/repo", label: "Code" }
    ],
    badges: ["React", "Node"],
    highlight: true
  }
];
```

### 3. **Personalizar estilos**

Las utilidades CSS están en `src/app/globals.css`:

```css
/* Gradiente animado para títulos */
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 8s ease infinite;
}

/* Efectos de hover */
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

## 🎯 Props Disponibles

### `ProjectsSection`

```typescript
interface ProjectsSectionProps {
  projects?: ProjectCard[];           // Array personalizado de proyectos
  initialFilter?: string;             // Filtro inicial ('all', 'web', etc.)
  title?: string;                     // Título personalizado
  subtitle?: string;                  // Subtítulo personalizado
}
```

### `ProjectsGrid`

```typescript
interface ProjectsGridProps {
  projects: ProjectCard[];            // Array de proyectos a mostrar
}
```

### `ProjectCard`

```typescript
interface ProjectCardProps {
  project: ProjectCard;               // Objeto del proyecto
  index: number;                      // Índice para stagger animations
}
```

## 🚀 Características Avanzadas

### 1. **Lazy Loading de Imágenes**
- `priority={index < 2}` para las primeras 2 cards
- `sizes` responsive para optimización
- Soporte para videos con `<video muted loop playsInline>`

### 2. **Animaciones Responsivas**
- Stagger por fila/columna
- Delays escalonados para efecto cascada
- Transiciones suaves con cubic-bezier

### 3. **Performance**
- Server components para contenido estático
- Client components solo para interactividad
- `transform-gpu` para aceleración hardware
- Cleanup de intervals y event listeners

### 4. **Accesibilidad**
- `prefers-reduced-motion` respetado
- Focus visible en todos los elementos
- ARIA labels y roles apropiados
- Navegación por teclado completa

## 🎨 Personalización de Temas

### Colores
```css
:root {
  --project-card-bg: rgba(24, 24, 27, 0.6);
  --project-border: rgba(255, 255, 255, 0.1);
  --project-glow: linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(6, 182, 212, 0.5));
}
```

### Animaciones
```css
/* Velocidad de tilt */
--tilt-max: 8deg;

/* Velocidad de parallax */
--parallax-speed: 8%;

/* Duración de reveal */
--reveal-duration: 0.6s;
```

## 🔍 Troubleshooting

### 1. **Las animaciones no funcionan**
- Verifica que Framer Motion esté instalado: `npm install framer-motion`
- Asegúrate de que el componente esté marcado como `'use client'`

### 2. **Performance issues**
- Usa `transform-gpu` en elementos animados
- Limita el número de proyectos simultáneos
- Considera virtualización para listas largas

### 3. **Accesibilidad**
- Testea con lectores de pantalla
- Verifica contraste de colores
- Prueba navegación por teclado

## 📱 Responsive Design

```css
/* Móvil: 1 columna */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

/* Tablet: 2 columnas */
@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Desktop: 3 columnas */
@media (min-width: 1025px) {
  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

## 🎯 Próximas Mejoras

- [ ] **Vista masonry** con alturas variables
- [ ] **Lenis smooth scroll** opcional
- [ ] **Tag "Featured"** con glow lento
- [ ] **Switch de vista** (grid ↔ lista)
- [ ] **CTA global** "Ver todos los proyectos"
- [ ] **Lazy loading** de proyectos adicionales
- [ ] **Filtros avanzados** por fecha, popularidad
- [ ] **Modo oscuro/claro** automático

## 📞 Soporte

Para dudas o problemas:
1. Revisa la consola del navegador
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de que los paths de importación sean correctos
4. Testea en diferentes dispositivos y navegadores

---

**¡Disfruta de tu nueva sección de proyectos premium! 🎉**
