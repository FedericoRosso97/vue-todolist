const {createApp}= Vue;

createApp({
    data(){
        return{
            toDo:[
                {
                    text:'comprare caramelle',
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
                    text:'',
                    done:true,
                },
                {
                    text:'',
                    done:true,
                },
            ],
            methods:{

            }
        }
        },
}).mount('#app')