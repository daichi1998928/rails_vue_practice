import Vue from 'vue/dist/vue.esm'
import axios from 'axios'

var vm = new Vue({
    el: '#tweet_edit',
    data: {
      tweet:{
          title: rails.tweet.title,
          comment: rails.tweet.comment,
         
      },
      tweet_id: rails.tweet.id
    },
    mounted() {
        console.log(this.tweet);
    },
    methods:{
        submit: function(){
            axios
            .put('/tweets/' + this.tweet_id ,this.tweet)
            .then(res =>{
                this.tweet = res.data
                location.href='/tweets/' + this.tweet_id

            })
            .catch(error => {
                alert("「" + this.tweet_id + "」編集失敗");
                console.log(error);
            })
        }
    }
});