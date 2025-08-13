import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projectsFr } from "@/data/projects-fr";
import Image from "next/image";

export default function HomeFrPage() {
  return (
    <div className="min-h-screen pb-12 bg-[var(--background)] text-[var(--foreground)]">
      <Navbar locale="fr" />
      <Header
        title="Salut ! Je suis Verónica Cussi"
        description={
          "Une développeuse Full Stack qui aime créer des solutions numériques utiles et engageantes. Je suis passionnée par l'utilisation de la technologie pour relever les défis du quotidien et je cherche toujours à améliorer mes compétences et à évoluer en tant que développeuse. Quand je ne code pas, j'aime explorer de nouveaux frameworks, étudier le japonais ou apprendre sur l'intelligence artificielle !"
        }
        cvHref="/vero/CV_Veronica_Cussi_En.pdf"
        cvLabel="Télécharger mon CV"
      />

      <Section title="Projets">
        {projectsFr.map((p) => (
          <ProjectCard key={p.title} image={p.image} title={p.title} description={p.description} techIcons={p.techIcons} buttons={p.buttons} />
        ))}
      </Section>

      <Section title="Compétences">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Frontend</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Vue.js"].map((s) => (
                <span key={s} className="px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 shadow text-zinc-900 dark:text-zinc-100">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Backend</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Node.js", "Express", "MongoDB", "MySQL"].map((s) => (
                <span key={s} className="px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 shadow text-zinc-900 dark:text-zinc-100">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">WordPress</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Kadence", "Gutenberg", "WP Rocket", "WPML", "Google Analytics", "Yoast SEO"].map((s) => (
                <span key={s} className="px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 shadow text-zinc-900 dark:text-zinc-100">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Autres Outils</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Git", "GitHub", "GitLab", "Postman", "Jest", "Supertest", "Figma"].map((s) => (
                <span key={s} className="px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 shadow text-zinc-900 dark:text-zinc-100">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Apprentissage</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Python", "Intelligence Artificielle"].map((s) => (
                <span key={s} className="px-4 py-2 rounded-md bg-white dark:bg-zinc-800 shadow text-orange-700 dark:text-orange-400">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="À Propos de Moi">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:max-w-[60%] text-zinc-600 dark:text-zinc-300 space-y-3">
            <p>
              Bonjour, je m&apos;appelle Verónica et je suis une Développeuse Web Full Stack passionnée par le développement numérique. Mon parcours a commencé avec WordPress, où j&apos;ai découvert ma vocation en créant des sites web et des blogs.
            </p>
            <p>
              J&apos;ai appris JavaScript, PHP, Node.js et d&apos;autres technologies backend pour mieux comprendre comment tout fonctionne ensemble.
            </p>
            <p>
              Ma curiosité m&apos;a également poussée à explorer des domaines comme l&apos;intelligence artificielle. C&apos;est pourquoi j&apos;apprends également Python.
            </p>
            <p>
              En dehors du codage, j&apos;aime explorer le monde et capturer sa beauté à travers la photographie. Je suis également fascinée par la langue et la culture japonaises.
            </p>
          </div>
          <Image src="/vero/lifeai.webp" alt="Verónica Cussi" width={250} height={250} className="rounded-3xl shadow-md" />
        </div>
      </Section>

      <Section title="Contactez-moi">
        <p className="text-zinc-600 dark:text-zinc-300">Vous avez un projet en tête ou souhaitez collaborer ? Contactez-moi par email ou sur LinkedIn.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:verocussi@gmail.com" className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-500 transition">Envoyez-moi un email</a>
          <a href="https://www.linkedin.com/in/veronicacussi/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-500 transition">Contactez sur LinkedIn</a>
        </div>
      </Section>

      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © 2024 Verónica Cussi. Tous droits réservés.
      </footer>
    </div>
  );
}


