async function sech() {
    let t = await fetch('json/post.json'),
    b = await t.json(),
    e = document.querySelector('.includes ul');

    b = b.splice(0, 5);

    for (let i = 0; i < b.length; i++) {
        e.innerHTML += `<li><a href="${b[i].href}"><div style="background-image: url(${b[i].image})"></div><div><p>${b[i].date}</p><h5>${b[i].title}</h5></div></a></li>`;
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            console.log('call');
        };
    });
};
sech();

//

window.onload = function() {
    $('blockquote p')[0].classList.add('quote');
};

//

console.log([2, 1, 5, 6, 8, 3, 9].filter(Element => !(Element % 2)).reduceRight((abc, Element) => abc + Math.sqrt(Element), 0));