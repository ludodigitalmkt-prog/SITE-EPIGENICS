import React from 'react'

const WHATSAPP = '5541999999999'

const A = {
  logo: '/logo/favicon.png',
  logoWhite: '/logo/favicon.png',
  logoHorizontal: '/logo/favicon.png',
  icon: '/logo/favicon.png',

  heroDesktop: [
    '/hero/hero-desktop-01.webp.png',
    '/hero/hero-desktop-02.webp.png',
    '/hero/hero-desktop-03.webp.png',
  ],

  heroMobile: [
    '/hero/hero-desktop-01.webp.png',
    '/hero/hero-desktop-02.webp.png',
    '/hero/hero-desktop-03.webp.png',
  ],

  sections: {
    sobre: '/sections/section-sobre-epigenics.webp.png',
    exame: '/sections/section-exame-epigenetico.webp.png',
    coleta: '/sections/section-coleta-exame.webp.png',
    seguranca: '/sections/section-seguranca-exame.webp.png',
    medicina: '/sections/section-medicina-personalizada.webp.png',
  },

  cards: {
    coleta: '/cards/card-coleta-segura.webp.png',
    analise: '/cards/card-analise-personalizada.webp.png',
    tecnologia: '/cards/card-tecnologia-avancada.webp.png',
    prevencao: '/cards/card-prevencao-bem-estar.webp.png',
    resultados: '/sections/section-seguranca-exame.webp.png',
    cuidado: '/cards/card-cuidado-individualizado.webp.png',
  },

  decor: {
    dna1: '/decor/dna-3d-01.png',
    dna2: '/decor/dna-3d-02.png',
    linha1: '/decor/linha-dourada-01.png',
    linha2: '/decor/linha-dourada-02.png',
    particulas1: '/decor/particulas-cientificas-01.png',
    particulas2: '/decor/particulas-cientificas-02.png',
  },

  people: {
    coleta: '/people/atendimento-coleta-01.webp.png',
    paciente: '/people/paciente-clinica-01.webp.png',
    dados: '/people/profissional-dados-01.webp.png',
  },
}

function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="brand" aria-label="Epigenics">
        <img src={A.logoHorizontal} alt="Epigenics" />
        <span>Epigenics</span>
      </a>

      <nav className="nav">
        <a href="#sobre">Sobre</a>
        <a href="#exame">O exame</a>
        <a href="#coleta">Coleta</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#contato">Contato</a>
      </nav>

      <a
        className="btn btn-header"
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
      >
        Fale conosco
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        {A.heroDesktop.map((img, index) => (
          <img
            key={img}
            src={img}
            alt=""
            className="hero-bg-img"
            style={{ animationDelay: `${index * 5}s` }}
          />
        ))}
      </div>

      <div className="hero-filter" />

      <div className="container hero-inner">
        <div className="hero-text">
          <span className="tag">Ciência • Tecnologia • Saúde personalizada</span>

          <h1>
            Uma nova forma de compreender o seu organismo.
          </h1>

          <p>
            A Epigenics une ciência, inovação e cuidado personalizado para transformar
            informações biológicas em decisões mais conscientes sobre saúde e qualidade de vida.
          </p>

          <div className="hero-actions">
            <a
              className="btn"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              Agendar atendimento
            </a>

            <a className="btn btn-light" href="#exame">
              Conhecer o exame
            </a>
          </div>
        </div>

        <div className="hero-card">
          <img src={A.logo} alt="Epigenics" className="hero-logo" />
          <p>Medicina personalizada com base em ciência, tecnologia e cuidado individual.</p>
        </div>
      </div>

      <img className="decor-dna decor-dna-one" src={A.decor.dna1} alt="" />
      <img className="decor-line" src={A.decor.linha1} alt="" />
    </section>
  )
}

function Intro() {
  return (
    <section className="intro" id="sobre">
      <div className="container intro-grid">
        <article className="intro-main">
          <span className="tag">Epigenics</span>
          <h2>Saúde personalizada começa pelo conhecimento.</h2>
          <p>
            A Epigenics conecta ciência, análise biológica e cuidado individualizado para
            apoiar uma visão mais clara sobre o organismo e suas necessidades.
          </p>
        </article>

        <article className="intro-item">
          <strong>01</strong>
          <h3>Coleta simples e segura</h3>
        </article>

        <article className="intro-item">
          <strong>02</strong>
          <h3>Análise com foco no indivíduo</h3>
        </article>

        <article className="intro-item">
          <strong>03</strong>
          <h3>Resultados para apoiar o cuidado</h3>
        </article>
      </div>
    </section>
  )
}

function SplitSection({ id, tag, title, text, image, reverse }) {
  return (
    <section className={`split ${reverse ? 'split-reverse' : ''}`} id={id}>
      <div className="container split-grid">
        <div className="split-text">
          <span className="tag">{tag}</span>
          <h2>{title}</h2>
          <p>{text}</p>

          <a className="link" href="#contato">
            Quero saber mais
          </a>
        </div>

        <div className="split-image-card">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  const benefits = [
    {
      title: 'Coleta segura',
      text: 'Processo prático, confortável e pensado para preservar a qualidade da análise.',
      img: A.cards.coleta,
    },
    {
      title: 'Análise personalizada',
      text: 'Informações direcionadas para compreender melhor as respostas individuais do organismo.',
      img: A.cards.analise,
    },
    {
      title: 'Tecnologia avançada',
      text: 'Um olhar moderno sobre marcadores biológicos e estratégias de cuidado.',
      img: A.cards.tecnologia,
    },
    {
      title: 'Prevenção e bem-estar',
      text: 'Dados que podem apoiar escolhas mais conscientes para rotina e qualidade de vida.',
      img: A.cards.prevencao,
    },
    {
      title: 'Resultados confiáveis',
      text: 'Uma experiência estruturada para trazer clareza, segurança e direcionamento.',
      img: A.cards.resultados,
    },
    {
      title: 'Cuidado individualizado',
      text: 'Porque cada pessoa possui uma história, um organismo e necessidades próprias.',
      img: A.cards.cuidado,
    },
  ]

  return (
    <section className="benefits" id="beneficios">
      <div className="container">
        <div className="section-title">
          <span className="tag">Benefícios</span>
          <h2>O exame como ferramenta de conhecimento e cuidado.</h2>
          <p>
            Uma proposta que une tecnologia, acolhimento e ciência para tornar o cuidado
            mais inteligente e individualizado.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((item) => (
            <article className="benefit-card" key={item.title}>
              <div className="benefit-image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="benefit-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    {
      number: '01',
      title: 'Agendamento',
      text: 'Você entra em contato e recebe as orientações iniciais para realizar o exame.',
    },
    {
      number: '02',
      title: 'Coleta',
      text: 'A coleta é feita com segurança, cuidado e conforto para o paciente.',
    },
    {
      number: '03',
      title: 'Análise',
      text: 'As informações são avaliadas com foco na individualidade biológica.',
    },
    {
      number: '04',
      title: 'Direcionamento',
      text: 'O resultado apoia decisões mais assertivas sobre saúde, bem-estar e rotina.',
    },
  ]

  return (
    <section className="process" id="coleta">
      <div className="container process-grid">
        <div className="process-image">
          <img src={A.sections.coleta} alt="Coleta do exame Epigenics" />
        </div>

        <div className="process-content">
          <span className="tag tag-light">Como funciona</span>
          <h2>Uma experiência simples, segura e bem orientada.</h2>

          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step.number}>
                <strong>{step.number}</strong>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Authority() {
  return (
    <section className="authority">
      <div className="container authority-grid">
        <div className="authority-card">
          <img src={A.people.dados} alt="Profissional analisando dados" />
        </div>

        <div className="authority-text">
          <span className="tag">Ciência aplicada</span>
          <h2>Dados que ajudam a enxergar a saúde de forma mais individual.</h2>
          <p>
            A proposta da Epigenics é oferecer uma experiência premium, com linguagem clara,
            acolhimento e foco em informações que contribuam para decisões mais conscientes.
          </p>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta" id="contato">
      <img className="particles" src={A.decor.particulas2} alt="" />

      <div className="container">
        <div className="cta-box">
          <img src={A.logo} alt="Epigenics" className="cta-logo" />

          <h2>Pronto para conhecer uma nova forma de cuidar da sua saúde?</h2>

          <p>
            Fale com a Epigenics e entenda como o exame epigenético pode contribuir para uma
            abordagem mais personalizada do seu organismo.
          </p>

          <a
            className="btn"
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src={A.logoWhite} alt="Epigenics" />
            <span>Epigenics</span>
          </div>

          <p>Ciência, inovação e medicina personalizada.</p>
        </div>

        <div>
          <strong>Contato</strong>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="mailto:contato@epigenics.com.br">
            contato@epigenics.com.br
          </a>
        </div>

        <div>
          <strong>Navegação</strong>
          <a href="#sobre">Sobre</a>
          <a href="#exame">O exame</a>
          <a href="#coleta">Coleta</a>
          <a href="#beneficios">Benefícios</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Intro />

        <SplitSection
          id="exame"
          tag="Exame epigenético"
          title="Informações importantes sobre como seu organismo responde ao ambiente e à rotina."
          text="O exame epigenético auxilia na compreensão de fatores relacionados ao metabolismo, estilo de vida, predisposições e respostas individuais, apoiando uma visão mais personalizada do cuidado."
          image={A.sections.exame}
        />

        <SplitSection
          id="seguranca"
          tag="Segurança"
          title="Coleta com cuidado, orientação e responsabilidade em cada etapa."
          text="A experiência foi pensada para ser simples, confortável e segura, com atenção à qualidade da coleta e à confiabilidade das informações analisadas."
          image={A.sections.seguranca}
          reverse
        />

        <Benefits />

        <SplitSection
          id="personalizada"
          tag="Medicina personalizada"
          title="Porque cada pessoa possui uma biologia única."
          text="A Epigenics acredita em um cuidado mais inteligente, que considera a individualidade de cada organismo e transforma dados em orientação para uma vida mais equilibrada."
          image={A.sections.medicina}
        />

        <Process />
        <Authority />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}