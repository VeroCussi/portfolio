import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projectsEn } from "@/data/projects-en";
import Image from "next/image";
import GsapEffects from "@/components/GsapEffects";

export default function HomePage() {
  return (
    <div className="min-h-screen pb-12 bg-[var(--background)] text-[var(--foreground)]">
      <GsapEffects />
      <Navbar locale="en" />
      <Header
        title={"Hey! I\'m Verónica Cussi"}
        description={
          "A Full Stack Developer who enjoys building useful and engaging digital solutions. I\’m passionate about using technology to tackle everyday challenges and always looking to improve my skills and grow as a developer. When I\’m not coding, I like exploring new frameworks, studying Japanese, or learning about artificial intelligence!"
        }
        cvHref="/vero/CV_Veronica_Cussi_En.pdf"
        cvLabel="Download My CV"
      />

      <Section title="Projects">
        {projectsEn.map((p) => (
          <ProjectCard key={p.title} image={p.image} title={p.title} description={p.description} techIcons={p.techIcons} buttons={p.buttons} />
        ))}
      </Section>

      <Section title="Skills">
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
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Other Tools</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Git", "GitHub", "GitLab", "Postman", "Jest", "Supertest", "Figma"].map((s) => (
                <span key={s} className="px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 shadow text-zinc-900 dark:text-zinc-100">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Learning</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Python", "Artificial Intelligence"].map((s) => (
                <span key={s} className="px-4 py-2 rounded-md bg-white dark:bg-zinc-800 shadow text-orange-700 dark:text-orange-400">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="About Me">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:max-w-[60%] text-zinc-600 dark:text-zinc-300 space-y-3">
            <p>
              Hi, I&apos;m Verónica, a passionate Full Stack Web Developer with a journey that started in WordPress. I began by creating websites and blogs, which sparked my interest in frontend development and user experiences.
            </p>
            <p>
              As I grew curious about the behind-the-scenes functionality of the web, I decided to dive deeper into coding, learning JavaScript, PHP, Node.js, and other backend technologies to better understand how everything works together.
            </p>
            <p>
              My curiosity has led me to explore fields like artificial intelligence, which is why I&apos;m also learning Python to expand my skills and dive into this fascinating area of technology.
            </p>
            <p>
              Beyond coding, I have a love for exploring the world and capturing its beauty through photography. Traveling allows me to connect with new cultures and perspectives, fueling my creativity. I&apos;m also deeply fascinated by the Japanese language and culture.
            </p>
          </div>
          <Image src="/vero/lifeai.webp" alt="Verónica Cussi" width={250} height={250} className="rounded-3xl shadow-md" />
        </div>
      </Section>

      <Section title="Contact Me">
        <p className="text-zinc-600 dark:text-zinc-300">Have a project in mind or want to collaborate? Feel free to reach out to me directly via email or connect with me on LinkedIn.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:verocussi@gmail.com" className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-500 transition">Email Me</a>
          <a href="https://www.linkedin.com/in/veronicacussi/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-500 transition">Connect on LinkedIn</a>
        </div>
      </Section>

      <footer className="w-full max-w-5xl mx-auto mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © 2024 Verónica Cussi. All rights reserved.
      </footer>
    </div>
  );
}


