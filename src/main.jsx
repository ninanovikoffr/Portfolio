import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const asset = (file) => `/assets/${file}`

const featuredProjects = [
  {
    title: 'NextPath',
    image: 'nextpath.png',
    description:
      'Aplicativo de busca de emprego baseado em compatibilidade entre candidatos e oportunidades Desenvolvido a partir de pesquisa, prototipação e testes de usabilidade.',
    tags: ['UX/UI', 'Figma', 'Pesquisa', 'Usabilidade'],
  },
  {
    title: 'Redação Inteligente',
    image: 'redacaointeligente.png',
    description:
      'Plataforma educacional desenvolvida para atender alunos, corretores e administradores, com múltiplos fluxos, regras de negócio e possibilidades de configuração.',
    tags: ['GitHub', 'Figma', 'Sistema Web', 'Colaboração'],
  },
]

const otherProjects = [
  {
    title: 'Terroir',
    image: 'terroir.png',
    description: 'Projeto acadêmico de Engenharia de Software desenvolvido de ponta a ponta, passando por requisitos, casos de uso, backlog, design e implementação. Atuei principalmente como Product Owner e Designer, conectando decisões de produto às necessidades técnicas do projeto.',
  },
  {
    title: 'Conseajr',
    image: 'conseajr.png',
    description: 'Landing page desenvolvida na Emakers Jr. para apresentar os serviços da Consea Jr. de forma mais clara e profissional. A página também teve impacto comercial: após conhecerem o projeto, os potenciais clientes avançaram na negociação e fecharam com a empresa.',
  },
  {
    title: 'Fluori',
    image: 'fluori.png',
    description: 'Plataforma web de estudos criada como projeto de entrada na Emakers Jr. e meu primeiro projeto no Figma. Reuni calendário, materiais, Pomodoro, timers, sons de concentração e tarefas em uma experiência simples e intuitiva, reduzindo a complexidade comum em plataformas de produtividade.',
  },
]

const tools = [
  'figma.svg',
  'vscode.svg',
  'git.svg',
  'c++.svg',
  'react.svg',
  'github.svg',
  'python.svg',
  'blendericone.png',
]

function Header() {
  return (
    <header className="site-header">
      <nav
        className="container navigation"
        aria-label="Navegação principal"
      >
        <a className="navigation__logo" href="#inicio">
          NN
        </a>

        <div className="navigation__links">
          <a href="#inicio">Início</a>
          <a href="#projetos">Portfólio</a>
          <a href="#sobre">Contato</a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero__content">
        <div className="hero__name">
          <h1>
            Nina
            <br />
            Novikoff
          </h1>
        </div>

        <div className="hero__role">
          <h2>UX/UI Designer</h2>
          <p>criatividade · soluções · design</p>
        </div>

        <p className="hero__description">
          Estudante de Ciência da Computação, apaixonada
          <br className="desktop-only" /> por criar e explorar produtos
          digitais.
        </p>

        <img
          className="hero__decoration hero__decoration--loop"
          src={asset('loop.svg')}
          alt=""
        />

        <img
          className="hero__decoration hero__decoration--shine"
          src={asset('brilhino.svg')}
          alt=""
        />

        <img
          className="hero__decoration hero__decoration--star"
          src={asset('estrela.svg')}
          alt=""
        />
      </div>
    </section>
  )
}

function ActionButton({ children }) {
  return (
    <a className="action-button" href="#contato">
      {children}
      <span>〉</span>
    </a>
  )
}

function FeaturedProject({ project }) {
  return (
    <article className="featured-project">
      <div className="featured-project__content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <ActionButton>Conhecer</ActionButton>
      </div>

      <div className="featured-project__image">
        <img
          src={asset(project.image)}
          alt={`Imagens do projeto ${project.title}`}
        />
      </div>
    </article>
  )
}

function FeaturedProjects() {
  return (
    <section
      className="section projects-section"
      id="projetos"
    >
      {/* Imagem da corrente adicionada ao fundo */}
      <img
        className="projects-section__chain"
        src={asset('corrente.svg')}
        alt=""
      />
      
      <div className="container">
        <h2 className="section-heading">
          Projetos em destaque
        </h2>

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <FeaturedProject
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function OtherProjects() {
  return (
    <section className="section other-projects-section">
      <div className="container">
        <h2 className="section-heading">
          Outros projetos
        </h2>

        <div className="other-projects">
          {otherProjects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <img
                src={asset(project.image)}
                alt={`Projeto ${project.title}`}
              />

              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section skills-section">
      <div className="container skills-layout">
        <div className="skills-column">
          <h2 className="subsection-heading">
            Ferramentas
          </h2>

          <div className="tools-list">
            {tools.map((tool) => (
              <img
                key={tool}
                src={asset(tool)}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h2 className="subsection-heading">
            Além do design
          </h2>

          <a
            className="additional-project"
            href="#contato"
          >
            <img
              src={asset('dicoroxo.png')}
              alt=""
            />

            Compilador de Mini-linguagem em C
          </a>

          <a
            className="additional-project"
            href="#contato"
          >
            <img
              src={asset('dicoroxo.png')}
              alt=""
            />

            Projeto de Algoritmos em Grafos em Python
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      className="section about-section"
      id="sobre"
    >
      <div className="container">
        <h2 className="section-heading">
          Sobre mim
        </h2>

        <div className="about-layout">
          <img
            className="about__image"
            src={asset('fotoeu.png')}
            alt="Nina Novikroff"
          />

          <div className="about__content">
            <p>
              Sou estudante do 6º período de Ciência da Computação na
              Universidade Federal de Lavras (UFLA) e gosto de explorar a
              interseção entre design, produto e tecnologia.
            </p>

            <p>
              Também exploro programação e realidade virtual, ampliando minha
              visão sobre como produtos digitais são pensados e construídos.
            </p>

            <ActionButton>Ver currículo</ActionButton>

            <div className="about__socials" id="contato">
              <a href="#sobre" aria-label="E-mail">
                <img src={asset('emailicone.svg')} alt="" />
              </a>
              <a href="#sobre" aria-label="LinkedIn">
                <img src={asset('linkedin.svg')} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedProjects />
        <OtherProjects />
        <Skills />
        <About />
      </main>

      <footer className="site-footer">
        <div className="container">
          Nina Novikroff
          <span>© 2025</span>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)