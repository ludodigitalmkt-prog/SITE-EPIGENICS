import { useEffect } from 'react'

const BASE_URL = import.meta.env.BASE_URL

function App() {
  const heroImages = [
    `${BASE_URL}hero/hero-desktop-01.webp.png`,
    `${BASE_URL}hero/hero-desktop-02.webp.png`,
    `${BASE_URL}hero/hero-desktop-03.webp.png`,
  ]

  const processImages = [
    `${BASE_URL}sections/section-coleta-exame.webp.png`,
    `${BASE_URL}sections/section-exame-epigenetico.webp.png`,
    `${BASE_URL}sections/section-medicina-personalizada.webp.png`,
    `${BASE_URL}sections/section-seguranca-exame.webp.png`,
  ]

  const aboutImage = `${BASE_URL}sections/section-sobre-epigenics.webp.png`

  const evaluationImages = [
    `${BASE_URL}sections/section-exame-epigenetico.webp.png`,
    `${BASE_URL}sections/section-seguranca-exame.webp.png`,
    `${BASE_URL}sections/section-medicina-personalizada.webp.png`,
    `${BASE_URL}sections/section-coleta-exame.webp.png`,
    `${BASE_URL}sections/section-sobre-epigenics.webp.png`,
    `${BASE_URL}hero/hero-desktop-02.webp.png`,
  ]

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.16,
      }
    )

    elements.forEach(element => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main className="site">
      <Header />

      <section className="hero-section">
        <div className="paper-layer paper-layer-one"></div>
        <div className="paper-layer paper-layer-two"></div>

        <div className="container hero-grid">
          <div className="hero-content reveal">
            <span className="eyebrow">Medicina personalizada</span>

            <h1>
              Entenda seu corpo em um nível mais profundo com a Epigenics.
            </h1>

            <p>
              Um exame moderno que ajuda a observar fatores relacionados ao
              metabolismo, energia, sono, inflamação, estilo de vida e
              bem-estar, trazendo mais clareza para decisões de saúde.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#contato">
                Quero saber mais
              </a>

              <a className="btn-secondary" href="#como-funciona">
                Como funciona
              </a>

              <a className="btn-secondary" href={`${BASE_URL}simulador.html`}>
                Fazer simulação
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="image-card main-image-card">
              <img src={heroImages[0]} alt="Epigenics exame personalizado" />
            </div>

            <div className="floating-card card-top">
              <span className="icon-circle">DNA</span>
              <strong>Visão personalizada</strong>
              <small>Análise pensada para a individualidade do corpo.</small>
            </div>

            <div className="floating-card card-bottom">
              <span className="icon-circle">BIO</span>
              <strong>Saúde e prevenção</strong>
              <small>Mais consciência sobre hábitos e equilíbrio.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="como-funciona">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Como funciona</span>
            <h2>Uma experiência simples, elegante e orientada por dados.</h2>
            <p>
              O exame epigenético ajuda a ampliar a compreensão sobre o
              funcionamento do organismo, conectando ciência, estilo de vida e
              cuidado individualizado.
            </p>
          </div>

          <div className="process-panel reveal">
            <InfoItem
              image={processImages[0]}
              title="Coleta orientada"
              text="Processo simples, com acompanhamento e direcionamento claro."
            />

            <InfoItem
              image={processImages[1]}
              title="Análise epigenética"
              text="Informações que ajudam a entender sinais do organismo."
            />

            <InfoItem
              image={processImages[2]}
              title="Plano personalizado"
              text="Resultados usados para apoiar estratégias de saúde."
            />

            <InfoItem
              image={processImages[3]}
              title="Segurança no exame"
              text="Mais confiança durante toda a jornada de avaliação."
            />
          </div>
        </div>
      </section>

      <section className="section cards-section">
        <div className="container">
          <div className="section-heading left reveal">
            <span className="eyebrow">Áreas avaliadas</span>
            <h2>Um olhar completo para o seu equilíbrio.</h2>
          </div>

          <div className="cards-grid">
            <FeatureCard
              image={evaluationImages[0]}
              number="01"
              title="Metabolismo"
              text="Apoio para entender energia, composição corporal e resposta alimentar."
            />

            <FeatureCard
              image={evaluationImages[1]}
              number="02"
              title="Inflamação"
              text="Avaliação de fatores relacionados ao equilíbrio inflamatório."
            />

            <FeatureCard
              image={evaluationImages[2]}
              number="03"
              title="Sono"
              text="Informações que ajudam a observar qualidade do descanso e recuperação."
            />

            <FeatureCard
              image={evaluationImages[3]}
              number="04"
              title="Performance"
              text="Direcionamento para rotina, disposição, foco e vitalidade."
            />

            <FeatureCard
              image={evaluationImages[4]}
              number="05"
              title="Nutrição"
              text="Base para condutas mais alinhadas à necessidade individual."
            />

            <FeatureCard
              image={evaluationImages[5]}
              number="06"
              title="Prevenção"
              text="Mais consciência para decisões de saúde a longo prazo."
            />
          </div>
        </div>
      </section>

      <section className="section image-text-section">
        <div className="container image-text-grid">
          <div className="image-stack reveal">
            <img src={aboutImage} alt="Sobre a Epigenics" />
          </div>

          <div className="content-card reveal">
            <span className="eyebrow">Tecnologia + saúde</span>
            <h2>Um exame para quem busca cuidado mais inteligente.</h2>
            <p>
              A Epigenics une ciência, análise e personalização para apoiar um
              atendimento mais preciso. O objetivo é sair do genérico e
              compreender melhor o que o corpo realmente pode estar sinalizando.
            </p>

            <ul>
              <li>Mais clareza sobre hábitos e estilo de vida.</li>
              <li>Apoio para condutas mais personalizadas.</li>
              <li>Visão preventiva e integrada da saúde.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contato">
        <div className="container">
          <div className="cta-card reveal">
            <div>
              <span className="eyebrow">Agende sua avaliação</span>
              <h2>Comece a entender seu corpo de forma mais personalizada.</h2>
              <p>
                Fale com a equipe da Epigenics e saiba como o exame pode fazer
                parte da sua jornada de saúde.
              </p>
            </div>

            <a
              className="btn-primary"
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#">
          <img src={`${BASE_URL}logo/favicon.png`} alt="Epigenics" />
          <span>Epigenics</span>
        </a>

        <nav>
          <a href="#como-funciona">Como funciona</a>
          <a href={`${BASE_URL}simulador.html`}>Simulador</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

function InfoItem({ image, title, text }) {
  return (
    <article className="info-item">
      <div className="info-image-wrap">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function FeatureCard({ image, number, title, text }) {
  return (
    <article className="feature-card reveal">
      <div className="feature-image-wrap">
        <img src={image} alt={title} />
      </div>

      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default App