export type ProjectType = "web" | "ia" | "wordpress" | "ecommerce" | "social";
export type LinkKind = "live" | "code" | "demo";

export interface ProjectCard {
  id: string;
  title: string;
  subtitle?: string;
  type: ProjectType;
  tech: string[];
  image: string;
  video?: string;
  links: { kind: LinkKind; url: string; label?: string }[];
  badges?: string[];
  highlight?: boolean;
}

export const projects: ProjectCard[] = [
  {
    id: "touristear",
    title: "Touristear",
    subtitle: "General travel blog",
    type: "wordpress",
    tech: ["WordPress", "PHP", "CSS", "JavaScript"],
    image: "/proyectos/touristear.jpg",
    links: [
      { kind: "live", url: "https://touristear.com/en/", label: "Live" },
      { kind: "demo", url: "https://touristear.com/en/", label: "Home" }
    ],
    badges: ["WP", "Travel"],
    highlight: true
  },
  {
    id: "travelfranceblog",
    title: "Travel France Blog",
    subtitle: "France travel blog",
    type: "wordpress",
    tech: ["WordPress", "PHP", "CSS", "JavaScript"],
    image: "/proyectos/travelfranceblog.jpg",
    links: [
      { kind: "live", url: "https://travelfranceblog.com/", label: "Live" },
      { kind: "demo", url: "https://travelfranceblog.com/", label: "Home" }
    ],
    badges: ["WP", "France", "Travel"]
  },
  {
    id: "touristear-shop",
    title: "eCommerce WooCommerce",
    subtitle: "eCommerce created with WooCommerce",
    type: "ecommerce",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS", "JavaScript"],
    image: "/proyectos/touristear-travel-shop.jpg",
    links: [
      { kind: "live", url: "https://shop.touristear.com/en/", label: "Live" },
      { kind: "demo", url: "https://shop.touristear.com/en/", label: "Shop" }
    ],
    badges: ["WP", "WC", "eCommerce"]
  },
  {
    id: "socialhub",
    title: "SocialHub",
    subtitle: "Social Network for an enterprise",
    type: "social",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    image: "/proyectos/socialhub.jpg",
    links: [
      { kind: "code", url: "https://github.com/VeroCussi/socialhub", label: "Code" },
      { kind: "demo", url: "https://github.com/VeroCussi/socialhub", label: "Demo" }
    ],
    badges: ["React", "Node", "MongoDB", "EX"],
    highlight: true
  },
  {
    id: "minisocialnet",
    title: "Mini Social Network",
    subtitle: "Social Network",
    type: "social",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/proyectos/minisocialnet.jpg",
    links: [
      { kind: "code", url: "https://github.com/VeroCussi/minireseausocial", label: "Code" },
      { kind: "demo", url: "https://verocussi.github.io/minireseausocial/", label: "Demo" }
    ],
    badges: ["HTML", "CSS", "JS"]
  },
  {
    id: "veroshop",
    title: "Ecommerce Practice",
    subtitle: "Ecommerce clothes",
    type: "ecommerce",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/proyectos/veroshop.jpg",
    links: [
      { kind: "code", url: "https://github.com/VeroCussi/ecommerceveroshop", label: "Code" },
      { kind: "demo", url: "https://verocussi.github.io/ecommerceveroshop/", label: "Demo" }
    ],
    badges: ["HTML", "CSS", "JS", "Shop"]
  },
  {
    id: "aucoindulivre",
    title: "Au Coin du Livre",
    subtitle: "Ecommerce Books",
    type: "ecommerce",
    tech: ["HTML", "CSS"],
    image: "/proyectos/auCoinDuLivre.jpg",
    links: [
      { kind: "code", url: "https://github.com/VeroCussi/AuCoinDuLivre", label: "Code" },
      { kind: "demo", url: "https://verocussi.github.io/AuCoinDuLivre/", label: "Demo" }
    ],
    badges: ["HTML", "CSS", "Books"]
  },
  {
    id: "kanapshop",
    title: "Ecommerce EasyShop",
    subtitle: "Ecommerce for couches",
    type: "ecommerce",
    tech: ["HTML", "CSS", "JavaScript", "Angular"],
    image: "/proyectos/kanapshop.jpg",
    links: [
      { kind: "code", url: "https://github.com/VeroCussi/easyshop-project", label: "Code" },
      { kind: "demo", url: "https://github.com/VeroCussi/easyshop-project", label: "Demo" }
    ],
    badges: ["HTML", "CSS", "JS", "Angular"]
  },
  {
    id: "pokedex",
    title: "Pokedex",
    subtitle: "Fun app",
    type: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/proyectos/pokedex.jpg",
    links: [
      { kind: "code", url: "https://github.com/VeroCussi/pokedex", label: "Code" },
      { kind: "demo", url: "https://verocussi.github.io/pokedex/", label: "Demo" }
    ],
    badges: ["HTML", "CSS", "JS", "API"]
  }
];

// Filtros disponibles
export const projectTypes: { value: ProjectType | "all"; label: string; count: number }[] = [
  { value: "all", label: "All", count: projects.length },
  { value: "web", label: "Web", count: projects.filter(p => p.type === "web").length },
  { value: "wordpress", label: "WordPress", count: projects.filter(p => p.type === "wordpress").length },
  { value: "ecommerce", label: "eCommerce", count: projects.filter(p => p.type === "ecommerce").length },
  { value: "social", label: "Social", count: projects.filter(p => p.type === "social").length }
];

// Stack technologies disponibles
export const techStacks = [
  "React", "Node.js", "MongoDB", "Express", "WordPress", "WooCommerce",
  "HTML", "CSS", "JavaScript", "Angular", "PHP"
];
