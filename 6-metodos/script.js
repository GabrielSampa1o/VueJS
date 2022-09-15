let app = new Vue({
    el:'#app',
    data:{
       nome:'Gabriel',
       idade:20
    },
    methods:{
        mostrar:(nome, idade)=>{
            let txt = 'Olá, '+nome+ ' - ' +idade+'anos';
            return txt; 
        },
        testar:()=>{
            return'Textando mesmo hahah';
        }
    }
})



