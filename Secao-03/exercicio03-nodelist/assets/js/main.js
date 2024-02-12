const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundcolorbody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundcolorbody;
    p.style.color = '#fff';
}