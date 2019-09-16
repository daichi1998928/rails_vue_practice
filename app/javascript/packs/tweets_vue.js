import Vue from 'vue/dist/vue.esm'
import axios from 'axios'

var vm = new Vue({
    el: '#tweets',
    data: {
        tweets: []
    },
    mounted() {
        axios
        .get(`tweets.json`)
        .then(res =>{
        vm.tweets = res.data;
        })

    },
    methods:{
      destroy:function(id){
        axios
        .delete(`/tweets/` + id)
        .then(res =>{
        console.log("削除完了")
        location.href='/tweets' 

        })
      }
    }
});
    
