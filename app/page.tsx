"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Calendar, MapPin, Phone, Mail, Instagram, Facebook, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-auto py-2 md:py-0 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-mais-volei-brasilia.png"
                alt="Logo Mais Vôlei Brasília"
                width={80}
                height={80}
                className={`h-40 w-auto sm:h-32 md:h-32 transition-all duration-500 ${isLoaded ? "bounce-in" : "opacity-0"}`}
                priority
              />
              <span
                className={`hidden sm:inline-block ml-2 text-2xl md:text-3xl lg:text-4xl team-name transition-all duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
              >
                Mais Vôlei Brasília
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#sobre"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#equipe"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Equipe
            </Link>
            <Link
              href="#agenda"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Agenda
            </Link>
            <Link
              href="#galeria"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Galeria
            </Link>
            <Link
              href="#contato"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </Link>
            <Link
              href="/transparencia"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Transparência
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90">Junte-se a nós</Button>
            <button className="md:hidden p-2 text-primary" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">
            <nav className="container flex flex-col py-4">
              <Link
                href="#sobre"
                className="py-3 px-4 text-sm font-medium hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#equipe"
                className="py-3 px-4 text-sm font-medium hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Equipe
              </Link>
              <Link
                href="#agenda"
                className="py-3 px-4 text-sm font-medium hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agenda
              </Link>
              <Link
                href="#galeria"
                className="py-3 px-4 text-sm font-medium hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galeria
              </Link>
              <Link
                href="#contato"
                className="py-3 px-4 text-sm font-medium hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="/transparencia"
                className="py-3 px-4 text-sm font-medium hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Transparência
              </Link>
              <div className="px-4 pt-3">
                <Button className="w-full bg-primary hover:bg-primary/90">Junte-se a nós</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-24 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl text-primary">
                    Mais Vôlei Brasília
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                    Centro de formação de cidadãos e atletas de voleibol, fundada em 2014.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold">
                    Somos raça e tradição, somos "MAIS VÔLEI"
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                  <Button className="bg-primary hover:bg-primary/90">Conheça nossa equipe</Button>
                  <Button variant="outline" className="border-secondary text-secondary hover:text-secondary-foreground">
                    Agenda de jogos
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[400px] lg:max-w-none order-first lg:order-last">
                <Image
                  src="/placeholder.svg?key=m93i2"
                  width={550}
                  height={550}
                  alt="Equipe Mais Vôlei Brasília em ação"
                  className="w-full h-auto aspect-square rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary section-title">
                  Sobre Nós
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto pt-4">
                  O MAIS VÔLEI vem desenvolvendo suas atividades na prática da modalidade voleibol para mais de 80
                  atletas femininas, das categorias iniciantes, até a categoria adulta. Referência no cenário do
                  voleibol da capital, O MAIS VÔLEI vem desempenhado um papel relevante a nível competitivo.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto">
                  Vale destacar também, o compromisso na formação de pessoas, com princípios e valores tais como:
                  honestidade, ética e espírito de equipe. Pois os atletas não são referências somente dentro das
                  quadras, mas também fora delas.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary">Missão</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Formar atletas de excelência e promover o vôlei como ferramenta de transformação social.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary">Visão</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Ser referência nacional na formação de atletas e na promoção do vôlei em Brasília.
                  </p>
                </div>
                <div className="grid gap-1 sm:col-span-2 lg:col-span-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary">Valores</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Honestidade, ética, espírito de equipe, disciplina e paixão pelo esporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="equipe" className="w-full py-8 md:py-16 lg:py-24 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary section-title">
                  Nossa Equipe
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto pt-4">
                  Conheça as atletas e a comissão técnica que fazem o Mais Vôlei Brasília acontecer.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 md:gap-8 py-8 md:py-12 grid-cols-2 md:grid-cols-3">
                {[
                  { name: "Ana Silva", position: "Levantadora" },
                  { name: "Carlos Oliveira", position: "Técnico" },
                  { name: "Juliana Santos", position: "Ponteira" },
                  { name: "Marcos Lima", position: "Preparador Físico" },
                  { name: "Patrícia Costa", position: "Líbero" },
                  { name: "Roberto Alves", position: "Assistente Técnico" },
                ].map((member, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 group">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-secondary/20 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={`/placeholder.svg?key=9qyby&key=88swl&key=gzo6k&height=200&width=200&query=jogador de volei ${index + 1}`}
                        width={200}
                        height={200}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold font-bebas">{member.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="agenda" className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary section-title">
                  Agenda de Jogos
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto pt-4">
                  Confira os próximos jogos e eventos da nossa equipe.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-4 md:gap-8 py-8 md:py-12 lg:grid-cols-1">
                {[
                  { date: "15/05/2025", opponent: "Brasília Vôlei", location: "Ginásio do Cruzeiro", time: "19:00" },
                  { date: "22/05/2025", opponent: "Taguatinga Vôlei", location: "Ginásio da Asa Norte", time: "20:00" },
                  {
                    date: "29/05/2025",
                    opponent: "Gama Esporte Clube",
                    location: "Ginásio do Cruzeiro",
                    time: "19:00",
                  },
                  { date: "05/06/2025", opponent: "Águas Claras VC", location: "Ginásio da Asa Sul", time: "18:30" },
                ].map((game, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-4 items-center border p-4 rounded-lg hover:border-secondary transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center gap-2 sm:w-1/4">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                      <span className="text-sm sm:text-base">
                        {game.date} - {game.time}
                      </span>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold font-bebas">
                        Mais Vôlei Brasília vs {game.opponent}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                      <span className="text-sm sm:text-base">{game.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="w-full py-8 md:py-16 lg:py-24 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary section-title">
                  Galeria
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto pt-4">
                  Momentos marcantes da nossa equipe em quadra e fora dela.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 py-8 md:py-12 grid-cols-2 md:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border-2 border-secondary/30 hover:border-secondary transition-all duration-300 group"
                  >
                    <Image
                      src={`/placeholder.svg?key=ufd2q&key=7cyqe&key=a5lxj&height=300&width=400&query=voleibol feminino jogo ${index + 1}`}
                      width={400}
                      height={300}
                      alt={`Momento da equipe Mais Vôlei Brasília ${index + 1}`}
                      className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-64 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary section-title">
                  Entre em Contato
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto pt-4">
                  Quer saber mais sobre nossa equipe ou tem interesse em fazer parte do Mais Vôlei Brasília? Entre em
                  contato conosco!
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-8 md:py-12 md:grid-cols-2">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                    <span className="text-sm sm:text-base">(61) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                    <span className="text-sm sm:text-base">contato@maisvoleibraisilia.com.br</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                    <span className="text-sm sm:text-base">Ginásio do Cruzeiro, Brasília - DF</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                    <Link href="https://instagram.com" className="text-primary hover:text-primary/80 transition-colors">
                      <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://facebook.com" className="text-primary hover:text-primary/80 transition-colors">
                      <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Sua mensagem"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bebas text-base">
                    Enviar mensagem
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <Image
                src="/images/logo-mais-volei-brasilia.png"
                alt="Logo Mais Vôlei Brasília"
                width={60}
                height={60}
                className="h-10 w-auto sm:h-12"
              />
              <p className="text-xs sm:text-sm text-center md:text-left">
                © 2025 Mais Vôlei Brasília. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-xs sm:text-sm hover:underline">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-xs sm:text-sm hover:underline">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
