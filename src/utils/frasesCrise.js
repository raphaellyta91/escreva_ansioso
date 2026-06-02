export const frasesBaixa = [
  'Continue se observando e faça algo leve para cuidar de você.',
  'Respire com calma e perceba que você conseguiu parar para se cuidar.',
  'A ansiedade apareceu, mas você ainda tem controle sobre suas próximas ações.'
];

export const frasesMedia = [
  'Faça uma pausa, escreva o que sente e tente observar os fatos.',
  'Antes de agir, respire e se pergunte: isso é fato ou interpretação?',
  'Dê um tempo para sua mente desacelerar antes de tomar uma decisão.'
];

export const frasesAlta = [
  'Respire por 2 minutos, beba água e procure um local seguro e tranquilo.',
  'Não tome decisões importantes no pico da ansiedade. Busque apoio agora.',
  'Você não precisa enfrentar isso sozinho(a). Procure alguém de confiança ou um serviço de apoio.'
];

export const contatosApoio = [
  {
    nome: 'CVV - Apoio emocional',
    telefone: '188',
    descricao: 'Atendimento gratuito, 24 horas, sigiloso e sem julgamento.'
  },
  {
    nome: 'SAMU - Urgência e emergência',
    telefone: '192',
    descricao: 'Serviço público para situações de urgência em saúde.'
  }
];

export function sortearFrase(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

export function gerarAcaoSugerida(intensidade) {
  const nivel = Number(intensidade);

  if (nivel >= 8) {
    return sortearFrase(frasesAlta);
  }

  if (nivel >= 5) {
    return sortearFrase(frasesMedia);
  }

  return sortearFrase(frasesBaixa);
}