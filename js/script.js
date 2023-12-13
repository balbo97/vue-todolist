const {createApp} = Vue; 
createApp({
    data(){
        return{
            todo_list: [
                {
                    text: 'allenarsi',
                    done: false
                },
                {
                    text: 'prendere le proteine',
                    done: false
                },
                {
                    text: 'collegarsi per la lezione',
                    done: true
                },
                {
                    text: 'esercitazione coding',
                    done: true
                },
                {
                    text: 'pagare la multa',
                    done: false
                },
                {
                    text: 'cucinare per cena',
                    done: false 
                }
            ],
        }
    },
    methods: {
        remove_task(index){
            this.todo_list.splice(index,1)
        }
    }
}).mount("#app")