# Exo.Dom.e.Ajax
 Exo feito na Disciplina de CpwII

 function gatosInfinitos(fotos = 18) {
    let i = 0;
    while (i < fotos) {
        const recebe = document.getElementById('recebe');
        var cats = Math.floor(Math.random() * 15);
        const img = document.createElement('img');
        img.src = imagens[cats];
        recebe.appendChild(img);
        i++;
    }
}
gatosInfinitos();

window.addEventListener('scroll', () => {
    console.log("scrolled", window.scrollY)
    console.log(window.innerHeight)
    if (window.scrollY + window.innerHeight <= document.documentElement.scrollHeight) {

        gatosInfinitos();
    }
})
