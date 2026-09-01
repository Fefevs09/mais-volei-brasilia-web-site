"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Eye, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DocumentCategory =
  | "prestacao"
  | "contratos"
  | "balanco"
  | "dre"
  | "auditoria";

type TransparencyDocument = {
  id: number;
  name: string;
  date: string;
  size: string;
  type: "PDF" | "DOCX" | "XLSX";
  url: string;
  category: DocumentCategory;
  year: string;
};

const documents: TransparencyDocument[] = [
  {
    id: 1,
    name: "Extrato da Proposta",
    date: "01/09/2026",
    size: "73 KB",
    type: "PDF",
    url: "/files/ExtratoProposta.pdf",
    category: "contratos",
    year: "2026",
  },
  {
    id: 18,
    name: "Planilha de Custos - Proposta nº 009640/2026",
    date: "01/09/2026",
    size: "54 KB",
    type: "PDF",
    url: "/files/Planilha de Custos - Proposta N° 009640-2026_ass.pdf",
    category: "contratos",
    year: "2026",
  },
  {
    id: 19,
    name: "Proposta nº 009640/2026",
    date: "01/09/2026",
    size: "92 KB",
    type: "PDF",
    url: "/files/Proposta N° 009640-2026_ass.pdf",
    category: "contratos",
    year: "2026",
  },
  {
    id: 20,
    name: "Termo de Fomento - ADMSCSDF",
    date: "01/09/2026",
    size: "395 KB",
    type: "PDF",
    url: "/files/termo-de-formento.pdf",
    category: "contratos",
    year: "2026",
  },
  {
    id: 2,
    name: "Planilha Transparência MEN SANA",
    date: "22/08/2026",
    size: "—",
    type: "PDF",
    url: "/files/Planilha Transpar6encia MEN SANA.pdf",
    category: "prestacao",
    year: "2026",
  },
  {
    id: 3,
    name: "Painel ParceriasGov",
    date: "22/08/2026",
    size: "—",
    type: "PDF",
    url: "/files/Painel_ParceriasGov.pdf",
    category: "prestacao",
    year: "2026",
  },
  {
    id: 5,
    name: "ANEXO I",
    date: "05/06/2025",
    size: "22 KB",
    type: "DOCX",
    url: "/files/ANEXO-I.docx",
    category: "contratos",
    year: "2025",
  },
  {
    id: 6,
    name: "ANEXO II",
    date: "05/06/2025",
    size: "14 KB",
    type: "DOCX",
    url: "/files/ANEXO-II.docx",
    category: "contratos",
    year: "2025",
  },
  {
    id: 7,
    name: "ANEXO III",
    date: "05/06/2025",
    size: "14 KB",
    type: "DOCX",
    url: "/files/ANEXO-III.docx",
    category: "contratos",
    year: "2025",
  },
  {
    id: 8,
    name: "Minuta de Edital de Cotação Prévia - Mais Vôlei",
    date: "05/06/2025",
    size: "216 KB",
    type: "PDF",
    url: "/files/MINUTA-DE-EDITAL-DE-COTAÇÃO-PREVIA-MAIS-VOLEI.pdf",
    category: "contratos",
    year: "2025",
  },
  {
    id: 9,
    name: "Relatório de Transparência",
    date: "27/12/2024",
    size: "2.3 MB",
    type: "XLSX",
    url: "/files/relatorio-transparencia.xlsx",
    category: "prestacao",
    year: "2024",
  },
  {
    id: 10,
    name: "Balancete 2024 ADMSCSDF",
    date: "01/12/2024",
    size: "87 KB",
    type: "PDF",
    url: "/files/Balancete-2024-ADMSCSDF.pdf",
    category: "balanco",
    year: "2024",
  },
  {
    id: 11,
    name: "Livro Razão 2024 ADMSCSDF",
    date: "01/12/2024",
    size: "157 KB",
    type: "PDF",
    url: "/files/LIVRO-RAZÃO-2024-ADMSCSDF.pdf",
    category: "auditoria",
    year: "2024",
  },
  {
    id: 12,
    name: "Balancete 2023 ADMSCSDF",
    date: "01/12/2023",
    size: "89 KB",
    type: "PDF",
    url: "/files/Balancete-2023-ADMSCSDF.pdf",
    category: "balanco",
    year: "2023",
  },
  {
    id: 13,
    name: "DRE ADMSCSDF 2023",
    date: "01/12/2023",
    size: "90 KB",
    type: "PDF",
    url: "/files/DRE-ADMSCSDF-2023.pdf",
    category: "dre",
    year: "2023",
  },
  {
    id: 14,
    name: "Livro Razão 2023 ADMSCSDF",
    date: "01/12/2023",
    size: "154 KB",
    type: "PDF",
    url: "/files/LIVRO-RAZÃO-2023-ADMSCSDF.pdf",
    category: "auditoria",
    year: "2023",
  },
  {
    id: 15,
    name: "Balancete 2022 ADMSCSDF",
    date: "01/12/2022",
    size: "88 KB",
    type: "PDF",
    url: "/files/Balancete-2022-ADMSCSDF.pdf",
    category: "balanco",
    year: "2022",
  },
  {
    id: 16,
    name: "DRE ADMSCSDF 2022",
    date: "01/12/2022",
    size: "90 KB",
    type: "PDF",
    url: "/files/DRE-ADMSCSDF-2022.pdf",
    category: "dre",
    year: "2022",
  },
  {
    id: 17,
    name: "Livro Razão 2022 ADMSCSDF",
    date: "01/12/2022",
    size: "135 KB",
    type: "PDF",
    url: "/files/LIVRO-RAZÃO-2022-ADMSCSDF.pdf",
    category: "auditoria",
    year: "2022",
  },
];

const parseDate = (date: string) => {
  const [day, month, year] = date.split("/").map(Number);
  return new Date(year, month - 1, day).getTime();
};

const DocumentCard = ({ document }: { document: TransparencyDocument }) => {
  const downloadName = document.url.replace("/files/", "");

  const downloadDocument = () => {
    const link = window.document.createElement("a");
    link.href = document.url;
    link.download = downloadName;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="text-2xl text-red-600">📄</div>
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 truncate text-sm font-semibold">
              {document.name}
            </h3>
            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>📅 {document.date}</span>
              <span>📏 {document.size}</span>
              <span className="font-medium uppercase">{document.type}</span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => window.open(document.url, "_blank")}
                size="sm"
                variant="outline"
                className="h-8 text-xs"
              >
                <Eye className="mr-1 h-3 w-3" />
                Visualizar
              </Button>
              <Button
                onClick={downloadDocument}
                size="sm"
                variant="outline"
                className="h-8 bg-purple-700 text-xs text-white"
              >
                <Download className="mr-1 h-3 w-3" />
                Baixar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function TransparenciaPage() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const documentsByYear = documents.filter(
    (document) => document.year === selectedYear,
  );

  const filteredDocuments = documents
    .filter((document) => {
      const matchesYear = document.year === selectedYear;
      const matchesCategory =
        selectedCategory === "todos" || document.category === selectedCategory;
      const matchesSearch = document.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesYear && matchesCategory && matchesSearch;
    })
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Voltar ao site</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-mais-volei-brasilia.png"
                alt="Logo Mais Vôlei Brasília"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <h1 className="font-bebas text-xl font-bold text-primary">
                Transparência
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-6 py-8 md:px-10">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-bebas text-2xl text-primary">
                Documentos {selectedYear}
              </CardTitle>
              <CardDescription>
                Consulte e baixe os documentos de transparência publicados em{" "}
                {selectedYear}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                value={selectedYear}
                onValueChange={(year) => {
                  setSelectedYear(year);
                  setSelectedCategory("todos");
                  setSearchTerm("");
                }}
                className="mb-6"
              >
                <TabsList className="grid h-auto w-full grid-cols-5">
                  {["2026", "2025", "2024", "2023", "2022"].map((year) => (
                    <TabsTrigger key={year} value={year}>
                      {year}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Buscar documentos..."
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full md:w-[220px]">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas as categorias</SelectItem>
                    <SelectItem value="prestacao">
                      Prestação de Contas
                    </SelectItem>
                    <SelectItem value="contratos">
                      Contratos e Propostas
                    </SelectItem>
                    <SelectItem value="balanco">Balanços</SelectItem>
                    <SelectItem value="dre">DRE</SelectItem>
                    <SelectItem value="auditoria">Auditorias</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-accent p-3 text-center">
                  <p className="font-bebas text-2xl font-bold text-primary">
                    {documentsByYear.length}
                  </p>
                  <p className="text-sm text-muted-foreground">Documentos</p>
                </div>
                <div className="rounded-lg bg-accent p-3 text-center">
                  <p className="font-bebas text-2xl font-bold text-purple-600">
                    {selectedYear}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ano de publicação
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredDocuments.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h2 className="mb-2 text-lg font-semibold">
                  Nenhum documento encontrado
                </h2>
                <p className="text-muted-foreground">
                  Ajuste a categoria ou o termo de busca.
                </p>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="font-bebas text-lg text-primary">
                Informações importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                Todos os documentos estão disponíveis para consulta pública,
                conforme a Lei de Acesso à Informação.
              </p>
              <p>
                Os documentos são atualizados conforme a disponibilidade de
                novas informações.
              </p>
              <p>
                Para dúvidas, entre em contato pelo e-mail:
                contato@maisvoleibraisilia.com.br.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
