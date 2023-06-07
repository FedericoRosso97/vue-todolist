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
            text:' ',
        }
        
        },
        methods:{
           newTask:function(){
                console.log(this.text);
                console.log(this.toDo);
                if(this.text !==' '){
                    this.toDo.push({text:this.text});
                    this.text=' ';
                }
            },
            Delete:function(index){
                console.log('delete!');
                this.toDo.splice(index,1);
            }
        }
}).mount('#app')