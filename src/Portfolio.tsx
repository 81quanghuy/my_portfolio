import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Boxes, ShieldCheck, Rocket, Play, Cpu, Cloud, FileText, Phone } from 'lucide-react'

const Section: React.FC<{ id?: string; title: string; subtitle?: string; children: React.ReactNode }> = ({ id, title, subtitle, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div className="flex items-baseline gap-4">
        <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-fuchsia-400" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm sm:text-base text-gray-400">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-8">{children}</div>
    </motion.div>
  </section>
)

const Badge: React.FC<{ icon?: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm bg-white/5 ring-1 ring-emerald-400/30 hover:ring-emerald-300/50 transition">
    {icon}{children}
  </span>
)

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition shadow-[0_0_0_1px_rgba(16,185,129,.06)] hover:shadow-[0_0_0_1px_rgba(16,185,129,.25),0_12px_40px_-10px_rgba(16,185,129,.25)] ${className}`}>
    {children}
  </div>
)

const LinkBtn: React.FC<React.ComponentProps<'a'>> = ({ className = '', children, ...props }) => (
  <a {...props} className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:shadow-sm transition border-white/10 bg-white/5 ${className}`}>{children}</a>
)

const projects = [
  {
    title: 'NovaPlay – Online Movie Streaming Platform',
    description: 'Learning project to build a microservices-based online movie streaming platform. Features include user authentication, movie catalog, reviews, and recommendations.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'Redis', 'S3',],
    links: { github: 'https://github.com/81quanghuy/NovaPlay', live: '' },
    cover: 'https://portpolio-bucket.s3.ap-southeast-1.amazonaws.com/novaplay_cover.jpg'
  },
  {
    title: 'UTEALO - Social Media Platform for University Students',
    description: 'Designed and implemented a social media platform tailored for university students, featuring real-time chat, secure authentication, and robust data management.',
    tags: ['Java ', 'Spring Boot', 'JWT', 'WebSocket', 'Kafka', 'Elasticsearch'],
    links: { github: 'https://github.com/81quanghuy/system_utealo_microservice.git', live: '' },
    cover: 'https://portpolio-bucket.s3.ap-southeast-1.amazonaws.com/utealo_cover.jpg'
  },
  {
    title: 'E-Commerce App – Furniture Store Backend',
    description: 'Built and designed RESTful APIs for an online furniture shopping system. The backend covers authentication, product catalog, search & filtering, cart, checkout, and order management.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'REST API', 'Android', 'Retrofit', 'Gson'],
    links: { github: 'https://github.com/81quanghuy/Ecom_server.git', live: '' },
    cover: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1600&auto=format&fit=crop'
  }

] as const

const experiences = [
  {
    role: 'Java Developer',
    company: 'Fujinet Systems JSC',
    period: '02/2024 – 07/2025',
    bullets: [
      'Participated in the technical analysis and implementation of new features for two Java projects, ensuring adherence to technical specifications and contributing to the successful delivery of 15+ enhancements within project timelines.',
      'Contributed to a critical system modernization project by migrating components from Oracle to PostgreSQL, successfully modifying and testing 10 screens to ensure data integrity and application compatibility.',
      'Proactively analyzed and resolved 50+ development issues through root-cause analysis, collaborating closely with the QA team to ensure project quality.',
      'Achieved second-place honors in the FCODE Challenge 2024.'
    ]
  },
  {
    role: 'Freelance Java Backend Developer', company: 'Self-Employed', period: '8/2025 – Present', bullets: [
      'API-first services (OpenAPI/Swagger) & Feign clients.',
      'Security with Spring Security, OAuth2.',
      'Built CI/CD pipelines with GitHub Actions.',
      'Built telemetry pipelines (logs/metrics/traces).',
    ]
  },
  {
    role: 'Java Backend Developer',
    company: 'CMC Global',
    period: '8/2025 – Present',
    bullets: [
      'Working on the banking domain with high security and high availability requirements.',
      'Developing and maintaining backend services in a microservice architecture.',
      'Collaborating with mobile/web teams to deliver stable banking features.'
    ]
  }
] as const

const certs: { name: string; provider: string; year: string }[] = [
  // { name: 'Oracle Certified Professional: Java SE (placeholder)', provider: 'Oracle', year: '2025' },
  // { name: 'Linux Foundation: Intro to Cloud Infrastructure (placeholder)', provider: 'LF', year: '2024' }
]

export default function Portfolio() {

  function sendEmail(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const btn = e.currentTarget as HTMLButtonElement
    const form = btn.form
    if (!form) return
    const fd = new FormData(form)
    const name = String(fd.get('name') || '')
    const email = String(fd.get('email') || '')
    const subjectRaw = String(fd.get('subject') || '')
    const message = String(fd.get('message') || '')

    const to = 'ngoquanghuy0510@gmail.com'
    const subject = subjectRaw || `Portfolio Contact: ${name || 'No name'}`
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subjectRaw}\n\n${message}`
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  const bgStyle: React.CSSProperties = {
    backgroundImage: 'radial-gradient(1200px 600px at 80% -20%, rgba(16,185,129,.12), transparent), radial-gradient(1000px 500px at 10% 10%, rgba(217,70,239,.08), transparent)'
  }

  return (
    <div className="min-h-screen relative text-gray-100 bg-[#0b0f14]" style={bgStyle}>
      <header className="sticky top-3 z-30">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-full border border-emerald-400/20 bg-white/5 backdrop-blur-xl h-14 flex items-center justify-between px-4 shadow-[0_0_0_1px_rgba(16,185,129,.08)]">
            <a href="#home" className="font-semibold tracking-tight text-emerald-300">Ngô Diệp Quang Huy • Java Developer</a>
            <div className="hidden sm:flex items-center gap-1">
              <a href="#projects" className="px-3 py-2 rounded-full hover:bg-white/10">Projects</a>
              <a href="#stack" className="px-3 py-2 rounded-full hover:bg-white/10">Tech Stack</a>
              <a href="#experience" className="px-3 py-2 rounded-full hover:bg-white/10">Experience</a>
              <a href="#contact" className="px-3 py-2 rounded-full hover:bg-white/10">Contact</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:ngoquanghuy0510@gmail.com" className="p-2 rounded-xl border border-white/10 hover:bg-white/10" aria-label="Email"><Mail size={18} /></a>
              <a href="https://github.com/81quanghuy" target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-white/10 hover:bg-white/10" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/huyndq/" target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-white/10 hover:bg-white/10" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-white/5 text-xs tracking-wide shadow-[0_0_20px_rgba(16,185,129,.15)]">
              <Rocket size={14} /> Open to backend developer roles – full-time or freelance
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Developing Backend Solutions with <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-lime-300 bg-clip-text text-transparent">Java & Spring Boot</span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-prose">I am a backend developer who likes to learn. I want to build useful apps with Java, Spring Boot, and new cloud tools.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkBtn href="#projects"><Play size={16} /> View Projects</LinkBtn>
              <LinkBtn href="#contact"><Phone size={16} /> Contact Me</LinkBtn>
              <LinkBtn href="https://portpolio-bucket.s3.ap-southeast-1.amazonaws.com/CV_NgoDiepQuangHuy_JavaDeveloper.pdf" target="_blank" rel="noreferrer"><FileText size={16} /> Download CV</LinkBtn>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 overflow-hidden">
                <img src="https://portpolio-bucket.s3.ap-southeast-1.amazonaws.com/avatar.png" className="w-full h-72 object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="stack" title="Tech Stack" subtitle="Tools I use to ship reliable backends">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Core Backend */}
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Code2 />
              <h3 className="font-semibold">Core Backend</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Java</Badge>
              <Badge>Spring Boot</Badge>
              <Badge>Microservices</Badge>
              <Badge>Spring API Gateway</Badge>
              <Badge>OpenAPI/Swagger</Badge>
            </div>
          </Card>
          {/* Data Layer */}
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Database />
              <h3 className="font-semibold">Data & Persistence</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>PostgreSQL</Badge>
              <Badge>Oracle</Badge>
              <Badge>MongoDB</Badge>
              <Badge>JPA/Hibernate</Badge>
            </div>
          </Card>
          {/* Platform & Observability */}
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Boxes />
              <h3 className="font-semibold">Platform & Observability</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Docker</Badge>
              <Badge>CI/CD (GitHub Actions)</Badge>
              <Badge>Prometheus / Grafana</Badge>
            </div>
          </Card>
          {/* Security */}
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <ShieldCheck />
              <h3 className="font-semibold">Security & Auth</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Spring Security</Badge>
              <Badge>OAuth2/JWT</Badge>
            </div>
          </Card>
          {/* Messaging & Resilience */}
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Cpu />
              <h3 className="font-semibold">Messaging & Resilience</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Apache Kafka</Badge>
              <Badge>Spring Cloud Stream</Badge>
              <Badge>Resilience4j</Badge>
            </div>
          </Card>
          {/* Frontend & Tools */}
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Cloud />
              <h3 className="font-semibold">Frontend</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>React / Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected work that reflects my skills">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Card className="overflow-hidden">
                <div className="h-44 overflow-hidden"><img src={p.cover} alt={p.title} className="w-full h-full object-cover transition group-hover:scale-[1.02]" /></div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{p.tags.slice(0, 6).map(t => <Badge key={t}>{t}</Badge>)}</div>
                  <div className="mt-4 flex items-center gap-2">
                    {p.links.github ? <LinkBtn href={p.links.github} target="_blank" rel="noreferrer"><Github size={16} /> Code</LinkBtn> : null}
                    {p.links.live ? <LinkBtn href={p.links.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live</LinkBtn> : null}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Where I learned by shipping to users">
        <div className="space-y-4">
          {experiences.map(e => (
            <Card key={e.role} className="p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div><h3 className="font-semibold">{e.role} • <span className="text-emerald-300">{e.company}</span></h3></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm space-y-2 text-gray-300">{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </Card>
          ))}
        </div>
      </Section>

      {certs.length > 0 && (<Section id="certs" title="Certificates" subtitle="Proof of learning & practice">
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map(c => (
            <Card key={c.name} className="p-5">
              <div className="flex items-center justify-between">
                <div><h3 className="font-semibold">{c.name}</h3><p className="text-sm text-gray-500 dark:text-gray-400">{c.provider}</p></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{c.year}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>)}

      <Section id="contact" title="Contact" subtitle="Let’s build something useful together">
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-gray-300">Open to Java backend developer roles – full-time or freelance</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkBtn href="mailto:ngoquanghuy0510@gmail.com"><Mail size={16} /> ngoquanghuy0510@gmail.com</LinkBtn>
                <LinkBtn href="https://github.com/81quanghuy" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</LinkBtn>
                <LinkBtn href="https://www.linkedin.com/in/huyndq/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</LinkBtn>
              </div>
            </div>
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Your name" name="name" required />
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Your email" type="email" name="email" required />
              </div>
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Subject" name="subject" />
              <textarea className="w-full min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Message" name="message" required />
              <button type="button" onClick={(e) => sendEmail(e)} className="rounded-xl px-5 py-3 bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90">Send Message</button>
            </form>
          </div>
        </Card>
      </Section>

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} QuangHuy</p>
          <div className="flex items-center gap-3">
            <a className="hover:underline" href="#home">Back to top</a><span>•</span>
            <a className="hover:underline" href="#projects">Projects</a><span>•</span>
            <a className="hover:underline" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
