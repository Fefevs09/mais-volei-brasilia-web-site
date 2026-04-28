"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";

interface Foto {
  id: number;
  url: string;
  alt: string;
  descricao?: string;
}

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<Foto | null>(null);

  const fotos: Foto[] = [
    {
      id: 0,
      url: "/images/equipe-mvb-base.jpeg",
      alt: "Equipe Mais Vôlei Brasília",
      descricao: "Equipe Mais Vôlei Brasília",
    },
    {
      id: 1,
      url: "/images/viagem-p-Goiania-em-Marco-2025.jpeg",
      alt: "Viagem para Goiânia - Março 2025",
      descricao: "Viagem para Goiânia - Março 2025",
    },
    {
      id: 2,
      url: "/images/foto-04.jpeg",
      alt: "Foto 4",
      descricao: "Viagem para Goiânia - Março 2025",
    },
    {
      id: 3,
      url: "/images/foto-03.jpeg",
      alt: "Foto 3",
      descricao: "Equipe Mais Vôlei Brasília",
    },
    {
      id: 4,
      url: "/images/foto-02.jpeg",
      alt: "Foto 2",
      descricao: "Equipe Mais Vôlei Brasília",
    },
    {
      id: 5,
      url: "/images/foto-05.jpeg",
      alt: "Foto 5",
      descricao: "Equipe Mais Vôlei Brasília",
    },
    {
      id: 6,
      url: "/images/maisvolei1.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 1",
      descricao: "Projeto Social",
    },
    {
      id: 7,
      url: "/images/maisvolei2.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 2",
      descricao: "Projeto Social",
    },
    {
      id: 8,
      url: "/images/maisvolei3.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 3",
      descricao: "Projeto Social",
    },
    {
      id: 9,
      url: "/images/maisvolei4.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 4",
      descricao: "Projeto Social",
    },
    {
      id: 10,
      url: "/images/maisvolei5.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 5",
      descricao: "Projeto Social",
    },
    {
      id: 11,
      url: "/images/maisvolei6.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 6",
      descricao: "Projeto Social",
    },
    {
      id: 12,
      url: "/images/maisvolei7.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 7",
      descricao: "Projeto Social",
    },
    {
      id: 13,
      url: "/images/maisvolei8.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 8",
      descricao: "Projeto Social",
    },
    {
      id: 14,
      url: "/images/maisvolei9.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 9",
      descricao: "Projeto Social",
    },
    {
      id: 15,
      url: "/images/maisvolei10.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 10",
      descricao: "Projeto Social",
    },
    {
      id: 16,
      url: "/images/maisvolei11.jpeg",
      alt: "Foto da equipe Mais Vôlei Brasília 11",
      descricao: "Graduação Equipe Queiroz Jiu-jitsu - Dezembro 2025",
    },
    {
      id: 17,
      url: "/images/JL Queiroz - Graduação 2025-109.jpg",
      alt: "Graduação Equipe Queiroz Jiu-jitsu",
      descricao: "Graduação Equipe Queiroz Jiu-jitsu - Dezembro 2025",
    },
    {
      id: 18,
      url: "/images/jlqueiroz1.jpeg",
      alt: "JL Queiroz Jiu-jitsu 1",
      descricao: "Equipe Queiroz Jiu-jitsu",
    },
    {
      id: 19,
      url: "/images/jlqueiroz2.jpeg",
      alt: "JL Queiroz Jiu-jitsu 2",
      descricao: "Equipe Queiroz Jiu-jitsu",
    },
    {
      id: 20,
      url: "/images/jlqueiroz3.jpeg",
      alt: "JL Queiroz Jiu-jitsu 3",
      descricao: "Equipe Queiroz Jiu-jitsu",
    },
    {
      id: 21,
      url: "/images/jlqueiroz4.jpeg",
      alt: "JL Queiroz Jiu-jitsu 4",
      descricao: "Equipe Queiroz Jiu-jitsu",
    },
    {
      id: 22,
      url: "/images/jlqueiroz5.jpeg",
      alt: "JL Queiroz Jiu-jitsu 5",
      descricao: "Equipe Queiroz Jiu-jitsu",
    },
    {
      id: 23,
      url: "/images/jlqueiroz6.jpeg",
      alt: "JL Queiroz Jiu-jitsu 6",
      descricao: "Equipe Queiroz Jiu-jitsu",
    },
    {
      id: 24,
      url: "/images/jlqueiroz7.jpg",
      alt: "JL Queiroz Jiu-jitsu 7",
      descricao: "Equipe Queiroz Jiu-jitsu",
    },
    {
      id: 25,
      url: "/images/jlqueiroz8.jpg",
      alt: "JL Queiroz Jiu-jitsu 8",
      descricao: "Equipe Queiroz Jiu-jitsu",
    },
  ];

  return (
    <main className="flex-1">
      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <Link
            href="/#galeria"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} />
            Voltar
          </Link>

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-primary section-title">
                Galeria
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[900px] mx-auto pt-4">
                Confira os melhores momentos da nossa equipe em quadra e fora
                dela. Reviva as emoções, vitórias e momentos especiais do Mais
                Vôlei Brasília!
              </p>
            </div>

            <div className="mx-auto w-full max-w-6xl gap-3 sm:gap-4 py-8 md:py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {fotos.map((foto) => (
                  <div
                    key={foto.id}
                    className="overflow-hidden rounded-lg border-2 border-secondary/30 hover:border-secondary transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedImage(foto)}
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <Image
                        src={foto.url}
                        width={400}
                        height={300}
                        alt={foto.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full">
                            Ver
                          </span>
                        </div>
                      </div>
                    </div>
                    {foto.descricao && (
                      <div className="p-3 bg-foreground/5">
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                          {foto.descricao}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para visualizar imagem ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
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

            <div className="relative w-full h-[60vh] md:h-[70vh]">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <div className="mt-4 bg-black/40 backdrop-blur text-white p-4 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2">
                {selectedImage.alt}
              </h3>
              {selectedImage.descricao && (
                <p className="text-sm">{selectedImage.descricao}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
