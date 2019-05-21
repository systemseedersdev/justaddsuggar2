import Vue from 'vue';
import axios from 'axios';

export default function ({ $axios, redirect }) {

    $axios.onRequest(config => {
        console.log('Making request to ' + config)
    })
  
    $axios.onError(error => {
        console.log( error );
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            
        }
    })
}
