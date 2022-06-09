const btnDown   = document.querySelectorAll('.btnD');
const btnUp     = document.querySelectorAll('.btnU');
const board     = document.querySelector('.mainBoard');
const grid1     = document.querySelector('.grid1');
const grid2     = document.querySelector('.grid2');
const grid3     = document.querySelector('.grid3');

// première slide à l'index 1 quand o arrive
let index = 1; 

// quand on clique sur les boutons down
// pour chaque bouton btn on rajoute un écouteur addEventListener
// dès qu'on clique sur le bouton descendant on lance la fonction downBoard

// fonction fléchée
// greensock = gsap
    // premier argument ce qu'on veut animer
    // second argument l'objet et les propriétés à modifier
    // la durée puis sur y pour le faire baisser de 100vh
    // methode to qui amène un élément vers un autre point

const downBoard = () => {
    // timeline sert à accumuler les méthodes d'animation, remplace gsap
    const tlOut = gsap.timeline();
    // Juste les éléments de la slide actuelle, t c'est les titre avec classe .t1 / .t2 et .t3 et l'index c'est celui qu'on aura au click
    // Il vont de surrélever (y: -100) et disparaitre opacity:0
    tlOut.to(`.t${index}`, {opacity: 0, y: -100, duration: 0.45});
    tlOut.to(`.st${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.25');
    tlOut.to(`.mt${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.25');
    tlOut.to(`.btna${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.35');
    tlOut.to(`.btnb${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.35');
    tlOut.to(`.tl${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.55');
    // la slide complète, le easing, power1.in lent au début puis vitesse normale.
    // -= 100 vh pour remonter
    tlOut.to(board, {duration: 1, ease: "power1.in", y:'-=100vh'}, '-=0.95');

    const tlEnt = gsap.timeline();
    // premier objet le from {opacity:0, y: -100}, deuxième le to {}
    // delay de 1 seconde le temps que la première timeline la haut se fasse
    // index +1 slide dans laquelle on arrive
    tlEnt.fromTo(`.t${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45, delay: 1})
    tlEnt.fromTo(`.st${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    tlEnt.fromTo(`.mt${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    tlEnt.fromTo(`.btna${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.35')
    tlEnt.fromTo(`.btnb${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.35')
    tlEnt.fromTo(`.tl${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.45')
}

const upBoard = () => {

    const tlOut2 = gsap.timeline();
    // Juste les éléments de la slide actuelle, t c'est les titre avec classe .t1 / .t2 et .t3 et l'index c'est celui qu'on aura au click
    // Il vont de surrélever (y: 100 pour remonter) et disparaitre opacity:0
    tlOut2.to(`.t${index}`, {opacity: 0, y: 100, duration: 0.45});
    tlOut2.to(`.st${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.25');
    tlOut2.to(`.tl${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.55');
    tlOut2.to(`.mt${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.25');
    tlOut2.to(`.btna${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.35');
    tlOut2.to(`.btnb${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.35');
    // la slide complète, le easing, power1.in lent au début puis vitesse normale.
    // += 100 vh pour remonter
    tlOut2.to(board, {duration: 1, ease: "power1.in", y:'+=100vh'}, '-=0.75');

    const tlEnt2 = gsap.timeline();
    // premier objet le from {opacity:0, y: -100}, deuxième le to {}
    // index - 1 on remonte sur un index qui est intérieur
    tlEnt2.fromTo(`.t${index-1}`, {opacity:1, y: -100}, {opacity:1, y:0, duration: 0.45, delay: 0.75})
    tlEnt2.fromTo(`.st${index-1}`, {opacity:1, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    tlEnt2.fromTo(`.tl${index-1}`, {opacity:1, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.35')
    tlEnt2.fromTo(`.mt${index-1}`, {opacity:1, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    tlEnt2.fromTo(`.btna${index-1}`, {opacity:1, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    tlEnt2.fromTo(`.btnb${index-1}`, {opacity:1, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
}

// foreach qui cible tout les boutons descendant (btn2)
btnDown.forEach(btn => {
    btn.addEventListener('click', () => {

        if(index === 3) {
            btn.classList.add('animBtn');
            setTimeout(() => {
                btn.classList.remove('animBtn')
            }, 500); // second argument au bout de 500 ms
        }

        if(index < 3) {
            // ajout de l'animation good
            btn.classList.add('animBtnGood');
            setTimeout(() => {
                btn.classList.remove('animBtnGood')
            }, 500); // second argument 500 ms

        // animation avant d'appeler l'animation de monter
        downBoard();
        index++;
        }
        
    })
});

btnUp.forEach(btn => {
    btn.addEventListener('click', () => {

        if(index === 1) {
            btn.classList.add('animBtn');
            setTimeout(() => {
                btn.classList.remove('animBtn')
            }, 500); // second argument au bout de 500 ms
        }

        if(index > 1) {
            // ajout de l'animation good
            btn.classList.add('animBtnGood');
            setTimeout(() => {
                btn.classList.remove('animBtnGood')
            }, 500); // second argument 500 ms

        // animation avant d'appeler l'animation de monter
        upBoard();
        index--;
        }
        
    })
});

