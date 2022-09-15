let app = new Vue({  
    el:'#app',
    data:{
        nome:"Gabriel"
    },
    beforeUpdate:function(){
        alert(this.nome)
    }
})

/*
beforeCreate
created

beforeMount
mounted

beforeUpdate
updated

beforeDestroy
destroyed
*/

