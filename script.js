const {createApp}= Vue;

createApp({
    data(){
        return{
            toDo:[
                {
                    text:'comprare le caramelle',
                    done:true,
                },
                {
                    text:'pattinare',
                    done:false,
                },
                {
                    text:'decidere cosa fare a capodanno',
                    done:false,
                },
                {
                    text:'marinare le aringhe',
                    done:true,
                },
                {
                    text:'cucinare',
                    done:true,
                },
                {
                    text:'bollire i fagioli',
                    done:true,
                },
              
            ],
            methods:{
        
            },
        }
        },
}).mount('#app')