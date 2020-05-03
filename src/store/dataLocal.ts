import { IList } from '@/model/State';

const state: IList = {
  list_cards: [
    {
      listDranAndDrop: [
        {
          id: 'bc9a5228-f552-44e4-9ce1-8eb3cd5dd72e',
          description: 'RAFAEL',
          auth: 'Rafael Carvalho',
        },
        {
          id: '39e04df1-dccf-490a-824e-4058678cc0',
          description: 'ROSE',
          auth: 'Rafael Carvalho'
        },
         {
          id: '3af7c8b0-ac87-4421-a02',
          description: 'VITOR',
          auth: 'Rafael Carvalho'
        },
        {
          id: '028c601e-c812-4ed5-b02c-014e89a1',
          description: 'BUSCA',
          auth: 'Rafael Carvalho'
        },
         {
          id: '028c601e-c812-7y65t-b02c-0a1',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: 'ujh765rt-f552-44e4-9ce1-58u7y',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        }
      ]
    },
    {
      listDranAndDrop: [
        {
          id: '17c27676-b514-4dad-9769-a8433e',
          description: 'FOI AGORA',
          auth: 'Rafael Carvalho'
        },
        {
          id: '17c27676-b514-4dad-9769-a53133e',
          description: 'Test',
          auth: 'Rafael Carvalho'
        }
      ]
    },
    {
      listDranAndDrop: [
        {
          id: 'a482e327-c866-4b85-9631-20d2bb',
          description: 'NÃO TEM',
          auth: 'Rafael Carvalho',
        }
      ]
    },
    {
      listDranAndDrop: [
        {
          id: 'a482e327-c866-4b85-9631-20d2bb',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        }
      ]
    }
  ],
  list_title: ['TO DO', 'IN PROGRESS', 'TO VERIFY', 'DONE'],
  list_items: [
    {
      name: 'process',
      icon: 'fas fa-microchip',
      description: 'Padronize seu processos e elimine ineficiências.'
    },
    {
      name: 'process',
      icon: 'far fa-eye',
      description: 'Saiba tudo o que está acontecendo como o seu processo e resolva os problemas com antecedência.'
    },
    {
      name: 'process',
      icon: 'far fa-clock',
      description: 'Seu processo inteiro funcionando sem você mexer o dedo.'
    }
  ],
  list_options: [
    {
      id: 1,
      description: 'TI'
    },
    {
      id: 2,
      description: 'Governança'
    },
      {
      id: 3,
      description: 'Desenvolvimento'
    },
    {
      id: 4,
      description: 'Infraestrutura'
    },
    {
      id: 5,
      description: 'Arquitetura'
    },
    {
      id: 6,
      description: 'Outros'
    }
  ],
  list_icons: [
    {
      icon: 'fas fa-bug',
      description: 'Acompanhamento de Bugs',
      color: '#ed5353'
    },
    {
      icon: 'fas fa-desktop',
      description: 'Chamados de TI',
      color: '#7b0acc'
    },
    {
      icon: 'fas fa-headset',
      description: 'Atendimento ao Cliente/Helpdesk',
      color: '#00b579'      
    },
    {
      icon: 'fas fa-filter',
      description: 'Pipeline de Vendas',
      color: '#d6ae1c'
    },
    {
      icon: 'far fa-check-circle',
      description: 'Lista Simples de Tarefas',
      color: '#8e29d6'      
    },
    {
      icon: 'fas fa-desktop',
      description: 'Desenvolvimento de Software',
      color: '#7b0acc'      
    },
    {
      icon: 'fas fa-chart-line',
      description: 'Gestão de Experimentos - Growth',
      color: '#8e29d6'
    }
  ]

  // são acessadas através do $store dentros dos componentes pai filho e a porra toda
  // $store.state.contador
}

const getters = {
  validatorList: (state) => {
    return state.list_cards.forEach(element => element.forEach(x => x.description));
  },
  list_cardsMutation: (state) => {
    return state.list_cards.forEach(element => element.forEach(x => x.description));
  }
}

const mutations = {
};
const actions = {
};
const modules = {
};


export const dataLocal = {
  state
}
