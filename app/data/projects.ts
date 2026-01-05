export interface MediaItem {
  type: "image" | "video" | "youtube";
  src: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  cover: string;
  media: MediaItem[];
}

export const projects: Project[] = [
  {
    id: "guarana-jesus-campanha",
    title: "Guaraná Jesus 95 anos - Campanha",
    description:
      "Elaboração de KV e peça conceito combinado com desdobramento e ilustração.",
    category: "Publicidade",
    cover: "/resources/Work 1/GJ-1.png",
    media: [
      { type: "image", src: "/resources/Work 1/GJ-1.png" },
      { type: "image", src: "/resources/Work 1/GJ-2.png" },
      { type: "image", src: "/resources/Work 1/GJ-3.png" },
      { type: "image", src: "/resources/Work 1/GJ-4.png" },
    ],
  },
  {
    id: "guarana-jesus-sao-joao",
    title: "Guaraná Jesus - São João",
    description:
      "Desdobramento das peças gráficas, gifs e vídeos. Criação de material offline ativado pela marca.",
    category: "Motion & Ilustração",
    cover: "/resources/Work 2/SJGJ-1.png",
    media: [
      { type: "image", src: "/resources/Work 2/SJGJ-1.png" },
      { type: "image", src: "/resources/Work 2/jesus-cacuria.png" },
      { type: "image", src: "/resources/Work 2/jesus-santoantonio.png" },
      { type: "image", src: "/resources/Work 2/boi.gif" },
      { type: "image", src: "/resources/Work 2/caxeira.gif" },
      { type: "image", src: "/resources/Work 2/tambor-de-criola.gif" },
      { type: "image", src: "/resources/Work 2/latinha-abrindo.gif" },
      { type: "video", src: "/resources/Work 2/GJSJ-video.mp4" },
      { type: "video", src: "/resources/Work 2/jesus-gifs.mp4" },
      { type: "video", src: "/resources/Work 2/jesus-latinhas.mp4" },
      { type: "video", src: "/resources/Work 2/jesus-spotify.mp4" },
      { type: "youtube", src: "https://www.youtube.com/embed/hB4ImmmDSCw" },
    ],
  },
  {
    id: "a-leiteira",
    title: "A Leiteira",
    description:
      "Construção de identidade visual específica para Leiteria Nestlé + Ninho, com enfoque no agronegócio.",
    category: "Branding",
    cover: "/resources/Work 3/leiteira-material1.png",
    media: [
      { type: "image", src: "/resources/Work 3/leiteira-material1.png" },
      { type: "image", src: "/resources/Work 3/leiteira-material2.png" },
      { type: "image", src: "/resources/Work 3/leiteira-images1.png" },
      { type: "image", src: "/resources/Work 3/leiteira-images2.png" },
      { type: "image", src: "/resources/Work 3/leiteira-logo.png" },
      { type: "image", src: "/resources/Work 3/leiteira-vinheta.gif" },
      { type: "video", src: "/resources/Work 3/vinheta-leiteira.mp4" },
    ],
  },
  {
    id: "licor-43",
    title: "Licor 43",
    description:
      "Direção de Arte e elaboração de moodboards e com enfoque em conteúdos digitais.",
    category: "Publicidade",
    cover: "/resources/Work 4/licor-garrafa.png",
    media: [
      { type: "image", src: "/resources/Work 4/licor-garrafa.png" },
      { type: "image", src: "/resources/Work 4/licor-kit.png" },
      { type: "image", src: "/resources/Work 4/licor-bau.png" },
      { type: "image", src: "/resources/Work 4/licor-copo.png" },
      { type: "image", src: "/resources/Work 4/licor-copos.png" },
      { type: "image", src: "/resources/Work 4/licor-guardanapo.png" },
      { type: "image", src: "/resources/Work 4/licor-vegano.png" },
      { type: "video", src: "/resources/Work 4/licor-bebida.mp4" },
      { type: "video", src: "/resources/Work 4/licor-caneca.mp4" },
      { type: "video", src: "/resources/Work 4/licor-tacas.mp4" },
    ],
  },
  {
    id: "becks",
    title: "Beck's",
    description:
      "Criação de identidade visual com enfoque em animação e ilustração 2D para o aniversário de 5 anos da marca.",
    category: "Eventos",
    cover: "/resources/Work 5/becks-imagem1.png",
    media: [
      { type: "image", src: "/resources/Work 5/becks-imagem1.png" },
      { type: "image", src: "/resources/Work 5/becks-imagem2.png" },
      { type: "image", src: "/resources/Work 5/becks-imagem3.png" },
      { type: "image", src: "/resources/Work 5/becks-imagem4.png" },
      { type: "video", src: "/resources/Work 5/becks-apresenta.mp4" },
      { type: "video", src: "/resources/Work 5/aconselho-atracoees.mp4" },
      { type: "video", src: "/resources/Work 5/aconselho-reviver.mp4" },
    ],
  },
  {
    id: "splenda",
    title: "Splenda",
    description:
      "Elaboração da identidade visual e criação de kits personalizados com enfoque em branding, brandlovers, macro e micro influenciadores.",
    category: "Packaging",
    cover: "/resources/Work 6/splenda-main.png",
    media: [
      { type: "image", src: "/resources/Work 6/splenda-main.png" },
      { type: "image", src: "/resources/Work 6/splenda-kv.png" },
      { type: "image", src: "/resources/Work 6/splenda-kvlovers.png" },
      { type: "image", src: "/resources/Work 6/splenda-mockups.png" },
      { type: "image", src: "/resources/Work 6/splenda-mockup-comitens.png" },
      { type: "image", src: "/resources/Work 6/splenda-mockupcarta.png" },
      { type: "image", src: "/resources/Work 6/splenda-mockupitens.png" },
      { type: "image", src: "/resources/Work 6/splenda-itens.png" },
      { type: "image", src: "/resources/Work 6/splenda-pranchas.png" },
      { type: "image", src: "/resources/Work 6/splenda-todositens.png" },
      { type: "image", src: "/resources/Work 6/carta_amarela.png" },
      { type: "image", src: "/resources/Work 6/splenda-carta-azul.png" },
    ],
  },
];

export const clients = [
  { name: "Guaraná Jesus", logo: "/resources/brand-jesus.png" },
  { name: "Beck's", logo: "/resources/brand-becks.png" },
  { name: "Licor 43", logo: "/resources/brand-licor43.png" },
  { name: "Splenda", logo: "/resources/brand-splenda.png" },
  { name: "Nestlé", logo: "/resources/brand-nestle.png" },
];

// Helper function to get project by id
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

// Helper function to get other projects (excluding current)
export function getOtherProjects(currentId: string, limit: number = 3): Project[] {
  return projects.filter((project) => project.id !== currentId).slice(0, limit);
}
