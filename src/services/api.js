export function loadLists() {
  let imagem = 
  `https://avatarmaker.com/svgavatars/temp-avatars/svgA39809431565489706.png`
  return [
    { 
      title: 'NOVOS PEDIDOS', 
      creatable: true,
      bgColor:"#999",
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: imagem
        },
        {
          id: 2,
          content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#7159c1'],
          user: imagem
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: imagem
        },
        {
          id: 4,
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: imagem
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: imagem
        },
      ]
    },
    { 
      title: 'EM ANDAMENTO', 
      creatable: false,
      bgColor:"#6aa84f",
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: imagem
        }
      ]
    },
    { 
      title: 'ENTREGUE', 
      creatable: false,
      bgColor:"#f1c232",
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: imagem
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: imagem
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: ['#54e1f7'],
          user: imagem
        },
        {
          id: 10,
          content: 'Ajustes na biblioteca unform',
          labels: ['#54e1f7'],
          user: imagem
        },
        {
          id: 11,
          content: 'Ajustes na biblioteca unform',
          labels: ['#54e1f7'],
          user: imagem
        }
      ]
    },
    { 
      title: 'CANCELADOS', 
      creatable: false,
      done: true,
      bgColor:"#990000",
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
          user: imagem
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: imagem
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
          user: imagem
        }
      ]
    },
  ];
}