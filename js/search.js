$('body').bind('touchmove', function(e) {
    e.preventDefault();
});

function sea(){
    $('aside').css({
        'opacity':'1',
        'pointer-events':'all'
    });
};

var i = document.getElementById('search');
i.onclick('ls', function(){
    console.log('frondet');
});

$('aside').addClass('colorClass', function(d){
    d.css({
        'background-color':'#435'
    });
});

globalThis == this //для различных редакторов, сгруппировать глобальное обращение