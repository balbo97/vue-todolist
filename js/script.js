const {createApp} = Vue; 
createApp({
    data(){
        return{
            todo_list: [
                {
                    text: 'allenarsi'
                },
                {
                    text: 'prendere le proteine'
                },
                {
                    text: 'collegarsi per la lezione'
                },
                {
                    text: 'esercitazione coding'
                },
                {
                    text: 'pagare la multa'
                },
                {
                    text: 'cucinare per cena'
                }
            ]
        }
    }
}).mount("#app")