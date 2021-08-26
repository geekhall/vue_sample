// import $ from 'jquery'; // 等价于 const $ = require("jquery");

// $('body').css({'background', 'pink'});

const btn = document.getElementById('btn');
btn.onclick = function(){
    alert('hello');
}