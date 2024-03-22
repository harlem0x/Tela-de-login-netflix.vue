<template>
<div class="container" >

    <h3 class="titulo">{{titulo}}</h3>
    <div class="conteudo">
        <input class="input_email" type="email" v-model="email" placeholder="Email ou número de telefone">
        <input class="input_senha" type="password" v-model="password" placeholder="Senha">
    </div>

    <div>
        <button class="button_entrada">Entrar</button>

    </div>

    <div class="checkbo_e_paragrafo">
     <input class="chebox_move_direita" type="checkbox" placeholder="Lembre se de mim">
     <p  class="precisa_de_ajuda"><a>{{ paragrafo }}</a></p>
    </div>

    <div class="Novo_aqui">
        <p>Novo por aqui?<a>Assine agora.</a></p>
    </div>

</div>

</template>

<script>

export default {
  data() {
    return {
      titulo: 'Entrar',
      email: '',
      senha: '',
      paragrafo: 'Precisa de ajuda?',

    };
  },

};
</script>

<style scoped>
*{
    margin:0;
    padding: 0;
    box-sizing:border-box;

}
.container{
   background: #282626 ;
   background-image:
   url("C:\Users\Adrian\vue-oficial-install\src\assets\netflix-servico.jpg");

}
.conteudo{
    padding: 10px;

}.input_email,.input_senha {
    display: flex;
    flex-direction: column;
    margin:10px;
    padding: 1rem;
    width: 300px;
}
 .titulo{
    color: #fff;
    margin-left:19px;
    font-family: sans-serif;

 }
 .button_entrada {
    width:300px;
    margin: 20px;
    padding: 10px;
    background-color:#FF0000;
    border-radius: 7px;
    border: 1px;
    color:#fff;
    font-family: sans-serif;
    font-size: 18px;
 }
 .checkbo_e_paragrafo {
    display: flex;
    justify-content: space-between;
 }
 .chebox_move_direita {
    display: flex;
    margin-left: 19px;
    background-color: greenyellow;
 }
 input[type="checkbox"]{
    accent-color: #7CFC00;
 }
 .precisa_de_ajuda{
    color:#fff;
    margin-right: 19px;
    font-family: sans-serif;
 }
 .Novo_aqui{
    display: flex;
    margin-top:7rem;
    margin-left: 19px;
    font-family: sans-serif;
 }
 a{
    color:#fff;
 }

</style>
