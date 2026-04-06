"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Projeto {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
}

export default function Projetos() {
  const projetos: Projeto[] = [
    {
      id: 1,
      title: "Projeto Inclusão",
      description: "Programa para jovens em situação de vulnerabilidade",
      image: "/placeholder.svg?key=proj1&height=400&width=600&query=projeto inclusao",
      details: "O Projeto Inclusão visa integrar jovens de comunidades carentes através do vôlei, promovendo valores como disciplina e trabalho em equipe.",
    },
    {
      id: 2,
      title: "Torneio Juvenil",
      description: "Competição para atletas em formação",
      image: "/placeholder.svg?key=proj2&height=400&width=600&query=torneio juvenil",
      details: "Anualmente organizamos torneios para atletas juvenis, proporcionando experiência competitiva e desenvolvimento técnico.",
    },
    {
      id: 3,
      title: "Escola de Vôlei",
      description: "Aulas gratuitas para iniciantes",
      image: "/placeholder.svg?key=proj3&height=400&width=600&query=escola volei",
      details: "Oferecemos aulas gratuitas de vôlei para crianças e jovens interessados em iniciar no esporte, com instrutores qualificados.",
    },
    {
      id: 4,
      title: "Parceria Comunitária",
      description: "Colaboração com instituições locais",
      image: "/placeholder.svg?key=proj4&height=400&width=600&query=parceria comunitaria",
      details: "Trabalhamos em parceria com escolas e ONGs locais para expandir o acesso ao vôlei em Brasília.",
    },
    {
      id: 5,
      title: "Campanhas de Saúde",
      description: "Promoção de hábitos saudáveis através do esporte",
      image: "/placeholder.svg?key=proj5&height=400&width=600&query=campanha saude",
      details: "Campanhas que combinam atividade física com educação sobre saúde e bem-estar.",
    },
    {
      id: 6,
      title: "Eventos Esportivos",
      description: "Organização de jogos e festivais",
      image: "/placeholder.svg?key=proj6&height=400&width=600&query=evento esportivo",
      details: "Organizamos eventos esportivos comunitários para promover o vôlei e integrar a comunidade.",
    },
  ];

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
                Nossos Projetos
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto pt-4">
                Conheça os projetos sociais e esportivos que desenvolvemos para promover o vôlei e a inclusão em Brasília.
              </p>
            </div>

            <div className="mx-auto w-full max-w-6xl gap-6 py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetos.map((projeto) => (
                  <div
                    key={projeto.id}
                    className="bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={projeto.image}
                        width={600}
                        height={400}
                        alt={projeto.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{projeto.title}</h3>
                      <p className="text-muted-foreground mb-4">{projeto.description}</p>
                      <p className="text-sm">{projeto.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}