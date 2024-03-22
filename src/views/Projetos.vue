<template>
    <div>
        <h1 style="text-align: center">Projetos</h1>
        <Menubar :model="projetos" />
    </div>
  </template>

<script>

import Menubar from 'primevue/menubar';

export default {
  components: {
    Menubar,
  },
  name: 'Tela-Projetos',
  data() {
    return {
      projetos: [
        {
          label: 'Login Netflix',
          icon: 'pi pi-youtube',
          command: () => { this.$router.push('/loginnetflix'); },
        },
        {
          label: 'Conversao de Moedas',
          icon: 'pi pi-bitcoin',
          command: () => { this.$router.push('/conversao'); },
        },
      ],
    };
  },
};
</script>
