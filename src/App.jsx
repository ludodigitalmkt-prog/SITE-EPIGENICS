const BASE_URL = import.meta.env.BASE_URL

function App() {
  const heroImages = [
    `${BASE_URL}hero/hero-desktop-01.webp.png`,
    `${BASE_URL}hero/hero-desktop-02.webp.png`,
    `${BASE_URL}hero/hero-desktop-03.webp.png`,
  ]

  return (
    <main className="site">
      <Header />

      <section className="hero-section">
        <div className="paper-layer paper-layer-one"></div>
        <div className="paper-layer paper-layer-two"></div>

        <div className="container hero-grid">
          <div className="hero-content">
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
            </div>
          </div>

          <div className="hero-visual">
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
          <div className="section-heading">
            <span className="eyebrow">Como funciona</span>
            <h2>Uma experiência simples, elegante e orientada por dados.</h2>
            <p>
              O exame epigenético ajuda a ampliar a compreensão sobre o
              funcionamento do organismo, conectando ciência, estilo de vida e
              cuidado individualizado.
            </p>
          </div>

          <div className="feature-strip">
            <InfoItem title="Coleta orientada" text="Processo simples, com acompanhamento e direcionamento claro." />
            <InfoItem title="Análise epigenética" text="Informações que ajudam a entender sinais do organismo." />
            <InfoItem title="Plano personalizado" text="Resultados usados para apoiar estratégias de saúde." />
            <InfoItem title="Acompanhamento" text="Mais clareza para conduzir mudanças de rotina." />
          </div>
        </div>
      </section>

      <section className="section cards-section">
        <div className="container">
          <div className="section-heading left">
            <span className="eyebrow">Áreas avaliadas</span>
            <h2>Um olhar completo para o seu equilíbrio.</h2>
          </div>

          <div className="cards-grid">
            <FeatureCard
              number="01"
              title="Metabolismo"
              text="Apoio para entender energia, composição corporal e resposta alimentar."
            />

            <FeatureCard
              number="02"
              title="Inflamação"
              text="Avaliação de fatores relacionados ao equilíbrio inflamatório."
            />

            <FeatureCard
              number="03"
              title="Sono"
              text="Informações que ajudam a observar qualidade do descanso e recuperação."
            />

            <FeatureCard
              number="04"
              title="Performance"
              text="Direcionamento para rotina, disposição, foco e vitalidade."
            />

            <FeatureCard
              number="05"
              title="Nutrição"
              text="Base para condutas mais alinhadas à necessidade individual."
            />

            <FeatureCard
              number="06"
              title="Prevenção"
              text="Mais consciência para decisões de saúde a longo prazo."
            />
          </div>
        </div>
      </section>

      <section className="section image-text-section">
        <div className="container image-text-grid">
          <div className="image-stack">
            <img src={heroImages[1]} alt="Tecnologia e saúde Epigenics" />
          </div>

          <div className="content-card">
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
          <div className="cta-card">
            <div>
              <span className="eyebrow">Agende sua avaliação</span>
              <h2>Comece a entender seu corpo de forma mais personalizada.</h2>
              <p>
                Fale com a equipe da Epigenics e saiba como o exame pode fazer
                parte da sua jornada de saúde.
              </p>
            </div>

            <a className="btn-primary" href="https://wa.me/5500000000000" target="_blank">
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
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

function InfoItem({ title, text }) {
  return (
    <article className="info-item">
      <div className="mini-icon"></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function FeatureCard({ number, title, text }) {
  return (
    <article className="feature-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default App