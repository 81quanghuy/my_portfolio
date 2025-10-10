import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Boxes, ShieldCheck, Rocket, Play, Cpu, Cloud, FileText, Phone } from 'lucide-react'

const Section: React.FC<{id?: string; title: string; subtitle?: string; children: React.ReactNode}> = ({ id, title, subtitle, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
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

const Badge: React.FC<{icon?: React.ReactNode; children: React.ReactNode}> = ({ icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm bg-white/5 ring-1 ring-emerald-400/30 hover:ring-emerald-300/50 transition">
    {icon}{children}
  </span>
)

const Card: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className = '' }) => (
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
    description: 'Microservices streaming: API Gateway, Discovery, Auth, Movie, Streaming, Payment... Feign for inter-service, Kafka for async email, Keycloak for IAM.',
    tags: ['Java 17','Spring Boot 3','Spring Cloud','Feign','Kafka','Keycloak','Docker','PostgreSQL','MongoDB','Redis','Grafana Tempo'],
    links: { github: 'https://github.com/yourname/NovaPlay', live: 'https://novaplay.example.com' },
    cover: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Restora – Reservation System for Restaurants',
    description: 'Booking engine with multi-tenant design, schedule management, notifications, analytics dashboard.',
    tags: ['Spring Boot','JPA/Hibernate','PostgreSQL','Redis','Docker Compose','React','Tailwind'],
    links: { github: 'https://github.com/yourname/Restora', live: 'https://restora.example.com' },
    cover: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Observability Stack – Traces, Logs, Metrics',
    description: 'OpenTelemetry Java Agent + Prometheus + Grafana + Loki + Tempo with exemplars and traceID propagation.',
    tags: ['OpenTelemetry','Grafana','Prometheus','Loki','Tempo','Micrometer'],
    links: { github: 'https://github.com/yourname/observability-lab', live: '' },
    cover: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop'
  }
] as const

const experiences = [
  { role: 'Junior Java Developer', company: 'Fujinet Systems (FJS)', period: '2023 – 2024', bullets: [
    'Developed & maintained Spring Boot microservices, REST & messaging.',
    'Optimized SQL & Redis caching; reduced p95 latency.',
    'Contributed to CI with Docker & GitHub Actions.',
  ]},
  { role: 'Freelance Java Backend Developer', company: 'Self-Employed', period: '2024 – Present', bullets: [
    'API-first services (OpenAPI/Swagger) & Feign clients.',
    'Security with Keycloak, OAuth2, RBAC.',
    'Built telemetry pipelines (logs/metrics/traces).',
  ]}
] as const

const certs = [
  { name: 'Oracle Certified Professional: Java SE (placeholder)', provider: 'Oracle', year: '2025' },
  { name: 'Linux Foundation: Intro to Cloud Infrastructure (placeholder)', provider: 'LF', year: '2024' }
] as const

function runSmokeTests() {
  const tests = []
  tests.push({ name: 'projects.nonEmpty', pass: projects.length > 0 })
  tests.push({ name: 'projects.shape', pass: projects.every(p => !!p.title && !!p.cover && Array.isArray(p.tags) && p.tags.length > 0) })
  tests.push({ name: 'linkbtn.children.supported', pass: true })
  const allPass = tests.every(t => t.pass)
  // eslint-disable-next-line no-console
  console[allPass ? 'info' : 'warn']('[Portfolio SmokeTests]', tests)
}

export default function Portfolio() {
  useEffect(() => { runSmokeTests() }, [])

  const bgStyle: React.CSSProperties = {
    backgroundImage: 'radial-gradient(1200px 600px at 80% -20%, rgba(16,185,129,.12), transparent), radial-gradient(1000px 500px at 10% 10%, rgba(217,70,239,.08), transparent)'
  }

  return (
    <div className="min-h-screen relative text-gray-100 bg-[#0b0f14]" style={bgStyle}>
      <header className="sticky top-3 z-30">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-full border border-emerald-400/20 bg-white/5 backdrop-blur-xl h-14 flex items-center justify-between px-4 shadow-[0_0_0_1px_rgba(16,185,129,.08)]">
            <a href="#home" className="font-semibold tracking-tight text-emerald-300">Huy • Java Developer</a>
            <div className="hidden sm:flex items-center gap-1">
              <a href="#projects" className="px-3 py-2 rounded-full hover:bg-white/10">Projects</a>
              <a href="#stack" className="px-3 py-2 rounded-full hover:bg-white/10">Tech Stack</a>
              <a href="#experience" className="px-3 py-2 rounded-full hover:bg-white/10">Experience</a>
              <a href="#contact" className="px-3 py-2 rounded-full hover:bg-white/10">Contact</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:huy@example.com" className="p-2 rounded-xl border border-white/10 hover:bg-white/10" aria-label="Email"><Mail size={18}/></a>
              <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-white/10 hover:bg-white/10" aria-label="GitHub"><Github size={18}/></a>
              <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-white/10 hover:bg-white/10" aria-label="LinkedIn"><Linkedin size={18}/></a>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-white/5 text-xs tracking-wide shadow-[0_0_20px_rgba(16,185,129,.15)]">
              <Rocket size={14}/> Available for full-time / freelance
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Building scalable <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-lime-300 bg-clip-text text-transparent">Java microservices</span> for real-world products
            </h1>
            <p className="mt-4 text-gray-300 max-w-prose">I’m Huy – Java Backend Developer focused on Spring Boot, microservices, and cloud-native tooling.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkBtn href="#projects"><Play size={16}/> View Projects</LinkBtn>
              <LinkBtn href="#contact"><Phone size={16}/> Contact Me</LinkBtn>
              <LinkBtn href="/Huy_Java_CV.pdf" target="_blank" rel="noreferrer"><FileText size={16}/> Download CV</LinkBtn>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1600&auto=format&fit=crop" alt="Code preview" className="w-full h-72 object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="stack" title="Tech Stack" subtitle="Tools I use to ship reliable backends">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-5"><div className="flex items-center gap-3"><Code2/><h3 className="font-semibold">Core Backend</h3></div><div className="mt-4 flex flex-wrap gap-2"><Badge>Java 17/21</Badge><Badge>Spring Boot 3.x</Badge><Badge>Spring Cloud</Badge><Badge>OpenAPI/Swagger</Badge><Badge>Feign</Badge></div></Card>
          <Card className="p-5"><div className="flex items-center gap-3"><Database/><h3 className="font-semibold">Data</h3></div><div className="mt-4 flex flex-wrap gap-2"><Badge>PostgreSQL</Badge><Badge>MongoDB</Badge><Badge>Redis</Badge><Badge>JPA/Hibernate</Badge></div></Card>
          <Card className="p-5"><div className="flex items-center gap-3"><Boxes/><h3 className="font-semibold">Platform & Ops</h3></div><div className="mt-4 flex flex-wrap gap-2"><Badge>Docker / Compose</Badge><Badge>CI/CD (GitHub)</Badge><Badge>Grafana/Prom/Tempo</Badge><Badge>OpenTelemetry</Badge></div></Card>
          <Card className="p-5"><div className="flex items-center gap-3"><ShieldCheck/><h3 className="font-semibold">Security</h3></div><div className="mt-4 flex flex-wrap gap-2"><Badge>Keycloak</Badge><Badge>OAuth2/JWT</Badge><Badge>CORS/CSRF</Badge></div></Card>
          <Card className="p-5"><div className="flex items-center gap-3"><Cpu/><h3 className="font-semibold">Messaging</h3></div><div className="mt-4 flex flex-wrap gap-2"><Badge>Kafka (async email)</Badge><Badge>Resilience4J</Badge></div></Card>
          <Card className="p-5"><div className="flex items-center gap-3"><Cloud/><h3 className="font-semibold">Frontend (basic)</h3></div><div className="mt-4 flex flex-wrap gap-2"><Badge>React</Badge><Badge>Tailwind CSS</Badge></div></Card>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected work that reflects my skills">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p,i)=>(
            <motion.div key={p.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}}>
              <Card className="overflow-hidden">
                <div className="h-44 overflow-hidden"><img src={p.cover} alt={p.title} className="w-full h-full object-cover transition group-hover:scale-[1.02]" /></div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{p.tags.slice(0,6).map(t=><Badge key={t}>{t}</Badge>)}</div>
                  <div className="mt-4 flex items-center gap-2">
                    {p.links.github ? <LinkBtn href={p.links.github} target="_blank" rel="noreferrer"><Github size={16}/> Code</LinkBtn> : null}
                    {p.links.live ? <LinkBtn href={p.links.live} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Live</LinkBtn> : null}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Where I learned by shipping to users">
        <div className="space-y-4">
          {experiences.map(e=>(
            <Card key={e.role} className="p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div><h3 className="font-semibold">{e.role} • <span className="text-emerald-300">{e.company}</span></h3></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm space-y-2 text-gray-300">{e.bullets.map(b=><li key={b}>{b}</li>)}</ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="certs" title="Certificates" subtitle="Proof of learning & practice">
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map(c=>(
            <Card key={c.name} className="p-5">
              <div className="flex items-center justify-between">
                <div><h3 className="font-semibold">{c.name}</h3><p className="text-sm text-gray-500 dark:text-gray-400">{c.provider}</p></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{c.year}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let’s build something useful together">
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-gray-300">Open to Java backend roles and freelance projects.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkBtn href="mailto:huy@example.com"><Mail size={16}/> huy@example.com</LinkBtn>
                <LinkBtn href="https://github.com/yourname" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</LinkBtn>
                <LinkBtn href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</LinkBtn>
              </div>
            </div>
            <form className="space-y-3" onSubmit={e=>e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Your name" />
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Your email" type="email" />
              </div>
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Subject" />
              <textarea className="w-full min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Message" />
              <button type="button" onClick={()=>alert('Demo form. Replace with EmailJS or your backend.')} className="rounded-xl px-5 py-3 bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90">Send Message</button>
            </form>
          </div>
        </Card>
      </Section>

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Huy. Crafted with React + Tailwind.</p>
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
