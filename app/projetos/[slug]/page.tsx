"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projetos = {
  "projeto-inclusao": {
    name: "Projeto Inclusão",
    description: "Programa para jovens em situação de vulnerabilidade",
    details:
      "O Projeto Inclusão visa integrar jovens através do vôlei, promovendo valores como disciplina e trabalho em equipe. Oferecemos aulas gratuitas para ajudar no desenvolvimento pessoal e esportivo.",
    image: "/images/maisvolei2.jpeg",
  },
  "queiroz-bjj": {
    name: "TEAM QUEIROZ BJJ",
    description: "Focado na formação de cidadãos e atletas de alto rendimento.",
    details:
      "Anualmente organizamos torneios para atletas juvenis, proporcionando experiência competitiva e desenvolvimento técnico. Participam equipes de todo o Distrito Federal, com premiações e reconhecimento para os destaques.",
    image: "/images/JL Queiroz - Graduação 2025-109.jpg",
  },
};

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const projeto = projetos[params.slug as keyof typeof projetos];

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

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary section-title">
                {projeto.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto pt-4">
                {projeto.description}
              </p>
            </div>

            <div className="mx-auto w-full max-w-4xl py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <Image
                    src={projeto.image}
                    width={600}
                    height={400}
                    alt={projeto.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-left">
                  <h2 className="text-2xl font-bold">Sobre o Projeto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {projeto.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
