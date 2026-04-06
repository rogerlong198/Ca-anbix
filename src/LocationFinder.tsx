import { useState, useEffect } from "react"

const ESTADOS_BRASIL = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
]

// Cidades mockadas por estado (principais)
const CIDADES_MOCK: Record<string, string[]> = {
  SP: ["São Paulo", "Campinas", "Santos", "Guarulhos", "São Bernardo do Campo", "Santo André", "Osasco", "Ribeirão Preto"],
  RJ: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu", "São Gonçalo", "Petrópolis"],
  MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"],
  PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"],
  RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"],
  SC: ["Florianópolis", "Joinville", "Blumenau", "Chapecó"],
  GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
  PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru"],
  CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú"],
}

export function LocationFinder() {
  const [step, setStep] = useState<"state" | "city" | "searching" | "found">("state")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [cidades, setCidades] = useState<string[]>([])
  const [stateSearch, setStateSearch] = useState("")
  const [citySearch, setCitySearch] = useState("")

  const estadoNome = ESTADOS_BRASIL.find(e => e.sigla === selectedState)?.nome || ""

  // Filtrar estados
  const filteredEstados = ESTADOS_BRASIL.filter(e =>
    e.nome.toLowerCase().includes(stateSearch.toLowerCase()) ||
    e.sigla.toLowerCase().includes(stateSearch.toLowerCase())
  )

  // Filtrar cidades
  const filteredCidades = cidades.filter(c =>
    c.toLowerCase().includes(citySearch.toLowerCase())
  )

  // Carregar cidades quando estado é selecionado
  useEffect(() => {
    if (selectedState) {
      const cidadesDoEstado = CIDADES_MOCK[selectedState] || ["Capital", "Interior"]
      setCidades(cidadesDoEstado)
    }
  }, [selectedState])

  // Timer de busca
  useEffect(() => {
    if (step === "searching") {
      const timer = setTimeout(() => setStep("found"), 3000)
      return () => clearTimeout(timer)
    }
  }, [step])

  const handleStateSelect = (sigla: string) => {
    setSelectedState(sigla)
    setStep("city")
  }

  const handleCitySelect = (cidade: string) => {
    setSelectedCity(cidade)
    setStep("searching")
  }

  const handleReset = () => {
    setStep("state")
    setSelectedState("")
    setSelectedCity("")
    setStateSearch("")
    setCitySearch("")
  }

  return (
    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-surface-container">
      {/* Background com imagem */}
      <div className="absolute inset-0">
        <img 
          alt="Mapa de cobertura" 
          className="w-full h-full object-cover grayscale opacity-30" 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop" 
          referrerPolicy="no-referrer" 
        />
      </div>

      {/* Pontos animados no mapa */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-secondary-container rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-secondary-container rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary/70 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary/70 rounded-full"></div>

      {/* Conteúdo central */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        
        {/* Tela 1: Selecionar Estado */}
        {step === "state" && (
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 w-full max-w-xs">
            <div className="text-center mb-4">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">location_on</span>
              <h3 className="font-bold text-primary text-lg">Selecione seu Estado</h3>
              <p className="text-sm text-on-surface-variant">Encontre a loja mais próxima</p>
            </div>
            
            <div className="relative mb-3">
              <input
                type="text"
                value={stateSearch}
                onChange={(e) => setStateSearch(e.target.value)}
                placeholder="Buscar estado..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container text-on-surface text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
            </div>

            <div className="max-h-48 overflow-y-auto space-y-1 custom-scrollbar">
              {filteredEstados.map((estado) => (
                <button
                  key={estado.sigla}
                  onClick={() => handleStateSelect(estado.sigla)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/10 transition-all flex items-center justify-between group"
                >
                  <span className="text-sm font-medium text-on-surface">{estado.nome}</span>
                  <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                    {estado.sigla}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tela 2: Selecionar Cidade */}
        {step === "city" && (
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 w-full max-w-xs">
            <button 
              onClick={() => setStep("state")}
              className="flex items-center gap-1 text-primary text-sm mb-4 hover:underline"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Voltar
            </button>

            <div className="text-center mb-4">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">location_city</span>
              <h3 className="font-bold text-primary text-lg">Selecione sua Cidade</h3>
              <p className="text-sm text-on-surface-variant">{estadoNome}</p>
            </div>
            
            <div className="relative mb-3">
              <input
                type="text"
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
                placeholder="Buscar cidade..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container text-on-surface text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
            </div>

            <div className="max-h-48 overflow-y-auto space-y-1 custom-scrollbar">
              {filteredCidades.map((cidade) => (
                <button
                  key={cidade}
                  onClick={() => handleCitySelect(cidade)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/10 transition-all flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-primary text-lg">apartment</span>
                  <span className="text-sm font-medium text-on-surface">{cidade}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tela 3: Buscando */}
        {step === "searching" && (
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-xs text-center">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="material-symbols-outlined text-primary text-3xl absolute inset-0 flex items-center justify-center">location_searching</span>
            </div>
            <h3 className="font-bold text-primary text-lg mb-2">Buscando lojas...</h3>
            <p className="text-sm text-on-surface-variant">
              {selectedCity}, {estadoNome}
            </p>
          </div>
        )}

        {/* Tela 4: Loja Encontrada */}
        {step === "found" && (
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 w-full max-w-xs text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
            </div>
            <h3 className="font-bold text-primary text-lg mb-2">
              Loja encontrada a 2,5 km!
            </h3>
            <p className="text-sm text-on-surface-variant mb-6">
              {selectedCity}, {estadoNome}
            </p>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5567981590991?text=Olá! Gostaria de informações sobre locação de caçambas na minha região." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.228 3.481 8.405c0 6.556-5.333 11.888-11.888 11.888-2.022 0-4.005-.515-5.756-1.493l-6.228 1.717zm6.416-4.103l.46.273c1.472.873 3.178 1.335 4.922 1.335 5.176 0 9.388-4.212 9.388-9.388 0-2.508-.976-4.866-2.748-6.638s-4.13-2.748-6.639-2.748c-5.176 0-9.388 4.212-9.388 9.388 0 1.785.507 3.525 1.467 5.013l.3.468-.991 3.621 3.714-.972z"></path>
                </svg>
                Falar com a Loja
              </a>
              <button 
                onClick={handleReset}
                className="w-full text-primary font-medium py-2 hover:underline text-sm"
              >
                Buscar outra região
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
