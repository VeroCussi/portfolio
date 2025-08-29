export type Locale = 'es' | 'fr' | 'en';

export const locales: Locale[] = ['es', 'fr', 'en'];

export const defaultLocale: Locale = 'es';

export interface Translations {
  // Navigation
  services: string;
  contact: string;
  
  // Hero Section
  heroSubtitle: string;
  heroDescription: string;
  viewProjects: string;
  
  // Sections
  projects: string;
  skills: string;
  about: string;
  contactMe: string;
  
  // Skills
  frontend: string;
  backend: string;
  wordpress: string;
  tools: string;
  
  // About
  aboutDescription1: string;
  aboutDescription2: string;
  aboutDescription3: string;
  
  // Contact
  contactDescription: string;
  sendEmail: string;
  connectLinkedin: string;
  moreContact: string;
  
  // Footer
  footerText: string;
  
  // Services Page
  servicesTitle: string;
  servicesSubtitle: string;
  servicesDescription: string;
  whatCanIDo: string;
  workProcess: string;
  consultation: string;
  development: string;
  delivery: string;
  readyToStart: string;
  transformIdea: string;
  startProject: string;
  viewPortfolio: string;
  freeConsultation: string;
  
  // Service Types
  showcaseSites: string;
  ecommerce: string;
  chatbotsAI: string;
  customApps: string;
  optimization: string;
  maintenance: string;
  
  // Contact Page
  contactTitle: string;
  contactSubtitle: string;
  sendMessage: string;
  preferDirect: string;
  whyWorkWithMe: string;
  customDevelopment: string;
  clearCommunication: string;
  postLaunchSupport: string;
  scalableSolutions: string;
  availability: string;
  availabilityDesc1: string;
  availabilityDesc2: string;
  availabilityDesc3: string;
  responseTime: string;
  waitingMessage: string;
}

export const translations: Record<Locale, Translations> = {
  es: {
    // Navigation
    services: 'Servicios',
    contact: 'Contacto',
    
    // Hero Section
    heroSubtitle: 'Construyo soluciones web con IA, rendimiento y diseño retro-tech',
    heroDescription: 'Full Stack Developer apasionada por crear experiencias digitales únicas. Especializada en WordPress, React, Node.js y explorando el mundo de la IA.',
    viewProjects: 'Ver proyectos',
    
    // Sections
    projects: 'Proyectos Destacados',
    skills: 'Habilidades & Tecnologías',
    about: 'Sobre Mí',
    contactMe: '¿Tienes un Proyecto en Mente?',
    
    // Skills
    frontend: 'Frontend',
    backend: 'Backend',
    wordpress: 'WordPress',
    tools: 'Herramientas & IA',
    
    // About
    aboutDescription1: 'Hola, soy Verónica, una desarrolladora Full Stack apasionada que comenzó su viaje en WordPress. Empecé creando sitios web y blogs, lo que despertó mi interés en el desarrollo frontend y las experiencias de usuario.',
    aboutDescription2: 'Mi curiosidad me llevó a explorar campos como la inteligencia artificial, por lo que también estoy aprendiendo Python para expandir mis habilidades y sumergirme en esta fascinante área de la tecnología.',
    aboutDescription3: 'Más allá del código, tengo un amor por explorar el mundo y capturar su belleza a través de la fotografía. También me fascina profundamente el idioma y la cultura japonesa.',
    
    // Contact
    contactDescription: '¿Quieres colaborar o tienes una idea que te gustaría hacer realidad? ¡Me encantaría escuchar sobre tu proyecto!',
    sendEmail: 'Enviar Email',
    connectLinkedin: 'Conectar en LinkedIn',
    moreContact: 'Más formas de contacto →',
    
    // Footer
    footerText: '© 2024 Verónica Cussi. Construido con Next.js y mucho ❤️ retro-tech.',
    
    // Services Page
    servicesTitle: 'Servicios',
    servicesSubtitle: 'Desarrollo moderno con alma retro',
    servicesDescription: 'Ofrezco soluciones web completas que combinan las últimas tecnologías con un diseño único y retro-tech. Desde sitios web básicos hasta aplicaciones complejas con inteligencia artificial.',
    whatCanIDo: '¿Qué Puedo Hacer por Ti?',
    workProcess: 'Mi Proceso de Trabajo',
    consultation: 'Consulta',
    development: 'Desarrollo',
    delivery: 'Entrega',
    readyToStart: '¿Listo para Empezar?',
    transformIdea: 'Transformemos tu idea en realidad',
    startProject: 'Iniciar Proyecto',
    viewPortfolio: 'Ver Portafolio',
    freeConsultation: 'Primera consulta gratuita',
    
    // Service Types
    showcaseSites: 'Sitios Vitrina',
    ecommerce: 'E-commerce',
    chatbotsAI: 'Chatbots & IA',
    customApps: 'Apps a Medida',
    optimization: 'Optimización & Rediseño',
    maintenance: 'Mantenimiento & Soporte',
    
    // Contact Page
    contactTitle: 'Contacto',
    contactSubtitle: 'Hablemos sobre tu proyecto',
    sendMessage: 'Envíame un mensaje',
    preferDirect: '¿Prefieres contactarme directamente?',
    whyWorkWithMe: '¿Por qué trabajar conmigo?',
    customDevelopment: 'Desarrollo personalizado y atención al detalle',
    clearCommunication: 'Comunicación clara y transparencia en todo el proceso',
    postLaunchSupport: 'Soporte post-lanzamiento y mantenimiento continuo',
    scalableSolutions: 'Soluciones escalables y tecnologías modernas',
    availability: 'Disponibilidad',
    availabilityDesc1: 'Estoy disponible para proyectos freelance y colaboraciones a largo plazo.',
    availabilityDesc2: 'Horarios flexibles y adaptables a tu zona horaria.',
    availabilityDesc3: 'Respuesta rápida en horario laboral (CET).',
    responseTime: 'Tiempo de respuesta: 24h',
    waitingMessage: '© 2024 Verónica Cussi. ¡Espero tu mensaje!'
  },
  
  fr: {
    // Navigation
    services: 'Services',
    contact: 'Contact',
    
    // Hero Section
    heroSubtitle: 'Je construis des solutions web avec IA, performance et design retro-tech',
    heroDescription: 'Développeuse Full Stack passionnée par la création d\'expériences numériques uniques. Spécialisée en WordPress, React, Node.js et explorant le monde de l\'IA.',
    viewProjects: 'Voir les projets',
    
    // Sections
    projects: 'Projets en Vedette',
    skills: 'Compétences & Technologies',
    about: 'À Propos',
    contactMe: 'Vous avez un Projet en Tête ?',
    
    // Skills
    frontend: 'Frontend',
    backend: 'Backend',
    wordpress: 'WordPress',
    tools: 'Outils & IA',
    
    // About
    aboutDescription1: 'Bonjour, je suis Verónica, une développeuse Full Stack passionnée qui a commencé son parcours avec WordPress. J\'ai commencé par créer des sites web et des blogs, ce qui a éveillé mon intérêt pour le développement frontend et les expériences utilisateur.',
    aboutDescription2: 'Ma curiosité m\'a amenée à explorer des domaines comme l\'intelligence artificielle, c\'est pourquoi j\'apprends aussi Python pour développer mes compétences et plonger dans ce fascinant domaine de la technologie.',
    aboutDescription3: 'Au-delà du code, j\'ai un amour pour explorer le monde et capturer sa beauté à travers la photographie. Je suis aussi profondément fascinée par la langue et la culture japonaises.',
    
    // Contact
    contactDescription: 'Vous voulez collaborer ou avez une idée que vous aimeriez concrétiser ? J\'adorerais entendre parler de votre projet !',
    sendEmail: 'Envoyer un Email',
    connectLinkedin: 'Se connecter sur LinkedIn',
    moreContact: 'Plus de moyens de contact →',
    
    // Footer
    footerText: '© 2024 Verónica Cussi. Construit avec Next.js et beaucoup d\'❤️ retro-tech.',
    
    // Services Page
    servicesTitle: 'Services',
    servicesSubtitle: 'Développement moderne avec une âme rétro',
    servicesDescription: 'J\'offre des solutions web complètes qui combinent les dernières technologies avec un design unique et retro-tech. Des sites web de base aux applications complexes avec intelligence artificielle.',
    whatCanIDo: 'Que Puis-je Faire pour Vous ?',
    workProcess: 'Mon Processus de Travail',
    consultation: 'Consultation',
    development: 'Développement',
    delivery: 'Livraison',
    readyToStart: 'Prêt à Commencer ?',
    transformIdea: 'Transformons votre idée en réalité',
    startProject: 'Démarrer le Projet',
    viewPortfolio: 'Voir le Portfolio',
    freeConsultation: 'Première consultation gratuite',
    
    // Service Types
    showcaseSites: 'Sites Vitrine',
    ecommerce: 'E-commerce',
    chatbotsAI: 'Chatbots & IA',
    customApps: 'Applications Sur Mesure',
    optimization: 'Optimisation & Refonte',
    maintenance: 'Maintenance & Support',
    
    // Contact Page
    contactTitle: 'Contact',
    contactSubtitle: 'Parlons de votre projet',
    sendMessage: 'Envoyez-moi un message',
    preferDirect: 'Vous préférez me contacter directement ?',
    whyWorkWithMe: 'Pourquoi travailler avec moi ?',
    customDevelopment: 'Développement personnalisé et attention aux détails',
    clearCommunication: 'Communication claire et transparence tout au long du processus',
    postLaunchSupport: 'Support post-lancement et maintenance continue',
    scalableSolutions: 'Solutions évolutives et technologies modernes',
    availability: 'Disponibilité',
    availabilityDesc1: 'Je suis disponible pour des projets freelance et des collaborations à long terme.',
    availabilityDesc2: 'Horaires flexibles et adaptables à votre fuseau horaire.',
    availabilityDesc3: 'Réponse rapide pendant les heures de bureau (CET).',
    responseTime: 'Temps de réponse : 24h',
    waitingMessage: '© 2024 Verónica Cussi. J\'attends votre message !'
  },
  
  en: {
    // Navigation
    services: 'Services',
    contact: 'Contact',
    
    // Hero Section
    heroSubtitle: 'I build web solutions with AI, performance and retro-tech design',
    heroDescription: 'Full Stack Developer passionate about creating unique digital experiences. Specialized in WordPress, React, Node.js and exploring the world of AI.',
    viewProjects: 'View Projects',
    
    // Sections
    projects: 'Featured Projects',
    skills: 'Skills & Technologies',
    about: 'About Me',
    contactMe: 'Have a Project in Mind?',
    
    // Skills
    frontend: 'Frontend',
    backend: 'Backend',
    wordpress: 'WordPress',
    tools: 'Tools & AI',
    
    // About
    aboutDescription1: 'Hi, I\'m Verónica, a passionate Full Stack Developer who started her journey with WordPress. I began by creating websites and blogs, which sparked my interest in frontend development and user experiences.',
    aboutDescription2: 'My curiosity led me to explore fields like artificial intelligence, which is why I\'m also learning Python to expand my skills and dive into this fascinating area of technology.',
    aboutDescription3: 'Beyond coding, I have a love for exploring the world and capturing its beauty through photography. I\'m also deeply fascinated by the Japanese language and culture.',
    
    // Contact
    contactDescription: 'Want to collaborate or have an idea you\'d like to make reality? I\'d love to hear about your project!',
    sendEmail: 'Send Email',
    connectLinkedin: 'Connect on LinkedIn',
    moreContact: 'More ways to contact →',
    
    // Footer
    footerText: '© 2024 Verónica Cussi. Built with Next.js and lots of ❤️ retro-tech.',
    
    // Services Page
    servicesTitle: 'Services',
    servicesSubtitle: 'Modern development with retro soul',
    servicesDescription: 'I offer complete web solutions that combine the latest technologies with unique retro-tech design. From basic websites to complex applications with artificial intelligence.',
    whatCanIDo: 'What Can I Do for You?',
    workProcess: 'My Work Process',
    consultation: 'Consultation',
    development: 'Development',
    delivery: 'Delivery',
    readyToStart: 'Ready to Start?',
    transformIdea: 'Let\'s transform your idea into reality',
    startProject: 'Start Project',
    viewPortfolio: 'View Portfolio',
    freeConsultation: 'First consultation free',
    
    // Service Types
    showcaseSites: 'Showcase Sites',
    ecommerce: 'E-commerce',
    chatbotsAI: 'Chatbots & AI',
    customApps: 'Custom Apps',
    optimization: 'Optimization & Redesign',
    maintenance: 'Maintenance & Support',
    
    // Contact Page
    contactTitle: 'Contact',
    contactSubtitle: 'Let\'s talk about your project',
    sendMessage: 'Send me a message',
    preferDirect: 'Prefer to contact me directly?',
    whyWorkWithMe: 'Why work with me?',
    customDevelopment: 'Custom development and attention to detail',
    clearCommunication: 'Clear communication and transparency throughout the process',
    postLaunchSupport: 'Post-launch support and continuous maintenance',
    scalableSolutions: 'Scalable solutions and modern technologies',
    availability: 'Availability',
    availabilityDesc1: 'I\'m available for freelance projects and long-term collaborations.',
    availabilityDesc2: 'Flexible hours adaptable to your timezone.',
    availabilityDesc3: 'Quick response during business hours (CET).',
    responseTime: 'Response time: 24h',
    waitingMessage: '© 2024 Verónica Cussi. Waiting for your message!'
  }
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}
