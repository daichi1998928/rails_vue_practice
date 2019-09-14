import Vue from 'vue/dist/vue.esm'
import axios from 'axios'

var vm = new Vue({
    el: '#tweet_new',
    data: {
      tweet:{
          title: '',
          comment: '',
      }
    },
    mounted() {
        console.log(this.tweet);
    },
    methods:{
        submit: function(){
            axios
            .post('/tweets' ,this.tweet)
            .then(res =>{
                this.tweet = res.data
                    if(this.tweet.id){
                        location.href=`/tweets/` + this.tweet.id
                    }else{
                        location.href = "/tweets"
                    }
                    
                
            })
            .catch(error => {
                alert("投稿失敗");

            })
        }
    }
}); 