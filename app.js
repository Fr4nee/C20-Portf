// NAVABAR
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 800) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// TRANSLATE
document.getElementById("ingles").style.display="none";
function traducir() {  
    document.getElementById("ingles").style.display="block";
    document.getElementById("español").style.display="none";
}

function showModal() {
    document.getElementById("pageContent").style.opacity = "0.5";
}

// MODAL
// var myModal = document.getElementById('modal')
// var myInput = document.getElementById('btn_modal')

// myModal.addEventListener('shown.bs.modal', function () {
//     myInput.focus()
// });

