globalThis == this //для различных редакторов, сгруппировать глобальное обращение

var i = document.getElementById('s');

i.addEventListener('click', function(){
    console.log('click');
})