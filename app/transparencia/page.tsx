"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Filter,
  Calendar,
  DollarSign,
  Users,
  Trophy,
  ExternalLink,
  FileText,
  Eye,
  Search,
} from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Componente de gráfico de pizza simples
const PieChart = ({
  data,
  title,
  color = "#10b981",
}: {
  data: { label: string; value: number; percentage: number }[];
  title: string;
  color?: string;
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      <div className="relative w-48 h-48">
        <svg width="192" height="192" className="transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="80"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          {data.map((item, index) => {
            const circumference = 2 * Math.PI * 80;
            const strokeDasharray = (item.value / total) * circumference;
            const strokeDashoffset = (-currentAngle * circumference) / 360;
            currentAngle += (item.value / total) * 360;

            return (
              <circle
                key={index}
                cx="96"
                cy="96"
                r="80"
                fill="none"
                stroke={color}
                strokeWidth="8"
                strokeDasharray={`${strokeDasharray} ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-primary">
            {data[0]?.value || 0}
          </span>
          <span className="text-sm text-muted-foreground">
            {data[0]?.label}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        <span className="text-sm text-muted-foreground">{data[0]?.label}</span>
      </div>
    </div>
  );
};

// Componente para documentos
const DocumentCard = ({ document: documents }: { document: any }) => {
  const URL = documents.url
    .replace(/\/?files?\//gi, "") // remove "file/" ou "files/"
    .replace(/\//g, "-"); // substitui qualquer barra restante por "-"

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return "📄";
      case "xlsx":
      case "xls":
        return "📊";
      case "docx":
      case "doc":
        return "📝";
      default:
        return "📁";
    }
  };

  const getFileColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return "text-red-600";
      case "xlsx":
      case "xls":
        return "text-green-600";
      case "docx":
      case "doc":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={`text-2xl ${getFileColor(documents.type)}`}>
            {getFileIcon(documents.type)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-1 truncate">
              {documents.name}
            </h3>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span>📅 {documents.date}</span>
              <span>📏 {documents.size}</span>
              <span className="uppercase font-medium">{documents.type}</span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => window.open(documents.url, "_blank")}
                size="sm"
                variant="outline"
                className="h-8 text-xs"
              >
                <Eye className="h-3 w-3 mr-1" />
                Visualizar
              </Button>

              <Button
                onClick={() => {
                  // Create a temporary link element
                  const link = document.createElement("a");
                  link.href = documents.url;
                  link.download = URL;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                variant="outline"
                size="sm"
                className="h-8 text-xs bg-purple-700 text-white"
              >
                <Download className="h-3 w-3 mr-1" />
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
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedDocType, setSelectedDocType] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  // Dados de exemplo para os gráficos
  const orcamentoData = [{ label: "Aprovado", value: 1, percentage: 100 }];
  const projetosData = [{ label: "Em Execução", value: 1, percentage: 100 }];

  // Dados de exemplo para documentos
  const documents = [
    {
      id: 1,
      name: "Relatório de Transparência",
      date: "27/12/2024",
      size: "2.3 MB",
      type: "XLSX",
      url: "/files/relatorio-transparencia.xlsx",
      category: "prestacao",
    },
    {
      id: 2,
      name: "Balancete 2022 ADMSCSDF",
      date: "01/12/2022",
      size: "88 KB",
      type: "PDF",
      url: "/files/Balancete-2022-ADMSCSDF.pdf",
      category: "balanco",
    },
    {
      id: 3,
      name: "Balancete 2023 ADMSCSDF",
      date: "01/12/2023",
      size: "89 KB",
      type: "PDF",
      url: "/files/Balancete-2023-ADMSCSDF.pdf",
      category: "balanco",
    },
    {
      id: 4,
      name: "Balancete 2024 ADMSCSDF",
      date: "01/12/2024",
      size: "87 KB",
      type: "PDF",
      url: "/files/Balancete-2024-ADMSCSDF.pdf",
      category: "balanco",
    },
    {
      id: 5,
      name: "DRE ADMSCSDF 2022",
      date: "01/12/2022",
      size: "90 KB",
      type: "PDF",
      url: "/files/DRE-ADMSCSDF-2022.pdf",
      category: "dre",
    },
    {
      id: 6,
      name: "DRE ADMSCSDF 2023",
      date: "01/12/2023",
      size: "90 KB",
      type: "PDF",
      url: "/files/DRE-ADMSCSDF-2023.pdf",
      category: "dre",
    },
    {
      id: 7,
      name: "LIVRO RAZÃO 2022 ADMSCSDF",
      date: "01/12/2022",
      size: "135 KB",
      type: "PDF",
      url: "/files/LIVRO-RAZÃO-2022-ADMSCSDF.pdf",
      category: "auditoria",
    },
    {
      id: 8,
      name: "LIVRO RAZÃO 2023 ADMSCSDF",
      date: "01/12/2023",
      size: "154 KB",
      type: "PDF",
      url: "/files/LIVRO-RAZÃO-2023-ADMSCSDF.pdf",
      category: "auditoria",
    },
    {
      id: 9,
      name: "LIVRO RAZÃO 2024 ADMSCSDF",
      date: "01/12/2024",
      size: "157 KB",
      type: "PDF",
      url: "/files/LIVRO-RAZÃO-2024-ADMSCSDF.pdf",
      category: "auditoria",
    },
  ];

  const filteredDocuments = documents.filter((doc) => {
    const matchesType =
      selectedDocType === "todos" || doc.category === selectedDocType;
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
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
              <h1 className="text-xl font-bold font-bebas text-primary">
                Transparência
              </h1>
            </div>
          </div>
          <Button
            onClick={() => {
              // Create a temporary link element
              const link = document.createElement("a");
              link.href = "/files/relatorio-transparencia.xlsx"; // Place your XLSX file in the public/files directory
              link.download = "relatorio-transparencia.xlsx";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            variant="outline"
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Relatório Completo
          </Button>
        </div>
      </header>

      <div className="container py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="dashboard" className="font-bebas text-base">
              Dashboard Financeiro
            </TabsTrigger>
            <TabsTrigger value="documentos" className="font-bebas text-base">
              Documentos Contábeis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar de Filtros */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Filter className="h-5 w-5" />
                      Filtros
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ano</label>
                      <Select
                        value={selectedYear}
                        onValueChange={setSelectedYear}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Categoria</label>
                      <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="todos">Todos</SelectItem>
                          <SelectItem value="orcamento">Orçamento</SelectItem>
                          <SelectItem value="projetos">Projetos</SelectItem>
                          <SelectItem value="patrocinios">
                            Patrocínios
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4 space-y-3">
                      <h4 className="font-medium text-sm">
                        Filtros Adicionais
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Receitas</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Despesas</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Investimentos</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Conteúdo Principal */}
              <div className="lg:col-span-3 space-y-8">
                {/* Cards de Resumo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Orçamento Total
                          </p>
                          <p className="text-2xl font-bold font-bebas text-primary">
                            R$ 150.000,00
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <Trophy className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Valor Liberado
                          </p>
                          <p className="text-2xl font-bold font-bebas text-secondary">
                            R$ 0,00
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                          <Users className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Atletas Beneficiadas
                          </p>
                          <p className="text-2xl font-bold font-bebas text-green-600">
                            85
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                          <Calendar className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            % Execução
                          </p>
                          <p className="text-2xl font-bold font-bebas text-purple-600">
                            100%
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Seção de Orçamento e Projetos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-bebas text-primary">
                        Execução Orçamentária
                      </CardTitle>
                      <CardDescription>
                        Orçamento Aprovado:{" "}
                        <span className="font-semibold">R$ 150.000,00</span> | %
                        de Execução:{" "}
                        <span className="font-semibold text-primary">0%</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="text-center">
                          <h4 className="text-lg font-semibold mb-4">
                            Situação do Orçamento - Agrupado
                          </h4>
                          <div className="flex justify-center gap-8">
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground mb-2">
                                Valores
                              </p>
                              <div className="border-b-2 border-primary w-16 mx-auto"></div>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground mb-2">
                                Percentuais
                              </p>
                            </div>
                          </div>
                        </div>
                        <PieChart
                          data={orcamentoData}
                          title=""
                          color="#7c3aed"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-bebas text-primary">
                        Projetos Sociais
                      </CardTitle>
                      <CardDescription>
                        Projetos Aprovados:{" "}
                        <span className="font-semibold">1</span> | % de
                        Conclusão:{" "}
                        <span className="font-semibold text-primary">100%</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="text-center">
                          <h4 className="text-lg font-semibold mb-4">
                            Situação dos Projetos - Agrupado
                          </h4>
                          <div className="flex justify-center gap-8">
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground mb-2">
                                Valores
                              </p>
                              <div className="border-b-2 border-secondary w-16 mx-auto"></div>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground mb-2">
                                Percentuais
                              </p>
                            </div>
                          </div>
                        </div>
                        <PieChart
                          data={projetosData}
                          title=""
                          color="#f59e0b"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Consulta Resumida */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bebas text-primary">
                      Consulta Resumida dos Recursos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          Valor Global
                        </h4>
                        <p className="text-2xl font-bold font-bebas text-primary">
                          R$ 150.000,00
                        </p>
                      </div>
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          Valor Liberado
                        </h4>
                        <p className="text-2xl font-bold font-bebas text-secondary">
                          R$ 0,00
                        </p>
                      </div>
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          Saldo Disponível
                        </h4>
                        <p className="text-2xl font-bold font-bebas text-green-600">
                          R$ 150.000,00
                        </p>
                      </div>
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          Valores Devolvidos
                        </h4>
                        <p className="text-2xl font-bold font-bebas text-purple-600">
                          R$ 0,00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detalhes do Instrumento */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bebas text-primary">
                      Detalhes do Instrumento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Nº Instrumento:</p>
                        <p className="text-lg font-bebas text-primary">
                          971580
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Órgão Concedente:</p>
                        <p className="text-lg font-bebas text-primary">
                          MINISTÉRIO DO ESPORTE
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Modalidade:</p>
                        <p className="text-lg font-bebas text-primary">
                          TERMO DE FOMENTO
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Autor da Emenda:</p>
                        <p className="text-lg font-bebas text-primary">
                          LEILA BARROS
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Objeto:</p>
                      <p className="text-lg font-bebas text-primary">
                        Implementação e Desenvolvimento do Projeto Mais Vôlei
                        Brasília Transformando Vidas no Distrito Federal
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Situação:</p>
                        <p className="text-lg font-bebas text-primary">
                          Em execução
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">CNPJ:</p>
                        <p className="text-lg font-bebas text-primary">
                          04821627000164
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Vigência:</p>
                      <p className="text-lg font-bebas text-primary">
                        27/12/2024 a 27/01/2026
                      </p>
                    </div>
                    <Link
                      href="https://discricionarias.transferegov.sistema.gov.br/voluntarias/ConsultarProposta/ResultadoDaConsultaDePropostaDetalharProposta.do?idProposta=1967981&Usr=guest&Pwd=guest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center gap-1"
                    >
                      Sistema Oficial <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documentos">
            <div className="space-y-6">
              {/* Filtros e Busca para Documentos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bebas text-primary">
                    Documentos Contábeis
                  </CardTitle>
                  <CardDescription>
                    Acesse e baixe os documentos contábeis e financeiros da
                    associação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Buscar documentos..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select
                      value={selectedDocType}
                      onValueChange={setSelectedDocType}
                    >
                      <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Tipo de documento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos os tipos</SelectItem>
                        <SelectItem value="balanco">Balanços</SelectItem>
                        <SelectItem value="dre">DRE</SelectItem>
                        <SelectItem value="prestacao">
                          Prestação de Contas
                        </SelectItem>
                        <SelectItem value="gastos">
                          Planilhas de Gastos
                        </SelectItem>
                        <SelectItem value="atas">Atas</SelectItem>
                        <SelectItem value="contratos">Contratos</SelectItem>
                        <SelectItem value="auditoria">Auditorias</SelectItem>
                        <SelectItem value="comprovantes">
                          Comprovantes
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Estatísticas dos Documentos */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-accent rounded-lg">
                      <p className="text-2xl font-bold font-bebas text-primary">
                        {documents.length}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Total de Documentos
                      </p>
                    </div>
                    <div className="text-center p-3 bg-accent rounded-lg">
                      <p className="text-2xl font-bold font-bebas text-secondary">
                        {documents.filter((d) => d.type === "PDF").length}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Documentos PDF
                      </p>
                    </div>
                    <div className="text-center p-3 bg-accent rounded-lg">
                      <p className="text-2xl font-bold font-bebas text-green-600">
                        {documents.filter((d) => d.type === "XLSX").length}
                      </p>
                      <p className="text-sm text-muted-foreground">Planilhas</p>
                    </div>
                    <div className="text-center p-3 bg-accent rounded-lg">
                      <p className="text-2xl font-bold font-bebas text-purple-600">
                        2025
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Último Ano
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de Documentos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDocuments.map((document) => (
                  <DocumentCard key={document.id} document={document} />
                ))}
              </div>

              {filteredDocuments.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Nenhum documento encontrado
                    </h3>
                    <p className="text-muted-foreground">
                      Tente ajustar os filtros ou termo de busca para encontrar
                      os documentos desejados.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Informações Adicionais */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bebas text-primary">
                    Informações Importantes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">
                      Todos os documentos estão disponíveis para consulta
                      pública conforme a Lei de Acesso à Informação.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-sm">
                      Os documentos são atualizados mensalmente ou conforme a
                      disponibilidade de novas informações.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm">
                      Para dúvidas sobre os documentos, entre em contato através
                      do email: contato@maisvoleibraisilia.com.br
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
