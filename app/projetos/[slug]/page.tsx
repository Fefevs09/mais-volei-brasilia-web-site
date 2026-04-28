"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";

interface ProjetoData {
  name: string;
  description: string;
  details: string;
  image: string;
  fotos?: { id: number; url: string; alt: string }[];
  sections?: { title: string; text: string }[];
}

const projetos: Record<string, ProjetoData> = {
  "projeto-inclusao": {
    name: "Projeto Mais Vôlei Transformando Vidas",
    description: "Desenvolvimento do voleibol em Brasília com foco em rendimento e social.",
    details:
      "O Projeto Inclusão visa integrar jovens através do vôlei, promovendo valores como disciplina e trabalho em equipe. Oferecemos aulas gratuitas para ajudar no desenvolvimento pessoal e esportivo.",
    image: "/images/maisvolei2.jpeg",
  },
  "queiroz-bjj": {
    name: "TEAM QUEIROZ BJJ",
    description: "Focado na formação de cidadãos e atletas de alto rendimento.",
    details:
      "A Team Queiroz BJJ é um projeto parceiro do Mais Vôlei Brasília dedicado à formação de atletas e cidadãos através das artes marciais. Com foco em disciplina, respeito e alto rendimento, o projeto atende crianças, jovens e adultos de Brasília e do Distrito Federal.",
    image: "/images/JL Queiroz - Graduação 2025-109.jpg",
    sections: [
      {
        title: "Nossa História",
        text: "Fundada pelo Professor JL Queiroz, a Team Queiroz BJJ nasceu com um propósito claro: usar o Jiu-jitsu como ferramenta de transformação social. Ao longo dos anos, centenas de atletas passaram pela academia, levando consigo não apenas técnica, mas valores que transcendem o tatame — respeito, perseverança, humildade e espírito de equipe.",
      },
      {
        title: "Metodologia",
        text: "O projeto conta com um programa estruturado de treinamento que vai desde a iniciação para crianças até a preparação de atletas de alto rendimento. As aulas são ministradas por professores graduados e experientes, com conteúdo pedagógico adaptado para cada faixa etária e nível técnico.",
      },
      {
        title: "Impacto Social",
        text: "Além do aspecto esportivo, a Team Queiroz BJJ atua diretamente na formação de caráter dos seus alunos. O projeto oferece bolsas para famílias em situação de vulnerabilidade, garantindo que o Jiu-jitsu seja acessível a todos. Acreditamos que um tatame pode mudar histórias de vida.",
      },
      {
        title: "Competições e Conquistas",
        text: "Nossos atletas participam de competições locais, regionais e nacionais, conquistando pódios e representando Brasília com orgulho. A cerimônia de graduação anual é um dos momentos mais especiais do projeto, celebrando a evolução e dedicação de cada atleta.",
      },
    ],
    fotos: [
      { id: 1, url: "/images/jlqueiroz1.jpeg", alt: "Team Queiroz BJJ - Treino" },
      { id: 2, url: "/images/jlqueiroz2.jpeg", alt: "Team Queiroz BJJ - Equipe" },
      { id: 3, url: "/images/jlqueiroz3.jpeg", alt: "Team Queiroz BJJ - Competição" },
      { id: 4, url: "/images/jlqueiroz4.jpeg", alt: "Team Queiroz BJJ - Graduação" },
      { id: 5, url: "/images/jlqueiroz5.jpeg", alt: "Team Queiroz BJJ - Atletas" },
      { id: 6, url: "/images/jlqueiroz6.jpeg", alt: "Team Queiroz BJJ - Cerimônia" },
      { id: 7, url: "/images/jlqueiroz7.jpg", alt: "Team Queiroz BJJ - Momento especial" },
      { id: 8, url: "/images/jlqueiroz8.jpg", alt: "Team Queiroz BJJ - Conquista" },
      { id: 9, url: "/images/JL Queiroz - Graduação 2025-109.jpg", alt: "Graduação Team Queiroz - Dezembro 2025" },
      { id: 10, url: "/images/maisvolei11.jpeg", alt: "Graduação Team Queiroz BJJ" },
    ],
  },
};

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const projeto = projetos[params.slug as keyof typeof projetos];
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  if (!projeto) {
    return (
      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              Voltar
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Projeto não encontrado</h1>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const isQueirozBjj = params.slug === "queiroz-bjj";

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Voltar
          </Link>

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary section-title">
                {projeto.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto">
                {projeto.description}
              </p>
            </div>

            {/* Hero image + intro text */}
            <div className="mx-auto w-full max-w-5xl py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-72 md:h-96 overflow-hidden rounded-xl border-2 border-secondary/30 shadow-lg">
                  <Image
                    src={projeto.image}
                    fill
                    alt={projeto.name}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 text-left">
                  <h2 className="text-2xl font-bold text-primary">Sobre o Projeto</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {projeto.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections (only for queiroz-bjj) */}
      {isQueirozBjj && projeto.sections && (
        <section className="w-full py-8 md:py-16 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
              {projeto.sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 border border-secondary/20 shadow-sm hover:shadow-md hover:border-secondary/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-secondary mb-3">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery (only for queiroz-bjj) */}
      {isQueirozBjj && projeto.fotos && projeto.fotos.length > 0 && (
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl text-primary section-title">
                Galeria de Fotos
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[700px] mx-auto">
                Reviva os melhores momentos da Team Queiroz BJJ — treinos, competições e a emocionante cerimônia de graduação.
              </p>
            </div>

            <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {projeto.fotos.map((foto) => (
                <div
                  key={foto.id}
                  className="overflow-hidden rounded-lg border-2 border-secondary/30 hover:border-secondary transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedImage(foto)}
                >
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <Image
                      src={foto.url}
                      fill
                      alt={foto.alt}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full">
                          Ver
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Fechar"
            >
              <X size={24} className="text-black" />
            </button>

            <div className="relative w-full h-[65vh] md:h-[75vh]">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <div className="mt-4 bg-black/40 backdrop-blur text-white p-4 rounded-lg text-center">
              <p className="text-sm">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
