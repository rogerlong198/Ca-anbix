/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center">
            <svg viewBox="0 0 400 120" className="h-10 md:h-14 object-contain rounded shadow-sm" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="120" fill="#FF6B00" />
              <g transform="skewX(-12)">
                <text x="70" y="70" fontFamily="system-ui, -apple-system, sans-serif" fontSize="56" fontWeight="900" fill="#FFFFFF">LOCA</text>
                <text x="225" y="70" fontFamily="system-ui, -apple-system, sans-serif" fontSize="56" fontWeight="900" fill="#3B3E42">BEM</text>
                <text x="75" y="105" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="800" letterSpacing="8" fill="#FFFFFF">CAÇAMBAS</text>
              </g>
              <g transform="translate(285, 75) scale(1.5)" fill="#3B3E42">
                <polygon points="0,0 30,0 26,12 4,12" />
                <rect x="2" y="13" width="40" height="3" rx="1" />
                <path d="M32,4 L40,4 L43,9 L43,12 L32,12 Z" />
                <polygon points="34,6 39,6 41,9 34,9" fill="#FF6B00" />
                <circle cx="8" cy="18" r="3" />
                <circle cx="16" cy="18" r="3" />
                <circle cx="24" cy="18" r="3" />
                <circle cx="38" cy="18" r="3" />
              </g>
            </svg>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-xs font-bold text-primary border-b-2 border-primary" href="#">INÍCIO</a>
            <a className="font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-xs font-bold text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">SOBRE NÓS</a>
            <a className="font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-xs font-bold text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">SERVIÇOS</a>
            <a className="font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-xs font-bold text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">DIFERENCIAIS</a>
            <a className="font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-xs font-bold text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">CONTATO</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <button className="bg-secondary-container text-on-secondary-fixed font-bold px-6 py-2.5 rounded-lg scale-95 duration-200 active:opacity-80 hover:bg-secondary-fixed-dim transition-all">
              Solicitar Agora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Caçamba de construção" className="w-full h-full object-cover" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wmremove-transformed.png-FpKMi40QUNhugzo9qQwIKxokLMGSfY.jpeg" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 md:px-12 py-20 md:py-32 flex-1 flex items-center">
          <div className="max-w-3xl">
            <span className="inline-block bg-secondary-container text-on-secondary-fixed text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">LÍDER EM LOGÍSTICA URBANA</span>
            <h1 className="font-headline text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Locação de Caçambas Atendemos Sua Região
            </h1>
            <p className="text-white/90 text-base md:text-xl font-light mb-8 md:mb-10 max-w-2xl leading-relaxed">
              Soluções eficientes para remoção de entulho com agilidade, sustentabilidade e o melhor custo-benefício do mercado industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary-container text-on-secondary-fixed font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl hover:bg-secondary-fixed-dim transition-all text-base md:text-lg shadow-xl shadow-black/10">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm text-white font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl hover:bg-white/10 transition-all text-base md:text-lg">
                Ver Tamanhos
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators Overlay */}
        <div className="relative z-10 bg-white/5 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-screen-2xl mx-auto px-8 py-6 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-container">bolt</span>
              </div>
              <div>
                <p className="font-bold">Entrega Rápida</p>
                <p className="text-xs text-white/60">Em até 24 horas úteis</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-container">payments</span>
              </div>
              <div>
                <p className="font-bold">Melhor Preço</p>
                <p className="text-xs text-white/60">Garantia de menor custo</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-container">gavel</span>
              </div>
              <div>
                <p className="font-bold">Descarte Legal</p>
                <p className="text-xs text-white/60">Certificado ambiental incluso</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre Nós Section */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl"></div>
              <p className="text-secondary font-label text-sm font-bold tracking-[0.2em] mb-4 uppercase">QUEM SOMOS</p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">Sobre Nós</h2>
              <p className="text-body text-on-surface-variant text-lg leading-relaxed mb-10">
                A Industrial Architecture nasceu da necessidade de modernizar a gestão de resíduos sólidos. Unimos tecnologia e logística pesada para oferecer uma experiência de locação fluida e transparente para construtoras e proprietários.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors cursor-default">
                  <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Conexão Inteligente</h4>
                    <p className="text-sm text-on-surface-variant">Otimização de rotas para menor impacto ambiental e maior rapidez.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors cursor-default">
                  <span className="material-symbols-outlined text-primary text-3xl">strategy</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Facilitação Estratégica</h4>
                    <p className="text-sm text-on-surface-variant">Gestão documental completa para grandes obras e empreendimentos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
              <img alt="Equipe Locabem" className="w-full h-full object-cover" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%284%29-Whb0SfaZRNAIbZfbCi2r7N0xVWN8li.png" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/90 backdrop-blur-md p-4 md:p-8 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center justify-center gap-3 md:gap-6">
                  <div className="text-2xl md:text-4xl font-black text-primary">+150</div>
                  <div className="text-[10px] md:text-sm font-medium text-on-surface-variant uppercase tracking-wider md:tracking-widest leading-tight">Parceiros<br />Ativos</div>
                  <div className="h-8 md:h-12 w-px bg-outline-variant"></div>
                  <div className="text-2xl md:text-4xl font-black text-primary">24h</div>
                  <div className="text-[10px] md:text-sm font-medium text-on-surface-variant uppercase tracking-wider md:tracking-widest leading-tight">Suporte<br />Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Sizes Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-secondary font-label text-sm font-bold tracking-[0.2em] mb-4 uppercase">CATÁLOGO</p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight">Aluguel de Caçamba</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Size Card 1 - 3.000 Litros */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-secondary-container">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img alt="Caçamba 3.000 Litros" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-black bg-surface-container px-3 py-1 rounded-full text-primary tracking-widest uppercase">Residencial</span>
              <h3 className="text-3xl font-black text-primary mt-4 mb-2">3.000 Litros</h3>
              <p className="text-on-surface-variant text-sm mb-4">Ideal para reformas pequenas e entulho leve doméstico.</p>
              <p className="text-on-surface-variant text-xs mb-8 font-medium">Dimensões: 2,20m x 1,30m</p>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-sm text-on-surface-variant mb-2">A partir de</span>
                <span className="text-3xl font-black text-primary">R$ 199,99</span>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Alugar Agora
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Size Card 2 (Premium) - 5.000 Litros */}
            <div className="bg-primary p-8 rounded-[2rem] shadow-2xl scale-105 relative z-10 border-4 border-secondary-container">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-container text-on-secondary-fixed text-[10px] font-black px-6 py-1 rounded-full uppercase tracking-widest shadow-lg">MAIS POPULAR</div>
              <div className="mb-6 overflow-hidden rounded-xl">
                <img alt="Caçamba 5.000 Litros" className="w-full h-48 object-cover opacity-90" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-black bg-white/10 px-3 py-1 rounded-full text-secondary-container tracking-widest uppercase">Comercial</span>
              <h3 className="text-3xl font-black text-white mt-4 mb-2">5.000 Litros</h3>
              <p className="text-white/70 text-sm mb-4">O tamanho perfeito para obras médias e remoção de solo.</p>
              <p className="text-white/50 text-xs mb-8 font-medium">Dimensões: 2,65m x 1,76m x 1,39m</p>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-sm text-white/60 mb-2">A partir de</span>
                <span className="text-3xl font-black text-secondary-container">R$ 249,99</span>
              </div>
              <button className="w-full bg-secondary-container text-on-secondary-fixed font-bold py-4 rounded-xl hover:bg-secondary-fixed-dim transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/20">
                Alugar Agora
                <span className="material-symbols-outlined text-sm">shopping_cart</span>
              </button>
            </div>

            {/* Size Card 3 - 7.000 Litros */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-secondary-container">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img alt="Caçamba 7.000 Litros" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=400&h=300&fit=crop" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-black bg-surface-container px-3 py-1 rounded-full text-primary tracking-widest uppercase">Industrial</span>
              <h3 className="text-3xl font-black text-primary mt-4 mb-2">7.000 Litros</h3>
              <p className="text-on-surface-variant text-sm mb-4">Máxima capacidade para grandes demolições e logística pesada.</p>
              <p className="text-on-surface-variant text-xs mb-8 font-medium">Dimensões: 3,50m x 1,74m x 1,55m</p>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-sm text-on-surface-variant mb-2">A partir de</span>
                <span className="text-3xl font-black text-primary">R$ 389,99</span>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Alugar Agora
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="text-secondary-container font-label text-sm font-bold tracking-[0.2em] mb-4 uppercase">DIFERENCIAIS</p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight">Por que escolher a LOCABEM?</h2>
            </div>
            <div className="hidden md:block h-px bg-white/20 flex-1 mx-12 mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary-container group-hover:text-on-secondary-fixed transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">group_work</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Rede de Parceiros</h4>
              <p className="text-white/60 leading-relaxed">Conexão com os melhores transportadores licenciados em cada microrregião.</p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary-container group-hover:text-on-secondary-fixed transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">schedule</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Pontualidade</h4>
              <p className="text-white/60 leading-relaxed">Sistema de monitoramento em tempo real para garantir que sua obra não pare.</p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary-container group-hover:text-on-secondary-fixed transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Segurança</h4>
              <p className="text-white/60 leading-relaxed">Todos os descartes acompanham CTR (Controle de Transporte de Resíduos).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-24 bg-surface-container-high relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Ao Vivo</span>
            </div>
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">Atendimento na Sua Região</h2>
            <p className="text-body text-on-surface-variant text-lg mb-10 leading-relaxed">
              Operamos em toda a região metropolitana com logística descentralizada. Verifique agora a disponibilidade para o seu CEP e receba uma proposta personalizada via WhatsApp em segundos.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-outline-variant/15">
              <h3 className="font-bold text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">search_check</span>
                Verifique a Disponibilidade
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <input className="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-surface-container text-on-surface focus:ring-2 focus:ring-primary transition-all" placeholder="Digite seu CEP (ex: 01001-000)" type="text" />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">location_searching</span>
                </div>
                <button className="w-full bg-[#25D366] text-white font-black py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 text-lg">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.228 3.481 8.405c0 6.556-5.333 11.888-11.888 11.888-2.022 0-4.005-.515-5.756-1.493l-6.228 1.717zm6.416-4.103l.46.273c1.472.873 3.178 1.335 4.922 1.335 5.176 0 9.388-4.212 9.388-9.388 0-2.508-.976-4.866-2.748-6.638s-4.13-2.748-6.639-2.748c-5.176 0-9.388 4.212-9.388 9.388 0 1.785.507 3.525 1.467 5.013l.3.468-.991 3.621 3.714-.972zm10.124-6.837c-.244-.122-1.444-.712-1.667-.794-.223-.082-.385-.122-.547.122-.162.244-.629.794-.771.957-.142.162-.284.183-.528.061-.244-.122-1.029-.38-1.961-1.21-.724-.647-1.213-1.445-1.354-1.688-.142-.244-.015-.376.107-.497.111-.109.244-.284.365-.427.122-.142.162-.244.244-.407.082-.162.041-.305-.021-.427-.061-.122-.547-1.32-.75-1.808-.198-.476-.399-.411-.547-.419-.141-.007-.305-.008-.468-.008-.162 0-.427.061-.649.305-.223.244-.853.834-.853 2.035 0 1.201.874 2.36 1.016 2.543.142.183 1.721 2.628 4.169 3.684.582.251 1.036.401 1.391.514.585.187 1.117.16 1.538.098.469-.069 1.444-.59 1.647-1.159.203-.569.203-1.057.142-1.159-.061-.102-.223-.162-.468-.284z"></path></svg>
                  Consultar via WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <div className="absolute inset-0 bg-surface-container" data-location="São Paulo">
              <img alt="Coverage Map" className="w-full h-full object-cover grayscale opacity-30" src="https://picsum.photos/seed/map/800/600" referrerPolicy="no-referrer" />
            </div>
            {/* Interactive Point Markers Mockup */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full"></div>
            <div className="absolute bottom-1/2 right-1/4 w-4 h-4 bg-secondary-container rounded-full animate-ping"></div>
            <div className="absolute bottom-1/2 right-1/4 w-4 h-4 bg-secondary-container rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">location_city</span>
                <p className="font-bold text-primary">Atendimento em<br />São Paulo e Região</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2D32] text-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-screen-2xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-black italic tracking-tight text-primary mb-4 block">
              LOCA<span className="text-white">BEM</span>
            </span>
            <p className="font-['Inter'] text-sm leading-relaxed text-gray-400 mb-8">
              Soluções sustentáveis em gestão de resíduos e logística urbana de alto desempenho.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Navegação</h5>
            <ul className="space-y-4 font-['Inter'] text-sm">
              <li><a className="text-gray-400 hover:text-primary transition-all" href="#">Início</a></li>
              <li><a className="text-gray-400 hover:text-primary transition-all" href="#">Sobre Nós</a></li>
              <li><a className="text-gray-400 hover:text-primary transition-all" href="#">Nossos Serviços</a></li>
              <li><a className="text-gray-400 hover:text-primary transition-all" href="#">Diferenciais</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Suporte</h5>
            <ul className="space-y-4 font-['Inter'] text-sm">
              <li><a className="text-gray-400 hover:text-primary transition-all" href="#">Privacidade</a></li>
              <li><a className="text-gray-400 hover:text-primary transition-all" href="#">Termos</a></li>
              <li><a className="text-gray-400 hover:text-primary transition-all" href="#">Cookies</a></li>
              <li><a className="text-gray-400 hover:text-primary transition-all" href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Contato</h5>
            <ul className="space-y-4 font-['Inter'] text-sm">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                contato@locabem.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                0800 000 0000
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm">home_pin</span>
                <span>Av. Industrial, 1000<br />São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8 px-12">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2024 Locabem Caçambas. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a className="hover:text-white transition-colors" href="#">Privacidade</a>
              <a className="hover:text-white transition-colors" href="#">Termos</a>
              <a className="hover:text-white transition-colors" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
