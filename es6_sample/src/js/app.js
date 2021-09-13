// import $ from 'jquery'; // 等价于 const $ = require("jquery");

// $('body').css({'background', 'pink'});

// import * as m1 from './hello.js'


const btn = document.getElementById('btn');
btn.onclick = function(){
    import('./hello.js').then(module => {
        console.log(module)
    })
}