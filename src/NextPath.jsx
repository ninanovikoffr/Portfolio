import { useState, useEffect } from "react";
import "./NextPath.css";

const asset = (file) => `/assets/${file}`;

const svgPaths = {
  bullet: "M5 10.7181C7.76142 10.7181 10 8.31876 10 5.35904C10 2.39932 7.76142 0 5 0C2.23858 0 0 2.39932 0 5.35904C0 8.31876 2.23858 10.7181 5 10.7181Z",
  backArrow: "M15.57 2.6137C15.7074 2.46581 15.8147 2.29184 15.886 2.10172C15.9573 1.9116 15.9911 1.70906 15.9854 1.50566C15.9798 1.30226 15.9348 1.10199 15.8531 0.916275C15.7713 0.730561 15.6545 0.563044 15.5091 0.423288C15.3638 0.283532 15.1928 0.174274 15.006 0.101752C14.8191 0.0292309 14.6201 -0.00513422 14.4202 0.000619639C14.2203 0.0063735 14.0235 0.0521334 13.841 0.135287C13.6584 0.21844 13.4938 0.337358 13.3565 0.485251L0.416135 14.4271C0.1489 14.7147 0 15.0955 0 15.4913C0 15.8871 0.1489 16.2679 0.416135 16.5555L13.3565 30.4989C13.4929 30.65 13.6575 30.7721 13.8407 30.8579C14.0239 30.9438 14.222 30.9917 14.4236 30.999C14.6251 31.0063 14.8261 30.9728 15.0148 30.9004C15.2035 30.8279 15.3762 30.7181 15.5228 30.5772C15.6695 30.4363 15.7871 30.2672 15.869 30.0796C15.9508 29.8921 15.9952 29.6898 15.9996 29.4846C16.004 29.2795 15.9683 29.0755 15.8946 28.8844C15.8208 28.6934 15.7105 28.5192 15.57 28.372L3.6162 15.4913L15.57 2.6137Z",
  arrow: "M15.5537 0.29736C15.7484 0.106951 16.0123 0 16.2875 0C16.5627 0 16.8266 0.106951 17.0213 0.29736L26.6963 9.78728C26.8908 9.97792 27 10.2364 27 10.5058C27 10.7752 26.8908 11.0337 26.6963 11.2243L17.0213 20.7142C16.8255 20.8995 16.5633 21.0022 16.291 21C16.0188 20.9978 15.7583 20.891 15.5656 20.7025C15.373 20.5141 15.2637 20.2591 15.2612 19.9925C15.2587 19.7259 15.3633 19.469 15.5523 19.2772L23.4565 11.5239L1.03978 11.5388C0.764377 11.5392 0.500113 11.4324 0.305117 11.242C0.110122 11.0516 0.000368122 10.7931 9.2434e-07 10.5234C-0.000366273 10.2538 0.108683 9.99499 0.303159 9.80406C0.497635 9.61312 0.761608 9.50565 1.03701 9.50529L23.4579 9.49173L15.5509 1.7344C15.3565 1.54376 15.2472 1.28533 15.2472 1.01588C15.2472 0.746435 15.3565 0.488006 15.5509 0.29736",
};

function BulletIcon() {
  return (
    <svg className="np-bullet-icon" fill="none" viewBox="0 0 10 11" width="10" height="11">
      <path d={svgPaths.bullet} fill="#34677A" />
    </svg>
  );
}

function ProblemItem({ title, description }) {
  return (
    <div className="np-problem-item">
      <div className="np-problem-title">
        <div className="np-bullet-wrap">
          <BulletIcon />
        </div>
        <p className="np-problem-title-text">{title}</p>
      </div>
      <p className="np-problem-desc">{description}</p>
    </div>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="np-metric-card">
      <p className="np-metric-value">{value}</p>
      <p className="np-metric-label">{label}</p>
    </div>
  );
}

function LearningItem({ number, title, text }) {
  return (
    <div className="np-learning-item">
      <span className="np-learning-num">{number}</span>
      <div className="np-learning-body">
        <h3 className="np-learning-title">{title}</h3>
        <p className="np-learning-text">{text}</p>
      </div>
    </div>
  );
}

export default function NextPath() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="np-root">
      {/* ── HEADER ── */}
      <header className={`np-header ${isSticky ? 'np-header--sticky' : ''}`}>
        <div className="np-header-inner container">
          <a className="np-logo-link" href="/" onClick={(e) => handleNavClick(e, '/')}>
            Nina Novikoff
          </a>
          <nav className="np-nav">
            <a className="np-nav-link" href="/" onClick={(e) => handleNavClick(e, '/')}>Início</a>
            <a className="np-nav-link" href="/#projetos" onClick={(e) => handleNavClick(e, '/#projetos')}>Portfolio</a>
            <a className="np-nav-link" href="/#contato" onClick={(e) => handleNavClick(e, '/#contato')}>Contato</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="np-hero">
        <div className="np-hero-inner">
          <div className="np-hero-left">
            <a href="/#projetos" className="np-back-btn" onClick={(e) => handleNavClick(e, '/#projetos')} aria-label="Voltar">
              <svg width="16" height="31" viewBox="0 0 16 31" fill="none">
                <path d={svgPaths.backArrow} fill="white" />
              </svg>
            </a>
            <p className="np-eyebrow">UX/UI Case Study · 2026</p>
            <h1 className="np-hero-title">NextPath</h1>
            <p className="np-hero-subtitle">
              Ajudando pessoas a encontrar oportunidades mais alinhadas ao seu perfil.
            </p>
            <p className="np-hero-body">
              O NextPath é uma proposta de aplicativo mobile criada para tornar a busca por
              emprego mais direcionada e transparente. A experiência organiza vagas, destaca a
              compatibilidade com o perfil do usuário e oferece mais contexto para ajudar na
              tomada de decisão, ao mesmo tempo em que busca aproximar empresas de candidatos
              mais alinhados às oportunidades.
            </p>
            <div className="np-tags">
              {["Pesquisa UX", "UX/UI Design", "Prototipação", "Testes de usabilidade"].map((t) => (
                <span key={t} className="np-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="np-hero-image-wrap">
            <img src={asset('nextpathprincipal.png')} className="np-hero-image" alt="Hero mockup image" />
          </div>
        </div>
      </section>

      {/* ── SECTION 01: CONTEXTO ── */}
      <section className="np-section">
        <div className="np-section-inner">
          <div className="np-section-label">
            <span className="np-section-num">01</span>
            <div className="np-section-line" />
          </div>

          <div className="np-contexto-grid">
            <div className="np-contexto-text">
              <h2 className="np-section-heading">contexto</h2>
              <div className="np-contexto-paragraphs">
                <p>
                  O NextPath nasceu como um projeto acadêmico desenvolvido durante um semestre
                  na disciplina de Interação Humano-Computador. Em um grupo de quatro pessoas,
                  partimos do desafio de entender como tornar a busca por emprego mais clara
                  para estudantes, recém-formados e profissionais em diferentes momentos da
                  carreira.
                </p>
                <p>
                  A pesquisa inicial mostrou que o problema não era apenas encontrar vagas, mas
                  conseguir identificar quais oportunidades realmente faziam sentido. Os
                  participantes relataram recomendações pouco relevantes, falta de transparência
                  e dificuldade para confiar nas plataformas e nos processos seletivos.
                </p>
                <p>
                  A partir desses dados, desenvolvemos uma nova proposta de produto focada em
                  compatibilidade, transparência e controle, passando por pesquisa, prototipação,
                  testes com usuários e um ciclo de redesign.
                </p>
              </div>
            </div>

            <div className="np-contexto-meta">
              <div className="np-meta-item">
                <span className="np-meta-label">Tipo</span>
                <span className="np-meta-value">Projeto acadêmico</span>
                <div className="np-meta-divider" />
              </div>
              <div className="np-meta-item">
                <span className="np-meta-label">equipe</span>
                <span className="np-meta-value">4 pessoas</span>
                <div className="np-meta-divider" />
              </div>
              <div className="np-meta-item">
                <span className="np-meta-label">Duração</span>
                <span className="np-meta-value">1 semestre</span>
                <div className="np-meta-divider" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: O PROBLEMA ── */}
      <section className="np-section np-section--alt">
        <div className="np-section-inner">
          <div className="np-section-label">
            <span className="np-section-num">02</span>
            <div className="np-section-line" />
          </div>
          <h2 className="np-section-heading np-section-heading--padded">o problema</h2>
          <p className="np-intro-text">
            A pesquisa mostrou uma experiência marcada por ruído, incompatibilidade e pouca
            transparência. Usuários relataram vagas incompatíveis com sua experiência, processos
            longos, falta de feedback e plataformas difíceis de navegar.
          </p>

          <div className="np-problems-grid">
            <div className="np-problems-col">
              <div className="np-problems-col-header">
                <h3 className="np-problems-col-title">Para o usuário</h3>
                <div className="np-problems-col-line" />
              </div>
              <ProblemItem
                title="Vagas pouco compatíveis"
                description="Recomendações abaixo ou acima da senioridade, requisitos incompatíveis e excesso de oportunidades irrelevantes."
              />
              <ProblemItem
                title="Pouca transparência"
                description="Nem sempre fica claro por que uma vaga foi recomendada ou se vale a pena entrar naquele processo."
              />
              <ProblemItem
                title="Falta de feedback"
                description="Depois de realizar uma ação, como se candidatar ou entrar em contato, o usuário frequentemente fica sem saber o que aconteceu."
              />
              <ProblemItem
                title="Muito esforço para encontrar pouco"
                description="Descrições extensas, filtros pouco úteis e processos com muitas etapas aumentam o tempo gasto procurando oportunidades."
              />
            </div>

            <div className="np-problems-col np-problems-col--right">
              <div className="np-problems-col-header">
                <h3 className="np-problems-col-title">Para a empresa</h3>
                <div className="np-problems-col-line" />
              </div>
              <ProblemItem
                title="Menos candidaturas qualificadas"
                description="Se o candidato recebe oportunidades irrelevantes, diminui a chance de ele encontrar e concluir uma candidatura adequada."
              />
              <ProblemItem
                title="Abandono do processo"
                description="Se o usuário não entende recomendações ou processos, ele tem menos motivos para continuar utilizando a plataforma."
              />
              <ProblemItem
                title="Menor valor percebido pelo usuário"
                description="Quanto mais tempo o candidato precisa gastar filtrando vagas ruins, menor é a percepção de valor do produto."
              />
              <ProblemItem
                title="Maior esforço no recrutamento"
                description="Quando o matching é pouco preciso, a empresa precisa gastar mais tempo filtrando candidaturas e identificando os perfis realmente adequados para a vaga."
              />
            </div>
          </div>

          <p className="np-footnote">
            *A partir das dores identificadas na pesquisa com usuários, foram levantadas possíveis
            consequências para o produto e para sua sustentabilidade como plataforma.
          </p>
        </div>
      </section>

      {/* ── SECTION 03: A SOLUÇÃO ── */}
      <section className="np-section">
        <div className="np-section-inner">
          <div className="np-section-label">
            <span className="np-section-num">03</span>
            <div className="np-section-line" />
          </div>
          <h2 className="np-section-heading np-section-heading--padded">A solução</h2>
          <p className="np-solution-text">
            A solução foi criar uma experiência em que o usuário não precisa perder tempo
            analisando dezenas de vagas pouco relevantes. O NextPath recomenda oportunidades com
            base no perfil da pessoa e mostra um percentual de compatibilidade, ajudando a
            identificar rapidamente quais vagas fazem mais sentido para sua experiência,
            habilidades e objetivos.
          </p>
          <p className="np-solution-text">
            Também foram projetados filtros específicos, informações de vaga mais organizadas e
            recursos para reduzir dúvidas durante a navegação. A compatibilidade ganhou
            explicações sobre os critérios considerados, enquanto as informações mais importantes
            da vaga foram apresentadas de forma mais direta.
          </p>
        </div>

        <div className="np-banner">
          <div className="np-banner-bg" />
          <div className="np-banner-screens" style={{ paddingBottom: '20px' }}>
            <img src={asset('nextpathresultado.png')} alt="Resultado NextPath" style={{ width: '100%', maxWidth: '900px', borderRadius: '8px', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* ── SECTION 04: PROCESSO ── */}
      <section className="np-section np-section--alt">
        <div className="np-section-inner">
          <div className="np-section-label">
            <span className="np-section-num">04</span>
            <div className="np-section-line" />
          </div>
          <h2 className="np-section-heading np-section-heading--padded">processo</h2>

          <div className="np-processo-block">
            <h3 className="np-processo-subtitle">Pesquisa com usuários</h3>
            <p className="np-processo-text">
              Antes de desenhar a interface, buscamos entender como as pessoas utilizavam
              plataformas de emprego e quais eram suas principais dificuldades. Aplicamos um
              questionário pelo Google Forms, distribuído por redes sociais, WhatsApp e grupos
              acadêmicos, e analisamos as respostas de 27 participantes em busca de padrões de
              comportamento e necessidades comuns.
            </p>
            <p className="np-processo-link">
              Formulário utilizado na coleta de dados:{" "}
              <a href="https://forms.gle/5mCJYmFqadFVb4nM9" className="np-link" target="_blank" rel="noreferrer">
                https://forms.gle/5mCJYmFqadFVb4nM9
              </a>
            </p>

            <div className="np-metrics-grid">
              <MetricCard value="74%" label="classificaram as plataformas atuais como pouco eficazes ou ineficazes" />
              <MetricCard value="63%" label="relataram problemas com vagas incompatíveis com sua experiência" />
              <MetricCard value="67%" label="já deixaram de se candidatar por falta de confiança no processo" />
              <MetricCard value="78%" label="afirmaram que utilizariam a proposta apresentada pelo NextPath" />
            </div>
          </div>

          <div className="np-processo-block">
            <h3 className="np-processo-subtitle">Protótipo de baixa fidelidade</h3>
            <p className="np-processo-note">
              Protótipos de baixa fidelidade, desenhados à mão e identidade visual do app
            </p>
            
            <img src={asset('baixafidelidade.png')} className="np-sketch-image" alt="Protótipo de baixa fidelidade" style={{ marginBottom: '24px', objectFit: 'cover' }} />

            <div className="np-palette-row">
              <div className="np-identity-block">
                <img src={asset('nextpathlogo.png')} alt="NextPath Logo" style={{ height: '42px', objectFit: 'contain' }} />
              </div>
              <div className="np-color-swatches" style={{ gap: '8px' }}>
                <img src={asset('paletacores1.png')} alt="Paleta de cores 1" style={{ height: '50px', objectFit: 'contain' }} />
                <img src={asset('paletacores2.png')} alt="Paleta de cores 2" style={{ height: '50px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          <div className="np-processo-block">
            <h3 className="np-processo-subtitle">Primeiro protótipo de alta fidelidade</h3>
            <p className="np-processo-text">
              A partir dos sketches, desenvolvi no Figma uma primeira versão de alta fidelidade,
              já com a identidade visual, componentes e principais telas do NextPath.
            </p>
            <p className="np-processo-text">
              O protótipo utilizava dados simulados e navegação entre telas para representar a
              experiência esperada, sem funcionar como uma aplicação completa. O objetivo era
              criar material suficiente para avaliar se a organização, os textos, a hierarquia
              visual e os principais conceitos da interface eram compreensíveis para outras
              pessoas.
            </p>
            <p className="np-processo-note">Primeiro protótipo de alta fidelidade feito no figma</p>

            <div className="np-hifi-screens" style={{ justifyContent: 'center' }}>
              <img src={asset('prototipo1.png')} alt="Primeiro protótipo" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', objectFit: 'contain' }} />
            </div>
          </div>

          <div className="np-processo-block">
            <h3 className="np-processo-subtitle">testes com usuários</h3>
            <p className="np-processo-text">
              Realizamos testes remotos de usabilidade com 5 participantes representativos do
              público-alvo, utilizando o protótipo desenvolvido no Figma. Durante as sessões,
              observamos principalmente se os participantes compreendiam a organização das
              informações, a lógica de compatibilidade das vagas e quais elementos da interface
              pareciam interativos.
            </p>
            <p className="np-processo-text">
              Os resultados indicaram que a proposta geral era compreensível, mas revelaram
              dificuldades importantes: alguns participantes não entenderam completamente quais
              critérios justificavam o percentual de compatibilidade, elementos apenas
              informativos foram confundidos com botões e alguns termos profissionais geraram
              dúvidas. Ao final da avaliação, o protótipo alcançou 74/100 no SUS, indicando uma
              percepção geral satisfatória de usabilidade.
            </p>

            <div className="np-metrics-grid">
              <MetricCard value="3 de 5" label="não compreenderam completamente o match score" />
              <MetricCard value="2 de 5" label="tentaram interagir com elementos apenas informativos" />
              <MetricCard value="2 de 5" label="tiveram dúvidas sobre termos profissionais" />
              <MetricCard value="74/100" label="de pontuação média no SUS" />
            </div>
          </div>

          <div className="np-processo-block">
            <h3 className="np-processo-subtitle">redesign</h3>
            <p className="np-processo-text">
              Os testes mostraram que os principais problemas não estavam na estética geral da
              interface, mas em como algumas informações eram interpretadas. A partir desses
              achados, priorizei mudanças que tornassem a compatibilidade mais transparente,
              diferenciassem melhor informação de interação e facilitassem a compreensão de
              termos profissionais.
            </p>

            <div className="np-before-after-header">
              <span className="np-ba-label">Antes</span>
              <span className="np-ba-label np-ba-label--right">depois</span>
            </div>
            <div className="np-before-after-grid">
              <div className="np-ba-col">
                <div className="np-ba-card">
                  <img src={asset('antes1.png')} className="np-ba-image" alt="Tela inicial antes" style={{ objectFit: 'cover' }} />
                  <p className="np-ba-text">
                    O percentual aparecia em destaque, mas não deixava claro o que o número
                    representava ou quais fatores justificavam aquela recomendação. As tags de
                    habilidades também tinham bastante destaque visual e podiam ser confundidas
                    com botões.
                  </p>
                </div>
                <div className="np-ba-arrow">
                  <svg viewBox="0 0 27 21" fill="none" width="27" height="21">
                    <path d={svgPaths.arrow} fill="white" />
                  </svg>
                </div>
                <div className="np-ba-card">
                  <img src={asset('antes2.png')} className="np-ba-image" alt="Tela detalhes vaga antes" style={{ objectFit: 'cover' }} />
                  <p className="np-ba-text">
                    Na tela de detalhes, a compatibilidade aparecia sem explicar os critérios
                    considerados. Termos como CLT também eram apresentados sem apoio adicional,
                    e as tags continuavam com aparência semelhante à de elementos interativos.
                  </p>
                </div>
              </div>

              <div className="np-ba-col">
                <div className="np-ba-card">
                  <img src={asset('depois1.png')} className="np-ba-image" alt="Tela inicial depois" style={{ objectFit: 'cover' }} />
                  <p className="np-ba-text">
                    O score passou a ser identificado como "compatibilidade" e ganhou a opção
                    "Por quê?", que apresenta os principais fatores relacionados à recomendação.
                    As tags também foram suavizadas visualmente para reforçar seu caráter
                    informativo.
                  </p>
                </div>
                <div className="np-ba-arrow">
                  <svg viewBox="0 0 27 21" fill="none" width="27" height="21">
                    <path d={svgPaths.arrow} fill="white" />
                  </svg>
                </div>
                <div className="np-ba-card">
                  <img src={asset('depois2.png')} className="np-ba-image" alt="Tela detalhes vaga depois" style={{ objectFit: 'cover' }} />
                  <p className="np-ba-text">
                    Foi incluído o link "Entenda por quê" para detalhar a compatibilidade e um
                    ícone de ajuda ao lado de "CLT" para explicar o termo quando necessário. As
                    tags também perderam destaque visual para ficarem mais claramente associadas
                    à informação, e não à interação.
                  </p>
                </div>
              </div>
            </div>

            <p className="np-processo-text" style={{ marginTop: '24px' }}>
              Além das alterações diretamente relacionadas aos achados dos testes, aproveitei o
              redesign para melhorar o feedback de algumas ações importantes. Foram adicionados
              estados visuais e mensagens de confirmação para indicar de forma mais clara quando
              uma ação, como candidatar-se ou favoritar uma vaga, havia sido registrada.
            </p>

            <div className="np-confirmacao-card">
              <p className="np-confirmacao-label">Mensagens de confirmação — decisão de design</p>
              <div className="np-confirmacao-images">
                <img src={asset('popup1.png')} className="np-confirmacao-img" alt="Confirmação 1" style={{ objectFit: 'cover' }} />
                <img src={asset('popup2.png')} className="np-confirmacao-img" alt="Confirmação 2" style={{ objectFit: 'cover' }} />
                <img src={asset('popup3.png')} className="np-confirmacao-img" alt="Confirmação 3" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <p className="np-processo-text">
              O redesign tornou mais explícitos os elementos que haviam gerado dúvida durante os
              testes, principalmente a lógica de compatibilidade, a diferença entre informação e
              interação e alguns termos presentes nas vagas. Por se tratar de um projeto
              acadêmico, a nova versão não passou por um segundo ciclo de testes, portanto essas
              alterações representam soluções propostas a partir dos achados da primeira
              avaliação, e não melhorias quantitativamente comprovadas.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: APRENDIZADOS ── */}
      <section className="np-section">
        <div className="np-section-inner">
          <div className="np-section-label">
            <span className="np-section-num">07</span>
            <div className="np-section-line" />
          </div>
          <h2 className="np-section-heading np-section-heading--padded">Aprendizados</h2>

          <div className="np-learnings">
            <LearningItem
              number="01"
              title="O que parece claro para quem projeta pode não ser claro para quem usa"
              text="O percentual de compatibilidade parecia autoexplicativo durante o design, mas os testes mostraram que alguns usuários não entendiam quais fatores estavam por trás daquele número. Testar com outras pessoas mudou minha percepção sobre a interface."
            />
            <LearningItem
              number="02"
              title="Transparência também faz parte da experiência"
              text="Pequenos ajustes, como nomear melhor o score de compatibilidade e explicar por que uma vaga foi recomendada, impactaram diretamente a compreensão. O que parecia óbvio no protótipo não era óbvio para quem usava pela primeira vez."
            />
            <LearningItem
              number="03"
              title="Pequenas mudanças podem resolver problemas importantes"
              text="Nem todos os problemas exigiram novos fluxos ou grandes alterações. Ajustes de hierarquia, microtextos, tooltips e diferenciação visual entre informação e ação foram suficientes para tornar vários pontos da interface mais claros."
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 08: MEU PAPEL ── */}
      <section className="np-section np-section--alt np-section--last">
        <div className="np-section-inner">
          <div className="np-section-label">
            <span className="np-section-num">08</span>
            <div className="np-section-line" />
          </div>
          <h2 className="np-section-heading np-section-heading--padded">meu papel</h2>

          <div className="np-role-grid">
            <div className="np-role-text">
              <p className="np-role-body">
                O NextPath foi desenvolvido como um projeto acadêmico em um grupo de quatro
                pessoas. Participei junto ao grupo das etapas de pesquisa com usuários, análise
                dos dados, definição do problema, criação de personas e cenários, além do
                planejamento e realização dos testes de usabilidade.
              </p>
              <p className="np-role-body">
                Fui responsável individualmente pelo UX/UI Design do produto e pela construção
                do protótipo de alta fidelidade no Figma, incluindo a identidade visual,
                organização das informações, componentes e principais telas da aplicação. Após
                os testes, também conduzi o redesign da interface, transformando os problemas
                identificados em alterações concretas no produto.
              </p>
              <p className="np-role-note">
                O NextPath foi desenvolvido em grupo, com contribuições coletivas nas etapas de
                estratégia, conceituação, pesquisa e testes.
              </p>
            </div>

            <div className="np-role-skills">
              {["Pesquisa", "UX Design", "UI Design", "Prototipação", "Testes de usabilidade"].map((s) => (
                <div key={s} className="np-skill-item">
                  <span className="np-skill-dot" />
                  <span className="np-skill-name">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}