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
      <span>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
        <path d="M0.241859 15.5667C0.164601 15.6478 0.104204 15.7432 0.0641136 15.8474C0.0240231 15.9517 0.00502586 16.0628 0.00820637 16.1743C0.0113869 16.2859 0.036684 16.3957 0.0826511 16.4975C0.128619 16.5994 0.194357 16.6912 0.276114 16.7679C0.357869 16.8445 0.454042 16.9044 0.559141 16.9442C0.664239 16.984 0.776204 17.0028 0.888644 16.9997C1.00108 16.9965 1.1118 16.9714 1.21446 16.9258C1.31712 16.8802 1.40973 16.815 1.48699 16.7339L8.76592 9.08838C8.91624 8.93066 9 8.72183 9 8.50477C9 8.28772 8.91624 8.07889 8.76592 7.92117L1.48699 0.274803C1.41024 0.191925 1.31765 0.125 1.21461 0.0779171C1.11157 0.0308342 1.00013 0.00452995 0.886752 0.000534058C0.773376 -0.00346184 0.660331 0.0149307 0.55418 0.0546417C0.44803 0.0943508 0.350893 0.154589 0.268409 0.231855C0.185925 0.30912 0.11974 0.401875 0.0736971 0.50473C0.0276546 0.607586 0.00267315 0.718491 0.000203133 0.831005C-0.00226688 0.943518 0.0178232 1.0554 0.0593081 1.16014C0.100793 1.26489 0.162845 1.36041 0.241859 1.44117L6.96589 8.50477L0.241859 15.5667Z" fill="white"/>
      </svg>
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

        <ActionButton>CONHECER</ActionButton>
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
      <img
        className="other-projects-section__lines"
        src={asset('linhas.svg')}
        alt=""
      />
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
        
        {/* Coluna 1: Ferramentas */}
        <div className="skills-column">
          <h2 className="subsection-heading">Ferramentas</h2>
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

        {/* Coluna 2: Além do Design */}
        <div className="skills-column">
          <h2 className="subsection-heading">Além do design</h2>
          <div className="beyond-design-list">
            <a className="additional-project" href="#contato">
              <img src={asset('dicoroxo.png')} alt="" />
              <span>Compilador de Mini-linguagem em C</span>
            </a>

            <a className="additional-project" href="#contato">
              <img src={asset('dicoroxo.png')} alt="" />
              <span>Projeto de Algoritmos em Grafos em Python</span>
            </a>
          </div>
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
        <div className="about-layout">
          <img
            className="about__image"
            src={asset('fotoeu.png')}
            alt="Nina Novikroff"
          />

          <div className="about__content">
            {/* Título movido para dentro da área de texto */}
            <h2 className="section-heading about-heading">
              SOBRE MIM
            </h2>
            
            <p>
              Sou estudante do 6º período de Ciência da Computação na
              Universidade Federal de Lavras (UFLA) e gosto de explorar a
              interseção entre design, produto e tecnologia. Gosto de entender 
              problemas, organizar ideias e transformá-las em experiências digitais 
              simples, intuitivas e visualmente cuidadas.
            </p>

            <p>
              Também exploro programação e realidade virtual, ampliando minha
              visão sobre como produtos digitais são pensados e construídos.
            </p>

            <div className="about__footer">
              <a className="about-button" href="#contato">
                <span>VER CURRÍCULO</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                  <path d="M0.241859 15.5667C0.164601 15.6478 0.104204 15.7432 0.0641136 15.8474C0.0240231 15.9517 0.00502586 16.0628 0.00820637 16.1743C0.0113869 16.2859 0.036684 16.3957 0.0826511 16.4975C0.128619 16.5994 0.194357 16.6912 0.276114 16.7679C0.357869 16.8445 0.454042 16.9044 0.559141 16.9442C0.664239 16.984 0.776204 17.0028 0.888644 16.9997C1.00108 16.9965 1.1118 16.9714 1.21446 16.9258C1.31712 16.8802 1.40973 16.815 1.48699 16.7339L8.76592 9.08838C8.91624 8.93066 9 8.72183 9 8.50477C9 8.28772 8.91624 8.07889 8.76592 7.92117L1.48699 0.274803C1.41024 0.191925 1.31765 0.125 1.21461 0.0779171C1.11157 0.0308342 1.00013 0.00452995 0.886752 0.000534058C0.773376 -0.00346184 0.660331 0.0149307 0.55418 0.0546417C0.44803 0.0943508 0.350893 0.154589 0.268409 0.231855C0.185925 0.30912 0.11974 0.401875 0.0736971 0.50473C0.0276546 0.607586 0.00267315 0.718491 0.000203133 0.831005C-0.00226688 0.943518 0.0178232 1.0554 0.0593081 1.16014C0.100793 1.26489 0.162845 1.36041 0.241859 1.44117L6.96589 8.50477L0.241859 15.5667Z" fill="currentColor"/>
                </svg>
              </a>

              <div className="about__socials" id="contato">
                <a href="#sobre" aria-label="E-mail">
                  <img className="social-icon-email" src={asset('emailicone.svg')} alt="" />
                </a>
                <a href="#sobre" aria-label="LinkedIn">
                  <img className="social-icon-linkedin" src={asset('linkedin.svg')} alt="" />
                </a>
              </div>
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
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)