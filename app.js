// let animado = document.querySelectorAll(".equipo");

// function mostrarScroll() {
//     let scrollTop = document.documentElement.scrollTop;

//     for (var i = 0; i < animado.length; i++) {
//         let alturaAnimado = animado[i].offsetTop;

//         if (alturaAnimado - 700 < scrollTop) {
//             animado[i].style.opacity = 1;
//             animado[i].classList.add("mostrarArriba");
//         }
//     }
// }
// window.addEventListener('scroll', mostrarScroll);







// NAVABAR
const navbar = document.querySelector('.navbar');

    window.onscroll = () => {
        if (window.scrollY > 800) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    }

    function showModal() {
        document.getElementById("pageContent").style.opacity = "0.5";
    }




